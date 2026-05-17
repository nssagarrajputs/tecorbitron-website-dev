import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";

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
import PageHero from "@/components/basic-ui/PageHero";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import SectionHeader from "@/components/basic-ui/SectionHeader";

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
};

const PORTFOLIO_RELATED_QUERY = groq`
  *[_type == "project" && slug.current != $slug] | order(completedAt desc) [0...3] {
    projectName,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
  }
`;

const PORTFOLIO_DETAIL_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
     projectName,
     title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    "techStack": techStack[]->{name, category},
    projectTypes,
    completedAt,
    livePreview,
    summary,
    problem,
    solution,
    result,
    "screenshots": screenshots[]{
      "url": asset->url,
      alt
    },
  }
`;

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
            <h2 className="text-h3 font-bold">{title}</h2>
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

            <PageHero width="lg" eyebrow="Case Study" title={projData.title} />

            <SectionContainer width="lg">
                <div className="border-base rounded-4 shadow-soft overflow-hidden border">
                    {projData.thumbnail ? (
                        <Image
                            src={projData.thumbnail}
                            alt={projData.projectName}
                            width={2000}
                            height={2000}
                            className="h-120 object-cover"
                        />
                    ) : (
                        <Image
                            src={DefBlogThumbnail}
                            alt={projData.projectName}
                            width={2000}
                            height={2000}
                            className="w-full object-cover"
                        />
                    )}
                </div>

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

                <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:flex-row">
                    {/* Industries */}
                    {projData.industries?.length > 0 && (
                        <div className="cardbox flex w-full flex-col gap-6 p-8">
                            <span className="text-muted font-semibold">
                                Industry
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {projData.industries.map((ind: string) => (
                                    <span
                                        key={ind}
                                        className="bg-deepspace-dim text-deepspace rounded-2 text-small px-3 py-1 font-bold capitalize"
                                    >
                                        {ind}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {projData.techStack?.length > 0 && (
                        <div className="cardbox flex w-full flex-col gap-6 p-8">
                            <span className="text-muted font-semibold">
                                Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {projData.techStack.map((tech: TechStack) => (
                                    <span
                                        key={tech.name}
                                        className="bg-malachite-dim text-malachite-deep rounded-2 text-small px-3 py-1 font-bold"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {projData.summary && (
                    <div className="flex flex-col gap-3">
                        <h2 className="text-h3 font-bold">Summary</h2>
                        <p className="text-body leading-relaxed">
                            {projData.summary}
                        </p>
                    </div>
                )}

                {hasAnyCaseStudy && (
                    <div className="flex flex-col gap-8">
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

                {projData.screenshots?.length > 0 && (
                    <div className="mx-auto flex max-w-5xl flex-col gap-5">
                        <h2 className="text-h3 font-bold">Screenshots</h2>
                        <div className="flex flex-col gap-4">
                            {projData.screenshots.map(
                                (
                                    shot: { url: string; alt?: string },
                                    idx: number,
                                ) => (
                                    <div
                                        key={idx}
                                        className="border-base rounded-4 shadow-soft overflow-hidden border"
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
                    <div className="flex flex-col gap-8">
                        <CaseStudySection
                            title="Results & Outcome"
                            content={projData.result}
                        />
                    </div>
                )}

                <hr />

                {related?.length > 0 && (
                    <div className="section-vlex-gap">
                        <SectionHeader
                            heading="Related Projects"
                            highlight="Projects"
                        />
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {related.map((proj: RelatedProject) => (
                                <div
                                    key={proj.slug}
                                    className="group hover:border-malachite cardbox flex flex-col overflow-hidden"
                                >
                                    <div className="bg-deepspace relative h-32 overflow-hidden">
                                        {proj.thumbnail ? (
                                            <Image
                                                src={proj.thumbnail}
                                                alt={proj.projectName}
                                                width={500}
                                                height={500}
                                                className="w-full object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src={DefBlogThumbnail}
                                                alt={proj.projectName}
                                                width={500}
                                                height={500}
                                                className="w-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-6 p-4">
                                        <h3 className="text-typocolor-primary text-small line-clamp-2 leading-snug font-bold">
                                            {proj.title}
                                        </h3>

                                        <Link
                                            href={`/portfolio/${proj.slug}`}
                                            className="action-btn"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </main>
    );
}
