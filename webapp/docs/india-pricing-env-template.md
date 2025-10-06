# India Pricing Environment Variables

To enable the India-specific pricing with purchasing power parity, you need to add the following environment variables to your `.env.local` file:

```
# India-specific product IDs for DodoPayments

# One year of updates - India pricing
IN_ONE_YEAR_1_DEVICES_PRODUCT_ID=your_product_id_here
IN_ONE_YEAR_2_DEVICES_PRODUCT_ID=your_product_id_here
IN_ONE_YEAR_5_DEVICES_PRODUCT_ID=your_product_id_here
IN_ONE_YEAR_10_DEVICES_PRODUCT_ID=your_product_id_here

# Lifetime updates - India pricing
IN_LIFETIME_1_DEVICES_PRODUCT_ID=your_product_id_here
IN_LIFETIME_2_DEVICES_PRODUCT_ID=your_product_id_here
IN_LIFETIME_5_DEVICES_PRODUCT_ID=your_product_id_here
IN_LIFETIME_10_DEVICES_PRODUCT_ID=your_product_id_here
```

You'll need to create these products in your DodoPayments dashboard with the appropriate INR prices, then replace `your_product_id_here` with the actual product IDs.

## Implementation Details

The purchasing power parity feature is implemented by:

1. Using `/in/pricing` route for Indian users
2. Displaying prices in INR with appropriate PPP-adjusted amounts
3. Using India-specific product IDs in DodoPayments

The system will automatically detect the locale from the URL path and display the appropriate pricing. 