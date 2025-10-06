import { createInfoHandler } from "@/api/license/info";

// Configure the info handler for SupaSidebar
const config = {
  requireSession: true,
  useMiddlewareValidation: false, // Middleware validation commented out in original
  projection: {
    // Use default projection or customize if needed
  },
  onInfoRetrieved: async (response, session) => {
    // Custom success processing
    console.log(
      `[SupaSidebar] License info retrieved for: ${session.licenseKey.substring(
        0,
        4
      )}...`
    );
  },
  onError: async (error) => {
    // Custom error handling
    console.error(`[SupaSidebar] License info error:`, error);
  },
};

export const GET = createInfoHandler(config);
export const dynamic = "force-dynamic"; // Force dynamic rendering
