import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { PORTFOLIO_PREVIEW_QUERY } from "@/sanity/queries/portfolio";

type PortfolioPreviewProject = {
    projectName: string;
    slug: string;
    thumbnail: string | null;
    industries: string[];
};

export default async function FeaturedProjects() {
    const projects: PortfolioPreviewProject[] = await client.fetch(
        PORTFOLIO_PREVIEW_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* ── HEADER ── */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            Our Work
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        Real Work,{" "}
                        <span className="text-malachite">Real Results</span>
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed">
                        A few of our recent projects — each one built with care,
                        precision, and a focus on real business outcomes.
                    </p>
                </div>

                {/* ── GRID ── */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/portfolio/${project.slug}`}
                            className="group border-border hover:border-malachite hover:shadow-deepspace/10 flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

                                {/* Industry badge */}
                                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                    {project.industries?.[0] ?? "Project"}
                                </div>

                                {/* Arrow on hover */}
                                <div className="group-hover:bg-malachite group-hover:text-deepspace-deep absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                                    <ExternalLink size={14} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <h3 className="text-deepspace group-hover:text-malachite-rich text-lg font-black transition-colors duration-200">
                                    {project.projectName}
                                </h3>

                                

                                
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/portfolio"
                        className="border-border text-deepspace hover:border-malachite hover:text-malachite inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View All Projects
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
