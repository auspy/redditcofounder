import { createDodoActivateHandler } from '@/api/license/dodo-activate';

// Configure the handler for SupaSidebar
const config = {
  logging: true,
  onActivationSuccess: async (result, requestBody) => {
    console.log(`[SupaSidebar] License activated: ${requestBody.license_key.substring(0, 8)}... on device ${requestBody.device_id.substring(0, 8)}...`);
  },
  onActivationError: async (error, requestBody) => {
    console.error(`[SupaSidebar] Activation error for ${requestBody.license_key.substring(0, 8)}...`);
  }
};

export const POST = createDodoActivateHandler(config);