// ─── Renderer ─────────────────────────────────────────────────────────────────

export default function StructuredData({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── Global — layout.tsx ──────────────────────────────────────────────────────

export function globalSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tecorbitron.com/#organization",
                name: "Tecorbitron Solutions Pvt. Ltd.",
                url: "https://www.tecorbitron.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.tecorbitron.com/android-chrome-512x512.png",
                },
                foundingDate: "2024",
                founders: [{ "@type": "Person", name: "Sagar Chauhan" }],
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ghaziabad",
                    addressRegion: "Uttar Pradesh",
                    addressCountry: "IN",
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-9084800496",
                    contactType: "customer service",
                    availableLanguage: ["English", "Hindi"],
                },
                sameAs: [
                    "https://www.linkedin.com/company/tecorbitrons",
                    "https://www.instagram.com/tecorbitron",
                    "https://www.facebook.com/tecorbitron",
                    "https://www.youtube.com/@Tecorbitron",
                ],
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tecorbitron.com/#website",
                url: "https://www.tecorbitron.com",
                name: "Tecorbitron Solutions",
                publisher: {
                    "@id": "https://www.tecorbitron.com/#organization",
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.tecorbitron.com/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
        ],
    };
}

// ─── Services ─────────────────────────────────────────────────────────────────

export function servicesSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "IT Services by Tecorbitron",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@type": "Service",
                    name: "Web Development",
                    url: "https://www.tecorbitron.com/services#web-development",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "High-performance websites and web apps built with Next.js, React, and modern tech stacks.",
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "Service",
                    name: "App Development",
                    url: "https://www.tecorbitron.com/services#app-development",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "Native and cross-platform mobile apps for iOS and Android using React Native.",
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "Service",
                    name: "SEO & Digital Marketing",
                    url: "https://www.tecorbitron.com/services#seo-digital-marketing",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "Data-driven SEO and marketing strategies that increase visibility and drive organic traffic.",
                },
            },
            {
                "@type": "ListItem",
                position: 4,
                item: {
                    "@type": "Service",
                    name: "UI/UX Design",
                    url: "https://www.tecorbitron.com/services#ui-ux-design",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "User-centred design from wireframes to polished Figma prototypes and design systems.",
                },
            },
            {
                "@type": "ListItem",
                position: 5,
                item: {
                    "@type": "Service",
                    name: "Custom Software Solutions",
                    url: "https://www.tecorbitron.com/services#custom-software",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "Tailor-made ERP, CRM, dashboards, and automation tools built for your exact workflows.",
                },
            },
            {
                "@type": "ListItem",
                position: 6,
                item: {
                    "@type": "Service",
                    name: "AI Solutions",
                    url: "https://www.tecorbitron.com/services#ai-solutions",
                    provider: {
                        "@id": "https://www.tecorbitron.com/#organization",
                    },
                    description:
                        "AI chatbots, automation pipelines, smart analytics, and AI-integrated workflows.",
                },
            },
        ],
    };
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function contactSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.tecorbitron.com/contact/#webpage",
        url: "https://www.tecorbitron.com/contact",
        name: "Contact Tecorbitron Solutions",
        description:
            "Get in touch with Tecorbitron Solutions. Free consultation within 24 hours.",
        isPartOf: { "@id": "https://www.tecorbitron.com/#website" },
    };
}

// ─── Blog Post (dynamic) ──────────────────────────────────────────────────────

export function blogPostSchema(post: {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    coverImage: string | null;
    author?: { name: string } | null;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://www.tecorbitron.com/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage ?? "https://www.tecorbitron.com/og-image.png",
        datePublished: post.publishedAt,
        author: {
            "@type": "Person",
            name: post.author?.name ?? "Sagar Chauhan",
            url: "https://www.linkedin.com/in/nssagarrajput",
        },
        publisher: {
            "@id": "https://www.tecorbitron.com/#organization",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.tecorbitron.com/blog/${post.slug}`,
        },
    };
}

// ─── Portfolio Project (dynamic) ─────────────────────────────────────────────

export function portfolioProjectSchema(proj: {
    title: string;
    slug: string;
    summary?: string;
    thumbnail: string | null;
    completedAt?: string;
    techStack?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `https://www.tecorbitron.com/portfolio/${proj.slug}/#creativework`,
        name: proj.title,
        description: proj.summary ?? proj.title,
        image: proj.thumbnail ?? "https://www.tecorbitron.com/og-image.png",
        url: `https://www.tecorbitron.com/portfolio/${proj.slug}`,
        creator: { "@id": "https://www.tecorbitron.com/#organization" },
        dateCreated: proj.completedAt,
        keywords: proj.techStack?.join(", "),
    };
}
