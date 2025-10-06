import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, rateLimiters } from "@/lib/ratelimit";
import { getOnboardingCollection } from "@/adapters/onboarding.db";

// Validation schema for onboarding data
const onboardingSchema = z.object({
  hardwareId: z.string().min(1),
  challenges: z.array(z.string()),
  goals: z.array(z.string()),
  age: z.array(z.string()),
  profession: z.array(z.string()),
  timestamp: z.number(),
  discoverySources: z.array(z.string()),
  preselectedFeatures: z.array(z.string()),
  finalSelectedFeatures: z.array(z.string()),
  selectedDistractionTime: z.string(),
});

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received onboarding data:", body);

    // Validate request body
    const validation = onboardingSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid request data",
          details: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { hardwareId } = validation.data;

    // Apply rate limiting based on hardware ID
    try {
      const { remaining } = await rateLimit(
        rateLimiters.onboardingSubmission,
        `onboarding:${hardwareId}`
      );

      // Add rate limit info to response headers
      const headers = {
        "X-RateLimit-Remaining": remaining.toString(),
      };

      // Store onboarding data
      const collection = await getOnboardingCollection();
      await collection.insertOne({
        ...validation.data,
        createdAt: new Date(),
      });

      return NextResponse.json({ success: true }, { headers });
    } catch (rateLimitError) {
      const errorData = JSON.parse(rateLimitError.message);
      return NextResponse.json(
        {
          error: errorData.error,
          message: "Too many onboarding submissions. Please try again later.",
          reset: new Date(errorData.reset).toISOString(),
        },
        {
          status: errorData.status,
          headers: {
            "X-RateLimit-Reset": new Date(errorData.reset).toISOString(),
          },
        }
      );
    }
  } catch (error) {
    console.error("Onboarding submission error:", error);
    return NextResponse.json(
      { error: "Failed to process onboarding data" },
      { status: 500 }
    );
  }
}
