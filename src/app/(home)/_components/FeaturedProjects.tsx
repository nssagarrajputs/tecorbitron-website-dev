import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import SectionAction from "@/components/basic-ui/SectionAction";
import { groq } from "next-sanity";

export const PORTFOLIO_PREVIEW_QUERY = groq`
  *[_type == "project" && featured == true] | order(completedAt desc) [0...3] {
    projectName,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    "industries": industries[]->name,
    summary,
  }
`;

type PortfolioPreviewProject = {
    projectName: string;
    slug: string;
    thumbnail: string | null;
    industries: string[];
    summary: string;
};

export default async function FeaturedProjects() {
    const projects: PortfolioPreviewProject[] = await client.fetch(
        PORTFOLIO_PREVIEW_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-bkg-primary h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Case studies"
                    heading="Real Work, Real Result"
                    highlight="Real Result"
                    support="A few of our recent projects — each one built with care,
                        precision, and a focus on real business outcomes."
                />

                {/* ── GRID ── */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="shadow-card mx-auto flex max-w-120 flex-col overflow-hidden rounded-lg bg-white transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="bg-deepspace relative h-52 overflow-hidden">
                                {project.thumbnail ? (
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.projectName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className="from-deepspace to-deepspace-soft absolute inset-0 bg-linear-to-br">
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                                backgroundSize: "24px 24px",
                                            }}
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/20">
                                            {project.projectName.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2 p-6">
                                <h3 className="text-h4 font-black">
                                    {project.projectName}
                                </h3>

                                <p className="line-clamp-2">
                                    {project.summary}
                                </p>

                                <Link
                                    href={`/portfolio/${project.slug}`}
                                    className="border-border-strong text-small mt-4 w-fit rounded-md border px-4 py-2 select-none"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <SectionAction url="/portfolio" name="View All Projects" />
            </div>
        </section>
    );
}
