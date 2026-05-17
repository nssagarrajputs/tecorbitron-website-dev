"use client";

import { useState } from "react";
import Link from "next/link";
import { groq } from "next-sanity";

import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";

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
        <SectionContainer heading="All" highlight="Articles">
            {/* ── Category pills — Sanity se dynamic ── */}
            <div className="flex flex-wrap justify-center gap-2 gap-y-4">
                <button
                    onClick={() => setActive("All")}
                    className={`text-xmall transi-base rounded-full px-4 py-2 font-bold ${
                        active === "All"
                            ? "bg-malachite text-typocolor-primary"
                            : "border-base text-muted border"
                    }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.slug}
                        onClick={() => setActive(cat.name)}
                        className={`text-xmall transi-base rounded-full px-4 py-2 font-semibold ${
                            active === cat.name
                                ? "bg-malachite border-base border text-white"
                                : "border-base shadow-soft text-muted hover:border-malachite/40 hover:text-deepspace border bg-white"
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((post) => (
                        <div
                            key={post.slug}
                            className="group hover:border-malachite cardbox transi-base flex flex-col overflow-hidden"
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
                                    <Image
                                        src={DefBlogThumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4 p-6">
                                <h3 className="text-typocolor-primary text-body leading-snug font-bold">
                                    {post.title}
                                </h3>
                                <div className="mt-auto flex items-center justify-between pt-3">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="action-btn"
                                    >
                                        View Blog
                                    </Link>
                                    <span className="text-typocolor-muted text-xmall font-semibold">
                                        {formatDate(post.publishedAt)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="v-breathing flex flex-col gap-3 text-center">
                    <p className="text-typocolor-secondary text-h3 font-black">
                        No articles posted
                    </p>
                    <p className="text-typocolor-muted text-body">
                        Check back soon.
                    </p>
                </div>
            )}
        </SectionContainer>
    );
}
