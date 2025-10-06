import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/contexts/auth.context";
import PostHogDebug from "@/components/debug/PostHogDebug";
import BannerWrapper from "@/components/BannerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit Co-Founder — 50,000+ impressions in 7 days (guaranteed)",
  description:
    "Productized Reddit growth: 50k+ impressions in 7 days or refund. 2M+ organic views proven. Quick Test $350 (first 10 clients).",
  keywords:
    "reddit marketing, reddit growth, reddit traffic, startup marketing, saas marketing, reddit advertising, social media marketing, content marketing, reddit promotion, traffic generation",
  metadataBase: new URL("https://redditcofounder.com"),
  openGraph: {
    title: "Reddit Co-Founder — 50,000+ impressions in 7 days (guaranteed)",
    description:
      "Productized Reddit growth: 50k+ impressions in 7 days or refund. 2M+ organic views proven. Quick Test $350 (first 10 clients).",
    type: "website",
    url: "https://redditcofounder.com",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Co-Founder — 50,000+ impressions in 7 days (guaranteed)",
    description:
      "Productized Reddit growth: 50k+ impressions in 7 days or refund. 2M+ organic views proven. Quick Test $350 (first 10 clients).",
    images: ["/opengraph-image.png"],
  },
};

export default async function RootLayout({ children }) {
  // const googleAnalytics = process.env.NEXT_PUBLIC_GOOGLE_ADD_ID;

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
          <Providers>
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
