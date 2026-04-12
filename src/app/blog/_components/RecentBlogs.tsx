import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/queries/blog";

type RecentPost = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    category: string;
    coverImage: string | null;
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default async function RecentBlogs() {
    const posts: RecentPost[] = await client.fetch(
        RECENT_BLOGS_QUERY,
        {},
        { next: { revalidate: 21600 } },
    );

    return (
        <section className="bg-white px-4 pb-10">
            <div className="mx-auto max-w-5xl pt-8 pb-16">
                <h2 className="mb-8 text-2xl font-black">
                    Recently Added <span className="text-malachite">Blogs</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-deepspace-soft hover:border-malachite/30 hover:shadow-deepspace/20 flex flex-col overflow-hidden rounded-xl transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-60 overflow-hidden">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-400 group-hover:scale-[1.1]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                ) : (
                                    <div className="from-deepspace to-deepspace-soft absolute inset-0 bg-linear-to-br" />
                                )}

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                                <h3 className="group-hover:text-malachite-soft text-2xl leading-snug font-black tracking-tight text-white transition-colors duration-200">
                                    {post.title}
                                </h3>
                                <p className="leading-relaxed text-white/60">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                    <span className="text-xs font-medium text-white/30">
                                        {formatDate(post.publishedAt)}
                                    </span>
                                    <span className="text-malachite inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-all duration-200 group-hover:gap-2 group-hover:opacity-100">
                                        Read <ArrowRight size={10} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
