import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the blog post you're looking for doesn't exist or may have been
          moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
