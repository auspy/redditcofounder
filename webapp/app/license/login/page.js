import { LicenseLoginPage } from "@/screens/license";
import { isDev } from "@/constants";

export default function Login({ searchParams }) {
  const config = {
    content: {
      title: "Welcome Back",
      titleSignUp: "Create Account",
      subtitle: "Sign in to manage your license",
      subtitleSignUp: "Create an account to access your license",
      cardTitle: "Sign In",
      cardTitleSignUp: "Sign Up",
      cardDescription: "Access your account with the email from your license",
      cardDescriptionSignUp: "Use your license email to create an account",
      deviceConnectedMessage: "Connected from your SupaSidebar app",
      helpText: "Need help?",
      helpLinkText: "Contact Support",
      toggleSignInText: "Already have an account? Sign in",
      toggleSignUpText: "New to SupaSidebar? Create account",
    },

    navigation: {
      dashboardPath: "/license/dashboard",
      contactPath: "/contact",
      setPasswordPath: "/license/set-password",
      resetPasswordPath: "/license/reset-password",
    },

    ui: {
      brandName: "SupaSidebar",
      showDeviceId: true,
      enableTraditionalLogin: false,
      showFirebaseAuth: true,
      showEmailLinkAuth: true,
      showModeToggle: true,
    },

    features: {
      deviceAttribution: true,
      postHogTracking: true,
    },

    isDev: isDev,
    logging: true,
  };

  return <LicenseLoginPage config={config} />;
}
