"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCardOld } from "./TestimonialCardOld";

export function TestimonialCarouselOld({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("right");
  const [isChanging, setIsChanging] = useState(false);

  const goToPrevious = () => {
    if (isChanging) return;

    setAnimationDirection("left");
    setIsChanging(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
      );
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  const goToNext = () => {
    if (isChanging) return;

    setAnimationDirection("right");
    setIsChanging(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  const getAnimationClass = () => {
    if (!isChanging) return "";

    const baseAnimation = "transition-all duration-300 ease-in-out";
    const slideOutClasses = {
      left: "translate-x-[-30px] opacity-0",
      right: "translate-x-[30px] opacity-0",
    };

    return `${baseAnimation} ${slideOutClasses[animationDirection]}`;
  };

  return (
    <div className="relative w-full hidden md:block max-w-4xl mx-auto">
      <div className="relative px-24 min-h-[280px] flex items-center">
        <div className="w-full">
          <div className={`${getAnimationClass()}`}>
            <TestimonialCardOld {...testimonials[currentIndex]} />
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        disabled={isChanging}
        className="absolute left-4 top-[140px] w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:hover:scale-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
      </button>

      <button
        onClick={goToNext}
        disabled={isChanging}
        className="absolute right-4 top-[140px] w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:hover:scale-100"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
      </button>
    </div>
  );
}