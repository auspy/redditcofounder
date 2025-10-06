import { FeaturesListPage } from "@/screens/features";
import { getAllFeatures } from "@/lib/features/features";

export const metadata = {
  title: "SupaSidebar - Features",
  description:
    "Explore all the powerful features of SupaSidebar that help you stay focused and productive",
};

export default function FeaturesPage() {
  const features = getAllFeatures();

  const config = {
    showHeader: true,
    showFooter: true,
    showCTA: true,
    layout: {
      container: "pb-12 w-full flex flex-col items-center",
      background: "min-h-screen bg-white",
    },
    metadata: {
      title: "SupaSidebar Features",
      description:
        "Explore all the powerful features of SupaSidebar that help you stay focused and productive",
    },
    ctaProps: {
      // Any custom props for CTA section
    },
  };

  return <FeaturesListPage features={features} config={config} />;
}
