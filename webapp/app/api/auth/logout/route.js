import { createLogoutHandler } from "@/api/auth/logout";

// Configure the logout handler for SupaSidebar
const config = {
  cookie: {
    name: "auth_token",
  },
  onLogout: async (request) => {
    // Custom logout processing
    // Could add analytics tracking, session cleanup, etc.
    console.log("[SupaSidebar] User logged out");
  },
  onError: async (error) => {
    // Custom error handling
    console.error("[SupaSidebar Logout] Error:", error.message);
    return new Response(
      JSON.stringify({
        error: "Logout failed",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};

export const POST = createLogoutHandler(config);
