import { LicenseSetPasswordPage } from "@/screens/license";

export default function SetPassword() {
  const config = {
    content: {
      title: "Set Your Password",
      subtitle: "Set up your password to manage your license",
      cardTitle: "Create Password",
      cardDescription:
        "Enter your license key and email to set up your password",
      helpText: "Need help?",
      helpLinkText: "Contact Support",
      successButtonText: "Continue to Login",
      loginLinkText: "Already have a password? Login",
    },

    navigation: {
      loginPath: "/license/login",
      contactPath: "/contact",
    },

    api: {
      endpoint: "/api/license/password/set",
    },

    ui: {
      brandName: "SupaSidebar",
    },

    logging: true,
  };

  return <LicenseSetPasswordPage config={config} />;
}
