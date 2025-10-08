"use client";

import { useEffect, useRef } from "react";
import { ImageCard } from "./image-card";
import SectionHeading from "@/components/SectionHeading";

const defaultImages = [
  {
    imageUrl: "/reddit-results/example1.png",
    title: "SaaS Tool Launch Success",
    description: "Gained 15k+ views and 200+ signups in 48 hours by targeting r/entrepreneur and r/SaaS",
    stats: { upvotes: 342, comments: 67, views: "15.2k" }
  },
  {
    imageUrl: "/reddit-results/example2.png",
    title: "Product Hunt Feature",
    description: "Strategic Reddit post led to Product Hunt #1 launch with 1,200+ upvotes",
    stats: { upvotes: 1247, comments: 183, views: "32.1k" }
  },
  {
    imageUrl: "/reddit-results/example3.png",
    title: "Technical Discussion Viral",
    description: "Deep technical post in r/programming reached 50k+ developers",
    stats: { upvotes: 2156, comments: 312, views: "54.3k" }
  }
];

export default function ImageSection({
  images = defaultImages,
  title = "Proven Reddit Results",
  description = "See how our strategic Reddit campaigns drive real traffic and engagement",
  badge = null,
  headingSize = "h2",
  containerClassName = null,
  variant = "multicolumn", // "multicolumn" | "grid"
  cardVariant = "full", // "full" | "imageOnly"
  limit = null, // Limit number of images shown
  maxViews = null, // Filter by maximum totalViewsNumeric value
  viewMore = null, // { text: "View All Results", href: "/recent-works" }
  showHeading = true // Show/hide the internal SectionHeading
}) {
  const columnRefs = [useRef(null), useRef(null), useRef(null)];

  // Apply filters
  let filteredImages = images;

  // Filter by max views if specified
  if (maxViews) {
    filteredImages = filteredImages.filter(image => image.totalViewsNumeric <= maxViews);
  }

  // Apply limit if specified
  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  useEffect(() => {
    if (variant !== "multicolumn") return;

    const resizeObserver = new ResizeObserver(() => {
      let minHeight = Infinity;
      let minColumn = 0;

      columnRefs.forEach((ref, index) => {
        if (ref.current && ref.current.offsetHeight < minHeight) {
          minHeight = ref.current.offsetHeight;
          minColumn = index;
        }
      });

      displayImages.forEach((_, index) => {
        const column = index % 3;
        if (column !== minColumn) {
          const element = document.getElementById(`image-item-${index}`);
          if (element) {
            element.style.breakInside = "avoid";
            element.style.pageBreakInside = "avoid";
          }
        }
      });
    });

    columnRefs.forEach((ref) => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [variant, displayImages]);

  const renderMultiColumnVariant = () => {
    const leftColumnImages = displayImages.filter((_, index) => index % 2 === 0);
    const rightColumnImages = displayImages.filter((_, index) => index % 2 === 1);

    return (
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 space-y-6">
          {leftColumnImages.map((image, index) => (
            <div key={index * 2} className="w-full">
              <ImageCard {...image} variant={cardVariant} />
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-6">
          {rightColumnImages.map((image, index) => (
            <div key={index * 2 + 1} className="w-full">
              <ImageCard {...image} variant={cardVariant} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGridVariant = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {displayImages.map((image, index) => (
        <ImageCard key={index} {...image} variant={cardVariant} />
      ))}
    </div>
  );

  return (
    <section className={showHeading ? "wrapper w-full" : "w-full"}>
      <div className={showHeading ? " " : ""}>
        {showHeading && (
          <div className="flex items-center  w-full flex-col">
            <SectionHeading
              title={title}
              badge={badge}
              description={description}
              headingSize={headingSize}
              containerClassName={containerClassName}
            />
          </div>
        )}

        {variant === "multicolumn" ? renderMultiColumnVariant() : renderGridVariant()}

        {viewMore && (
          <div className="flex justify-center mt-12">
            <a
              href={viewMore.href}
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-primary hover:text-primary/80   transition-colors duration-200"
            >
              {viewMore.text || "View More"}
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}