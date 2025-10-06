import * as React from "react";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/homePage/FAQ";
import Header from "@/components/Header";
import PricingCards3 from "@/components/pricing/PricingCards3";
import PricingPageWrapper from "@/components/pricing/PricingPageWrapper";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";
import { moneyBackDays } from "@/constants";

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
      "Yes! Send us an email to admin@supasidebar.com with your request, and we'll get back to you within 24 hours.",
  },
  {
    question: "How can I reset my license?",
    answer:
      "To reset your license and deactivate it from all your devices, visit our license management page from website header. Please note that license resets are counted and excessive license resets may result in your license being blocked.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through secure payment providers. We don't store your credit card information on our servers.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and Apple Pay where available.",
  },
  {
    question: "Do you offer refunds?",
    answer: `Yes, we offer a ${moneyBackDays}-day money-back guarantee if you're not satisfied with your purchase. Just contact our support team within ${moneyBackDays} days of purchase.`,
  },
  {
    question: "Can I use SupaSidebar for free?",
    answer:
      "Yes, you can use SupaSidebar for free for 7 days with all premium features included. No credit card required. After the trial, you can continue using the free features forever, or purchase a license to unlock all premium features.",
  },
];

export default function PricingPage() {
  return redirect("/#pricing");
  // This logic needs to be server-side for the redirect to work
  // We'll handle client-side attribution in the wrapper
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log("User timezone:", timeZone);
  const allowedTimezones = [
    "Asia/Kolkata",
    "IST",
    "Asia/Calcutta", // legacy alias
  ];

  // Note: getCookie won't work on server-side in this context
  // This redirect logic might need to be moved to middleware or client-side
  // For now, commenting out to keep it simple
  // if (!preferStandardPricing && allowedTimezones.includes(timeZone)) {
  //   return redirect("/in/pricing");
  // }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* <PricingPageWrapper locale="default"> */}
      <main className="bg-white">
        <div className="container contain max-w-6xl px-4 py-12 md:py-16">
          <PricingCards3 className="" />

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
