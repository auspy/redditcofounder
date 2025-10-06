import { createLoginHandler } from "@/api/auth/login";
import { supportEmail } from "@/constants";

// Configure the login handler for SupaSidebar
const config = {
  supportEmail,
  validation: {
    // Add any custom validation if needed
    validateRequest: async (body) => {
      // Custom validation logic can go here
      return { valid: true };
    },
  },
  cookie: {
    // Override cookie settings if needed
    name: "auth_token",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  onSuccess: async (license, requestBody) => {
    // Custom success processing
    // Could add logging, analytics, etc.
    return license;
  },
  onError: async (error, supportEmail) => {
    // Custom error handling
    // Could add error tracking, custom messages based on error type
    return new Response(
      JSON.stringify({
        error: "Authentication failed",
        code: "AUTH_FAILED",
        message: `Invalid email or password. Please try again or contact our support team at ${supportEmail} for assistance.`,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};

export const POST = createLoginHandler(config);
