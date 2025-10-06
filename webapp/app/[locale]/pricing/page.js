import * as React from "react";
import { redirect } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/homePage/FAQ";
import Header from "@/components/Header";
import PricingCards3 from "@/components/pricing/PricingCards3";
import PricingPageWrapper from "@/components/pricing/PricingPageWrapper";

const faqItems = [
  {
    question: "How does the license work?",
    answer: (
      <>
        When you activate your license, you can use SupaSidebar indefinitely
        without paying any additional fee. The license entitles you to receive
        one year of automatic updates. After that, you can optionally renew the
        license to receive additional updates at a discounted price. <br />
        <br /> We also offer a lifetime updates license option, which gives you
        unlimited updates for the life of the product without any additional
        renewal fees.
      </>
    ),
  },
  {
    question: "How many devices can I use SupaSidebar on?",
    answer:
      "For Pro licenses, we offer options for 1, 2, or 5 devices, perfect for all your Macs or for team use.",
  },
  {
    question: "Can I move my license between devices?",
    answer:
      "Yes, but you must first deactivate the license on the current device before activating it on a new one. You can deactivate it from 'Manage license' under the settings.",
  },
  {
    question: "Can I buy a license for more than 5 devices?",
    answer:
      "Yes! Send us an email to admin@supasidebar.com with your request, and we'll get back to you within 3 working days.",
  },
  {
    question: "How can I reset my license?",
    answer:
      "To reset your license and deactivate it from all your devices, visit our license management page. Please note that license resets are counted and excessive license resets may result in your license being blocked.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through secure payment providers. We don't store your credit card information on our servers.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, all major credit cards, PayPal, and Apple Pay where available.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your purchase. Just contact our support team within 30 days of purchase.",
  },
];

export default function PricingPage({ params }) {
  // Redirect Indian pricing to main pricing for now
  return redirect("/pricing");

  // Get locale from route parameter (fallback to default)
  const locale = "default"; // Always use default now

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* <PricingPageWrapper locale={locale}> */}
      <main className="bg-white">
        <div className="container contain max-w-6xl px-4 py-12 md:py-16">
          <PricingCards3 className="mb-12" locale={locale} />

          <div className="mt-8">
            <FAQ faqs={faqItems} headingSize="h3" />
          </div>
        </div>
      </main>
      {/* </PricingPageWrapper> */}

      <SiteFooter />
    </div>
  );
}

// Generate static pages for each locale
export async function generateStaticParams() {
  // Removed "in" locale since we redirect to main pricing
  return [{ locale: "default" }];
}
