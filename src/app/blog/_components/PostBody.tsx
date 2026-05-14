"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight,  Link2 } from "lucide-react";

// ── Related posts placeholder ──
const relatedPosts = [
    {
        category: "SEO",
        title: "10 SEO Strategies That Actually Work for Small Businesses in India",
        slug: "seo-strategies-small-business-india",
        readTime: "7 min read",
    },
    {
        category: "Web Development",
        title: "What is a Headless CMS and Why Does Your Business Need One?",
        slug: "headless-cms-explained",
        readTime: "5 min read",
    },
    {
        category: "Digital Marketing",
        title: "Google Ads vs SEO: Which Should Your Business Invest in First?",
        slug: "google-ads-vs-seo",
        readTime: "8 min read",
    },
];

type Heading = { id: string; text: string; level: number };

type Props = {
    content: React.ReactNode;
    headings?: Heading[];
};

export default function PostBody({ content, headings = [] }: Props) {
    const [activeId, setActiveId] = useState<string>("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (headings.length === 0) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-20% 0% -60% 0%" },
        );
        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [headings]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="bg-white px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
                    {/* ── MAIN CONTENT ── */}
                    <div className="min-w-0">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="text-muted hover:text-deepspace mb-8 inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200"
                        >
                            <ArrowLeft size={13} /> Back to Blog
                        </Link>

                        {/* Post content — styled prose */}
                        <article className="prose-custom ">{content}</article>

                        {/* ── SHARE BAR ── */}
                        <div className="border-border mt-12 flex flex-wrap items-center gap-3 border-t pt-8">
                            <span className="text-muted mr-2 text-xs font-bold tracking-wider uppercase">
                                Share
                            </span>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-border text-subtle hover:border-deepspace hover:text-deepspace flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200"
                            >
                                {/* <Twitter size={13} /> */}
                                Twitter / X
                            </a>
                            <a
                                href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-border text-subtle hover:border-deepspace hover:text-deepspace flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200"
                            >
                                {/* <Linkedin size={13} /> */}
                                LinkedIn
                            </a>
                            <button
                                onClick={handleCopyLink}
                                className="border-border text-subtle hover:border-malachite hover:text-malachite flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200"
                            >
                                <Link2 size={13} />
                                {copied ? "Copied!" : "Copy Link"}
                            </button>
                        </div>

                        {/* ── RELATED POSTS ── */}
                        <div className="mt-12">
                            <h3 className="text-deepspace mb-5 text-lg font-black">
                                Related Articles
                            </h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {relatedPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group bg-surface hover:border-malachite flex flex-col gap-3 rounded-2xl border border-transparent p-5 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <span className="text-malachite-rich text-xs font-bold">
                                            {post.category}
                                        </span>
                                        <h4 className="text-deepspace group-hover:text-malachite-rich line-clamp-2 text-sm leading-snug font-black transition-colors duration-200">
                                            {post.title}
                                        </h4>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-muted text-xs font-medium">
                                                {post.readTime}
                                            </span>
                                            <ArrowRight
                                                size={12}
                                                className="text-malachite opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── SIDEBAR ── */}
                    <aside className="sticky top-28 hidden h-fit flex-col gap-6 lg:flex">
                        {/* Table of Contents */}
                        {headings.length > 0 && (
                            <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                <p className="text-muted text-xs font-black tracking-wider uppercase">
                                    In this article
                                </p>
                                <nav className="flex flex-col gap-1">
                                    {headings.map((h) => (
                                        <a
                                            key={h.id}
                                            href={`#${h.id}`}
                                            className={`text-xs leading-relaxed font-medium transition-colors duration-200 ${h.level === 3 ? "pl-3" : ""} ${
                                                activeId === h.id
                                                    ? "text-malachite font-bold"
                                                    : "text-muted hover:text-deepspace"
                                            }`}
                                        >
                                            {h.text}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* CTA Card */}
                        <div className="bg-deepspace flex flex-col gap-4 rounded-2xl p-6">
                            <p className="text-malachite text-xs font-black tracking-wider uppercase">
                                Work with us
                            </p>
                            <p className="text-sm leading-relaxed font-light text-white/50">
                                Want to implement what you just read? Let&apos;s
                                talk about your project.
                            </p>
                            <Link
                                href="/contact"
                                className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200"
                            >
                                Start a Project <ArrowRight size={12} />
                            </Link>
                        </div>

                        {/* Author Card */}
                        <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                            <p className="text-muted text-xs font-black tracking-wider uppercase">
                                Written by
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="bg-deepspace flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white">
                                    S
                                </div>
                                <div>
                                    <p className="text-deepspace text-sm font-bold">
                                        Sagar Chauhan
                                    </p>
                                    <p className="text-muted text-xs font-medium">
                                        Founder, Tecorbitron
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
