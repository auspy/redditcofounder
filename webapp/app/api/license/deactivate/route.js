import { createDeactivateHandler } from "@/api/license/deactivate";

// Configure the deactivation handler for SupaSidebar
const config = {
  requireSession: true,
  useSessionValidation: true, // Use exact same session validation logic as original
  messages: {
    success: "Device deactivated successfully",
    notFound: "Device not found or already deactivated",
  },
  onDeactivationSuccess: async (response, requestBody) => {
    // Custom success processing
    console.log(
      `[SupaSidebar] Device deactivated: ${requestBody.deviceId.substring(
        0,
        8
      )}... for license: ${requestBody.licenseKey.substring(0, 4)}...`
    );
  },
  onDeactivationError: async (error, requestBody) => {
    // Custom error processing
    console.log(
      `[SupaSidebar] Deactivation error for license: ${requestBody.licenseKey.substring(
        0,
        4
      )}...`
    );
  },
  onError: async (error) => {
    // Custom fatal error handling
    console.error(`[SupaSidebar] Fatal deactivation error:`, error);
  },
};

export const DELETE = createDeactivateHandler(config);
