import { NextResponse } from "next/server";
import { dodo } from "@/lib/dodo/dodo.config";

// Simple in-memory cache to reduce API calls
const cache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

/**
 * Create a simple DodoPayments validation handler
 * @param {Object} config - Configuration options
 */
export function createSimpleDodoValidateHandler(config = {}) {
  const {
    logging = true,
    cacheTTL = CACHE_TTL,
    onValidationSuccess,
    onValidationError,
    onError,
  } = config;

  return async function handler(request) {
    try {
      // Check API key
      const apiKey = request.headers.get("x-api-key");
      if (apiKey !== process.env.APP_API_KEY) {
        if (logging) {
          console.warn("[Dodo Validate] Invalid API key");
        }
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const body = await request.json();
      const { license_key, device_id } = body;

      if (!license_key || !device_id) {
        return NextResponse.json(
          {
            error: "Missing required fields: license_key and device_id",
            message: "Please enter a valid license key to continue.",
          },
          { status: 400 }
        );
      }

      // Check cache
      const cacheKey = `${license_key}-${device_id}`;
      const cached = cache.get(cacheKey);

      if (cached && Date.now() - cached.timestamp < cacheTTL) {
        if (logging) {
          console.log(
            `[Dodo Validate] Cache hit for ${license_key.substring(0, 8)}...`
          );
        }
        // return NextResponse.json(cached.data);
      }

      // Validate with DodoPayments
      try {
        if (logging) {
          console.log(
            `[Dodo Validate] Validating ${license_key.substring(
              0,
              8
            )}... with DodoPayments`
          );
        }

        // Call DodoPayments SDK
        const response = await dodo.licenses.validate({
          license_key: license_key,
        });

        if (logging) {
          console.log(`[Dodo Validate] Response:`, response);
        }

        // Format simple response
        const result = {
          valid: response.valid,
          expires_at: response.expires_at || null,
          email: response.customer?.email || null,
          message: response.valid
            ? "License activated successfully! Welcome to SupaSidebar Pro."
            : "License validation failed. Please check your license key.",
        };

        // Cache the result
        cache.set(cacheKey, {
          data: result,
          timestamp: Date.now(),
        });

        // Custom success callback
        if (onValidationSuccess && result.valid) {
          await onValidationSuccess(result, body);
        }

        if (logging) {
          console.log(
            `[Dodo Validate] License ${license_key.substring(0, 8)}... is ${
              result.valid ? "valid" : "invalid"
            }`
          );
        }

        return NextResponse.json(result);
      } catch (dodoError) {
        if (logging) {
          console.error("[Dodo Validate] DodoPayments API error:", dodoError);
        }

        // Determine user-friendly error message based on error type
        let errorMessage =
          "Unable to verify license. Please check your internet connection and try again.";

        if (dodoError.response?.status === 404) {
          errorMessage =
            "This license key is invalid. Please check and try again.";
        } else if (dodoError.response?.status === 410) {
          errorMessage =
            "This license has expired. Please renew to continue using SupaSidebar.";
        } else if (
          dodoError.response?.data?.error?.includes("already activated")
        ) {
          errorMessage =
            "This license has already been activated on another device.";
        }

        const errorResult = {
          valid: false,
          error: "License validation failed",
          message: errorMessage,
        };

        // Custom error callback
        if (onValidationError) {
          await onValidationError(dodoError, body);
        }

        return NextResponse.json(errorResult);
      }
    } catch (error) {
      if (logging) {
        console.error("[Dodo Validate] Handler error:", error);
      }

      // Custom fatal error callback
      if (onError) {
        const customResponse = await onError(error);
        if (customResponse) {
          return customResponse;
        }
      }

      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  };
}

// Default export for direct use
export const POST = createSimpleDodoValidateHandler();
