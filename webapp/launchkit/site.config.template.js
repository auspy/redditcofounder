// Template for site configuration
// Import this in your site and customize as needed
// Example usage:
//   import { HomePage } from '@/screens/home';
//   import siteConfig from './site.config';

export default {
  // Basic Info
  siteName: 'Your Product Name',
  tagline: 'Your Product Tagline',
  url: 'https://yoursite.com',
  
  // Branding
  logo: {
    src: '/logo.svg',
    alt: 'Product Logo'
  },
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#0066cc'
  },
  
  // Features & Content
  features: {
    enableBlog: true,
    enableChangelog: true,
    enableFeatures: true,
    enableChallenges: false
  },
  
  // Payment & Licensing
  payment: {
    provider: 'dodo', // or 'stripe', 'lemonsqueezy'
    currency: 'USD',
    pricing: {
      monthly: 9.99,
      yearly: 99.99,
      lifetime: 299.99
    },
    
    // Advanced Pricing Configuration (optional)
    // Use this for custom pricing cards with features, stable+variable cards, etc.
    pricingConfig: null, 
    
    // Example subscription model with stable free card + variable paid card:
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
    //             { title: "Advanced Analytics", desc: "Weekly & monthly insights" }
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
    //             { title: "Beta Access", desc: "Early access to new features" }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
  },
  
  // Analytics & Tracking
  analytics: {
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST
    }
  },
  
  // SEO & Meta
  seo: {
    title: 'Your Product - Default Title',
    description: 'Your product description',
    keywords: ['keyword1', 'keyword2']
  },
  
  // Contact & Support
  contact: {
    email: 'support@yoursite.com',
    social: {
      twitter: '@yourhandle',
      github: 'yourgithub'
    }
  }
};