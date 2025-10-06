import { NextResponse } from "next/server";
import { startTrial } from "@/lib/trial/trial.operations";

export async function POST(request) {
  try {
    // Check API key
    const apiKey = request.headers.get("x-api-key");
    if (apiKey !== process.env.APP_API_KEY) {
      console.warn("[Trial Start] Invalid API key");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { device_id, app_version, email } = body;

    if (!device_id) {
      return NextResponse.json(
        { error: "Missing required field: device_id" },
        { status: 400 }
      );
    }

    console.log(`[Trial Start] Starting trial for device ${device_id}`);

    // Start the trial
    const result = await startTrial(device_id, {
      appVersion: app_version,
      email: email,
    });

    if (!result.success) {
      console.log(`[Trial Start] Failed: ${result.error}`);
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          message: result.message, // User-friendly message from operations
          trial: result.trial, // Include existing trial info if available
        },
        { status: 400 }
      );
    }

    console.log(
      `[Trial Start] Successfully started trial for device ${device_id}`
    );

    return NextResponse.json({
      success: true,
      message: result.message, // User-friendly success message
      expires_at: result.trial.expires_at,
      days_remaining: result.trial.days_remaining,
    });
  } catch (error) {
    console.error("[Trial Start] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
