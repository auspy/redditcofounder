import { createPaymentStatusHandler } from "@/api/payment/payment-status";

// Configure the payment status handler for SupaSidebar
const config = {
  logging: true,
  onStatusRetrieved: async (status, requestData) => {
    // Custom processing after status retrieval
    console.log(`[SupaSidebar] Payment status retrieved:`, {
      type: status.type,
      id: status.id,
      status: status.status,
    });

    // Return in the format expected by the frontend
    if (status.type === "payment") {
      return {
        status: status.status,
        paymentId: status.id,
        amount: status.amount,
        currency: status.currency,
      };
    } else {
      return {
        status: status.status === "active" ? "success" : "error",
        subscriptionId: status.id,
      };
    }
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(`[SupaSidebar] Payment status error:`, error.message);
    return null; // Use default error response
  },
};

export const POST = createPaymentStatusHandler(config);
