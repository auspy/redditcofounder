import { NextResponse } from "next/server";
import {
  // revokeLicense,
  cancelSubscription,
  getLicenseDetails,
} from "@/lib/license/license.operations";
import { rateLimit, rateLimiters } from "@/lib/ratelimit";
import { headers } from "next/headers";
import { z } from "zod";
import { validateSession } from "@/lib/session";

// Schema for cancel request
const cancelSchema = z.object({
  licenseKey: z
    .string()
    .regex(
      /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
      "Invalid license key format"
    ),
});

// Helper to get IP for rate limiting
function getIP() {
  const headersList = headers();
  return headersList.get("x-forwarded-for") || "127.0.0.1";
}

// POST /api/license/cancel - Cancel a subscription/license
export async function POST(request) {
  try {
    const ip = getIP();

    // Apply rate limiting
    try {
      // Validate session (user must be logged in)
      try {
        await validateSession(request);
      } catch (error) {
        console.log("Session validation error:", error);
        return NextResponse.json(
          { error: "Unauthorized. Please log in first." },
          { status: 401 }
        );
      }

      // Use dedicated rate limiter for license cancellation
      const { remaining } = await rateLimit(
        rateLimiters.licenseCancellation,
        ip
      );
      const headers = {
        "X-RateLimit-Remaining": remaining.toString(),
      };

      const body = await request.json();

      // Validate request schema
      try {
        cancelSchema.parse(body);
      } catch (validationError) {
        return NextResponse.json(
          {
            error: "Validation error",
            details: validationError.errors,
          },
          { status: 400, headers }
        );
      }

      const { licenseKey } = body;

      // Get license details to check type
      const licenseDetails = await getLicenseDetails(licenseKey);

      if (!licenseDetails) {
        return NextResponse.json(
          { error: "License not found" },
          { status: 404, headers }
        );
      }

      // Different handling based on license type
      if (
        (licenseDetails.licenseType === "monthly" ||
          licenseDetails.licenseType === "yearly") &&
        licenseDetails.subscription_id
      ) {
        // For subscription licenses, cancel via Dodo API
        try {
          const result = await cancelSubscription(licenseKey);

          // Use formatted message from result
          return NextResponse.json(
            {
              success: true,
              message:
                result.message ||
                "Your subscription has been cancelled and will remain active until " +
                  (licenseDetails.nextBillingDate
                    ? new Date(
                        licenseDetails.nextBillingDate
                      ).toLocaleDateString()
                    : "the end of your billing period"),
              endDate: result.endDate || licenseDetails.nextBillingDate,
            },
            { headers }
          );
        } catch (error) {
          console.error("Subscription cancellation error:", error);

          // Format error message for specific SDK errors
          let errorMessage = "Failed to cancel subscription";

          // Handle different Dodo SDK error types
          if (error.name === "DodoApiError") {
            errorMessage = `Dodo API Error: ${error.message}`;
          } else if (error.message.includes("subscription")) {
            errorMessage = error.message; // Use the direct error message for subscription-related errors
          }

          return NextResponse.json(
            {
              error: errorMessage,
              details: error.message,
            },
            { status: 500, headers }
          );
        }
      } else {
        // For lifetime licenses, dont revoke
        console.log("License is lifetime, skipping revoke");
        // const revoked = await revokeLicense(licenseKey);

        // if (!revoked) {
        //   return NextResponse.json(
        //     { error: "License not found or already revoked" },
        //     { status: 404, headers }
        //   );
        // }

        // return NextResponse.json(
        //   {
        //     success: true,
        //     message: "License cancelled successfully",
        //   },
        //   { headers }
        // );
      }
    } catch (rateLimitError) {
      console.error("Rate limit error:", rateLimitError);
      let errorData;
      try {
        errorData = JSON.parse(rateLimitError.message);
      } catch (e) {
        errorData = { error: "Too many requests", status: 429 };
      }

      return NextResponse.json(
        { error: errorData.error },
        {
          status: errorData.status,
          headers: {
            "X-RateLimit-Reset": errorData.reset
              ? new Date(errorData.reset).toISOString()
              : new Date(Date.now() + 3600000).toISOString(),
          },
        }
      );
    }
  } catch (error) {
    console.error("Unhandled error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
