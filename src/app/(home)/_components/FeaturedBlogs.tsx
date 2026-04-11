import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/client";
import { BLOG_TEASER_QUERY } from "@/sanity/queries/blog";
import Image from "next/image";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import SectionAction from "@/components/basic-ui/SectionAction";

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
        <section className="h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Blog"
                    heading="Insights That Help You Grow"
                    highlight="Grow"
                    support=""
                />

                {/* ── CARDS ── */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            className="shadow-card mx-auto flex max-w-120 flex-col overflow-hidden rounded-lg bg-white transition-all duration-300"
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
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2 p-6">
                                <h3 className="text-body line-clamp-2 font-black">
                                    {post.title}
                                </h3>

                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="border-border-strong text-small w-fit rounded-md border px-4 py-2 select-none"
                                    >
                                        Read blog
                                    </Link>

                                    <p className="text-typocolor-muted">
                                        {formatDate(post.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <SectionAction url="/blog" name="View All Posts" />
            </div>
        </section>
    );
}
