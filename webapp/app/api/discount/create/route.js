import {
  createDiscountHandler,
  defaultDiscountConfig,
} from "@/api/payment/discount";

// Configure the discount handler for SupaSidebar
const config = {
  ...defaultDiscountConfig,
  logging: true,
  onDiscountCreated: async (discount, requestData) => {
    // Custom processing after discount creation
    console.log(
      `[SupaSidebar] Discount created - ID: ${discount.discount_id}, Code: ${
        discount.code
      }${
        requestData.studentEmail
          ? `, for student: ${requestData.studentEmail}`
          : ""
      }`
    );
    return discount;
  },
  onAuthError: async (error, request) => {
    // Custom authentication error handling
    console.error(`[SupaSidebar] Discount API authentication failed`);
    return null; // Use default error response
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(`[SupaSidebar] Discount creation error:`, error.message);
    return null; // Use default error response
  },
};

export const POST = createDiscountHandler(config);
