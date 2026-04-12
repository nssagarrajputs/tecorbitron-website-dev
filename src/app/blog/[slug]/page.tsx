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
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { client } from "@/sanity/client";
import NewsletterCTA from "@/app/blog/_components/NewsletterCTA";
import { BLOG_DETAIL_QUERY, BLOG_RELATED_QUERY } from "@/sanity/queries/blog";
import StructuredData, { blogPostSchema } from "@/components/StructuredData";

// ─── Types ────────────────────────────────────────────────────────────────────

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
    readTime: number;
    coverImage: string | null;
    category: string;
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
            <p className="text-base leading-relaxed">{children}</p>
        ),
        h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h2 className="text-deepspace mt-10 mb-4 scroll-mt-28 text-2xl font-black">
                {children}
            </h2>
        ),
        h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h3 className="text-deepspace mt-8 mb-3 scroll-mt-28 text-xl font-black">
                {children}
            </h3>
        ),
        h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
            <h4 className="text-deepspace mt-6 mb-2 text-lg font-black">
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
            <li className="text-subtle flex gap-2.5 text-base leading-relaxed font-light">
                <span className="text-malachite mt-1.5 shrink-0">•</span>
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
                <div className="border-border overflow-hidden rounded-2xl border">
                    <Image
                        src={value.asset?.url}
                        alt={value.alt ?? "Blog image"}
                        width={800}
                        height={450}
                        className="w-full object-cover"
                    />
                </div>
                {value.caption && (
                    <figcaption className="text-muted mt-2 text-center text-xs font-medium">
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
            {/* ── HERO ── */}
            <section className="relative w-full overflow-hidden">
                <div className="bg-deepspace relative h-72 w-full sm:h-96 lg:h-120">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                            <span className="text-9xl font-black text-white/10">
                                {post.title.charAt(0)}
                            </span>
                        </div>
                    )}

                    {/* Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(7,30,45,0.97) 0%, rgba(7,30,45,0.5) 55%, transparent 100%)",
                        }}
                    />

                    {/* Title overlay */}
                    <div className="absolute right-0 bottom-0 left-0 px-4 pb-10">
                        <div className="mx-auto flex max-w-6xl flex-col gap-4">
                            {post.category && (
                                <span className="border-malachite/30 bg-malachite/10 text-malachite w-fit rounded-full border px-3 py-0.5 text-xs font-bold backdrop-blur-sm">
                                    {post.category}
                                </span>
                            )}
                            <h1 className="text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>
                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/50">
                                {post.author?.name && (
                                    <span className="flex items-center gap-1.5">
                                        <User size={11} />
                                        {post.author.name}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={11} />
                                    {formatDate(post.publishedAt)}
                                </span>
                                {post.readTime && (
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={11} />
                                        {post.readTime} min read
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── CONTENT ── */}
            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_240px]">
                        {/* ── MAIN ── */}
                        <article className="flex min-w-0 flex-col gap-6">
                            {/* Back */}
                            <Link
                                href="/blog"
                                className="text-muted hover:text-deepspace inline-flex w-fit items-center gap-1.5 text-xs font-bold transition-colors duration-200"
                            >
                                <ArrowLeft size={13} /> Back to Blog
                            </Link>

                            {/* Excerpt */}
                            {post.excerpt && (
                                <p className="text-deepspace border-malachite border-l-4 pl-5 text-lg leading-relaxed">
                                    {post.excerpt}
                                </p>
                            )}

                            {/* Body */}
                            <div className="flex flex-col gap-5">
                                <PortableText
                                    value={post.body}
                                    components={ptComponents}
                                />
                            </div>

                            {/* Tags */}
                            {post.tags?.length > 0 && (
                                <div className="border-border mt-2 flex flex-wrap gap-2 border-t pt-6">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-surface border-border text-muted rounded-full border px-3 py-1 text-xs font-semibold"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Author card */}
                            {post.author && (
                                <div className="bg-surface border-border mt-2 flex items-start gap-4 rounded-2xl border p-5">
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
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-deepspace text-sm font-black">
                                            {post.author.name}
                                        </span>
                                        <span className="text-muted text-xs font-medium">
                                            {post.author.role}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Related Posts */}
                            {related?.length > 0 && (
                                <div className="border-border mt-2 flex flex-col gap-5 border-t pt-8">
                                    <h2 className="text-deepspace text-lg font-black">
                                        More Articles
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {related.map((rel) => (
                                            <Link
                                                key={rel.slug}
                                                href={`/blog/${rel.slug}`}
                                                className="group border-border bg-surface hover:border-malachite flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                <div className="bg-deepspace relative h-32 overflow-hidden">
                                                    {rel.coverImage ? (
                                                        <Image
                                                            src={rel.coverImage}
                                                            alt={rel.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            sizes="(max-width: 640px) 100vw, 33vw"
                                                        />
                                                    ) : (
                                                        <div className="from-deepspace to-deepspace-soft flex h-full items-center justify-center bg-linear-to-br">
                                                            <span className="text-3xl font-black text-white/10">
                                                                {rel.title.charAt(
                                                                    0,
                                                                )}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-1.5 p-4">
                                                    {rel.category && (
                                                        <span className="text-malachite-rich text-xs font-bold">
                                                            {rel.category}
                                                        </span>
                                                    )}
                                                    <h3 className="text-deepspace group-hover:text-malachite-rich line-clamp-2 text-sm leading-snug font-black transition-colors duration-200">
                                                        {rel.title}
                                                    </h3>
                                                    <span className="text-muted mt-0.5 text-xs font-medium">
                                                        {formatDate(
                                                            rel.publishedAt,
                                                        )}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>

                        {/* ── SIDEBAR ── */}
                        <aside className="sticky top-28 hidden h-fit flex-col gap-4 lg:flex">
                            {/* Author */}
                            {post.author && (
                                <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                    <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                        Written by
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        {post.author.photo ? (
                                            <Image
                                                src={post.author.photo}
                                                alt={post.author.name}
                                                width={40}
                                                height={40}
                                                className="shrink-0 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="bg-deepspace flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-black text-white">
                                                {post.author.name.charAt(0)}
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-deepspace text-sm font-black">
                                                {post.author.name}
                                            </span>
                                            <span className="text-muted text-xs font-medium">
                                                {post.author.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Post meta */}
                            <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                    Post Info
                                </h3>
                                <div className="flex flex-col gap-2.5 text-xs">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted font-medium">
                                            Published
                                        </span>
                                        <span className="text-deepspace font-bold">
                                            {formatDate(post.publishedAt)}
                                        </span>
                                    </div>
                                    {post.readTime && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted font-medium">
                                                Read time
                                            </span>
                                            <span className="text-deepspace font-bold">
                                                {post.readTime} min
                                            </span>
                                        </div>
                                    )}
                                    {post.category && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted font-medium">
                                                Category
                                            </span>
                                            <span className="text-malachite-rich font-bold">
                                                {post.category}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tags */}
                            {post.tags?.length > 0 && (
                                <div className="bg-surface border-border flex flex-col gap-3 rounded-2xl border p-5">
                                    <h3 className="text-muted text-xs font-black tracking-wider uppercase">
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="border-border text-muted rounded-full border bg-white px-2.5 py-0.5 text-xs font-semibold"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-deepspace flex flex-col gap-3 rounded-2xl p-5">
                                <p className="text-malachite text-xs font-black tracking-wider uppercase">
                                    Need help?
                                </p>
                                <p className="text-xs leading-relaxed font-light text-white/50">
                                    We build fast, modern websites and apps for
                                    businesses like yours.
                                </p>
                                <Link
                                    href="/contact"
                                    className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200"
                                >
                                    Get in Touch <ArrowRight size={12} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <NewsletterCTA />
        </main>
    );
}
