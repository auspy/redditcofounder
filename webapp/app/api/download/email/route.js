import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { loops } from "@/lib/loops.config";
import { rateLimit, rateLimiters } from "@/lib/ratelimit";
import { z } from "zod";

export const dynamic = "force-dynamic";

const MAC_DOWNLOAD_URL =
  process.env.MAC_DOWNLOAD_URL || process.env.DOWNLOAD_URL;

const downloadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  consentUpdates: z.boolean().default(true),
  consentNewsletter: z.boolean().default(false),
});

export async function GET() {
  try {
    const headersList = headers();
    const userAgent = headersList.get("user-agent") || "";
    const ip = headersList.get("x-forwarded-for") || "127.0.0.1";

    // Apply rate limiting for direct downloads
    try {
      await rateLimit(rateLimiters.directDownload, ip);
    } catch (error) {
      const rateLimitData = JSON.parse(error.message);
      return NextResponse.json(
        {
          error: "Too many download attempts",
          reason: `Please try again in ${rateLimitData.formattedReset}.`,
        },
        { status: 429 }
      );
    }

    // Check for Mac user agent
    if (!userAgent.toLowerCase().includes("mac")) {
      return NextResponse.json(
        {
          error: "This download is only available for Mac users",
          reason: "Please use a Mac device to download the application.",
        },
        { status: 400 }
      );
    }

    if (!MAC_DOWNLOAD_URL) {
      return NextResponse.json(
        {
          error: "Download URL not configured",
          reason:
            "The download is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Return the download URL
    return NextResponse.json({
      downloadUrl: MAC_DOWNLOAD_URL,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate download URL",
        reason: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = headersList.get("user-agent") || "";

    // Check for Mac user agent first
    if (!userAgent.toLowerCase().includes("mac")) {
      return NextResponse.json(
        {
          error: "This download is only available for Mac users",
          reason: "Please use a Mac device to download the application.",
        },
        { status: 400 }
      );
    }

    // Apply rate limiting
    try {
      await rateLimit(rateLimiters.downloadForm, ip);
    } catch (error) {
      const rateLimitData = JSON.parse(error.message);
      return NextResponse.json(
        {
          error: `Too many download attempts. Please try again in ${rateLimitData.formattedReset}.`,
        },
        { status: 429 }
      );
    }

    // Parse and validate the request body
    const body = await request.json();
    const { email, consentUpdates, consentNewsletter } =
      downloadSchema.parse(body);

    // Create or update contact in Loops
    const response = await loops.updateContact(email, {
      source: "SupaSidebar Website Download",
      userProperties: {
        lastDownloadAt: new Date().toISOString(),
        consentProductUpdates: consentUpdates,
        consentNewsletter: consentNewsletter,
        userAgent: userAgent,
        ipAddress: ip,
      },
      // Set subscribed status based on newsletter consent
      subscribed: consentNewsletter || consentUpdates,
    });

    if (!response.success) {
      throw new Error(response.message || "Failed to process download");
    }

    // Send download email using Loops
    const emailResponse = await loops.sendTransactionalEmail({
      transactionalId: process.env.LOOPS_DOWNLOAD_LINK_TEMPLATE_ID,
      email: email,
      dataVariables: {
        downloadUrl: MAC_DOWNLOAD_URL, // Direct GitHub link for email approach
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "UTC",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
        consentProductUpdates: consentUpdates ? "Yes" : "No",
        consentNewsletter: consentNewsletter ? "Yes" : "No",
      },
    });

    if (!emailResponse.success) {
      throw new Error("Failed to send download email");
    }

    return NextResponse.json({
      success: true,
      message: "Download link sent to your email",
    });
  } catch (error) {
    console.error("Download error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process download request. Please try again later." },
      { status: 500 }
    );
  }
}
