import { PaymentStatusPage } from "@/screens/license";

export default function PaymentStatus() {
  const config = {
    content: {
      loadingTitle: "Processing Payment...",
      loadingDescription: "Please wait while we verify your payment",
      successTitle: "Payment Successful!",
      successDescription:
        "Your SupaSidebar license has been created and sent to your email",
      failedTitle: "Payment Failed",
      failedDescription: "There was an issue processing your payment",
      errorTitle: "Something went wrong",
      errorDescription: "We encountered an error while processing your request",
      licenseKeyLabel: "Your License Key:",
      nextStepsTitle: "What's Next?",
      helpText: "Need help?",
      helpLinkText: "Contact Support",
    },

    navigation: {
      downloadPath: "/download",
      loginPath: "/license/login",
      recoveryPath: "/get-license-key",
      contactPath: "/contact",
      pricingPath: "/pricing",
    },

    api: {
      endpoint: "/api/payment-status",
    },

    ui: {
      brandName: "SupaSidebar",
      showLicenseKey: true,
      showNextSteps: true,
      autoRefreshOnFailed: true,
      refreshInterval: 5000,
      maxRefreshAttempts: 12,
    },

    nextSteps: [
      {
        title: "Download SupaSidebar",
        description: "Get started by downloading and installing the Mac app",
        action: { type: "link", href: "/", text: "Download Now" },
      },
      // {
      //   title: "Set Up Your Account",
      //   description: "Create a password to manage your license online",
      //   action: {
      //     type: "link",
      //     href: "/license/login",
      //     text: "Set Up Account",
      //   },
      // },
    ],

    logging: true,
  };

  return <PaymentStatusPage config={config} />;
}
