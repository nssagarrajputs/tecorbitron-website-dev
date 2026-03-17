import Hero from "@/components/page/portfolio/Hero";
import ProjectList from "@/components/page/portfolio/ProjectList";
import { client } from "@/sanity/client";
import { PORTFOLIO_LIST_QUERY } from "@/sanity/queries/portfolio";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
    title: "Our Work",
    description:
        "Explore Tecorbitron's portfolio — web apps, mobile apps, e-commerce platforms, and custom software solutions delivered for clients across India and beyond.",
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Portfolio — Tecorbitron Solutions",
        description:
            "Real projects, real results. Browse our work across web, app, software, and AI solutions.",
        url: "https://www.tecorbitron.com/portfolio",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

type Project = {
    title: string;
    slug: string;
    thumbnail: string | null;
    industries: string[];
    techStack: string[];
    summary?: string;
    livePreview?: string;
};

export default async function PortfolioPage() {
    const { featured, rest } = await client.fetch<{
        featured: Project | null;
        rest: Project[];
    }>(PORTFOLIO_LIST_QUERY);

    return (
        <main>
            <Hero />
            <ProjectList featured={featured} rest={rest} />
        </main>
    );
}
