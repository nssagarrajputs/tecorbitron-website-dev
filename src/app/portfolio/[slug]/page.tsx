import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import {
    PORTFOLIO_DETAIL_QUERY,
    PORTFOLIO_RELATED_QUERY,
} from "@/sanity/queries/portfolio";
import type {
    PortableTextComponentProps,
    PortableTextBlock,
    PortableTextMarkComponentProps,
    PortableTextListComponent,
    PortableTextListItemComponent,
} from "@portabletext/react";
import StructuredData, {
    portfolioProjectSchema,
} from "@/components/StructuredData";
import type { Metadata } from "next";

// ── Types ─────────────────────────────────────────────────────────────────────
type TechStack = {
    name: string;
    category: string;
};

type RelatedProject = {
    projectName: string;
    title: string;
    slug: string;
    thumbnail: string | null;
    industries: string[];
};

// ── Static Params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(
        groq`*[_type == "project"]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 86400;

// ── generateMetadata ──────────────────────────────────────────────────────────
export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await props.params;
    const proj = await client.fetch(PORTFOLIO_DETAIL_QUERY, { slug });
    if (!proj) return {};
    return {
        title: proj.projectName,
        description: proj.summary
            ? proj.summary.slice(0, 155)
            : `${proj.projectName} — A project by Tecorbitron Solutions`,
        alternates: { canonical: `/portfolio/${slug}` },
        openGraph: {
            title: `${proj.projectName} — Tecorbitron Portfolio`,
            description: proj.summary?.slice(0, 155) ?? "",
            url: `https://www.tecorbitron.com/portfolio/${slug}`,
            images: proj.thumbnail
                ? [{ url: proj.thumbnail, width: 1200, height: 630 }]
                : [{ url: "/og-image.png", width: 1200, height: 630 }],
        },
    };
}

// ── Portable Text Components ──────────────────────────────────────────────────
const ptComponents = {
    block: {
        normal: ({
            children,
        }: PortableTextComponentProps<PortableTextBlock>) => (
            <p className="text-base leading-relaxed">{children}</p>
        ),
        h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h2 className="text-deepspace mt-8 mb-3 text-xl font-black">
                {children}
            </h2>
        ),
        h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h3 className="text-deepspace mt-6 mb-2 text-lg font-black">
                {children}
            </h3>
        ),
        h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h4 className="text-deepspace mt-4 mb-1 text-base font-black">
                {children}
            </h4>
        ),
    },
    list: {
        bullet: (({ children }) => (
            <ul className="flex flex-col gap-2 pl-1">{children}</ul>
        )) as PortableTextListComponent,
        number: (({ children }) => (
            <ol className="flex list-decimal flex-col gap-2 pl-5">
                {children}
            </ol>
        )) as PortableTextListComponent,
    },
    listItem: {
        bullet: (({ children }) => (
            <li className="text-subtle flex gap-2.5 text-base leading-relaxed font-light">
                <span className="text-malachite mt-1.5 shrink-0">•</span>
                <span>{children}</span>
            </li>
        )) as PortableTextListItemComponent,
        number: (({ children }) => (
            <li className="text-subtle text-base leading-relaxed font-light">
                {children}
            </li>
        )) as PortableTextListItemComponent,
    },
    marks: {
        strong: ({ children }: PortableTextMarkComponentProps) => (
            <strong className="text-deepspace font-black">{children}</strong>
        ),
        em: ({ children }: PortableTextMarkComponentProps) => (
            <em className="italic">{children}</em>
        ),
        underline: ({ children }: PortableTextMarkComponentProps) => (
            <span className="underline">{children}</span>
        ),
    },
};

// ── Case Study Section ────────────────────────────────────────────────────────
function CaseStudySection({
    title,
    content,
}: {
    title: string;
    content: PortableTextBlock[] | null;
}) {
    if (!content || content.length === 0) return null;
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex flex-col gap-3">
                <PortableText value={content} components={ptComponents} />
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;

    const [projData, related] = await Promise.all([
        client.fetch(PORTFOLIO_DETAIL_QUERY, { slug }),
        client.fetch(PORTFOLIO_RELATED_QUERY, { slug }),
    ]);

    if (!projData) notFound();

    const hasAnyCaseStudy =
        projData.problem || projData.solution || projData.result;

    return (
        <main className="bg-white">
            <StructuredData data={portfolioProjectSchema(projData)} />

            <div className="mx-auto max-w-7xl px-4 pt-24 pb-24">
                {/* ── BREADCRUMB ── */}
                <nav className="text-muted mb-4 flex items-center gap-1.5 text-xs">
                    <Link
                        href="/"
                        className="hover:text-deepspace transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <ChevronRight size={12} />
                    <Link
                        href="/portfolio"
                        className="hover:text-deepspace transition-colors duration-200"
                    >
                        Portfolio
                    </Link>
                    <ChevronRight size={12} />
                    <span className="line-clamp-1">{projData.projectName}</span>
                </nav>

                {/* ── THUMBNAIL ── */}
                {projData.thumbnail && (
                    <div className="mb-10 w-full overflow-hidden rounded-xl">
                        <div className="relative min-h-96 w-full">
                            <Image
                                src={projData.thumbnail}
                                alt={projData.projectName}
                                fill
                                priority
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                )}

                {/* ── TITLE ── */}
                <h1 className="text-deepspace mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
                    {projData.title}
                </h1>

                {/* ── META ROW ── */}
                <div className="mb-14 flex flex-col gap-6 sm:flex-row">
                    {/* Industries */}
                    {projData.industries?.length > 0 && (
                        <div className="border-border flex flex-col gap-2 border-l-2 p-4">
                            <span className="text-muted font-semibold">
                                Industry
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {projData.industries.map((ind: string) => (
                                    <span
                                        key={ind}
                                        className="bg-deepspace-dim text-deepspace rounded-sm px-3 py-1 text-sm font-bold capitalize"
                                    >
                                        {ind}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {projData.techStack?.length > 0 && (
                        <div className="border-border flex flex-col gap-2 border-l-2 p-4">
                            <span className="text-muted font-semibold">
                                Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {projData.techStack.map((tech: TechStack) => (
                                    <span
                                        key={tech.name}
                                        className="bg-malachite-dim text-malachite-deep rounded-sm px-3 py-1 text-sm font-bold"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── SUMMARY ── */}
                {projData.summary && (
                    <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-3">
                        <h2 className="text-lg font-bold">Summary</h2>
                        <p className="text-base leading-relaxed">
                            {projData.summary}
                        </p>
                    </div>
                )}

                {/* ── CASE STUDY ── */}
                {hasAnyCaseStudy && (
                    <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-8">
                        <CaseStudySection
                            title="The Problem"
                            content={projData.problem}
                        />
                        <CaseStudySection
                            title="Our Solution"
                            content={projData.solution}
                        />
                    </div>
                )}

                {/* ── SCREENSHOTS ── */}
                {projData.screenshots?.length > 0 && (
                    <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-5">
                        <h2 className="text-lg font-bold">Screenshots</h2>
                        <div className="flex flex-col gap-4">
                            {projData.screenshots.map(
                                (
                                    shot: { url: string; alt?: string },
                                    idx: number,
                                ) => (
                                    <div
                                        key={idx}
                                        className="border-border overflow-hidden rounded-xl border shadow-sm"
                                    >
                                        <Image
                                            src={shot.url}
                                            alt={
                                                shot.alt ??
                                                `${projData.projectName} — Screenshot ${idx + 1}`
                                            }
                                            width={1200}
                                            height={800}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                )}

                {hasAnyCaseStudy && (
                    <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-8">
                        <CaseStudySection
                            title="Results & Outcome"
                            content={projData.result}
                        />
                    </div>
                )}

                {/* ── DIVIDER ── */}
                <div className="border-border mb-10 border-t" />

                {/* ── MORE PROJECTS ── */}
                {related?.length > 0 && (
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-deepspace text-lg font-black">
                                More Projects
                            </h2>
                            <Link
                                href="/portfolio"
                                className="text-muted hover:text-malachite-rich inline-flex items-center gap-1 text-xs font-bold transition-colors duration-200"
                            >
                                View All <ArrowRight size={11} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {related.map((proj: RelatedProject) => (
                                <Link
                                    key={proj.slug}
                                    href={`/portfolio/${proj.slug}`}
                                    className="group border-border bg-surface hover:border-malachite flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <div className="bg-deepspace relative h-36 overflow-hidden">
                                        {proj.thumbnail ? (
                                            <Image
                                                src={proj.thumbnail}
                                                alt={proj.projectName}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, 33vw"
                                            />
                                        ) : (
                                            <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                                                <span className="text-3xl font-black text-white/10">
                                                    {proj.projectName.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-4">
                                        {proj.industries?.[0] && (
                                            <span className="text-malachite-rich text-xs font-bold">
                                                {proj.industries[0]}
                                            </span>
                                        )}
                                        <h3 className="text-deepspace group-hover:text-malachite-rich line-clamp-2 text-sm leading-snug font-black transition-colors duration-200">
                                            {proj.projectName}
                                        </h3>
                                        <p className="text-muted line-clamp-1 text-xs font-light">
                                            {proj.title}
                                        </p>
                                        <span className="text-malachite-rich mt-1 inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                            View <ArrowRight size={11} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
