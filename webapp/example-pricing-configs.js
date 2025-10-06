// Example configurations for PricingCards3 component

// 1. Current behavior (default - no config needed)
export const currentBehavior = null; // Uses internal default

// 2. Lifetime model with three options: Free, One-time, Lifetime
export const lifetimeModel = {
  model: "lifetime",
  defaultSelection: "one_time",
  animationBehavior: "full",
  toggleOptions: [
    {
      label: "Free Forever",
      value: "free",
      cards: [{ type: "free" }]
    },
    {
      label: "One-time Purchase",
      value: "one_time",
      cards: [
        {
          type: "pricing",
          devices: 1,
          price: 24.99,
          buttonText: "Buy for 1 Mac",
          updateType: "one_year"
        },
        {
          type: "pricing",
          devices: 3,
          price: 39.99,
          buttonText: "Buy for 3 Macs",
          isHighlighted: true,
          updateType: "one_year"
        },
        {
          type: "pricing",
          devices: 5,
          price: 79.99,
          buttonText: "Buy for 5 Macs",
          updateType: "one_year"
        }
      ]
    },
    {
      label: "Lifetime Updates",
      value: "lifetime",
      cards: [
        {
          type: "pricing",
          devices: 1,
          price: 49.99,
          buttonText: "Lifetime for 1 Mac",
          updateType: "lifetime"
        },
        {
          type: "pricing",
          devices: 3,
          price: 89.99,
          buttonText: "Lifetime for 3 Macs",
          isHighlighted: true,
          updateType: "lifetime"
        },
        {
          type: "pricing",
          devices: 5,
          price: 149.99,
          buttonText: "Lifetime for 5 Macs",
          updateType: "lifetime"
        }
      ]
    }
  ]
};

// 3. Subscription model with Monthly/Yearly using stable + variable pattern
export const subscriptionModel = {
  model: "subscription",
  defaultSelection: "yearly",
  animationBehavior: "minimal",
  stableCards: [
    {
      type: "free",
      features: [
        { title: "Basic Focus Tools", available: true, desc: "Core productivity features" },
        { title: "1 Workspace", available: true, desc: "Single focused environment" },
        { title: "Basic Analytics", available: true, desc: "Daily productivity insights" },
        { title: "Advanced Features", available: false, desc: "Premium features locked" }
      ]
    }
  ],
  toggleOptions: [
    {
      label: "Monthly",
      value: "monthly",
      variableCards: [
        {
          type: "pricing",
          devices: "unlimited",
          price: 9.99,
          buttonText: "Start Monthly Plan",
          updateType: "monthly",
          beforeButtonNote: "$9.99/month, billed monthly",
          features: [
            { title: "Everything in Free", desc: "All basic features included" },
            { title: "Unlimited Workspaces", desc: "Multiple focused environments" },
            { title: "Advanced Analytics", desc: "Weekly & monthly insights" },
            { title: "Priority Support", desc: "Email support within 24 hours" }
          ]
        }
      ]
    },
    {
      label: "Yearly",
      value: "yearly",
      variableCards: [
        {
          type: "pricing",
          devices: "unlimited",
          price: 99.99,
          originalPrice: 119.88,
          buttonText: "Start Yearly Plan (Save 17%)",
          isHighlighted: true,
          updateType: "yearly",
          beforeButtonNote: "$99.99/year, save 2 months",
          features: [
            { title: "Everything in Monthly", desc: "All monthly features" },
            { title: "Priority Support", desc: "Email support within 12 hours" },
            { title: "Beta Access", desc: "Early access to new features" },
            { title: "Advanced Integrations", desc: "Connect with more tools" }
          ]
        }
      ]
    }
  ]
};

// 4. Simple two-option config (Free + Pro)
export const simpleModel = {
  model: "simple",
  defaultSelection: "pro",
  animationBehavior: "full",
  toggleOptions: [
    {
      label: "Free",
      value: "free",
      cards: [{ type: "free" }]
    },
    {
      label: "Pro",
      value: "pro",
      cards: [
        {
          type: "pricing",
          devices: 5,
          price: 29.99,
          buttonText: "Get Pro License",
          isHighlighted: true,
          updateType: "lifetime"
        }
      ]
    }
  ]
};

// 5. Mixed example with custom features for traditional cards approach
export const mixedModel = {
  model: "mixed",
  defaultSelection: "pro",
  animationBehavior: "full",
  toggleOptions: [
    {
      label: "Free",
      value: "free",
      cards: [
        {
          type: "free",
          features: [
            { title: "Basic Focus Timer", available: true, desc: "25-minute Pomodoro sessions" },
            { title: "Simple Task Lists", available: true, desc: "Basic task management" },
            { title: "Premium Features", available: false, desc: "Advanced tools locked" }
          ]
        }
      ]
    },
    {
      label: "Pro",
      value: "pro",
      cards: [
        {
          type: "pricing",
          devices: 3,
          price: 39.99,
          buttonText: "Get Pro License",
          isHighlighted: true,
          updateType: "lifetime",
          features: [
            { title: "Advanced Focus Tools", desc: "Custom timers, focus modes, break reminders" },
            { title: "Multiple Workspaces", desc: "Organize projects and contexts separately" },
            { title: "Analytics & Insights", desc: "Detailed productivity tracking and reports" },
            { title: "Cloud Sync", desc: "Access your data across all devices" }
          ]
        }
      ]
    }
  ]
};

// Usage examples:
// <PricingCards3 /> // Current behavior (unchanged)
// <PricingCards3 pricingConfig={lifetimeModel} /> // Traditional lifetime model with custom features
// <PricingCards3 pricingConfig={subscriptionModel} /> // Stable + variable cards (your vision)
// <PricingCards3 pricingConfig={simpleModel} /> // Simple 2-card setup
// <PricingCards3 pricingConfig={mixedModel} /> // Mixed approach with custom features