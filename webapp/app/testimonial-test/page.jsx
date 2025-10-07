"use client";

import { useState } from "react";
import TestimonialSection from "@/components/testimonials/TestimonialSectionWithVariants";

export default function TestimonialTestPage() {
  const [variant, setVariant] = useState("multicolumn");

  const testBenefits = [
    "Improved focus and productivity",
    "Better time management",
    "Reduced distractions",
    "Enhanced workflow efficiency"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Testimonial Variants Test</h1>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setVariant("multicolumn")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                variant === "multicolumn"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Multi-Column
            </button>
            <button
              onClick={() => setVariant("carousel")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                variant === "carousel"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Carousel
            </button>
          </div>

          <p className="text-gray-600 mb-2">Current variant: <strong>{variant}</strong></p>
          <p className="text-sm text-gray-500">Switch between variants to see the different layouts</p>
        </div>

        <TestimonialSection
          variant={variant}
          title="Test Testimonials"
          description="Testing the variant system for testimonial layouts"
          benefits={testBenefits}
        />
      </div>
    </div>
  );
}