import { createRecoverHandler } from "@/api/license/recover";

// Configure the recovery handler for SupaSidebar
const config = {
  logging: true, // Keep detailed logging for debugging
  licenseStatus: "active", // Only recover active licenses
  messages: {
    emailRequired: "Email is required",
    noLicensesFound: "No active licenses found for this email",
    recoverySuccess: "License details have been sent to your email",
    rateLimitExceeded: "Rate limit exceeded. Please try again later.",
    internalError: "Internal server error",
  },
  onRecoveryRequested: async (email, request) => {
    // Custom processing before recovery
    console.log(`[SupaSidebar] License recovery requested for: ${email}`);
  },
  onLicensesFound: async (licenses, email) => {
    // Custom processing after finding licenses
    console.log(
      `[SupaSidebar] Found ${licenses.length} licenses for recovery: ${email}`
    );
  },
  onError: async (error) => {
    // Custom error handling
    console.error(`[SupaSidebar] License recovery error:`, error);
  },
};

export const POST = createRecoverHandler(config);
