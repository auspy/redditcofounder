import { LicenseDashboardPage } from "@/screens/license";
import Header from "@/components/Header";
import { urlBase, supportEmail } from "@/constants";

export default function LicenseDashboard() {
  const config = {
    headerComponent: Header,

    content: {
      title: "License Information",
      description: "Manage your SupaSidebar license",
      devicesSectionTitle: "Active Devices",
      devicesSectionDescription: "Manage your activated devices",
    },

    navigation: {
      loginPath: "/license/login",
      pricingPath: "/pricing",
      homePath: "/",
    },

    ui: {
      brandName: "SupaSidebar",
      showLogoutButton: true,
      showCancelSubscription: true,
      showDeviceManagement: true,
    },

    api: {
      baseUrl: urlBase,
      endpoints: {
        licenseInfo: "/api/license/info",
        deactivateDevice: "/api/license/deactivate",
        cancelLicense: "/api/license/cancel",
      },
    },

    features: {
      copyLicenseKey: true,
      deviceRemoval: true,
      subscriptionCancellation: true,
      subscriptionRenewal: true,
    },
    logging: true,
  };

  return <LicenseDashboardPage config={config} />;
}
