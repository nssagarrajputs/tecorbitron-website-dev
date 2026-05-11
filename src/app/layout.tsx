import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import StructuredData, { globalSchema } from "@/components/StructuredData";

const mulish = Mulish({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-mulish",
});

export const metadata: Metadata = {
    title: {
        default: "Tecorbitron | Web and App Development Solutions Company",
        template: "%s | Tecorbitron",
    },
    description:
        "Tecorbitron helps startups and businesses build high-converting websites, scalable apps, and custom software solutions. Get a free consultation and turn your idea into a powerful digital product.",
    keywords: [
        // Primary high-intent keywords
        "web development company India",
        "app development company India",
        "custom software development company",
        "hire web developer India",
        "hire app developer India",
        // Service-based long-tail
        "custom web development for startups",
        "saas development company India",
        "react js development company",
        "next js development agency",
        "mobile app development services",
        // Business intent keywords
        "build website for business",
        "software solutions for startups",
        "digital product development company",
        "IT company for startups India",
        // Brand
        "Tecorbitron",
        "Tecorbitron Solutions Pvt Ltd",
    ],

    // ── AUTHOR & PUBLISHER ─────────────────────────────
    authors: [{ name: "Tecorbitron Solutions Pvt. Ltd." }],
    creator: "Tecorbitron Solutions Pvt. Ltd.",
    publisher: "Tecorbitron Solutions Pvt. Ltd.",

    // ── CANONICAL & BASE URL ───────────────────────────
    metadataBase: new URL("https://www.tecorbitron.com"),
    alternates: {
        canonical: "/",
    },

    // ── FAVICON & ICONS ────────────────────────────────
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.tecorbitron.com",
        siteName: "Tecorbitron",
        title: "Websites & Apps That Generate Revenue | Tecorbitron",

        description:
            "We design, develop, and scale websites, apps, and software that drive real business growth. Trusted by startups and businesses worldwide.",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Solutions — Next-Gen IT Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tecorbitron | Web & App Solutions Development Company",
        description:
            "Build high-performance websites, apps, and software with Tecorbitron. Free consultation available.",
        images: ["/og-image.png"],
    },

    // ── EXTRA SEO BOOST ────────────────────────────
    category: "technology",

    // ── WEB MANIFEST ───────────────────────────────────
    manifest: "/site.webmanifest",

    // ── ROBOTS ─────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body className={`${mulish.variable}`}>
                <StructuredData data={globalSchema()} />
                <SpeedInsights />
                <Analytics />
                <Header />
                {children}
                <Footer />
            </body>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        </html>
    );
}
