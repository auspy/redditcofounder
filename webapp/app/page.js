import { HomePage } from "@/screens/home";

export const revalidate = false;

export function generateStaticParams() {
  return [];
}

const proFeatures = [
  {
    title: "Unlimited Spaces",
    desc: "Organize links exactly how you want",
  },
  {
    title: "Risk Free - Cancel Anytime",
    desc: "Cancel in 14 days, get a full refund",
  },
  {
    title: "Early Access",
    desc: "Get early access to new features",
  },
  {
    title: "Priority Support",
    desc: "Talk directly to the developer.",
  },
];
const lifetimeFeatures = [
  {
    title: "Unlimited Spaces",
    desc: "Organize links exactly how you want",
  },
  {
    title: "Buy Once, Use Forever",
    desc: "5 devices can be active at a time",
  },
  {
    title: "Early Access",
    desc: "Get early access to new features",
  },
  {
    title: "Priority Support",
    desc: "Talk directly to the developer.",
  },
];

const freeFeatures = [
  {
    title: "All Major Browsers Supported",
    desc: "Safari, Dia, Chrome, Firefox, Arc and more",
  },
  {
    title: "1 Space Included",
    desc: "Perfect for daily use",
  },
  {
    title: "7 Day Trial - No Credit Card",
    desc: "Try pro 7 days, then continue free forever",
  },
];
// Homepage configuration for SupaSidebar
const homepageConfig = {
  hero: {
    title: "Arc-like Sidebar for Mac",
    // subtitle: "for Mac",
    description: (
      <>
        SupaSidebar is a menubar app that helps you save links, files and
        folders from any browser or finder just a click away.
      </>
    ),
    lessonHeader: true,
    headingClassNames: "!leading-[1.2] gap-2 text-4xl md:text-5xl lg:text-6xl",
    downloadButtonType: "hero",
    showLogo: true,
    align: "center",
    keyPoints: [
      "Multi-Browser Support",
      "Global Keyboard Shortcuts",
      "Designed for Mac",
    ],
    showTestimonial: false,
    videoSrc: "/macbook.png",
  },

  sections: {
    // Currently disabled sections (commented out in original)
    focusLossProblem: { enabled: false },
    trustedBy: { enabled: false },
    testimonialSingle: { enabled: false },
    pricing: {
      enabled: true,
      props: {
        pricingConfig: {
          model: "subscription",
          defaultSelection: "main",
          animationBehavior: "minimal",

          // Header customization
          header: {
            title: "Honest and affordable pricing",
            description:
              "No ads, hidden fees, or shenanigans. Your data stays private, and I get to focus on building the best product for you. SupaSidebar comes with a {trialDays}-day trial as well. So you can explore before you commit.",
            showTrialDays: true,
          },

          // Notice/banner configuration
          notices: {
            betaPricing: {
              show: false, // Disable beta pricing banner
            },
            customBanner: {
              show: true,
              title: "Limited Time Offer",
              description: "Get 50% off on lifetime - beta only offer!",
              style: "success",
            },
          },

          // Footer customization
          footer: {
            legalText:
              "Prices in USD. Taxes may apply outside US. Requires macOS 13+.",
            contactText: "Questions about pricing?",
            contactLinkText: "Get in touch",
          },

          // Additional components
          additionalComponents: {
            moneyBackGuarantee: {
              show: true,
              days: 14,
            },
            studentDiscount: {
              show: false,
              percentage: 30,
            },
            lowIncomeDiscount: {
              show: false,
            },
          },

          stableCards: [
            {
              type: "pricing", // Use pricing card type for $0 card
              title: "Free Forever",
              price: 0, // $0 price
              buttonText: "Download For Free",
              billingCycle: "free",
              beforeButtonNote: "For most users",
              features: freeFeatures,
            },
            // {
            //   type: "pricing",
            //   beforeButtonNote: "For testing pro + Support development ♥️",
            //   title: "Pro Monthly",
            //   highlightedText: "Launch Month Discount",
            //   highlightTheme: "purple",
            //   price: 3.99, // Actual discounted price
            //   originalPrice: 7.99, // Crossed out price
            //   buttonText: "Lock in $3.99/month forever",
            //   billingCycle: "monthly",
            //   features: proFeatures,
            // },
            {
              type: "pricing",
              beforeButtonNote: "This supports development ♥️",
              title: "Lifetime",
              devices: 5,
              highlightedText: "Early Support Discount",
              highlightTheme: "purple",
              price: 9.99, // Actual discounted price
              originalPrice: 19.99, // Crossed out price
              buttonText: "Get Lifetime License",
              billingCycle: "lifetime",
              features: lifetimeFeatures,
            },
          ],
          toggleOptions: [
            {
              label: "Subscription & Lifetime",
              value: "main",
              cards: [], // Use stableCards only
            },
          ],
        },
      },
    },
    faq: { enabled: false },

    // Enabled sections with default props
    // featureBanner: { enabled: true },
    featureList: { enabled: true },
    impactSection: { enabled: false },
    testimonials: { enabled: false },
    cta: { enabled: true },
    featureBanner: { enabled: false },
  },

  // Custom spacing to match original
  spacing: {
    afterHero: "mb-24 md:mb-48 lg:mb-64",
    afterFeatureBanner: "mb-24 md:mb-48 lg:mb-64",
    afterFeatureList: "mb-12 md:mb-24 lg:mb-32",
    afterImpact: "mb-12 md:mb-24 lg:mb-32",
    afterTestimonials: "mb-24 md:mb-48 lg:mb-64",
    afterCta: "mb-12 md:mb-24 lg:mb-32",
  },
};

export default function Page() {
  return <HomePage config={homepageConfig} />;
}
