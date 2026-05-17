import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/basic-ui/PageHero";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import type { Metadata } from "next";
import DefProjectThumbnail from "@/assets/other/default-thumbnail.webp";

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
    title: string;
    slug: string;
    thumbnail: string | null;
    techStack: string[];
};

const PORTFOLIO_LIST_QUERY = groq`
  *[_type == "project"] | order(completedAt desc) {
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "techStack": techStack[]->name,
  }
`;

export default async function PortfolioPage() {
    const projects = await client.fetch<Project[]>(PORTFOLIO_LIST_QUERY);

    return (
        <main>
            <PageHero
                eyebrow="Our Work"
                title="Projects That Matter"
                highlight="Matter"
                description="A curated selection of our work across web, mobile, software, and AI — each project measured by real business outcomes.."
            />

            <SectionContainer width="lg">
                {projects.length === 0 ? (
                    /* ── Empty state ── */
                    <div className="flex flex-col items-center gap-4 py-16 text-center">
                        <span className="text-5xl">🚧</span>
                        <h3 className="text-typocolor-primary text-h4 font-bold">
                            Projects Coming Soon
                        </h3>
                        <p className="text-typocolor-muted text-small max-w-sm font-light">
                            We&apos;re currently updating our portfolio. Check
                            back soon or{" "}
                            <Link
                                href="/contact"
                                className="text-malachite-rich font-semibold hover:underline"
                            >
                                contact us
                            </Link>{" "}
                            to see our work directly.
                        </p>
                    </div>
                ) : (
                    /* ── Projects grid ── */
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
                        {projects.map((proj) => (
                            <div
                                key={proj.slug}
                                className="group cardbox transi-base hover:border-malachite flex flex-col overflow-hidden"
                            >
                                {/* Thumbnail */}
                                <div className="bg-deepspace rounded-t-4 relative h-50 overflow-hidden">
                                    {proj.thumbnail ? (
                                        <Image
                                            src={proj.thumbnail}
                                            alt={proj.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                    ) : (
                                        <Image
                                            src={DefProjectThumbnail}
                                            alt={proj.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-102"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col gap-3 p-5">
                                    <h3 className="text-typocolor-primary group-hover:text-malachite-rich text-h4 transi-base font-bold">
                                        {proj.title}
                                    </h3>

                                    {/* Tech stack tags */}
                                    {proj.techStack?.length > 0 && (
                                        <div className="border-base mt-auto flex flex-wrap gap-1.5 border-t pt-3">
                                            {proj.techStack
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="bg-bkg-secondary text-typocolor-muted text-xmall rounded-full px-2.5 py-0.5 font-semibold"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {proj.techStack.length > 3 && (
                                                <span className="bg-bkg-secondary text-typocolor-muted text-xmall rounded-full px-2.5 py-0.5 font-semibold">
                                                    +{proj.techStack.length - 3}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <Link
                                        href={`/portfolio/${proj.slug}`}
                                        className="action-btn"
                                    >
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </SectionContainer>
        </main>
    );
}
