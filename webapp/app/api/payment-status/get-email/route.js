import { createPaymentEmailHandler } from "@/api/payment/payment-status";

// Configure the payment email handler for SupaSidebar
const config = {
  logging: true,
  maskEmailInLogs: true,
  onEmailRetrieved: async (email, requestData) => {
    // Custom processing after email retrieval
    console.log(`[SupaSidebar] Customer email retrieved successfully`);
    return { email };
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(`[SupaSidebar] Payment email error:`, error.message);
    return null; // Use default error response
  },
};

export const POST = createPaymentEmailHandler(config);
