import { NextResponse } from "next/server";
import { loops } from "@/lib/loops.config";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await loops.createContact(email, {
      source: "SupaSidebar Windows Waitlist",
      userProperties: {
        joinedAt: new Date().toISOString(),
      },
    });

    if (!response.success) {
      return NextResponse.json(
        { error: response.message || "Failed to join waitlist" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
    });
  } catch (error) {
    console.error("Waitlist error:", error, error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
