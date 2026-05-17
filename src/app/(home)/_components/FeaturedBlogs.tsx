import Link from "next/link";

import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";

// Type
type BlogTeaserPost = {
    title: string;
    slug: string;
    publishedAt: string;
    coverImage: string | null;
};

const BLOG_TEASER_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

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
        <SectionContainer
            eyebrow="INSIGHTS"
            heading="Insights That Help You Grow"
            highlight="Help You Grow"
            support=""
        >
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="cardbox hover:border-malachite transi-base mx-auto flex max-w-120 flex-col overflow-hidden"
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
                                    className="shadow-soft text-small border-base rounded-2 w-fit border px-4 py-2 select-none"
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

            <div className="mx-auto">
                <BrandBtn href="/blog" variant="secondary">
                    View All Blogs
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
