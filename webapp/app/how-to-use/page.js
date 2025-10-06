import HowToUse from "@/components/HowToUse";
import Header from "@/components/Header";
import Link from "next/link";
import MainCTA, { CTA_TYPES } from "@/components/homePage/MainCTA";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <PageHeader
          title="How SupaSidebar Works"
          description="SupaSidebar combines powerful technology with simplicity to help you stay focused and productive. Here's a look at the key features that make it work."
        />

        <HowToUse />

        {/* Call to Action */}
        <div className="bg-white border-t">
          <div className="max-w-4xl mx-auto text-center py-16 px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have improved their focus and
              productivity with SupaSidebar.
            </p>
            <MainCTA type={CTA_TYPES.PURCHASE_LICENSE} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
