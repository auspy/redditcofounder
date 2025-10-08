"use client";

import { DownloadContext } from "@/components/modals/DownloadModal";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  trackDownloadButtonClick,
  DownloadMethods,
  Locations,
} from "@/lib/tracking";
import { useDownload } from "@/hooks/useDownload";
import Link from "next/link";
import ButtonHowItWorks from "./ButtonHowItWorks";
import { ArrowRight, Loader2 } from "lucide-react";
// import { useBootstrapFlags } from "@/components/analytics/PostHogProvider";
import { FEATURE_FLAGS, getCTATextByVariant } from "@/lib/flags/featureFlags";
import { FreeForeverLink } from "@/components/alerts/MoneyBackGuaranteeAlert";
import { LightningBoltIcon } from "@radix-ui/react-icons";

// ContactWidget Component
const ContactWidget = ({ className = "" }) => {
  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    window.open("https://linkedin.com/in/kshetezvinayak", "_blank");
  };

  const handleTwitterClick = (e) => {
    e.stopPropagation();
    window.open("https://twitter.com/kshetezvinayak", "_blank");
  };

  const handleEmailClick = (e) => {
    e.stopPropagation();
    window.open("mailto:hello@redditcofounder.com", "_blank");
  };

  return (
    <div
      className={`inline-flex items-center gap-3 bg-slate-800 text-white px-4 py-3 rounded-lg transition-colors duration-200 ${className}`}
    >
      {/* Profile Image Placeholder - replace with actual image */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
        K
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-white font-medium text-sm">Got a question?</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
        <div className="text-slate-300 text-xs">
          DM me on{" "}
          <button
            onClick={handleLinkedInClick}
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            LinkedIn
          </button>
          ,{" "}
          <button
            onClick={handleTwitterClick}
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Twitter
          </button>
          {" "}or by{" "}
          <button
            onClick={handleEmailClick}
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

// Utility function to open Cal.com in new tab
export const talkToFounder = () => {
  window.open("https://cal.com/kshetez", "_blank");
};

// Reusable Talk to Founder Button Component
export const TalkToFounderButton = ({
  className = "",
  text = "Book Intro Call",
  size = "md", // sm, md, lg
  variant = "button" // "button" | "link"
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base"
  };

  if (variant === "link") {
    return (
      <button
        onClick={talkToFounder}
        className={`text-sm font-medium text-foreground hover:text-blue-600 transition-colors duration-150 ${className}`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={talkToFounder}
      className={`inline-flex w-full md:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-all font-medium ${sizeClasses[size]} ${className}`}
    >
      {text}
    </button>
  );
};

export default function ButtonMainCTAClient({
  align = "center",
  type = "small", // "small" | "large" | "download_link"
  size = "sm",
  className = "",
  onClick,
  location = Locations.HEADER,
  text = null, // Will be provided by server wrapper to prevent flicker
  mode = "light", // dark or light
  href = "", // this allows link and also download. download will open the download modal
  downloadMethod = "modal", // "direct" | "modal" - for download actions
  as = "button", // "button" | "link" - render type
  fileType = "dmg", // "dmg" | "zip"
  // Server-side A/B test data to prevent flicker (now redundant but kept for compatibility)
  initialVariant = "control",
  initialPayload = {},
}) {
  const { setOpenDownloadModal } = useContext(DownloadContext);
  const [isNavigating, setIsNavigating] = useState(false);
  const [effectiveDownloadMethod, setEffectiveDownloadMethod] =
    useState(downloadMethod);
  const { downloadDirect, isDownloading } = useDownload();
  const router = useRouter();

  // 🚀 NEW: Get flags from bootstrap context (NO FLICKER!)
  // const flags = useBootstrapFlags();
  const ctaFlagData =  {};

  // Extract variant and payload from flag data
  const currentVariant = ctaFlagData.variant || "control";
  const currentPayload = ctaFlagData.payload || {};

  const defaultText = getCTATextByVariant(currentVariant);

  // Determine CTA text: use provided text prop or A/B test variant
  const ctaText = currentPayload?.text || text || defaultText;

  // Effect to handle direct download when feature flag indicates it
  useEffect(() => {
    if (currentPayload?.direct === true) {
      setEffectiveDownloadMethod("direct");
    } else {
      setEffectiveDownloadMethod(downloadMethod);
    }
  }, [currentPayload, downloadMethod]);

  const isDownloadAction = false
  const isLoading = isDownloadAction ? isDownloading : isNavigating;

  const textis = isLoading ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin mr-2" />
      {isDownloadAction ? "Downloading..." : "Loading..."}
    </>
  ) : (
    ctaText
  );

  const handleClick = async (e) => {
    // Call the onClick prop if it exists
    if (onClick) onClick(e);

    // Check if this is a download action
    if (isDownloadAction) {
      e.preventDefault();
      if (effectiveDownloadMethod === "direct") {
        // Track download button click for direct download
        trackDownloadButtonClick(DownloadMethods.DIRECT, location, {
          cta_variant: currentVariant,
          cta_text: ctaText,
          file_type: fileType,
        });
        // Use direct download
        await downloadDirect(location, fileType);
      } else {
        // Track download button click for modal download
        trackDownloadButtonClick(DownloadMethods.MODAL, location, {
          cta_variant: currentVariant,
          cta_text: ctaText,
        });
        // Use modal (default behavior)
        setOpenDownloadModal(true);
      }
    } else {
      // Regular navigation
      if (as === "link" || href ) {
        e.preventDefault();
        setIsNavigating(true);
        router.push(href);
        setIsNavigating(false);
      }
    }
  };

  const content = (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        id="apple"
        width="24"
        height="24"
        className={cn(
          "fill-blue-500",
          type === "small" &&
            "[.hover>&]:fill-white [button:hover>&]:fill-white",
          type === "large" && mode === "dark"
            ? "fill-primary [.hover>&]:fill-white [button:hover>&]:fill-white"
            : type === "large" &&
                "fill-white [.hover>&]:fill-primary [button:hover>&]:fill-primary"
        )}
      >
        <path d="M30.54 26.24a14 14 0 0 1-1.41 2.52 13.16 13.16 0 0 1-1.8 2.24A3.55 3.55 0 0 1 25 32a5.94 5.94 0 0 1-2.15-.51 6.13 6.13 0 0 0-2.31-.49 6.42 6.42 0 0 0-2.38.51 6.49 6.49 0 0 1-2.05.54A3.35 3.35 0 0 1 13.73 31a14 14 0 0 1-1.89-2.27 15.54 15.54 0 0 1-2-4A14.55 14.55 0 0 1 9 20a8.6 8.6 0 0 1 1.14-4.52A6.6 6.6 0 0 1 12.51 13a6.44 6.44 0 0 1 3.22-.91 7.7 7.7 0 0 1 2.49.58 7.67 7.67 0 0 0 2 .58 12 12 0 0 0 2.19-.68 7.23 7.23 0 0 1 3-.53 6.34 6.34 0 0 1 4.95 2.61 5.48 5.48 0 0 0-2.92 5 5.52 5.52 0 0 0 1.81 4.16A6.18 6.18 0 0 0 31 25c-.15.42-.3.82-.46 1.21ZM25.5 6.4a5.59 5.59 0 0 1-1.43 3.66 4.85 4.85 0 0 1-4 2 3.79 3.79 0 0 1 0-.49 5.7 5.7 0 0 1 1.51-3.69 5.85 5.85 0 0 1 1.85-1.39 5.65 5.65 0 0 1 2.11-.6 4.67 4.67 0 0 1 0 .52Z"></path>
      </svg> */}
      <LightningBoltIcon   className={cn(
          "fill-blue-500",
          type === "small" &&
            "[.hover>&]:fill-white [button:hover>&]:fill-white",
          type === "large" && mode === "dark"
            ? "fill-primary [.hover>&]:fill-white [button:hover>&]:fill-white"
            : type === "large" &&
                "fill-white [.hover>&]:fill-primary [button:hover>&]:fill-primary"
        )} />
      <div className="flex flex-col items-center leading-tight">
        <span>{textis}</span>
      </div>
    </>
  );

  if (type === "download_link") {
    return (
      <Button
        variant={as === "link" ? "link" : "default"}
        className={cn("w-full whitespace-normal", className)}
        onClick={handleClick}
        disabled={isLoading}
      >
        {textis}
      </Button>
    );
  }

  if (type === "small") {
    if (as === "link") {
      return (
        <Link
          href="#"
          onClick={handleClick}
          className={cn(
            "inline-flex items-center gap-1 border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-3 py-2 text-sm transition-colors",
            isLoading && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <Button
        variant="outline"
        size={size}
        onClick={handleClick}
        disabled={isLoading}
        className={cn(
          "gap-1 border-primary text-primary hover:bg-primary hover:text-white",
          className
        )}
      >
        {content}
      </Button>
    );
  }

  if (type === "large") {
    if (as === "link") {
      return (
        <Link
          href="#"
          onClick={handleClick}
          className={cn(
            "inline-flex items-center space-x-2 border-2 px-6 py-3 rounded-md text-lg transition-colors",
            mode === "dark"
              ? "bg-white text-primary hover:bg-white/10 hover:border-white hover:text-white border-primary"
              : "bg-primary text-white hover:bg-white hover:text-primary border-primary hover:border-primary",
            isLoading && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <Button
        variant="outline"
        size="lg"
        onClick={handleClick}
        disabled={isLoading}
        className={cn(
          "space-x-2 border-2",
          mode === "dark"
            ? "bg-white text-primary hover:bg-white/10 hover:border-white hover:text-white border-primary"
            : "bg-primary text-white hover:bg-white hover:text-primary border-primary hover:border-primary",
          className
        )}
      >
        {content}
      </Button>
    );
  }

  // Default fancy animated button
  const FancyButton = as === "link" ? Link : "button";

  return (
    <div
      className={`flex flex-col items-${align} justify-${align} gap-2 w-full`}
    >
      <div className={`flex items-${align} flex-col gap-1 mt-0.5`}>
        {/* <p className="text-gray-600 w-fit text-sm font-regular p-0 h-fit">
          50% Discount for First 5 Clients
        </p> */}
      </div>
      <div className="flex w-full  md:flex-row flex-col items-center sm:justify-center md:gap-4 gap-2">
        <FancyButton
          {...(as === "link" && !isDownloadAction ? { href: "#" } : {})}
          onClick={handleClick}
          style={{ minWidth: "200px" }}
          className="inline-flex w-full md:w-auto items-center justify-center whitespace-nowrap rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:brightness-110 transition-all px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl group relative"
          disabled={isLoading}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            id="apple"
            width="24"
            height="24"
            className="mr-2 transition-all duration-300 transform group-hover:-translate-x-8 group-hover:opacity-0"
            fill="white"
          >
            <path d="M30.54 26.24a14 14 0 0 1-1.41 2.52 13.16 13.16 0 0 1-1.8 2.24A3.55 3.55 0 0 1 25 32a5.94 5.94 0 0 1-2.15-.51 6.13 6.13 0 0 0-2.31-.49 6.42 6.42 0 0 0-2.38.51 6.49 6.49 0 0 1-2.05.54A3.35 3.35 0 0 1 13.73 31a14 14 0 0 1-1.89-2.27 15.54 15.54 0 0 1-2-4A14.55 14.55 0 0 1 9 20a8.6 8.6 0 0 1 1.14-4.52A6.6 6.6 0 0 1 12.51 13a6.44 6.44 0 0 1 3.22-.91 7.7 7.7 0 0 1 2.49.58 7.67 7.67 0 0 0 2 .58 12 12 0 0 0 2.19-.68 7.23 7.23 0 0 1 3-.53 6.34 6.34 0 0 1 4.95 2.61 5.48 5.48 0 0 0-2.92 5 5.52 5.52 0 0 0 1.81 4.16A6.18 6.18 0 0 0 31 25c-.15.42-.3.82-.46 1.21ZM25.5 6.4a5.59 5.59 0 0 1-1.43 3.66 4.85 4.85 0 0 1-4 2 3.79 3.79 0 0 1 0-.49 5.7 5.7 0 0 1 1.51-3.69 5.85 5.85 0 0 1 1.85-1.39 5.65 5.65 0 0 1 2.11-.6 4.67 4.67 0 0 1 0 .52Z"></path>
          </svg> */}
          <LightningBoltIcon  className="mr-2 transition-all duration-300 transform group-hover:-translate-x-8 group-hover:opacity-0" />
          <span className="transition-all duration-300 group-hover:-translate-x-8">
            {textis}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-8 transition-all duration-300 transform opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </FancyButton>
        {/* <ButtonHowItWorks /> */}
        <TalkToFounderButton className={className} text="Book Intro Call" />

      </div>
      <div className={`flex items-${align} flex-col gap-1 mt-0.5`}>
        <Button
          className="text-blue-600 w-fit text-sm font-semibold p-0 h-fit"
          variant="link"
          onClick={() => {
            router.push("/#pricing");
          }}
        >
          50% Discount for First 5 Clients
          <ArrowRight className="w-3 h-3 ml-2" />
        </Button>
      </div>
    </div>
  );
}
