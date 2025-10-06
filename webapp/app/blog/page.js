import { BlogListPage } from "@/screens/blog";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "SupaSidebar Blog | Productivity Tips & Updates",
  description:
    "Get the latest productivity tips, focus techniques, and SupaSidebar app updates.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const config = {
    title: "SupaSidebar Blog",
    description:
      "Welcome to our blog. Read about development of SupaSidebar, improving productivity, focus and more.",
    showHeader: true,
    showFooter: true,
    layout: {
      grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      gap: "gap-10",
      container: "container contain max-w-6xl",
    },
    cardStyle: "default", // or "minimal"
    dateFormat: {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  };

  return <BlogListPage posts={posts} config={config} metadata={metadata} />;
}
