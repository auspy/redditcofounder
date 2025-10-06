import { LicenseResetPasswordPage } from "@/screens/license";

export default function ResetPassword() {
  const config = {
    content: {
      title: "Reset Your Password",
      subtitle: "Reset your password to access your license",
      cardTitle: "Reset Password",
      cardDescription:
        "Enter your license key and email to reset your password",
      helpText: "Need help?",
      helpLinkText: "Contact Support",
      loginLinkText: "Remember your password? Login",
    },

    navigation: {
      loginPath: "/license/login",
      contactPath: "/contact",
    },

    api: {
      endpoint: "/api/license/password/reset",
    },

    ui: {
      brandName: "SupaSidebar",
    },

    logging: true,
  };

  return <LicenseResetPasswordPage config={config} />;
}
