"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Post = {
    title: string;
    slug: string;
    publishedAt: string;
    readTime: number;
    category: string;
    coverImage: string | null;
};

type Category = {
    name: string;
    slug: string;
};

type Props = {
    posts: Post[];
    categories: Category[];
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function BlogListing({ posts, categories }: Props) {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All" ? posts : posts.filter((p) => p.category === active);

    return (
        <section id="all-articles" className="bg-surface px-4 py-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-10">
                {/* ── Heading ── */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-deepspace text-3xl font-black tracking-tight sm:text-4xl">
                        All <span className="text-malachite">Articles</span>
                    </h2>

                    {/* ── Category pills — Sanity se dynamic ── */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setActive("All")}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                                active === "All"
                                    ? "bg-malachite text-deepspace-deep shadow-sm"
                                    : "border-border text-muted hover:border-malachite/40 hover:text-deepspace border bg-white"
                            }`}
                        >
                            All
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActive(cat.name)}
                                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                                    active === cat.name
                                        ? "bg-malachite text-deepspace-deep shadow-sm"
                                        : "border-border text-muted hover:border-malachite/40 hover:text-deepspace border bg-white"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Grid ── */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group border-border hover:border-malachite hover:shadow-deepspace/10 flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Thumbnail */}
                                <div className="bg-deepspace relative h-44 overflow-hidden">
                                    {post.coverImage ? (
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                            <span className="absolute inset-0 flex items-center justify-center text-5xl font-black text-white/10">
                                                {post.title.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col gap-4 p-5">
                                    <h3 className="text-deepspace group-hover:text-malachite-rich text-base leading-snug font-black transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <div className="border-border mt-auto flex items-center justify-between border-t pt-3">
                                        <span className="text-muted text-xs font-medium">
                                            {formatDate(post.publishedAt)} ·{" "}
                                            {post.readTime} min read
                                        </span>
                                        <span className="text-malachite-rich inline-flex items-center gap-1 text-xs font-bold transition-all duration-200 group-hover:gap-2">
                                            Read <ArrowRight size={11} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 py-20 text-center">
                        <p className="text-deepspace/20 text-2xl font-black">
                            No articles yet
                        </p>
                        <p className="text-muted text-sm font-light">
                            Check back soon.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
