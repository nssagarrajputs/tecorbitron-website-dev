import { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

const baseUrl = "https://www.tecorbitron.com";

type SanitySlugResult = {
    slug: string;
    updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // ── Sanity se slugs fetch karo ──
    const [projects, posts] = await Promise.all([
        client.fetch<SanitySlugResult[]>(
            groq`*[_type == "project"]{ "slug": slug.current, "updatedAt": _updatedAt }`,
        ),
        client.fetch<SanitySlugResult[]>(
            groq`*[_type == "post"]{ "slug": slug.current, "updatedAt": _updatedAt }`,
        ),
    ]);

    // ── Dynamic portfolio pages ──
    const portfolioUrls: MetadataRoute.Sitemap = projects.map((proj) => ({
        url: `${baseUrl}/portfolio/${proj.slug}`,
        lastModified: new Date(proj.updatedAt),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    // ── Dynamic blog pages ──
    const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [
        // ── Core pages ──
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },

        // ── Legal ──
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },

        // ── Dynamic pages ──
        ...portfolioUrls,
        ...blogUrls,
    ];
}
