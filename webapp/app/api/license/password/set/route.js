import { setPassword } from "@/lib/license/password.operations";
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
  try {
    const ip = getIP();
    const body = await request.json();
    const { licenseKey, email, password } = body;

    if (!licenseKey || !email || !password) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          code: "VALIDATION_FAILED",
          message: `Please provide license key, email, and password.`,
        },
        { status: 400 }
      );
    }

    const { remaining } = await rateLimit(rateLimiters.passwordSet, ip);
    const responseHeaders = {
      "X-RateLimit-Remaining": remaining.toString(),
    };

    await setPassword({ licenseKey, email, password });

    return NextResponse.json(
      {
        message: "Password set successfully",
      },
      { 
        status: 200,
        headers: responseHeaders
      }
    );
  } catch (error) {
    console.error("[Password Set] Error:", error.message);
    return NextResponse.json(
      {
        error: "Password setup failed",
        code: "PASSWORD_SET_FAILED",
        message: `Failed to set password. Please try again or contact our support team at ${supportEmail} for assistance.`,
      },
      { status: 400 }
    );
  }
}
