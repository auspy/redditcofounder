import PricingCards3 from "@/components/pricing/PricingCards3";

export default function PricingSection({ 
  pricingConfig = null, 
  className = "",
  ...otherProps 
}) {
  return (
    <section
      id="pricing"
      className="bg-gray-50 w-full border border-t-gray-100 border-b-gray-100"
    >
      <div className="container  contain max-w-6xl px-4 py-16 md:py-24">
        <PricingCards3 
          className={className} 
          pricingConfig={pricingConfig}
          {...otherProps}
        />
      </div>
    </section>
  );
}
