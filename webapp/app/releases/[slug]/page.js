import { getAllReleaseSlugs, getReleaseBySlug } from "@/lib/changelog";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import ReleaseDetail from "@/components/ReleaseDetail";
import { notFound } from "next/navigation";

// Generate static params for all release slugs
export async function generateStaticParams() {
  const slugs = getAllReleaseSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const release = getReleaseBySlug(slug);

  if (!release) {
    return {
      title: "SupaSidebar - Release Not Found",
      description: "The requested release could not be found.",
    };
  }

  return {
    title: release.seoTitle,
    description: release.seoDescription,
    openGraph: {
      title: release.seoTitle,
      description: release.seoDescription,
      type: "article",
      publishedTime: release.date,
      modifiedTime: release.date,
      authors: ["SupaSidebar Team"],
      tags: [
        "SupaSidebar",
        "Productivity",
        "Release Notes",
        `v${release.version}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: release.seoTitle,
      description: release.seoDescription,
    },
    alternates: {
      canonical: `https://supasidebar.com/releases/${slug}`,
    },
  };
}

export default function ReleasePage({ params }) {
  const { slug } = params;
  const release = getReleaseBySlug(slug);

  // If the release does not exist, return 404
  if (!release) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-3 text-center">
              Release Notes
            </h1>
            <p className="text-gray-600 text-center">
              Detailed information about SupaSidebar releases and updates
            </p>
          </div>
        </div>

        <ReleaseDetail
          version={release.version}
          content={release.content}
          date={release.date}
          title={release.title}
          slug={release.slug}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
