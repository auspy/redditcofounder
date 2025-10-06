import { NextResponse } from "next/server";

// This function determines if the user is from India using multiple signals
// function isIndianUser(request) {
//   // Check if user has a preference for standard pricing
//   const preferStandardPricing =
//     request.cookies.get("preferStandardPricing")?.value === "true";

//   // If user has explicitly chosen standard pricing, respect that choice
//   if (preferStandardPricing) {
//     console.log("User has explicitly chosen standard pricing");
//     return false;
//   }

//   // 1. Check country from Geolocation API (most reliable when available)
//   const geoCountry = request.geo?.country;
//   console.log("geoCountry:", geoCountry);
//   if (geoCountry === "IN") {
//     console.log(
//       `User is from India based on geoCountry ${geoCountry}, redirecting to INR pricing`
//     );
//     return true;
//   }

//   // 2. Check Accept-Language headers for Indian languages
//   const acceptLanguage = request.headers.get("accept-language") || "";
//   console.log("accept-language:", acceptLanguage);

//   // Common Indian language codes
//   const indianLanguages = [
//     "hi",
//     "ta",
//     "te",
//     "kn",
//     "ml",
//     "pa",
//     "bn",
//     "gu",
//     "mr",
//     "or",
//     "as",
//   ];
//   const hasIndianLanguage = indianLanguages.some(
//     (lang) =>
//       acceptLanguage.includes(`${lang}-`) ||
//       acceptLanguage.includes(`,${lang},`) ||
//       acceptLanguage.startsWith(`${lang},`)
//   );
//   if (hasIndianLanguage) {
//     console.log(
//       `User is from India based on language ${acceptLanguage}, redirecting to INR pricing`
//     );
//     return true;
//   }

//   // 3. Check for Indian English
//   if (acceptLanguage.includes("en-IN")) {
//     console.log(
//       "User is from India based on en-IN, redirecting to INR pricing"
//     );
//     return true;
//   }

//   // 4. Check timezone if available (many Indian users will have IST timezone)
//   const timeZone = request.headers.get("x-timezone");
//   console.log("timezone:", timeZone);
//   if (
//     timeZone &&
//     ["Asia/Kolkata", "IST", "GMT+5:30", "Asia/Calcutta"].some((tz) =>
//       timeZone.includes(tz)
//     )
//   ) {
//     console.log(
//       `User is from India based on timezone ${timeZone}, redirecting to INR pricing`
//     );
//     return true;
//   }

//   return false;
// }

/**
 * Transform PostHog API response to our expected format
 */
// function transformPostHogFlags(postHogResponse) {
//   const flags = {};

//   if (postHogResponse.flags) {
//     Object.keys(postHogResponse.flags).forEach((flagKey) => {
//       const flagData = postHogResponse.flags[flagKey];

//       // Extract payload from metadata if it exists
//       let payload = {};
//       if (flagData.metadata?.payload) {
//         try {
//           payload = JSON.parse(flagData.metadata.payload);
//         } catch (error) {
//           console.error(`Error parsing payload for flag ${flagKey}:`, error);
//         }
//       }

//       // Transform to our expected format
//       flags[flagKey] = {
//         variant: flagData.variant || "control",
//         payload: payload,
//         enabled: flagData.enabled || false,
//         reason: flagData.reason || null,
//       };
//     });
//   }

//   return flags;
// }

export async function middleware(request) {
  const res = NextResponse.next();

  // 🚀 SINGLE SOURCE OF TRUTH FOR FEATURE FLAGS
  // 1️⃣ Stick to ONE distinctId everywhere
  // const phProjectAPIKey =
  //   process.env.NEXT_PUBLIC_POSTHOG_KEY ||
  //   "phc_qA35plR4XfS9SN0KNH0IDhkJP8DzbXWG8l4MyiR4zlJ";
  // const phCookieName = `ph_${phProjectAPIKey}_posthog`;

  // let distinctId = request.cookies.get("ph_distinct_id")?.value;

  // // If no distinct ID, try to get it from existing PostHog cookie
  // if (!distinctId) {
  //   const phCookie = request.cookies.get(phCookieName);
  //   if (phCookie) {
  //     try {
  //       const phCookieParsed = JSON.parse(phCookie.value);
  //       distinctId = phCookieParsed.distinct_id;
  //     } catch (error) {
  //       console.log("Could not parse PostHog cookie");
  //     }
  //   }
  // }

  // // If still no distinct ID, generate one
  // if (!distinctId) {
  //   distinctId = crypto.randomUUID();
  //   res.cookies.set("ph_distinct_id", distinctId, {
  //     path: "/",
  //     sameSite: "lax",
  //     secure: process.env.NODE_ENV === "production",
  //   });
  // }

  // // 2️⃣ Ask PostHog which variant this ID is in (only if not cached)
  // const existingBootstrap = request.cookies.get("ph_bootstrap");
  // let shouldRefreshFlags = true;

  // if (existingBootstrap) {
  //   try {
  //     const existingData = JSON.parse(existingBootstrap.value);
  //     // Check if cache is still valid (1 hour)
  //     const cacheAge = Date.now() - (existingData.timestamp || 0);
  //     if (cacheAge < 60 * 60 * 1000) {
  //       // 1 hour in ms
  //       shouldRefreshFlags = false;
  //       console.log("📦 [MIDDLEWARE] Using cached PostHog flags");
  //     }
  //   } catch (error) {
  //     console.log("Could not parse existing bootstrap cookie");
  //   }
  // }

  // if (shouldRefreshFlags) {
  //   try {
  //     console.log(
  //       "🔄 [MIDDLEWARE] Fetching fresh PostHog flags for:",
  //       distinctId.substring(0, 8) + "..."
  //     );

  //     // Use PostHog API directly (as posthog-node isn't available in edge middleware)
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         api_key: phProjectAPIKey,
  //         distinct_id: distinctId,
  //       }),
  //     };

  //     // Determine the PostHog host (US or EU)
  //     const postHogHost =
  //       process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
  //     const apiUrl =
  //       postHogHost
  //         .replace("//", "//")
  //         .replace("app.posthog.com", "us.i.posthog.com") + "/flags?v=2";

  //     const phRequest = await fetch(apiUrl, requestOptions);
  //     const data = await phRequest.json();

  //     console.log(
  //       "🔍 [MIDDLEWARE] Raw PostHog response:",
  //       JSON.stringify(data, null, 2)
  //     );

  //     // Transform PostHog response to our expected format
  //     const transformedFlags = transformPostHogFlags(data);

  //     // 3️⃣ Hand the map to the browser via cookie
  //     const bootstrapData = {
  //       distinctId,
  //       flags: transformedFlags,
  //       timestamp: Date.now(),
  //     };

  //     const cookieValue = JSON.stringify(bootstrapData);
  //     console.log("🍪 [MIDDLEWARE] Setting ph_bootstrap cookie:", {
  //       length: cookieValue.length,
  //       preview: cookieValue.substring(0, 100) + "...",
  //       flags: Object.keys(transformedFlags),
  //       distinctId: distinctId.substring(0, 8) + "...",
  //     });

  //     res.cookies.set("ph_bootstrap", cookieValue, {
  //       path: "/",
  //       httpOnly: false, // readable by client JS
  //       sameSite: "lax",
  //       maxAge: 60 * 60, // cache for 1 hour so middleware is cheap
  //       secure: process.env.NODE_ENV === "production",
  //     });

  //     // Set the data in request headers so server components can access it immediately
  //     // (request.cookies.set() doesn't work for server components)
  //     res.headers.set("x-ph-bootstrap", cookieValue);
  //     console.log(
  //       "🔄 [MIDDLEWARE] Cookie set on response and data set in headers"
  //     );

  //     console.log(
  //       "✅ [MIDDLEWARE] Updated PostHog bootstrap with flags:",
  //       Object.keys(transformedFlags)
  //     );
  //     console.log(
  //       "🎯 [MIDDLEWARE] Flag details:",
  //       JSON.stringify(transformedFlags, null, 2)
  //     );
  //   } catch (error) {
  //     console.error("❌ [MIDDLEWARE] Error fetching PostHog flags:", error);
  //     // Set empty flags on error to prevent blocking
  //     const fallbackData = {
  //       distinctId,
  //       flags: {},
  //       timestamp: Date.now(),
  //     };

  //     const fallbackCookieValue = JSON.stringify(fallbackData);
  //     console.log("🍪 [MIDDLEWARE] Setting fallback ph_bootstrap cookie:", {
  //       length: fallbackCookieValue.length,
  //       preview: fallbackCookieValue.substring(0, 100) + "...",
  //       distinctId: distinctId.substring(0, 8) + "...",
  //     });

  //     res.cookies.set("ph_bootstrap", fallbackCookieValue, {
  //       path: "/",
  //       httpOnly: false,
  //       sameSite: "lax",
  //       maxAge: 60 * 60,
  //       secure: process.env.NODE_ENV === "production",
  //     });

  //     // Set the data in request headers so server components can access it immediately
  //     // (request.cookies.set() doesn't work for server components)
  //     res.headers.set("x-ph-bootstrap", fallbackCookieValue);
  //     console.log(
  //       "🔄 [MIDDLEWARE] Fallback cookie set on response and data set in headers"
  //     );
  //   }
  // }

  // Handle authentication routes
  const token = request.cookies.get("auth_token");
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/license/dashboard")) {
    if (!token) {
      // Redirect to login if no token
      const loginUrl = new URL("/license/login", request.url);
      loginUrl.searchParams.set("returnUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith("/license/login")) {
    if (token) {
      return NextResponse.redirect(new URL("/license/dashboard", request.url));
    }
  }

  // Handle pricing internationalization with PPP
  // COMMENTED OUT: Indian pricing temporarily disabled
  // if (pathname === "/pricing") {
  //   // Check if the user is from India
  //   if (isIndianUser(request)) {
  //     console.log("Indian user detected, redirecting to /in/pricing");

  //     // Redirect to Indian pricing
  //     const redirectUrl = new URL("/in/pricing", request.url);

  //     // Preserve query parameters
  //     request.nextUrl.searchParams.forEach((value, key) => {
  //       redirectUrl.searchParams.set(key, value);
  //     });

  //     return NextResponse.redirect(redirectUrl);
  //   }
  // }

  // Allow the request to continue
  return res;
}

export const config = {
  matcher: ["/license/login", "/license/dashboard"],
};
