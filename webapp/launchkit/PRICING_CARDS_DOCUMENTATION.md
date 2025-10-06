# PricingCards3 Complete Documentation

## Overview

PricingCards3 is a highly configurable React component for displaying pricing plans. It supports both subscription and lifetime pricing models with extensive customization options for headers, banners, footers, and additional components.

## Component Props

### Main Props
```js
<PricingCards3 
  className=""           // Optional: Additional CSS classes
  locale="default"       // Optional: Locale for pricing (default, in)
  deviceId={null}        // Optional: Device ID for tracking
  fromApp={false}        // Optional: Whether called from app
  pricingConfig={null}   // Optional: Configuration object (see below)
/>
```

## Configuration Structure

### Root Configuration Object

```js
pricingConfig = {
  // Required
  model: "subscription" | "lifetime" | "custom",
  toggleOptions: [...],
  
  // Optional with defaults
  defaultSelection: "string",        // Default: first toggle option value
  animationBehavior: "full" | "minimal" | "none", // Default: "full"
  stableCards: [...],               // Default: null
  
  // Customization sections (all optional)
  header: {...},
  notices: {...},
  footer: {...},
  additionalComponents: {...}
}
```

---

## 1. Header Configuration

Customize the pricing section header (title, description, trial text).

### Properties
```js
header: {
  title: "string",                    // Default: "Honest and affordable pricing"
  description: "string" | JSX,        // Default: Built-in description with {trialDays} support
  showTrialDays: boolean              // Default: true
}
```

### Special Features
- **{trialDays} placeholder**: Use `{trialDays}` in description strings to automatically insert the trial days constant
- **JSX support**: Description can be JSX for complex formatting

### Examples
```js
// Simple title change
header: {
  title: "Choose Your Plan"
}

// Custom description with trialDays
header: {
  title: "Pricing That Makes Sense",
  description: "Start free, upgrade when ready. All plans include a {trialDays}-day trial.",
  showTrialDays: true
}

// JSX description (no trialDays support)
header: {
  description: (
    <>
      <strong>Simple pricing</strong> for everyone. 
      <br />Start today with our free tier.
    </>
  )
}
```

---

## 2. Notice/Banner Configuration

Display promotional banners and special notices.

### Properties
```js
notices: {
  betaPricing: {
    show: boolean,                    // Default: BETA_DISCOUNT.IS_ACTIVE
    text: "string"                    // Default: "Special beta pricing: 50% off during our beta phase."
  },
  customBanner: {
    show: boolean,                    // Default: false
    title: "string",                  // Default: "Limited Time Offer"
    description: "string",            // Default: "Custom promotional text here"
    style: "info" | "warning" | "success" // Default: "info"
  }
}
```

### Banner Styles
- **info**: Blue color scheme (default)
- **warning**: Yellow color scheme
- **success**: Green color scheme

### Examples
```js
// Show only custom banner
notices: {
  betaPricing: {
    show: false
  },
  customBanner: {
    show: true,
    title: "🎉 Launch Week",
    description: "Get 50% off all plans this week only!",
    style: "success"
  }
}

// Custom beta message
notices: {
  betaPricing: {
    show: true,
    text: "Early access pricing: Save 40% as a beta user!"
  }
}
```

---

## 3. Footer Configuration

Customize legal text and contact information.

### Properties
```js
footer: {
  legalText: "string",              // Default: "Prices in USD. Taxes may apply outside US. Requires macOS 13 or later."
  contactText: "string",            // Default: "Have questions or need more seats?"
  contactLink: "string",            // Default: "/contact"
  contactLinkText: "string"         // Default: "Contact us"
}
```

### Examples
```js
// Custom legal text and contact
footer: {
  legalText: "All prices in EUR. VAT included. Requires iOS 15+.",
  contactText: "Need help choosing a plan?",
  contactLinkText: "Talk to sales"
}

// Different contact link
footer: {
  contactLink: "/support",
  contactLinkText: "Get support"
}
```

---

## 4. Additional Components

Control visibility and content of extra components (money-back guarantee, discounts).

### Properties
```js
additionalComponents: {
  moneyBackGuarantee: {
    show: boolean,                    // Default: true
    days: number,                     // Default: moneyBackDays constant
    customText: "string" | JSX       // Default: null (uses built-in text)
  },
  studentDiscount: {
    show: boolean,                    // Default: false
    percentage: number,               // Default: 30
    customText: "string" | JSX       // Default: null (uses built-in text)
  },
  lowIncomeDiscount: {
    show: boolean,                    // Default: false
    customText: "string" | JSX       // Default: null (uses built-in text)
  }
}
```

### Examples
```js
// Show all components with customization
additionalComponents: {
  moneyBackGuarantee: {
    show: true,
    days: 60,
    customText: "Try risk-free for 60 days - full refund guaranteed!"
  },
  studentDiscount: {
    show: true,
    percentage: 50,
    customText: "Students save 50%! Email us from your .edu address."
  },
  lowIncomeDiscount: {
    show: true
  }
}
```

---

## 5. Card Configuration

Define the actual pricing cards and plans.

### Card Types
- **"pricing"**: Standard pricing card with price, features, button
- **"free"**: Special free plan card with expanded layout

### Pricing Card Properties
```js
{
  type: "pricing",
  
  // Display properties
  title: "string",                    // Custom title (optional)
  devices: number | "unlimited",     // Device count (optional, used for default title)
  price: number,                      // Main price
  originalPrice: number,              // Crossed-out price (optional)
  currency: "string",                 // Default: "$"
  
  // Billing properties
  billingCycle: "free" | "monthly" | "yearly" | "lifetime" | "one_year",
  // Note: yearlyDiscount uses price as the base monthly price for calculations
  yearlyDiscount: number,             // Decimal (0.33 = 33% off)
  
  // UI properties
  highlightedText: "string",          // Badge text ("Best Value", "Most Popular")
  buttonText: "string",               // CTA button text
  beforeButtonNote: "string",         // Text below button
  
  // Features
  features: [
    {
      title: "string",
      desc: "string",                 // Optional description
      available: boolean,             // For free cards (checkmark vs X)
      hasTooltip: boolean            // Show tooltip (pricing cards only)
    }
  ]
}
```

### Free Card Properties
```js
{
  type: "free",
  features: [...]                     // Uses expanded free plan layout
}
```

---

## 6. Toggle Options

Define pricing plan toggles (Monthly/Yearly, Free/Pro, etc.).

### Traditional Approach
```js
toggleOptions: [
  {
    label: "Monthly",                 // Button text
    value: "monthly",                 // Unique identifier
    cards: [...]                     // All cards for this option
  }
]
```

### Stable + Variable Approach (Recommended)
```js
stableCards: [...],                  // Cards that never change
toggleOptions: [
  {
    label: "Monthly", 
    value: "monthly",
    variableCards: [...]             // Only cards that change
  }
]
```

---

## Complete Examples

### Minimal Configuration
```js
pricingConfig: {
  model: "lifetime",
  toggleOptions: [{
    label: "Pro",
    cards: [{
      type: "pricing",
      price: 99.99,
      billingCycle: "lifetime",
      highlightedText: "One-time payment"
    }]
  }]
}
```

### Subscription Model with Full Customization
```js
pricingConfig: {
  model: "subscription",
  defaultSelection: "yearly",
  
  header: {
    title: "Choose Your Plan",
    description: "Start with {trialDays} days free, no credit card required."
  },
  
  notices: {
    customBanner: {
      show: true,
      title: "Limited Time",
      description: "50% off your first year!",
      style: "success"
    }
  },
  
  footer: {
    legalText: "Prices in USD. Cancel anytime.",
    contactText: "Questions?",
    contactLinkText: "Get help"
  },
  
  additionalComponents: {
    moneyBackGuarantee: { show: true, days: 30 },
    studentDiscount: { show: true, percentage: 40 }
  },
  
  stableCards: [{
    type: "pricing",
    title: "Free",
    price: 0,
    billingCycle: "free"
  }],
  
  toggleOptions: [
    {
      label: "Monthly",
      variableCards: [{
        type: "pricing",
        title: "Pro Monthly", 
        billingCycle: "monthly",
        price: 19.99,
        highlightedText: "Flexible"
      }]
    },
    {
      label: "Yearly",
      variableCards: [{
        type: "pricing",
        title: "Pro Yearly",
        billingCycle: "yearly", 
        price: 19.99,
        yearlyDiscount: 0.33,
        highlightedText: "Best Value"
      }]
    }
  ]
}
```

### Lifetime Model
```js
pricingConfig: {
  model: "lifetime",
  
  header: {
    title: "Own It Forever"
  },
  
  notices: {
    betaPricing: { show: false }
  },
  
  additionalComponents: {
    moneyBackGuarantee: { show: true, days: 60 },
    studentDiscount: { show: true }
  },
  
  toggleOptions: [
    {
      label: "One Year Updates",
      value: "one_year", 
      cards: [{
        type: "pricing",
        title: "Pro (1 Year)",
        price: 49.99,
        billingCycle: "one_year",
        devices: 5
      }]
    },
    {
      label: "Lifetime Updates",
      value: "lifetime",
      cards: [{
        type: "pricing", 
        title: "Pro (Lifetime)",
        price: 99.99,
        originalPrice: 149.99,
        billingCycle: "lifetime",
        devices: 5,
        highlightedText: "Best Value"
      }]
    }
  ]
}
```

---

## Default Values Reference

| Property | Default Value | Required |
|----------|---------------|----------|
| `model` | No default | ✅ Yes |
| `toggleOptions` | No default | ✅ Yes |
| `defaultSelection` | First toggle option value | ❌ No |
| `animationBehavior` | `"full"` | ❌ No |
| `stableCards` | `null` | ❌ No |
| `header.title` | `"Honest and affordable pricing"` | ❌ No |
| `header.description` | Built-in description | ❌ No |
| `header.showTrialDays` | `true` | ❌ No |
| `notices.betaPricing.show` | `BETA_DISCOUNT.IS_ACTIVE` | ❌ No |
| `notices.betaPricing.text` | Built-in beta text | ❌ No |
| `notices.customBanner.show` | `false` | ❌ No |
| `notices.customBanner.style` | `"info"` | ❌ No |
| `footer.legalText` | Built-in legal text | ❌ No |
| `footer.contactText` | `"Have questions or need more seats?"` | ❌ No |
| `footer.contactLink` | `"/contact"` | ❌ No |
| `footer.contactLinkText` | `"Contact us"` | ❌ No |
| `additionalComponents.moneyBackGuarantee.show` | `true` | ❌ No |
| `additionalComponents.moneyBackGuarantee.days` | `moneyBackDays` constant | ❌ No |
| `additionalComponents.studentDiscount.show` | `false` | ❌ No |
| `additionalComponents.studentDiscount.percentage` | `30` | ❌ No |
| `additionalComponents.lowIncomeDiscount.show` | `false` | ❌ No |

---

## Integration

### In Homepage Configuration
```js
// homepage.config.js
sections: {
  pricing: {
    enabled: true,
    props: {
      pricingConfig: {
        // Your configuration here
      }
    }
  }
}
```

### Direct Component Usage
```jsx
import PricingCards3 from '@/components/pricing/PricingCards3';

<PricingCards3 pricingConfig={yourConfig} />
```

### Site-wide Configuration
```js
// site.config.js
export default {
  payment: {
    pricingConfig: {
      // Global configuration
    }
  }
}
```

Priority order: Direct props > Homepage config > Site config > Component defaults