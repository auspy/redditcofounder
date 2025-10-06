import { resetPassword } from "@/lib/license/password.operations";
import { rateLimit, rateLimiters } from "@/lib/ratelimit";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { supportEmail } from "@/constants";

// Helper to get IP for rate limiting
function getIP() {
  const headersList = headers();
  return headersList.get("x-forwarded-for") || "127.0.0.1";
}

export async function POST(request) {
  console.log("[Password Reset] POST request initiated");

  try {
    const ip = getIP();
    console.log(`[Password Reset] Request IP: ${ip}`);

    const body = await request.json();
    const { licenseKey, email, newPassword } = body;
    console.log(
      `[Password Reset] Received request for email: ${email} and licenseKey: ${licenseKey}`
    );

    if (!licenseKey || !email || !newPassword) {
      console.warn("[Password Reset] Missing required fields");
      return NextResponse.json(
        {
          error: "Missing required fields",
          code: "VALIDATION_FAILED",
          message: "Please provide license key, email, and new password.",
        },
        { status: 400 }
      );
    }

    const { remaining } = await rateLimit(rateLimiters.passwordReset, ip);
    console.log(`[Password Reset] Rate limit remaining: ${remaining}`);

    const responseHeaders = {
      "X-RateLimit-Remaining": remaining.toString(),
    };

    await resetPassword({ licenseKey, email, newPassword });
    console.log(
      `[Password Reset] Password reset successfully for email: ${email}`
    );

    return NextResponse.json(
      {
        message: "Password reset successfully",
      },
      {
        status: 200,
        headers: responseHeaders,
      }
    );
  } catch (error) {
    console.error("[Password Reset] Error:", error);
    return NextResponse.json(
      {
        error: "Password reset failed",
        code: "PASSWORD_RESET_FAILED",
        message: `${error.message}. Please try again or contact our support team at ${supportEmail} for assistance.`,
      },
      { status: 500 }
    );
  }
}
