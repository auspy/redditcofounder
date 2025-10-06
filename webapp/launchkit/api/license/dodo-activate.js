import { NextResponse } from "next/server";
import { dodo } from "@/lib/dodo/dodo.config";

/**
 * Create a Dodo Payments license activation handler
 * @param {Object} config - Configuration options
 */
export function createDodoActivateHandler(config = {}) {
  const {
    logging = true,
    onActivationSuccess,
    onActivationError,
    onError,
  } = config;

  return async function handler(request) {
    try {
      // Check API key
      const apiKey = request.headers.get("x-api-key");
      if (apiKey !== process.env.APP_API_KEY) {
        if (logging) {
          console.warn("[Dodo Activate] Invalid API key");
        }
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const body = await request.json();
      const { license_key, device_id, device_name } = body;

      if (!license_key) {
        return NextResponse.json(
          {
            error: "Missing required field: license_key",
            message: "Please enter a valid license key to continue.",
          },
          { status: 400 }
        );
      }

      // Activate with DodoPayments
      try {
        if (logging) {
          console.log(
            `[Dodo Activate] Activating ${license_key.substring(
              0,
              8
            )}... with name "${device_name || "SupaSidebar Device"}"`
          );
        }

        // Call DodoPayments SDK to activate license
        const response = await dodo.licenses.activate({
          license_key: license_key,
          name: device_name || "SupaSidebar Device",
        });

        if (logging) {
          console.log(`[Dodo Activate] Response:`, response);
        }

        // Format success response
        const result = {
          success: true,
          activated: true,
          device_id: device_id || null, // Include device_id if provided for client compatibility
          expires_at: response.expires_at || null,
          email: response.customer?.email || null,
          license_instance_id: response.id || null, // Dodo's license instance ID
          message: "License activated successfully! Welcome to SupaSidebar Pro.",
        };

        // Custom success callback
        if (onActivationSuccess) {
          await onActivationSuccess(result, body);
        }

        if (logging) {
          console.log(
            `[Dodo Activate] License ${license_key.substring(0, 8)}... activated successfully with name "${device_name || "SupaSidebar Device"}"`
          );
        }

        return NextResponse.json(result);
      } catch (dodoError) {
        if (logging) {
          console.error("[Dodo Activate] DodoPayments API error:", dodoError);
        }

        // Determine user-friendly error message based on error type
        let errorMessage = "Unable to activate license. Please check your internet connection and try again.";
        let errorCode = "ACTIVATION_FAILED";

        if (dodoError.response?.status === 404) {
          errorMessage = "This license key is invalid. Please check and try again.";
          errorCode = "INVALID_LICENSE";
        } else if (dodoError.response?.status === 410) {
          errorMessage = "This license has expired. Please renew to continue using SupaSidebar.";
          errorCode = "LICENSE_EXPIRED";
        } else if (dodoError.response?.status === 409 || 
                   dodoError.response?.data?.error?.includes("already activated") ||
                   dodoError.response?.data?.error?.includes("maximum")) {
          errorMessage = "This license has reached the maximum number of activations. Please deactivate a device first or contact support.";
          errorCode = "MAX_ACTIVATIONS_REACHED";
        } else if (dodoError.response?.data?.error?.includes("device already activated")) {
          errorMessage = "This device has already been activated with this license.";
          errorCode = "DEVICE_ALREADY_ACTIVATED";
        }

        const errorResult = {
          success: false,
          activated: false,
          error: errorCode,
          message: errorMessage,
        };

        // Custom error callback
        if (onActivationError) {
          await onActivationError(dodoError, body);
        }

        return NextResponse.json(errorResult, { status: dodoError.response?.status || 400 });
      }
    } catch (error) {
      if (logging) {
        console.error("[Dodo Activate] Handler error:", error);
      }

      // Custom fatal error callback
      if (onError) {
        const customResponse = await onError(error);
        if (customResponse) {
          return customResponse;
        }
      }

      return NextResponse.json(
        { 
          success: false,
          error: "INTERNAL_ERROR",
          message: "Internal server error" 
        },
        { status: 500 }
      );
    }
  };
}

// Default export for direct use
export const POST = createDodoActivateHandler();