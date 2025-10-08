"use client";

import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

export default function BeforeAfterSection({
  title = "The Reality of DIY Reddit Marketing",
  subtitle = "Stop struggling with Reddit. Let us handle the traffic while you build.",
  badgeText = "Before vs After",
}) {
  const beforeItems = [
    {
      text: "Getting banned from subreddits for obvious self-promotion",
      icon: "❌"
    },
    {
      text: "Posts getting 2-3 upvotes and disappearing into the void",
      icon: "❌"
    },
    {
      text: "Spending hours crafting posts that go nowhere",
      icon: "❌"
    },
    {
      text: "No clue which subreddits actually work for your niche",
      icon: "❌"
    },
    {
      text: "Zero traffic despite \"following all the rules\"",
      icon: "❌"
    }
  ];

  const afterItems = [
    {
      text: "Strategic posting that follows community rules naturally",
      icon: "✅"
    },
    {
      text: "50k+ guaranteed organic views in 7 days",
      icon: "✅"
    },
    {
      text: "Unlimited expert posts till you reach your goals",
      icon: "✅"
    },
    {
      text: "Competitor research reveals what actually works",
      icon: "✅"
    },
    {
      text: "Consistent traffic while you focus on building",
      icon: "✅"
    }
  ];

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            {badgeText}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BEFORE Column */}
          <div className="relative">
            <div className="bg-red-50 border-2 border-red-100 rounded-2xl md:p-8 p-4 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-lg">
                  BEFORE
                </div>
                <div className="ml-3 text-red-600 font-medium">
                  DIY Reddit Marketing
                </div>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg border border-red-200"
                  >
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 font-medium text-sm">
                  Result: Months of effort with little to no traffic
                </p>
              </div>
            </div>
          </div>

          {/* AFTER Column */}
          <div className="relative">
            <div className="bg-green-50 border-2 border-green-100 rounded-2xl md:p-8 p-4  h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-lg">
                  AFTER
                </div>
                <div className="ml-3 text-green-600 font-medium">
                  Reddit CoFounder
                </div>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg border border-green-200"
                  >
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                <p className="text-green-800 font-medium text-sm">
                  Result: Guaranteed traffic while you focus on your product
                </p>
              </div>
            </div>

            {/* Success Badge */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              50k+ Views Guaranteed
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to stop struggling and start getting results?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start the Quick Test
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}