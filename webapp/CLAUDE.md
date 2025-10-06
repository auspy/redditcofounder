# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Reddit CoFounder** is a productized service that helps startup founders and SaaS builders get guaranteed traffic from Reddit through a "done-for-you Reddit growth system." The service handles Reddit posting, engagement, and traffic generation while clients focus on their products.

**Note**: This codebase was originally from SupaSidebar and is being repurposed as the foundation for Reddit CoFounder. Some legacy references may still exist and should be updated as development progresses.

## Development Commands

- **Development server**: `pnpm dev` (starts on localhost:3000)
- **Build**: `pnpm build`
- **Production server**: `pnpm start`
- **Linting**: `pnpm lint`
- **Testing**: `pnpm test` (run once), `pnpm test:watch` (watch mode), `pnpm test:coverage` (with coverage)

## Architecture Overview

This is a Next.js 15 application with App Router built on the LaunchKit framework for rapid SaaS development.

### Core Structure
- **Next.js App Router** (`/app` directory) - handles routing, layout, and pages
- **LaunchKit Framework** (`/launchkit` directory) - reusable SaaS component library and utilities
- **TypeScript path mapping** - `@/*` maps to `./launchkit/*` for imports

### Key Architectural Components

**LaunchKit Integration**:
- The project uses LaunchKit as a foundational framework for SaaS functionality
- LaunchKit provides components, API adapters, hooks, and utilities
- Path alias `@/*` points to `launchkit/` directory (see tsconfig.json:20-24)

**Authentication & Payments**:
- **Clerk** for user authentication and management
- **DodoPayments** for subscription and payment processing
- Supports purchasing power parity (PPP) pricing for different regions (India implemented)

**Service Architecture for Reddit CoFounder**:
- Landing page for service offering ($350 Quick Test Campaign, $1,500/month retainer)
- Payment processing for one-time campaigns and monthly subscriptions
- Client dashboard (to be built) for campaign tracking and reporting
- Admin interface (to be built) for service delivery management

**Key Directories**:
- `/app` - Next.js pages and API routes
- `/launchkit` - Reusable framework components and utilities
- `/app/api` - Backend API endpoints (will need Reddit-specific endpoints)
- `/launchkit/components` - UI component library
- `/launchkit/lib` - Utility functions and configurations

**Monitoring & Analytics**:
- Sentry for error tracking (currently commented out in next.config.js)
- PostHog for analytics with custom rewrites
- Vercel Analytics and Speed Insights

### Reddit CoFounder Specific Requirements

**Core Service Offerings**:
1. **Reddit Quick Test Campaign** - $350 (intro price)
   - 3 competitor Reddit strategy breakdown
   - 5 tailored Reddit posts in top-fit communities
   - 7 days of engagement and comment handling
   - Analytics report with 50k+ impressions guarantee

2. **Reddit Growth Retainer** - $1,500/month
   - 8-12 posts monthly
   - Ongoing competitor monitoring
   - Daily engagement management

**Future Development Needs**:
- Client onboarding flow and questionnaire
- Campaign management dashboard
- Reddit analytics integration
- Automated reporting system
- Client communication portal

### Configuration Notes

**Environment Variables**:
- Payment product IDs need updating for Reddit CoFounder services
- DodoPayments integration for $350 campaigns and $1,500 retainers
- Reddit API credentials (when implemented)

**Build Configuration**:
- Standalone output mode for deployment
- Console removal in production (except errors)
- PostHog proxy setup via rewrites
- CORS headers configured for API routes

### Testing Setup
- Jest with React Testing Library
- Custom setup file at `jest.setup.js`
- Coverage reporting available

### Legacy Notes
- Current content and branding references SupaSidebar
- Metadata, titles, and descriptions need updating for Reddit CoFounder
- Pricing structure needs updating from software licenses to service packages
- PPP pricing may not be relevant for this service model

When working with this codebase, remember this is being transformed from a software product to a service business. Focus on service delivery workflows, client management, and campaign tracking rather than software downloads and licensing.