This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Purchasing Power Parity (PPP) Pricing

The application supports location-based pricing with purchasing power parity for different regions. Currently, we have implemented PPP for:

- India (INR): Available at `/in/pricing`

### How it works

1. The middleware automatically detects users' country based on the Geolocation API and redirects them to the appropriate pricing page.
2. Each locale has its own pricing structure defined in the `PricingCards3` component.
3. The payment system uses different product IDs based on the locale.

### Adding support for additional countries

To add PPP pricing for another country:

1. Add country-specific pricing constants in `PricingCards3.jsx`
2. Create a new route for the country (e.g., `/br/pricing` for Brazil)
3. Add the country code to the `PPP_COUNTRIES` object in `middleware.js`
4. Create the DodoPayments products with appropriate pricing
5. Add the new product IDs to the environment variables

See `docs/india-pricing-env-template.md` for more details on required environment variables.
