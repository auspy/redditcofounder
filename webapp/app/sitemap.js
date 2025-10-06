import { getReleaseData } from "@/lib/changelog";

export default async function sitemap() {
  // Base URL of the site
  const baseUrl = "https://supasidebar.com";

  // Get all release data
  const releases = getReleaseData();

  // Create release URLs for the sitemap
  const releaseUrls = releases.map((release) => ({
    url: `${baseUrl}/releases/${release.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Define static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-to-use`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Combine all routes
  return [...staticRoutes, ...releaseUrls];
}
