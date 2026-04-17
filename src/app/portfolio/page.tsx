import ProjectList from "@/app/portfolio/_components/ProjectList";
import PageHero from "@/components/basic-ui/PageHero";
import { client } from "@/sanity/client";
import { PORTFOLIO_LIST_QUERY } from "@/sanity/queries/portfolio";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
    title: "Our Work",
    description:
        "Explore Tecorbitron's portfolio — web apps, mobile apps, e-commerce platforms, and custom software solutions delivered for clients across India and beyond.",
    keywords: [
        "Tecorbitron portfolio",
        "web development projects India",
        "software development case studies",
        "app development portfolio",
        "IT company work samples",
    ],
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Portfolio — Tecorbitron Solutions",
        description:
            "Real projects, real results. Browse our work across web, app, software, and AI solutions.",
        url: "https://www.tecorbitron.com/portfolio",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export type Project = {
    projectName: string;
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
            <PageHero
                eyebrow="Our Work"
                title="Projects That Deliver Results"
                highlight="Deliver Results"
                description="A curated selection of our work across web, mobile, software, and AI — each project measured by real business outcomes.."
            />
            <ProjectList featured={featured} rest={rest} />
        </main>
    );
}
