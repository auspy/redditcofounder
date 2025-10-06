# Feature Landing Page System

This document explains the feature landing page system implemented for the SupaSidebar website.

## Overview

The feature landing page system allows for two types of feature pages:

1. **Standard Feature Detail Pages**: Automatically generated for all features based on the feature data in `lib/features.js`.
2. **Enhanced Feature Landing Pages**: Curated marketing-focused pages for key features that need special attention.

The system uses a single dynamic route handler that checks for enhanced landing page data and renders the appropriate template.

## Implementation

### Data Structure

All feature data is centralized in `lib/features.js`, including enhanced landing page data. Each feature can optionally include a `landingPage` property with the following structure:

```javascript
{
  id: "feature-id",
  title: "Feature Title",
  // Standard fields...

  // Optional enhanced landing page data
  landingPage: {
    heroData: {
      title: "Feature Title",
      subtitle: "Feature Subtitle",
      description: "Feature description",
      videoSrc: "/path/to/video.mp4",
      keyPoints: ["Point 1", "Point 2", "Point 3"],
      primaryButton: { text: "CTA Text", href: "/link", icon: "IconName" },
      secondaryButton: { text: "Secondary CTA", href: "/link", icon: "IconName" }
    },
    contentSections: [
      {
        title: "Section Title",
        description: <React.Fragment>Content with paragraphs</React.Fragment>,
        media: { src: "/path/to/media", alt: "Alt text" },
        badge: "Badge Text",
        className: "Optional CSS class"
      },
      // Additional sections...
    ],
    testimonials: [
      {
        name: "User Name",
        role: "User Title",
        content: "Testimonial with ${highlighted text}"
      },
      // Additional testimonials...
    ],
    faqQuestions: [
      {
        question: "FAQ Question?",
        answer: "FAQ Answer"
      },
      // Additional FAQs...
    ],
    comparisonData: { // Optional
      features: [
        {
          name: "Feature Name",
          description: "Feature Description",
          focusMode: true, // Our value
          competitor1: true, // Competitor value
          competitor2: "Partial" // Can be boolean or string
        },
        // Additional comparison features...
      ],
      competitors: [
        {
          id: "competitor1",
          name: "Competitor Name",
          summary: "Brief summary"
        },
        // Additional competitors...
      ]
    }
  }
}
```

### Components

We've created several reusable components for building feature landing pages:

- `FeatureLandingTemplate`: The main wrapper component that provides the page structure
- `HeroSection`: Hero section component with title, description, video/image, and CTA buttons
- `FeatureContent`: Component for displaying feature details using `FeatureListItem` (same style as main landing page)
- `FeatureComparison`: Table comparing SupaSidebar features with competitors
- `FeatureTestimonials`: Grid of feature-specific testimonials
- `FeatureFAQ`: Accordion of frequently asked questions

### Routing

The routing system leverages Next.js' dynamic routing:

- A single dynamic route handler at `app/features/[featureId]/page.js` handles all feature pages
- The handler checks if the feature has `landingPage` data
- If found, it renders the enhanced landing page with all components
- If not, it renders the standard feature detail page

### Feature Cards

Feature cards in the feature grid are enhanced to:
- Detect features with landing page data
- Display a "Featured" badge for these enhanced features
- Customize the call-to-action text based on page type

## Current Enhanced Feature Pages

We've implemented enhanced landing pages for these key features:

1. **Pomodoro Timer**
   - Includes feature comparison with competitors
   - Shows the science behind the Pomodoro technique

2. **Floating Timer**
   - Highlights the unique always-visible design
   - Explains how it helps prevent time blindness

3. **Task Management**
   - Focuses on the "one task at a time" approach
   - Shows how it reduces overwhelm and task switching

## Adding a New Enhanced Feature Page

To add a new enhanced feature page:

1. Add a `landingPage` object to the feature in `lib/features.js`
2. Include all required data: heroData, contentSections, testimonials, and faqQuestions
3. Optionally add comparisonData if needed

No additional files or routes are needed - the dynamic route handler will automatically detect and use the enhanced landing page data.

## Benefits of This Approach

- **Single Source of Truth**: All feature data is in one place
- **DRY Code**: No duplication across multiple feature pages
- **Consistency**: All pages follow the same structure and style
- **Maintainability**: Easy to update or add new enhanced pages
- **Performance**: Reduced bundle size with fewer page components
