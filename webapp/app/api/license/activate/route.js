import { createActivateHandler } from "@/api/license/activate";

// Configure the activation handler for SupaSidebar
const config = {
  logging: true, // Keep detailed logging for debugging
  messages: {
    success: "Device activated successfully",
    activationFailed: "Device activation failed due to an unknown error",
    maxDevicesReached:
      "You have reached the maximum number of devices allowed for this license. Visit supasidebar.com/license/dashboard to manage your devices.",
    deviceAlreadyActivated:
      "This device has already been activated with this license",
    invalidLicense:
      "The provided license key is invalid or has been deactivated",
    rateLimitExceeded: "Too many activation attempts. Please try again later",
    internalError: "An unexpected error occurred during activation",
  },
  onActivationSuccess: async (response, requestBody) => {
    // Custom success processing
    console.log(
      `[SupaSidebar] Device activated: ${response.deviceId.substring(
        0,
        8
      )}... for license: ${requestBody.licenseKey.substring(0, 4)}...`
    );
  },
  onActivationError: async (error, originalError, requestBody) => {
    // Custom error processing
    console.log(
      `[SupaSidebar] Activation error: ${
        error.code
      } for license: ${requestBody.licenseKey.substring(0, 4)}...`
    );
  },
  onError: async (error) => {
    // Custom fatal error handling
    console.error(`[SupaSidebar] Fatal activation error:`, error);
  },
};

export const POST = createActivateHandler(config);
