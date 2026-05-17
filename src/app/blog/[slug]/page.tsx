import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type {
    PortableTextComponentProps,
    PortableTextBlock,
    PortableTextMarkComponentProps,
    PortableTextListComponent,
    PortableTextListItemComponent,
} from "@portabletext/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { client } from "@/sanity/client";
import StructuredData, { blogPostSchema } from "@/components/StructuredData";
import SectionContainer from "@/components/basic-ui/SectionContainer";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import PageHero from "@/components/basic-ui/PageHero";
import DefBlogThumbnail from "@/assets/other/default-thumbnail.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

const BLOG_DETAIL_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    "coverImage": coverImage.asset->url,
    "category": categories[0]->name,
    tags,
    "author": author->{
      name,
      role,
      "photo": photo.asset->url,
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{url}
      }
    }
  }
`;

const BLOG_RELATED_QUERY = groq`
  *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

type BlogPost = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    readTime: number;
    coverImage: string | null;
    category: string;
    tags: string[];
    author: {
        name: string;
        role: string;
        photo: string | null;
    };
    body: PortableTextBlock[];
};

type RelatedPost = {
    title: string;
    slug: string;
    publishedAt: string;

    coverImage: string | null;
};

type InlineImage = {
    _type: "image";
    asset: { url: string };
    alt?: string;
    caption?: string;
};

type YouTubeBlock = { _type: "youtube"; url: string };
type TwitterBlock = { _type: "twitter"; url: string };
type CalloutBlock = {
    _type: "callout";
    type: "tip" | "info" | "warning" | "danger";
    content: string;
};
type DividerBlock = { _type: "divider"; style: "line" | "dots" | "star" };
type CodeBlock = {
    _type: "code";
    code: string;
    language?: string;
    filename?: string;
};

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(
        groq`*[_type == "post"]{ "slug": slug.current }`,
    );
    return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 86400;

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;
    const post: BlogPost = await client.fetch(BLOG_DETAIL_QUERY, { slug });
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [{ url: post.coverImage }] : [],
        },
    };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

function getYouTubeId(url: string) {
    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    return match ? match[1] : null;
}

// ─── Callout styles ───────────────────────────────────────────────────────────

const calloutConfig = {
    tip: {
        icon: "💡",
        bg: "bg-malachite-dim",
        border: "border-malachite",
        label: "Tip",
    },
    info: {
        icon: "ℹ️",
        bg: "bg-deepspace-dim",
        border: "border-deepspace-soft",
        label: "Info",
    },
    warning: {
        icon: "⚠️",
        bg: "bg-yellow-50",
        border: "border-warning",
        label: "Warning",
    },
    danger: {
        icon: "🚨",
        bg: "bg-red-50",
        border: "border-error",
        label: "Danger",
    },
};

// ─── Portable Text Components ─────────────────────────────────────────────────

const ptComponents = {
    block: {
        normal: ({
            children,
        }: PortableTextComponentProps<PortableTextBlock>) => (
            <p className="text-body leading-relaxed">{children}</p>
        ),
        h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h2 className="text-typocolor-primary text-h3 mt-10 mb-4 scroll-mt-28 font-black">
                {children}
            </h2>
        ),
        h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h3 className="text-typocolor-primary text-h4 mt-4 scroll-mt-28 font-bold">
                {children}
            </h3>
        ),
        h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h4 className="text-typocolor-primary text-body mt-4 mb-2 font-black">
                {children}
            </h4>
        ),
        blockquote: ({
            children,
        }: PortableTextComponentProps<PortableTextBlock>) => (
            <blockquote className="border-malachite bg-malachite-dim text-deepspace rounded-r-xl border-l-4 py-3 pr-4 pl-5 text-base leading-relaxed font-light italic">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: (({ children }) => (
            <ul className="flex flex-col gap-2.5 pl-1">{children}</ul>
        )) as PortableTextListComponent,
        number: (({ children }) => (
            <ol className="flex list-inside list-decimal flex-col gap-2.5 pl-1">
                {children}
            </ol>
        )) as PortableTextListComponent,
    },
    listItem: {
        bullet: (({ children }) => (
            <li className="text-typocolor-secondary text-body flex gap-3 leading-relaxed">
                <span className="text-malachite">•</span>
                <span>{children}</span>
            </li>
        )) as PortableTextListItemComponent,
        number: (({ children }) => (
            <li className="text-subtle text-base leading-relaxed font-light">
                {children}
            </li>
        )) as PortableTextListItemComponent,
    },
    marks: {
        strong: ({ children }: PortableTextMarkComponentProps) => (
            <strong className="text-deepspace font-black">{children}</strong>
        ),
        em: ({ children }: PortableTextMarkComponentProps) => (
            <em className="text-deepspace/80 italic">{children}</em>
        ),
        underline: ({ children }: PortableTextMarkComponentProps) => (
            <span className="underline underline-offset-2">{children}</span>
        ),
        code: ({ children }: PortableTextMarkComponentProps) => (
            <code className="bg-surface border-border text-malachite-rich rounded border px-1.5 py-0.5 font-mono text-sm">
                {children}
            </code>
        ),
        link: ({ children, value }: PortableTextMarkComponentProps) => (
            <a
                href={value?.href}
                target={value?.blank ? "_blank" : "_self"}
                rel={value?.blank ? "noopener noreferrer" : undefined}
                className="text-malachite-rich hover:text-malachite underline underline-offset-2 transition-colors duration-200"
            >
                {children}
            </a>
        ),
    },
    types: {
        // Inline Image
        image: ({ value }: { value: InlineImage }) => (
            <figure className="my-2">
                <div className="border-base shadow-soft rounded-4 mx-auto my-12 max-h-120 max-w-4xl overflow-hidden border">
                    <Image
                        src={value.asset?.url}
                        alt={value.alt ?? "Blog image"}
                        width={800}
                        height={450}
                        className="w-full object-cover"
                    />
                </div>
                {value.caption && (
                    <figcaption className="text-typocolor-muted text-xmall mt-2 text-center font-semibold">
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),

        // Code Block
        code: ({ value }: { value: CodeBlock }) => (
            <div className="border-border my-2 overflow-hidden rounded-2xl border">
                {value.filename && (
                    <div className="bg-deepspace-deep flex items-center gap-2 border-b border-white/10 px-4 py-2">
                        <span className="bg-error/70 h-2.5 w-2.5 rounded-full" />
                        <span className="bg-warning/70 h-2.5 w-2.5 rounded-full" />
                        <span className="bg-success/70 h-2.5 w-2.5 rounded-full" />
                        <span className="ml-2 font-mono text-xs text-white/40">
                            {value.filename}
                        </span>
                    </div>
                )}
                <pre className="bg-deepspace overflow-x-auto p-5 text-sm leading-relaxed">
                    <code className="font-mono text-white/80">
                        {value.code}
                    </code>
                </pre>
            </div>
        ),

        // YouTube Embed
        youtube: ({ value }: { value: YouTubeBlock }) => {
            const id = getYouTubeId(value.url);
            if (!id) return null;
            return (
                <div className="border-border my-2 aspect-video overflow-hidden rounded-2xl border">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                    />
                </div>
            );
        },

        // Twitter/X Embed — simple link card
        twitter: ({ value }: { value: TwitterBlock }) => (
            <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-surface text-deepspace hover:border-malachite my-2 flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-bold transition-colors duration-200"
            >
                <span className="text-xl">𝕏</span>
                <span>View Tweet</span>
                <ArrowRight size={13} className="text-malachite ml-auto" />
            </a>
        ),

        // Callout Box
        callout: ({ value }: { value: CalloutBlock }) => {
            const cfg = calloutConfig[value.type] ?? calloutConfig.tip;
            return (
                <div
                    className={`my-2 flex gap-3 rounded-2xl border ${cfg.border} ${cfg.bg} px-5 py-4`}
                >
                    <span className="mt-0.5 shrink-0 text-xl">{cfg.icon}</span>
                    <div className="flex flex-col gap-1">
                        <span className="text-deepspace/60 text-xs font-black tracking-widest uppercase">
                            {cfg.label}
                        </span>
                        <p className="text-subtle text-sm leading-relaxed font-light">
                            {value.content}
                        </p>
                    </div>
                </div>
            );
        },

        // Divider
        divider: ({ value }: { value: DividerBlock }) => {
            const map = {
                line: <hr className="border-border my-2" />,
                dots: (
                    <div className="text-border my-2 flex justify-center gap-2 text-lg">
                        • • •
                    </div>
                ),
                star: (
                    <div className="text-border my-2 flex justify-center text-lg">
                        ★
                    </div>
                ),
            };
            return map[value.style] ?? map.line;
        },
    },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await props.params;

    const [post, related]: [BlogPost, RelatedPost[]] = await Promise.all([
        client.fetch(BLOG_DETAIL_QUERY, { slug }),
        client.fetch(BLOG_RELATED_QUERY, { slug }),
    ]);

    if (!post) notFound();

    return (
        <main>
            <StructuredData data={blogPostSchema(post)} />

            <PageHero width="lg" eyebrow="Blog Post" title={post.title} />

            <SectionContainer width="md">
                <div className="border-base rounded-4 shadow-soft overflow-hidden border">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={2000}
                            height={2000}
                            className="h-120 object-cover"
                        />
                    ) : (
                        <Image
                            src={DefBlogThumbnail}
                            alt={post.title}
                            width={2000}
                            height={2000}
                            className="w-full object-cover"
                        />
                    )}
                </div>

                <div className="flex flex-col gap-8">
                    <Link
                        href="/blog"
                        className="action-btn flex items-center gap-2 hover:text-white"
                    >
                        <ArrowLeft size={13} strokeWidth={3} />
                        Back to Blog
                    </Link>
                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-typocolor-primary border-malachite text-body border-l-4 pl-5 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}
                </div>

                {/* Body */}
                <div className="flex flex-col gap-5">
                    <PortableText value={post.body} components={ptComponents} />
                </div>

                <hr />

                {/* Tags */}
                {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-bkg-primary border-base text-typocolor-muted text-xmall shadow-soft rounded-full border px-4 py-2 font-semibold"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Author card */}
                {post.author && (
                    <div className="cardbox mx-auto flex w-fit items-start gap-6 p-6 px-12">
                        {post.author.photo ? (
                            <Image
                                src={post.author.photo}
                                alt={post.author.name}
                                width={52}
                                height={52}
                                className="shrink-0 rounded-full object-cover"
                            />
                        ) : (
                            <div className="bg-deepspace flex h-13 w-13 shrink-0 items-center justify-center rounded-full text-lg font-black text-white">
                                {post.author.name.charAt(0)}
                            </div>
                        )}
                        <div className="flex flex-col gap-1">
                            <span className="text-typocolor-primary text-small font-bold">
                                {post.author.name}
                            </span>
                            <span className="text-typocolor-secondary text-xmall font-semibold">
                                {post.author.role}
                            </span>
                        </div>
                    </div>
                )}

                <hr />

                {/* Related Posts */}
                {related?.length > 0 && (
                    <div className="section-vlex-gap">
                        <SectionHeader
                            heading="Related Article"
                            highlight="Article"
                        />
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {related.map((rel) => (
                                <div
                                    key={rel.slug}
                                    className="group hover:border-malachite cardbox flex flex-col overflow-hidden"
                                >
                                    <div className="bg-deepspace relative h-32 overflow-hidden">
                                        {rel.coverImage ? (
                                            <Image
                                                src={rel.coverImage}
                                                alt={rel.title}
                                                width={500}
                                                height={500}
                                                className="w-full object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src={DefBlogThumbnail}
                                                alt={rel.title}
                                                width={500}
                                                height={500}
                                                className="w-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-6 p-4">
                                        <h3 className="text-typocolor-primary text-small line-clamp-2 leading-snug font-bold">
                                            {rel.title}
                                        </h3>

                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={`/blog/${rel.slug}`}
                                                className="action-btn"
                                            >
                                                View Blog
                                            </Link>
                                            <span className="text-typocolor-muted text-xmall">
                                                {formatDate(rel.publishedAt)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </main>
    );
}
