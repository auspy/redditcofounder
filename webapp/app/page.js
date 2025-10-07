import { HomePage } from "@/screens/home";
import { realRedditResultsData } from "@/components/images/reddit-results-data";

export const revalidate = false;

export function generateStaticParams() {
  return [];
}

const quickTestFeatures = [
  {
    title: "3 competitor strategy mini-report",
    desc: "Research on what's working in your space",
  },
  {
    title: "5 posts across relevant subs",
    desc: "Strategic content crafted for maximum engagement",
  },
  {
    title: "7 days engagement",
    desc: "Active comment management and community interaction",
  },
  {
    title: "Report + screenshots",
    desc: "Detailed analytics with visual proof of results",
  },
  {
    title: "50k+ views guaranteed or refund",
    desc: "Risk-free with full money-back guarantee",
  },
];

const monthlyGrowthFeatures = [
  {
    title: "8–12 posts monthly",
    desc: "Consistent content calendar for sustained growth",
  },
  {
    title: "Daily engagement",
    desc: "Ongoing comment management and community building",
  },
  {
    title: "Competitor monitoring",
    desc: "Stay ahead with continuous competitive analysis",
  },
  {
    title: "Weekly reports",
    desc: "Regular performance updates and insights",
  },
  {
    title: "Target 200k+ monthly",
    desc: "Aggressive growth targets with proven methods",
  },
];

const creativePackFeatures = [
  {
    title: "1 demo video (30–60s)",
    desc: "Professional video content optimized for Reddit",
  },
  {
    title: "2–3 images formatted for Reddit",
    desc: "Custom graphics designed for maximum impact",
  },
  {
    title: "Cross-platform optimization",
    desc: "Assets work across different subreddits and contexts",
  },
];
// Homepage configuration for Reddit CoFounder
const homepageConfig = {
  hero: {
    preTitle: "Reddit Marketing on AutoPilot",
    title: <><span className="text-primary">50K+ Organic Views</span> in <br className="hidden md:block" /> 7 days Guaranteed</>,
    description: (
      <>
        Get organic traffic to your product through Reddit without lifting a finger, while you sleep. You build the product. I bring the traffic.
      </>
    ),
    lessonHeader: true,
    headingClassNames: "!leading-[1.2] gap-2 text-3xl md:text-4xl lg:text-6xl",
    // subtitle: "50,000+ impressions in 7 days — guaranteed or refund",
    downloadButtonType: "hero",
    showLogo: false,
    align: "center",
    keyPoints: [
      // "2,000,000+ Organic Impressions",
      // "27 Posts Over 10k Views",
      // "50k+ Guaranteed or Refund",
    ],
    showTestimonial: false,
    videoSrc: "/50k.png",
    customButtons: [
      {
        text: "Start the Quick Test — $350 (10 pilot slots)",
        href: "#stripe-checkout",
        variant: "primary",
        size: "lg"
      },
      {
        text: "DM on Twitter/X",
        href: "https://twitter.com/messages/compose?recipient_id=placeholder",
        variant: "outline",
        size: "lg"
      }
    ],
  },

  sections: {
    // Currently disabled sections (commented out in original)
    focusLossProblem: { enabled: false },
    productivityLoss: { enabled: false },
    testimonialSingle: { enabled: true },
    impactSection: { enabled: false },
    redditResults: {
      enabled: true,
      props: {
        images: realRedditResultsData,
        title: "Proven Reddit Results",
        description: "See the real traffic and engagement our strategic campaigns deliver",
        badge: "Real Results",
        variant: "multicolumn",
        cardVariant: "imageOnly",
        limit: 15
      }
    },
    pricing: {
      enabled: true,
      props: {
        pricingConfig: {
          model: "service",
          defaultSelection: "main",
          animationBehavior: "minimal",

          // Header customization
          header: {
            title: "Choose Your Reddit Growth Package",
            description:
              "No contracts, no BS. Just guaranteed Reddit traffic for your product. Start with a risk-free test or commit to ongoing growth.",
            showTrialDays: false,
          },

          // Notice/banner configuration
          notices: {
            betaPricing: {
              show: false,
            },
            customBanner: {
              show: true,
              title: "Intro Pricing",
              description: "First 10 clients get Quick Test for $350 (regular $500)",
              style: "success",
            },
          },

          // Footer customization
          footer: {
            legalText:
              "Prices in USD. 50k+ impressions guaranteed on Quick Test or full refund.",
            contactText: "Questions about the service?",
            contactLinkText: "DM on Twitter/X",
          },

          // Additional components
          additionalComponents: {
            moneyBackGuarantee: {
              show: true,
              days: 7,
              text: "50,000+ impressions guaranteed or full refund"
            },
            studentDiscount: {
              show: false,
            },
            lowIncomeDiscount: {
              show: false,
            },
          },

          stableCards: [
            {
              type: "pricing",
              title: "Quick Test",
              subtitle: "7 days",
              price: 350,
              originalPrice: 700,
              buttonText: "Start Quick Test",
              billingCycle: "one-time",
              beforeButtonNote: "Intro price - first 10 clients",
              // highlightedText: "50k+ views guaranteed",
              // highlightTheme: "green",
              features: quickTestFeatures,
            },
            {
              type: "pricing",
              title: "Monthly Growth",
              subtitle: "4 weeks",
              price: 1200,
              originalPrice: 2400,
              buttonText: "Book Intro Call",
              billingCycle: "monthly",
              beforeButtonNote: "For ongoing growth",
              highlightedText: "200k+ monthly target",
              highlightTheme: "blue",
              features: monthlyGrowthFeatures,
            },
          ],
          toggleOptions: [
            {
              label: "Service Packages",
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
    featureList: {
      enabled: true,
      props: {
        title: "How It Works",
        subtitle: "No bans. No guesswork. You don't lift a finger.",
        features: [
          {
            step: "1",
            title: "You share the site + 2 lines on the product",
            description: "Quick briefing on your product and target audience"
          },
          {
            step: "2",
            title: "I pick subreddits, craft 5 posts, and schedule",
            description: "Strategic research and content creation for maximum impact"
          },
          {
            step: "3",
            title: "I publish + handle comments for 7 days",
            description: "Active engagement and community management"
          },
          {
            step: "4",
            title: "You get a report (impressions, upvotes, comments, clicks, next steps)",
            description: "Detailed analytics and recommendations for continued growth"
          }
        ]
      }
    },
    testimonials: {
      enabled: false,
      props: {
        variant: "multicolumn",
        title: "What Our Clients Say",
        description: "See how Reddit CoFounder has helped businesses grow their organic reach"
      }
    },
    // guarantee: {
    //   enabled: true,
    //   props: {
    //     title: "50,000+ views in 7 days or your money back",
    //     description: "Impressions counted via Reddit analytics (screenshots). If the campaign totals <50k after 7 days, I refund 100%.",
    //     badgeText: "Guaranteed",
    //     highlightText: "50,000+ views in 7 days or your money back"
    //   }
    // },
    cta: {
      enabled: true,
      props: {
        title: "Test Reddit without risk",
        description: "Start building your Reddit presence today with guaranteed results.",
        primaryButton: {
          text: "Start the Quick Test — $350",
          href: "#stripe-checkout"
        },
        secondaryButton: {
          text: "Join Waitlist / Ask a Question",
          href: "#lead-modal"
        }
      }
    },
    featureBanner: { enabled: false },
  },

  // Custom spacing to match original
  spacing: {
    afterHero: "mb-24 md:mb-48 lg:mb-64",
    afterFeatureBanner: "mb-24 md:mb-48 lg:mb-64",
    afterRedditResults: "mb-12 md:mb-24 lg:mb-32",
    afterFeatureList: "mb-12 md:mb-24 lg:mb-32",
    afterImpact: "mb-12 md:mb-24 lg:mb-32",
    afterTestimonials: "mb-24 md:mb-48 lg:mb-64",
    afterCta: "mb-12 md:mb-24 lg:mb-32",
  },
};

export default function Page() {
  return <HomePage config={homepageConfig} />;
}
