import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const mulish = Mulish({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-mulish",
});

export const metadata: Metadata = {
    title: {
        default: "Tecorbitron | Software consulting and Development",
        template: "%s | Tecorbitron",
    },
    description:
        "Tecorbitron Solutions Pvt. Ltd. is a global IT services company specializing in Web Development, App Development, Software Solutions, Cloud, AI/ML, and UI/UX design. We help businesses innovate and scale with technology-driven solutions.",
    keywords: [
        "Tecorbitron",
        "software development",
        "web development",
        "app development",
        "IT services",
        "cloud solutions",
        "AI/ML services",
        "technology consulting",
        "UI/UX design",
        "enterprise software",
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
        <html lang="en" suppressHydrationWarning>
            <body className={`${mulish.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
