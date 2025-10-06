import {
  createPaymentHandler,
  defaultPaymentConfig,
} from "@/api/payment/create-payment";

// Configure the payment handler for SupaSidebar
const config = {
  ...defaultPaymentConfig,
  logging: true,
  onPaymentCreated: async (paymentUrl, requestData) => {
    // Custom processing after payment URL creation
    console.log(
      `[SupaSidebar] Payment URL created for ${requestData.type} with ${requestData.devices} devices`
    );
    return paymentUrl;
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(`[SupaSidebar] Payment creation error:`, error.message);
    return null; // Use default error response
  },
};

export const POST = createPaymentHandler(config);
