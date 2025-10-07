import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export default function HowItWorksSection({
  title = "How It Works",
  subtitle = null,
  badge = null,
  steps = [],
  className = "",
  stepClassName = "",
  variant = "simple", // "simple" or "cards"
}) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section id="how-it-works" className={cn("wrapper", className)}>
      <SectionHeading
        title={title}
        badge={badge}
        description={subtitle}
        headingSize="h2"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          if (variant === "cards") {
            return (
              <div
                key={index}
                className={cn(
                  "bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-md transition-shadow duration-200",
                  stepClassName
                )}
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.step || index + 1}
                </div>

                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-text leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            );
          }

          // Simple variant with beautiful numbers
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center space-y-6",
                stepClassName
              )}
            >
              {/* Beautiful Step Number */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span className="text-2xl font-bold">{step.step || index + 1}</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl -z-10 blur-sm"></div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-text leading-tight">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base max-w-sm">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}