import { createSimpleDodoValidateHandler } from '@/api/license/dodo-validate';

// Configure the handler for SupaSidebar
const config = {
  logging: true,
  cacheTTL: 60 * 60 * 1000, // 1 hour cache
  onValidationSuccess: async (result, requestBody) => {
    console.log(`[SupaSidebar] License validated: ${requestBody.license_key.substring(0, 8)}...`);
  },
  onValidationError: async (error, requestBody) => {
    console.error(`[SupaSidebar] Validation error for ${requestBody.license_key.substring(0, 8)}...`);
  }
};

export const POST = createSimpleDodoValidateHandler(config);