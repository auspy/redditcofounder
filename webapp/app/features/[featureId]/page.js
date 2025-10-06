import { FeatureDetailPage } from "@/screens/features";
import { getAllFeatures, getFeatureById } from "@/lib/features/features";

// Generate static params for all features
export async function generateStaticParams() {
  const features = getAllFeatures();
  return features.map((feature) => ({
    featureId: feature.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const feature = getFeatureById(params.featureId);

  if (!feature) {
    return {
      title: "SupaSidebar - Feature Not Found",
    };
  }

  // Use enhanced metadata if available in landingPage
  if (feature.landingPage) {
    return {
      title: `SupaSidebar - ${feature.landingPage.heroData.title}`,
      description: feature.landingPage.heroData.description,
    };
  }

  return {
    title: `SupaSidebar - ${feature.title}`,
    description: feature.description,
  };
}

export default function FeatureDetail({ params }) {
  const feature = getFeatureById(params.featureId);

  const config = {
    showHeader: true,
    showFooter: true,
    showBackButton: true,
    backButtonText: "Back to Features",
    backButtonHref: "/features",
    showRelatedFeatures: true,
    productName: "SupaSidebar",
    layout: {
      container: "wrapper py-10",
      background: "bg-gradient-to-b from-primary/5 to-background",
    },
    heroOverrides: {
      // Any specific hero overrides for SupaSidebar
    },
    customComponents: {
      // Add custom components if needed
      // beforeContent: <CustomBanner />,
      // afterDetail: <NewsletterSignup />
    },
  };

  return <FeatureDetailPage feature={feature} config={config} />;
}
