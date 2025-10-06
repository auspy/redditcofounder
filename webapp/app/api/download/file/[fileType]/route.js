import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { loops } from "@/lib/loops.config";
import { rateLimit, rateLimiters } from "@/lib/ratelimit";
import { z } from "zod";
import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

const MAC_DOWNLOAD_URL =
  process.env.MAC_DOWNLOAD_URL || process.env.DOWNLOAD_URL;

const fileTypeSchema = z.enum(["dmg", "zip"]).default("dmg");

export async function GET(request, { params }) {
  try {
    const { fileType } = params;
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
    const validatedFileType = fileTypeSchema.parse(fileType);

    if (validatedFileType === "zip") {
      // change the download url to the zip download url
      return NextResponse.json({
        downloadUrl: MAC_DOWNLOAD_URL.replace(".dmg", ".zip"),
      });
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
