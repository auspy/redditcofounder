import { LicenseRecoveryPage } from "@/screens/license";

export default function GetLicenseKey() {
  const config = {
    content: {
      title: "Recover License Key",
      subtitle: "Enter your email to receive your license key",
      cardTitle: "License Recovery",
      cardDescription:
        "We'll send your license key to the email address you used to purchase",
      helpText: "Need help?",
      helpLinkText: "Contact Support",
      loginLinkText: "Remember your license key? Login",
      successTitle: "License Key Sent!",
      successDescription:
        "Check your email for your license key and login instructions.",
    },

    navigation: {
      loginPath: "/license/login",
      contactPath: "/contact",
    },

    api: {
      endpoint: "/api/license/recover",
    },

    ui: {
      brandName: "SupaSidebar",
      showSuccessIcon: true,
    },

    logging: true,
  };

  return <LicenseRecoveryPage config={config} />;
}
