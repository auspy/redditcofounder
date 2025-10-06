import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth.context";
import PostHogDebug from "@/components/debug/PostHogDebug";
import BannerWrapper from "@/components/BannerWrapper";
import { cookies, headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SupaSidebar | Arc Sidebar for Mac",
  description:
    "Lightning-fast sidebar for macOS. Access your files, folders, and websites instantly with keyboard shortcuts and smart organization.",
  keywords:
    "sidebar, productivity, macOS, file manager, quick access, keyboard shortcuts, Arc browser, command palette, workflow, organization, mac app, file organizer, instant access",
  metadataBase: new URL("https://supasidebar.com"),
  openGraph: {
    title: "SupaSidebar | Arc Sidebar for Mac",
    description:
      "Lightning-fast sidebar for macOS. Access your files, folders, and websites instantly with keyboard shortcuts and smart organization.",
    type: "website",
    url: "https://supasidebar.com",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SupaSidebar | Arc Sidebar for Mac",
    description:
      "Lightning-fast sidebar for macOS. Access your files, folders, and websites instantly with keyboard shortcuts and smart organization.",
    images: ["/opengraph-image.png"],
  },
};

export default async function RootLayout({ children }) {
  const googleAnalytics = process.env.NEXT_PUBLIC_GOOGLE_ADD_ID;

  // Read PostHog flags from middleware-set cookie (single source of truth)
  let bootstrapFlags = {};

  try {
    const cookieStore = cookies();
    console.log("🔍 [LAYOUT] Cookie store obtained successfully");

    // Get all cookies for debugging
    const allCookies = cookieStore.getAll();
    console.log(
      "🍪 [LAYOUT] All cookies:",
      allCookies.map((c) => c.name)
    );

    const bootstrapCookie = cookieStore.get("ph_bootstrap");
    console.log("🎯 [LAYOUT] Bootstrap cookie lookup result:", {
      found: !!bootstrapCookie,
      value: bootstrapCookie?.value
        ? `${bootstrapCookie.value.substring(0, 100)}...`
        : "none",
    });

    let bootstrapData = null;

    if (bootstrapCookie) {
      try {
        bootstrapData = JSON.parse(bootstrapCookie.value);
        console.log(
          "📖 [LAYOUT] Successfully parsed PostHog flags from cookie"
        );
      } catch (error) {
        console.error("❌ [LAYOUT] Error parsing bootstrap cookie:", error);
      }
    } else {
      // Try to get from headers if cookie is not available
      const headerStore = headers();
      const bootstrapHeader = headerStore.get("x-ph-bootstrap");
      console.log("🔍 [LAYOUT] Checking headers for bootstrap data:", {
        found: !!bootstrapHeader,
        value: bootstrapHeader
          ? `${bootstrapHeader.substring(0, 100)}...`
          : "none",
      });

      if (bootstrapHeader) {
        try {
          bootstrapData = JSON.parse(bootstrapHeader);
          console.log(
            "📖 [LAYOUT] Successfully parsed PostHog flags from header"
          );
        } catch (error) {
          console.error("❌ [LAYOUT] Error parsing bootstrap header:", error);
        }
      } else {
        console.log("⚠️ [LAYOUT] No PostHog bootstrap cookie or header found");
      }
    }

    if (bootstrapData) {
      bootstrapFlags = bootstrapData.flags || {};
      console.log(
        "✅ [LAYOUT] PostHog flags loaded:",
        Object.keys(bootstrapFlags)
      );
    }
  } catch (error) {
    // This happens during static generation when cookies() is not available
    console.log(
      "📦 [LAYOUT] Static generation mode - no cookies available, error:",
      error.message
    );
  }

  return (
    // <ClerkProvider>
    <html lang="en">
      {/* canonical url */}
      <link rel="canonical" href="https://www.supasidebar.com" />
      {/* <Script type="text/javascript">{`window.$crisp=[];window.CRISP_WEBSITE_ID="712de8a1-7f1b-458b-95df-16078d856816";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}</Script>
      <Script
        async
        defer
        src="https://affonso.io/js/pixel.min.js"
        data-affonso="cmdezki2f0068eoluy1fykqaj"
        data-cookie_duration="30"
      />*/}
      <body className={`${inter.className}  `}>
        <BannerWrapper />
        <AuthProvider>
          <Providers bootstrapFlags={bootstrapFlags}>
            {children}
            {/* 🛠️ PostHog Debug Component - Only shows in development */}
            <PostHogDebug />
          </Providers>
          {/* <Toaster /> */}
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
    // </ClerkProvider>
  );
}
