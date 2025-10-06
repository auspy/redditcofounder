// Example configuration for HomePage component
export const homepageConfig = {
  hero: {
    title: "Focus is hard.",
    subtitle: "",
    description: (
      <>
        <strong>So we made it easy.</strong> SupaSidebar helps you block
        distractions, track deep-work hours, and stay on one task at a time.
      </>
    ),
    lessonHeader: true,
    headingClassNames: "!leading-[1.2] gap-2 text-4xl md:text-5xl",
    downloadButtonType: "hero",
    showLogo: false,
    keyPoints: [],
    // Additional props can be passed here
    props: {},
  },

  sections: {
    // Focus Loss Problem - disabled by default
    focusLossProblem: {
      enabled: false,
      props: {},
    },

    // Feature Banner - enabled by default
    featureBanner: {
      enabled: true,
      props: {},
    },

    // Feature List - enabled by default
    featureList: {
      enabled: true,
      props: {},
    },

    // Productivity Loss - disabled by default
    productivityLoss: {
      enabled: false,
      props: {},
    },

    // Impact Section - enabled by default
    impactSection: {
      enabled: true,
      props: {},
    },

    // Trusted By - disabled by default
    trustedBy: {
      enabled: false,
      props: {
        companies: [
          { name: "Company 1", logo: "/logos/company1.png" },
          { name: "Company 2", logo: "/logos/company2.png" },
        ],
      },
    },

    // Testimonials - enabled by default
    testimonials: {
      enabled: true,
      props: {},
    },

    // Single Testimonial - disabled by default
    testimonialSingle: {
      enabled: false,
      person: "franc", // Options: franc, abel, garrat, etc.
      props: {},
    },

    // Pricing Section - disabled by default
    pricing: {
      enabled: false,
      props: {
        // Optional: Override global pricingConfig for this specific section
        // pricingConfig: null, // Uses global site config if null
        
        // Example: Subscription model with stable free + variable paid cards
        // pricingConfig: {
        //   model: "subscription",
        //   defaultSelection: "yearly",
        //   animationBehavior: "minimal",
        //   stableCards: [
        //     {
        //       type: "free",
        //       features: [
        //         { title: "Basic Focus Tools", available: true, desc: "Core productivity features" },
        //         { title: "1 Workspace", available: true, desc: "Single focused environment" },
        //         { title: "Basic Analytics", available: true, desc: "Daily productivity insights" },
        //         { title: "Advanced Features", available: false, desc: "Premium features locked" }
        //       ]
        //     }
        //   ],
        //   toggleOptions: [
        //     {
        //       label: "Monthly",
        //       value: "monthly",
        //       variableCards: [
        //         {
        //           type: "pricing",
        //           devices: "unlimited",
        //           price: 9.99,
        //           buttonText: "Start Monthly Plan",
        //           updateType: "monthly",
        //           beforeButtonNote: "$9.99/month, billed monthly",
        //           features: [
        //             { title: "Everything in Free", desc: "All basic features included" },
        //             { title: "Unlimited Workspaces", desc: "Multiple focused environments" },
        //             { title: "Advanced Analytics", desc: "Weekly & monthly insights" },
        //             { title: "Priority Support", desc: "Email support within 24 hours" }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       label: "Yearly",
        //       value: "yearly",
        //       variableCards: [
        //         {
        //           type: "pricing",
        //           devices: "unlimited",
        //           price: 99.99,
        //           originalPrice: 119.88,
        //           buttonText: "Start Yearly Plan (Save 17%)",
        //           isHighlighted: true,
        //           updateType: "yearly",
        //           beforeButtonNote: "$99.99/year, save 2 months",
        //           features: [
        //             { title: "Everything in Monthly", desc: "All monthly features" },
        //             { title: "Priority Support", desc: "Email support within 12 hours" },
        //             { title: "Beta Access", desc: "Early access to new features" },
        //             { title: "Advanced Integrations", desc: "Connect with more tools" }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
        
        // Example: Simple lifetime model with custom features
        // pricingConfig: {
        //   model: "lifetime",
        //   defaultSelection: "pro",
        //   animationBehavior: "full",
        //   toggleOptions: [
        //     {
        //       label: "Free",
        //       value: "free",
        //       cards: [
        //         {
        //           type: "free",
        //           features: [
        //             { title: "Basic Focus Timer", available: true, desc: "25-minute Pomodoro sessions" },
        //             { title: "Simple Task Lists", available: true, desc: "Basic task management" },
        //             { title: "Premium Features", available: false, desc: "Advanced tools locked" }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       label: "Pro",
        //       value: "pro",
        //       cards: [
        //         {
        //           type: "pricing",
        //           devices: 3,
        //           price: 39.99,
        //           buttonText: "Get Pro License",
        //           isHighlighted: true,
        //           updateType: "lifetime",
        //           features: [
        //             { title: "Advanced Focus Tools", desc: "Custom timers, focus modes, break reminders" },
        //             { title: "Multiple Workspaces", desc: "Organize projects and contexts separately" },
        //             { title: "Analytics & Insights", desc: "Detailed productivity tracking and reports" },
        //             { title: "Cloud Sync", desc: "Access your data across all devices" }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
      },
    },

    // FAQ - disabled by default
    faq: {
      enabled: false,
      props: {
        faqs: [
          {
            question: "What is SupaSidebar?",
            answer:
              "SupaSidebar is a productivity app that helps you stay focused.",
          },
        ],
      },
    },

    // CTA Section - enabled by default
    cta: {
      enabled: true,
      props: {},
    },
  },

  // Custom spacing between sections
  spacing: {
    afterHero: "mb-24 md:mb-48 lg:mb-64",
    afterFeatureBanner: "mb-24 md:mb-48 lg:mb-64",
    afterFeatureList: "mb-12 md:mb-24 lg:mb-32",
    afterImpact: "mb-12 md:mb-24 lg:mb-32",
    afterTestimonials: "mb-24 md:mb-48 lg:mb-64",
    betweenSections: "mb-16 md:mb-24 lg:mb-32",
  },
};

// Minimal configuration example
export const minimalHomepageConfig = {
  hero: {
    title: "Your Product Name",
    description: "Your product description",
    downloadButtonType: "hero",
    showLogo: true,
  },
  sections: {
    // All sections use defaults
  },
};

// Full-featured configuration example
export const fullHomepageConfig = {
  hero: {
    title: "Revolutionary Focus Tool",
    subtitle: "For the modern professional",
    description: "Block distractions, track time, achieve more.",
    lessonHeader: false,
    headingClassNames: "text-5xl md:text-6xl font-bold",
    downloadButtonType: "hero",
    showLogo: true,
    keyPoints: [
      "Block distracting websites",
      "Track deep work hours",
      "Stay focused on one task",
    ],
  },
  sections: {
    focusLossProblem: { enabled: true },
    featureBanner: { enabled: true },
    featureList: { enabled: true },
    productivityLoss: { enabled: true },
    impactSection: { enabled: true },
    trustedBy: { enabled: true },
    testimonials: { enabled: true },
    testimonialSingle: {
      enabled: true,
      person: "franc",
    },
    pricing: { enabled: true },
    faq: {
      enabled: true,
      props: {
        faqs: [
          {
            question: "How does it work?",
            answer: "Simply install and start focusing.",
          },
        ],
      },
    },
    cta: { enabled: true },
  },
};
