"use client";

import { TestimonialCarouselOld } from "./TestimonialCarouselOld";
import TestimonialBenefits from "./TestimonialBenefits";
import { TestimonialCardOld } from "./TestimonialCardOld";
import { TestimonialCard } from "./testimonial-card";
import { useEffect, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import TestimonialHero from "./TestimonialHero";

const basicTestimonials = [
  {
    name: "Frank Mattes",
    role: "Thought Leader and Author",
    content:
      "Focusmo is my ${go-to tool} for staying focused ;-). When I need to dive into ${deep work} like research, brainstorming, or creative tasks, I start by making a simple commitment to myself: 'I'll dedicate an hour to this.'",
    imageUrl: "/testimonials/franc.png",
  },
  {
    name: "D Migoo",
    imageUrl: "/testimonials/dmigoo.png",
    content:
      "I've been impressed by the ${efficient work and focus features} provided by Focusmo. After using it, I've felt the great help it has provided in ${improving work efficiency} and ${managing time}. It's made such a difference in my daily productivity.",
  },
  {
    name: "Garratt Grenier",
    role: "Senior Area Manager Construction Products",
    content:
      "As an avid app user who has explored thousands of applications, I often download multiple apps within a category to thoroughly test and identify the best options. Among all the focus-oriented apps I've tried, this one stands out as ${my favorite}. The ${developer is highly responsive}, actively engaging with users and implementing several suggestions to enhance the app's functionality. This is an essential tool for anyone aiming to boost their productivity.",
    imageUrl: "/testimonials/garrat.png",
  },
  {
    name: "Aiden Thompson",
    role: "Software Engineer",
    content:
      "I've been using Focusmo everyday now. The ${blue waves in banner} really helps me visualize time especially when I am time blind, really helps the ADHD brain. I have it ${always visible} so I get reminded constantly of my current task.",
  },
  {
    name: "Faye Campbell",
    role: "motionapp.com",
    content:
      "I've only been using it for a couple of days, but it's just handy to have an ${accountability buddy} to remind me: just do one thing, finish this one thing, do what you said you were going to do",
    imageUrl: "/testimonials/faye.png",
  },
  {
    name: "The 9th",
    role: "Web Developer",
    content:
      "The features you've been adding especially the status bar icon have been really great. One thing that gets me to use an app more is ${how frictionless the experience is}  and with Focusmo, I don't even have to remember a shortcut, just hold Fn and drag that is a game-changer for that.",
    imageUrl: "/testimonials/the9th.jpg",
  },
  {
    name: "Ishan Mandhan",
    role: "Software Engineer",
    content:
      "Was looking for an app like this for a long time. It's ${simple and extremely effective} in keeping me on track and not getting distracted by 20 different tasks. I've been ${a lot more productive} since using it. And as a bonus, the creator is very responsive and actively working on improving the app.",
    imageUrl: "/testimonials/ishan.png",
  },
  {
    name: "Will K",
    role: "Web Engineer/Architect",
    content:
      "I've only been using Focusmo for about a week, but it's allowed me to organize tasks and ${manage my time more effectively} while also keeping ${health and mental breaks} in mind. The timer and break reminders have been extremely effective. I'd love to see features like task tagging with colors, configurable visuals, and ways to change timer states more easily.",
    imageUrl: "/testimonials/will.png",
  },
  {
    name: "Aiden Thompson",
    role: "Software Engineer",
    content:
      "I've been using Focusmo everyday now. The ${blue waves in banner} really helps me visualize time especially when I am time blind, really helps the ADHD brain. I have it ${always visible} so I get reminded constantly of my current task.",
  },
  {
    name: "Sophia Patel",
    role: "Marketing Director",
    content:
      "Y'all need to try this thing called Focusmo. It's ${crazy how simple} it is but ${how much it helps me focus}.",
  },
  {
    name: "Nick Wolf",
    role: "Australia",
    imageUrl: "/testimonials/nick.png",
    content:
      "As an eternal task switcher, Focusmo is the first time I've been able to assign myself a task and then *actually stick to it*",
  },
];

function TestimonialSection({
  testimonials = basicTestimonials,
  title = "Why people love Focusmo",
  description = "Hundreds of people use Focusmo every day and say it makes a real difference in their productivity",
  benefits,
  variant = "multicolumn" // "multicolumn" | "carousel"
}) {
  const columnRefs = [useRef(null), useRef(null), useRef(null)];

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

      testimonials.forEach((_, index) => {
        const column = index % 3;
        if (column !== minColumn) {
          const element = document.getElementById(`testimonial-${index}`);
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
  }, [variant, testimonials]);

  const renderMultiColumnVariant = () => (
    <>
      <TestimonialBenefits benefits={benefits} />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id={`testimonial-${index}`}
            ref={columnRefs[index % 3]}
            className="mb-6 break-inside-avoid"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </>
  );

  const renderCarouselVariant = () => (
    <>
      <TestimonialBenefits benefits={benefits} />
      <div className="columns-1 md:hidden gap-3 md:gap-6">
        {testimonials.map(
          (testimonial, index) =>
            index <= 3 && (
              <div
                key={index}
                id={`testimonial-${index}`}
                className="mb-6 break-inside-avoid"
              >
                <TestimonialCardOld {...testimonial} />
              </div>
            ),
        )}
      </div>
      <TestimonialCarouselOld testimonials={testimonials} />
    </>
  );

  return (
    <section id="reviews" className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center flex-col">
          <SectionHeading
            title={title}
            headingSize="h2"
            containerClassName="!mb-2 max-w-3xl"
            description={description}
          />
        </div>

        {variant === "multicolumn" ? renderMultiColumnVariant() : renderCarouselVariant()}
      </div>
    </section>
  );
}

export default TestimonialSection;