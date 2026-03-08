// src/components/page/home/BlogTeaser.tsx
// Images: gradient placeholder for now — swap with Sanity image later

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        category: "Web Development",
        categoryColor: "bg-deepspace-dim text-deepspace",
        title: "Why Next.js is the Best Choice for Your Business Website in 2025",
        date: "Mar 01, 2025",
        readTime: "5 min read",
        slug: "nextjs-best-choice-2025",
        gradient: "from-deepspace to-deepspace-soft",
    },
    {
        category: "SEO",
        categoryColor: "bg-malachite-dim text-malachite-rich",
        title: "10 SEO Strategies That Actually Work for Small Businesses in India",
        date: "Feb 22, 2025",
        readTime: "7 min read",
        slug: "seo-strategies-small-business-india",
        gradient: "from-deepspace-rich to-deepspace",
    },
    {
        category: "UI/UX Design",
        categoryColor: "bg-surface text-subtle border border-border",
        title: "How Good UI/UX Design Directly Impacts Your Business Revenue",
        date: "Feb 15, 2025",
        readTime: "6 min read",
        slug: "uiux-design-business-revenue",
        gradient: "from-deepspace to-deepspace-rich",
    },
];

export default function BlogTeaser() {
    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
                {/* ── HEADER ── */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            Insights
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        The Knowledge{" "}
                        <span className="text-malachite">Nexus</span>
                    </h2>
                </div>

                {/* ── CARDS ── */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group border-border hover:border-malachite hover:shadow-deepspace/10 flex flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Thumbnail */}
                            <div
                                className={`relative h-44 bg-linear-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                            >
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px",
                                    }}
                                />
                                <span className="relative z-10 text-5xl font-black text-white/10">
                                    {post.title.charAt(0)}
                                </span>

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-4 p-5">
                                <h3 className="text-deepspace group-hover:text-malachite-rich text-base leading-snug font-black transition-colors duration-200">
                                    {post.title}
                                </h3>

                                {/* Footer */}
                                <div className="border-border mt-auto flex items-center justify-between border-t pt-3">
                                    <div className="text-muted flex items-center gap-2 text-xs font-medium">
                                        <span>{post.date}</span>
                                        <span className="text-border">·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <span className="text-malachite-rich inline-flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2">
                                        Read <ArrowRight size={11} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── VIEW ALL BTN ── */}
                <Link
                    href="/blog"
                    className="border-border text-deepspace hover:border-malachite hover:text-malachite inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                >
                    View All Posts
                    <ArrowRight size={14} />
                </Link>
            </div>
        </section>
    );
}
