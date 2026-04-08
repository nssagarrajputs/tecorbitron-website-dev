import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/client";
import { BLOG_TEASER_QUERY } from "@/sanity/queries/blog";
import Image from "next/image";

// Type
type BlogTeaserPost = {
    title: string;
    slug: string;
    publishedAt: string;
    readTime: number;
    category: string;
    coverImage: string | null;
};

// Format date helper
function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default async function FeaturedBlogs() {
    const posts: BlogTeaserPost[] = await client.fetch(
        BLOG_TEASER_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
                {/* ── HEADER ── */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            Blog
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        Insights That Help You{" "}
                        <span className="text-malachite">Grow</span>
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
                            <div className="bg-deepspace relative h-44 overflow-hidden">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    // Fallback gradient agar image nahi hai
                                    <div className="from-deepspace to-deepspace-soft absolute inset-0 bg-linear-to-br">
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                                backgroundSize: "24px 24px",
                                            }}
                                        />
                                    </div>
                                )}

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
                                        <span>
                                            {formatDate(post.publishedAt)}
                                        </span>
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
