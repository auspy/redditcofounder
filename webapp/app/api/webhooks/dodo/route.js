import { createDodoWebhookHandler } from "@/api/webhooks/dodo-webhook";

export const maxDuration = 30;

// Configure the Dodo webhook handler for SupaSidebar
const config = {
  webhookSecret: process.env.DODO_WEBHOOK_SECRET,
  maxDuration: 30,
  teamProductIds: [
    process.env.TEAM_PRODUCT_ID,
    process.env.TEAM_IN_PRODUCT_ID,
  ].filter(Boolean),
  oneYearProductIds: process.env.ONE_YEAR_UPDATES_PRODUCT_IDS?.split(",") || [],
  logging: true,
  onWebhookReceived: async (event, webhookId) => {
    console.log(`[SupaSidebar] Webhook received: ${event.type} (${webhookId})`);
    return event;
  },
  onWebhookProcessed: async (event, webhookId, status) => {
    console.log(
      `[SupaSidebar] Webhook processed: ${event.type} (${webhookId}) - ${status}`
    );
  },
  onError: async (error, webhookId, event) => {
    console.error(`[SupaSidebar] Webhook error:`, {
      webhookId,
      eventType: event?.type || "unknown",
      error: error.message,
    });
  },
};

export const POST = createDodoWebhookHandler(config);
