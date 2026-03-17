import Hero from "@/components/page/blog/Hero";
import BlogListing from "@/components/page/blog/BlogListing";
import RecentBlogs from "@/components/page/blog/RecentBlogs";
import { client } from "@/sanity/client";
import {
    BLOG_LISTING_QUERY,
    BLOG_CATEGORIES_QUERY,
} from "@/sanity/queries/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Tech insights, SEO guides, AI trends, and web development tips from the Tecorbitron team. Practical knowledge for business owners and developers.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "The Knowledge Nexus — Tecorbitron Blog",
        description:
            "Practical tech tips, SEO guides, and industry insights from the Tecorbitron team.",
        url: "https://www.tecorbitron.com/blog",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default async function Blog() {
    const [posts, categories] = await Promise.all([
        client.fetch(BLOG_LISTING_QUERY),
        client.fetch(BLOG_CATEGORIES_QUERY),
    ]);

    return (
        <main>
            <Hero />
            <RecentBlogs />
            <BlogListing posts={posts} categories={categories} />
        </main>
    );
}
