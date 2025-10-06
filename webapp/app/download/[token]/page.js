"use client";

import DownloadPage from "@/screens/download/DownloadPage";
import { urlBase } from "@/constants";
import {
  trackDownloadEmailClicked,
  trackDownloadCompleted,
  trackDownloadFailed,
  DownloadMethods,
  Locations,
} from "@/lib/tracking";
import { usePostHog } from "posthog-js/react";

export default function Page() {
  const posthog = usePostHog();
  // Configure the download page for SupaSidebar
  const config = {
    apiBaseUrl: urlBase,
    analytics: {
      posthog,
      trackDownloadEmailClicked,
      trackDownloadCompleted,
      trackDownloadFailed,
      downloadMethods: DownloadMethods,
      locations: Locations,
    },
    ui: {
      preparingMessage: "Preparing SupaSidebar for macOS...",
      successDescription:
        "SupaSidebar is now downloading to your Mac. Check your Downloads folder.",
    },
    navigation: {
      featuresPath: "/features",
      contactPath: "/contact",
    },
    logging: true,
  };

  return <DownloadPage config={config} />;
}
