import { createLicenseCRUDHandler } from "@/api/license/license-crud";

// Configure the license CRUD handler for SupaSidebar
const config = {
  initDb: true,
  postEnabled: false, // License creation disabled (matching original)
  onLicenseCreated: async (license, requestBody) => {
    // Custom processing after license creation
    console.log(`[SupaSidebar] License created: ${license.licenseKey}`);
    return license;
  },
  onLicenseRetrieved: async (license, request) => {
    // Custom processing after license retrieval
    console.log(`[SupaSidebar] License retrieved: ${license.licenseKey}`);
  },
  onError: async (error, operation) => {
    // Custom error handling
    console.error(`[SupaSidebar License ${operation}] Error:`, error);
  },
};

const handlers = createLicenseCRUDHandler(config);

export const POST = handlers.POST;
export const GET = handlers.GET;
