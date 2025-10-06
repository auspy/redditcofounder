import { BlogPostPage } from "@/screens/blog";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { getRelatedPosts } from "@/lib/blog-utils";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | SupaSidebar Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://supasidebar.com/blog/${post.slug}`,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.id);
  const relatedPosts = getRelatedPosts(params.id, 2);

  const config = {
    showHeader: true,
    showFooter: true,
    showBackLink: true,
    showAuthor: false, // Set to true if you have author data
    showCoverImage: true,
    showTags: true,
    showRelatedPosts: true,
    dateFormat: {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
    layout: {
      container: "container max-w-4xl",
      prose: "prose prose-lg dark:prose-invert prose-blue",
    },
    customComponents: {
      // Add any custom components here
      // beforeContent: <CustomAd />,
      // afterContent: <Newsletter />,
      // markdown: { /* custom markdown components */ }
    },
  };

  return (
    <BlogPostPage post={post} config={config} relatedPosts={relatedPosts} />
  );
}
