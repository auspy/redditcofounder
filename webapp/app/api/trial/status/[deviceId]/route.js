import { NextResponse } from "next/server";
import { checkTrialStatus } from "@/lib/trial/trial.operations";

export async function GET(request, { params }) {
  try {
    // Check API key
    const apiKey = request.headers.get("x-api-key");
    if (apiKey !== process.env.APP_API_KEY) {
      console.warn("[Trial Status] Invalid API key");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { deviceId } = params;

    if (!deviceId) {
      return NextResponse.json({ error: "Missing device ID" }, { status: 400 });
    }

    console.log(`[Trial Status] Checking trial status for device ${deviceId}`);

    // Check trial status
    const result = await checkTrialStatus(deviceId);

    if (!result.found) {
      console.log(`[Trial Status] No trial found for device ${deviceId}`);
      return NextResponse.json(
        {
          error: "No trial found for this device",
          message: result.message,
          active: false,
        },
        { status: 404 }
      );
    }

    console.log(
      `[Trial Status] Found trial for device ${deviceId}: ${
        result.active ? "active" : "expired"
      }`
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("[Trial Status] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
