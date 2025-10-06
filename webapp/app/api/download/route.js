import {
  createDownloadHandler,
  defaultDownloadConfig,
} from "@/api/download/download-handler";

export const dynamic = "force-dynamic";

// Configure the download handler for SupaSidebar
const config = {
  ...defaultDownloadConfig,
  logging: true,
  onDirectDownload: async (downloadUrl, userAgent, ip) => {
    // Custom processing for direct downloads
    console.log(
      `[SupaSidebar] Direct download requested from ${
        userAgent.includes("Mac") ? "Mac" : "Unknown"
      } device`
    );
    return { downloadUrl };
  },
  onEmailDownload: async (trackableUrl, downloadUrl, userData) => {
    // Custom processing for email downloads
    console.log(
      `[SupaSidebar] Download email sent to ${userData.email.replace(
        /(.{2}).*(@.*)/,
        "$1***$2"
      )}`
    );
    return {
      success: true,
      message: "Download link sent to your email",
      trackableUrl,
      downloadUrl, // Keep for backward compatibility
    };
  },
  onEmailProcessing: async (email, userData) => {
    // Custom email processing for SupaSidebar-specific properties
    return {
      customProperties: {
        // Add any additional SupaSidebar-specific properties here
      },
      emailVariables: {
        // Add any additional email template variables here
      },
    };
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(`[SupaSidebar] Download error:`, error.message, requestData);
    return null; // Use default error response
  },
};

const handlers = createDownloadHandler(config);

export const GET = handlers.GET;
export const POST = handlers.POST;
