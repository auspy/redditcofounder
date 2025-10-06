import { createValidateHandler } from "@/api/license/validate";
import { supportEmail } from "@/constants";

// Configure the validation handler for SupaSidebar
const config = {
  supportEmail: supportEmail,
  logging: true, // Keep detailed logging for debugging
  messages: {
    validationFailed: `Invalid license data. Please try again or contact our support team at ${supportEmail} for assistance.`,
    deviceNotFound: `Please activate your device using "Enter License Key". Still having issues? Contact ${supportEmail} for help.`,
    rateLimitExceeded: `Too many attempts. Please try again later or contact ${supportEmail}.`,
    unexpectedError: `Unexpected error. Please try again or contact ${supportEmail}.`,
  },
  onValidationSuccess: async (response, requestBody) => {
    // Custom success processing
    console.log(
      `[SupaSidebar] Device validated successfully for license: ${requestBody.licenseKey}`
    );
  },
  onValidationError: async (error, requestBody) => {
    // Custom error processing
    console.log(
      `[SupaSidebar] Validation error: ${error.code} for license: ${requestBody.licenseKey}`
    );
  },
  onError: async (error) => {
    // Custom fatal error handling
    console.error(`[SupaSidebar] Fatal validation error:`, error);
  },
};

export const POST = createValidateHandler(config);
