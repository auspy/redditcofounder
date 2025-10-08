import {
  createDownloadVerifyHandler,
  defaultDownloadConfig,
} from "@/api/download/download-handler";

export const dynamic = "force-dynamic";

// Configure the download verify handler for SupaSidebar
const config = {
  ...defaultDownloadConfig,
  logging: true,
  onTokenVerified: async (tokenData, userAgent, ip) => {
    // Custom processing after token verification
    console.log(
      `[SupaSidebar] Download token verified for ${tokenData.email.replace(
        /(.{2}).*(@.*)/,
        "$1***$2"
      )} from ${userAgent.includes("Mac") ? "Mac" : "Unknown"} device`
    );

    // Return all the data needed by the frontend, including email for PostHog identification
    return {
      downloadUrl: tokenData.downloadUrl,
      fileName: tokenData.fileName,
      email: tokenData.email, // Include email for PostHog identification
      emailDomain: tokenData.emailDomain,
      issuedAt: tokenData.issuedAt,
      consentUpdates: tokenData.consentUpdates,
      consentNewsletter: tokenData.consentNewsletter,
    };
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(
      `[SupaSidebar] Download verification error:`,
      error.message,
      requestData
    );
    return null; // Use default error response
  },
};

// Create the configured handler
const downloadVerifyHandler = createDownloadVerifyHandler(config);

// Export Next.js App Router compatible handler
export async function GET(request, context) {
  return downloadVerifyHandler(request, context);
}
