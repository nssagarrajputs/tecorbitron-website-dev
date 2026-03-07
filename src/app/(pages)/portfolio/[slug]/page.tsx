
import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";

export default async function ProjectDetailPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const slug = params.slug;

    const projData = await client.fetch(
        `*[_type == "project" && slug.current == $slug]{
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      industries[]->{ name },
      technologies,
      summary,
      "screenshots": screenshots[].asset->url,
      livePreview
    }[0]`,
        { slug },
    );

    if (!projData) notFound();

    // Related projects — same industry, exclude current
    const related = await client.fetch(
        `*[_type == "project" && slug.current != $slug] | order(_createdAt desc) [0..2] {
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      industries[]->{ name },
      technologies,
      summary
    }`,
        { slug },
    );

    const techList = projData.technologies
        ? projData.technologies.split(",").map((t: string) => t.trim())
        : [];

    return (
        <main>
            {/* ── HERO — Thumbnail ── */}
            <section className="relative w-full overflow-hidden pt-24">
                <div className="bg-deepspace relative h-72 w-full sm:h-96 lg:h-120">
                    {projData.thumbnail ? (
                        <Image
                            src={projData.thumbnail}
                            alt={projData.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    ) : (
                        <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                            <span className="text-9xl font-black text-white/10">
                                {projData.title.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Dark overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(7,30,45,0.95) 0%, rgba(7,30,45,0.4) 50%, transparent 100%)",
                        }}
                    />

                    {/* Title overlay */}
                    <div className="absolute right-0 bottom-0 left-0 px-4 pb-8">
                        <div className="mx-auto flex max-w-7xl flex-col gap-3">
                            {projData.industries?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {projData.industries.map(
                                        (ind: { name: string }, i: number) => (
                                            <span
                                                key={i}
                                                className="border-malachite/30 bg-malachite/10 text-malachite rounded-full border px-3 py-0.5 text-xs font-bold"
                                            >
                                                {ind.name}
                                            </span>
                                        ),
                                    )}
                                </div>
                            )}
                            <h1 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                                {projData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
                        {/* ── MAIN ── */}
                        <div className="flex flex-col gap-10">
                            {/* Back */}
                            <Link
                                href="/portfolio"
                                className="text-muted hover:text-deepspace inline-flex w-fit items-center gap-1.5 text-xs font-bold transition-colors duration-200"
                            >
                                <ArrowLeft size={13} /> Back to Portfolio
                            </Link>

                            {/* Summary */}
                            {projData.summary && (
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-deepspace text-lg font-black">
                                        About This Project
                                    </h2>
                                    <p className="text-muted text-base leading-relaxed font-light">
                                        {projData.summary}
                                    </p>
                                </div>
                            )}

                            {/* Screenshots */}
                            {projData.screenshots?.length > 0 && (
                                <div className="flex flex-col gap-5">
                                    <h2 className="text-deepspace text-lg font-black">
                                        Screenshots
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {projData.screenshots.map(
                                            (shot: string, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="border-border overflow-hidden rounded-2xl border shadow-sm"
                                                >
                                                    <Image
                                                        src={shot}
                                                        alt={`${projData.title} — Screenshot ${idx + 1}`}
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

                            {/* Related Projects */}
                            {related?.length > 0 && (
                                <div className="border-border flex flex-col gap-5 border-t pt-6">
                                    <h2 className="text-deepspace text-lg font-black">
                                        More Projects
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {related.map(
                                            (
                                                proj: {
                                                    slug: string;
                                                    thumbnail: string;
                                                    title: string;
                                                    industries: {
                                                        name: string;
                                                    }[];
                                                    summary: string;
                                                },
                                                i: number,
                                            ) => (
                                                <Link
                                                    key={i}
                                                    href={`/portfolio/${proj.slug}`}
                                                    className="group border-border bg-surface hover:border-malachite flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                                                >
                                                    <div className="bg-deepspace relative h-36 overflow-hidden">
                                                        {proj.thumbnail ? (
                                                            <Image
                                                                src={
                                                                    proj.thumbnail
                                                                }
                                                                alt={proj.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                        ) : (
                                                            <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                                                                <span className="text-3xl font-black text-white/10">
                                                                    {proj.title.charAt(
                                                                        0,
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 p-4">
                                                        {proj
                                                            .industries?.[0] && (
                                                            <span className="text-malachite-rich text-xs font-bold">
                                                                {
                                                                    proj
                                                                        .industries[0]
                                                                        .name
                                                                }
                                                            </span>
                                                        )}
                                                        <h3 className="text-deepspace group-hover:text-malachite-rich line-clamp-2 text-sm leading-snug font-black transition-colors duration-200">
                                                            {proj.title}
                                                        </h3>
                                                        <span className="text-malachite-rich mt-1 inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                                            View{" "}
                                                            <ArrowRight
                                                                size={11}
                                                            />
                                                        </span>
                                                    </div>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── SIDEBAR ── */}
                        <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:h-fit">
                            {/* Tech Stack */}
                            {techList.length > 0 && (
                                <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                    <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techList.map(
                                            (tech: string, i: number) => (
                                                <span
                                                    key={i}
                                                    className="border-border text-subtle rounded-full border bg-white px-3 py-1 text-xs font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Industries */}
                            {projData.industries?.length > 0 && (
                                <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                    <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                        Industry
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {projData.industries.map(
                                            (
                                                ind: { name: string },
                                                i: number,
                                            ) => (
                                                <span
                                                    key={i}
                                                    className="bg-malachite-dim text-malachite-rich rounded-full px-3 py-1 text-xs font-bold"
                                                >
                                                    {ind.name}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Live Preview */}
                            {projData.livePreview && (
                                <a
                                    href={projData.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-malachite text-deepspace-deep hover:bg-malachite-soft flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <ExternalLink size={15} />
                                    View Live Project
                                </a>
                            )}

                            {/* CTA */}
                            <div className="bg-deepspace flex flex-col gap-3 rounded-2xl p-5">
                                <p className="text-malachite text-xs font-black tracking-wider uppercase">
                                    Like what you see?
                                </p>
                                <p className="text-sm leading-relaxed font-light text-white/50">
                                    We can build something like this for your
                                    business — or better.
                                </p>
                                <Link
                                    href="/contact"
                                    className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200"
                                >
                                    Start a Project <ArrowRight size={12} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
