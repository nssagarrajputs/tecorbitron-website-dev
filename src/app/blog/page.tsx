import BlogListing from "@/app/blog/_components/BlogListing";
import RecentBlogs from "@/app/blog/_components/RecentBlogs";
import { client } from "@/sanity/client";
import {
    BLOG_LISTING_QUERY,
    BLOG_CATEGORIES_QUERY,
} from "@/sanity/queries/blog";

import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Tech insights, SEO guides, AI trends, and web development tips from the Tecorbitron team. Practical knowledge for business owners and developers.",
    keywords: [
        "tech blog India",
        "web development tips",
        "SEO guides",
        "AI trends",
        "software development insights",
        "Tecorbitron blog",
    ],
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
            <PageHero
                eyebrow="INSIGHTS & EXPERTISE"
                title="The Knowledge Nexus"
                highlight="Nexus"
                description="Practical insights on web development, SEO, AI, and digital strategy — written by the Tecorbitron team."
            />
            <RecentBlogs />
            <BlogListing posts={posts} categories={categories} />
        </main>
    );
}
