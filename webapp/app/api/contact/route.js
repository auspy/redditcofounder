import {
  createContactHandler,
  defaultContactConfig,
} from "@/api/contact/contact-handler";

// Configure the contact handler for SupaSidebar
const config = {
  ...defaultContactConfig,
  logging: true,
  emailSource: "SupaSidebar Website Contact",
  onContactSubmitted: async (contactData, requestData) => {
    // Custom processing after contact submission
    console.log(
      `[SupaSidebar] Contact form submitted from ${contactData.email.replace(
        /(.{2}).*(@.*)/,
        "$1***$2"
      )}`
    );
    return {
      success: true,
      message: "Message sent successfully",
    };
  },
  onContactCreated: async (email, contactData) => {
    // Custom contact data processing for SupaSidebar
    return {
      ...contactData,
      customProperties: {
        // Add any SupaSidebar-specific contact properties
        contactedFromWebsite: true,
      },
    };
  },
  onEmailProcessing: async (email, messageData) => {
    // Custom email processing for SupaSidebar
    return {
      ...messageData,
      customVariables: {
        // Add any custom email template variables for SupaSidebar
        websiteSource: "supasidebar.com",
      },
    };
  },
  onError: async (error, requestData) => {
    // Custom error handling
    console.error(
      `[SupaSidebar] Contact form error:`,
      error.message,
      requestData
    );
    return null; // Use default error response
  },
};

export const POST = createContactHandler(config);
