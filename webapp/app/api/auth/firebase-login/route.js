import { createFirebaseLoginHandler } from "@/api/auth/firebase-login";

// Configure the Firebase login handler for SupaSidebar
const config = {
  validation: {
    validateFirebaseRequest: async (body) => {
      // Custom Firebase validation
      const { firebaseUid, email, providerId } = body;

      // Add any custom validation logic here
      if (providerId && !["google.com", "apple.com"].includes(providerId)) {
        return {
          valid: false,
          message: "Unsupported authentication provider",
        };
      }

      return { valid: true };
    },
  },
  cookie: {
    name: "auth_token",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  messages: {
    missingFields: "Firebase UID and email are required",
    licenseNotFound: (email) =>
      `No active license found for ${email}. Please use the same email you purchased the license with.`,
    success: "Firebase login successful",
    authFailed: "Failed to authenticate with Firebase. Please try again.",
  },
  onSuccess: async (licenseData, requestBody) => {
    // Custom success processing
    console.log(
      `[SupaSidebar] Firebase login successful for ${licenseData.email}`
    );
    return licenseData;
  },
  onError: async (error) => {
    // Custom error handling
    console.error("[SupaSidebar Firebase Login] Error:", error.message);
    return new Response(
      JSON.stringify({
        error: "Authentication failed",
        code: "AUTH_FAILED",
        message: "Failed to authenticate with Firebase. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};

export const POST = createFirebaseLoginHandler(config);
