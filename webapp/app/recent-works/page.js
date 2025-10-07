import ServerHeader from "@/components/ServerHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import ImageSection from "@/components/images/ImageSection";
import { realRedditResultsData } from "@/components/images/reddit-results-data";

export const metadata = {
  title: "Recent Reddit Campaigns - Reddit CoFounder",
  description: "See all our recent Reddit marketing campaigns and the results we've achieved for our clients. Real screenshots, real metrics, real growth.",
};

export default function RecentWorksPage() {
  return (
    <>
      <ServerHeader />

      <PageHeader
        badge="Recent Works"
        title={
          <>
            Recent Reddit <span className="text-primary">Campaigns</span>
          </>
        }
        description="Real results from our strategic Reddit marketing campaigns. Every screenshot is authentic, every metric is verified, every success story is genuine."
        headingSize="text-4xl md:text-5xl w-full"
        containerClassName="bg-gray-50 w-full"
      />

      <div className=" py-10 wrapper  pb-16 w-full">
        <ImageSection
          images={realRedditResultsData}
          variant="multicolumn"
          cardVariant="imageOnly"
          maxViews={250000}
          containerClassName="bg-transparent"
          showHeading={false}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Similar Results?
              </h2>
              <p className="text-gray-600 mb-6">
                These aren't cherry-picked results. This is what strategic Reddit marketing looks like
                when done right. Let's create your success story next.
              </p>
              <a
                href="/#pricing"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
              >
                Start Your Campaign
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
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}