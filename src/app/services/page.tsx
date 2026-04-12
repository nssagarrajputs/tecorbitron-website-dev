import ServicesDetail from "@/app/services/_components/ServicesDetail";
import WhoWeWorkWith from "@/app/services/_components/WhoWeWorkWith";
import ComparisonTable from "@/app/services/_components/ComparisonTable";
import FAQs from "@/app/services/_components/FAQs";
import CTA from "@/app/services/_components/CTA";
import type { Metadata } from "next";
import StructuredData, { servicesSchema } from "@/components/StructuredData";
import PageHero from "@/components/basic-ui/PageHero";

export const metadata: Metadata = {
    title: "Web, App & Software Development Services",
    description:
        "Explore Tecorbitron’s services — high-converting websites, scalable mobile apps, custom software, AI solutions, and SEO strategies designed to help your business grow faster.",
    keywords: [
        "web development services for startups",
        "app development services India",
        "custom software development company India",
        "hire web developers India",
        "hire app developers India",
        // Service-specific
        "next js development services",
        "react development company India",
        "mobile app development services India",
        "ui ux design agency for startups",
        "ai development company India",
        // Business intent
        "build website for business",
        "digital product development company",
        "software solutions for startups",
        "startup tech partner India",
        // Brand
        "Tecorbitron services",
        "Tecorbitron Solutions",
    ],
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Services That Help You Build & Scale Faster | Tecorbitron",

        description:
            "From websites and apps to AI and custom software — we build digital solutions that drive real business results. Fast delivery. Transparent pricing.",

        url: "https://www.tecorbitron.com/services",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Tecorbitron Services — Web, App & Software Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web, App & Software Development Services | Tecorbitron",
        description:
            "Build scalable digital products with Tecorbitron. Websites, apps, software & AI solutions.",
        images: ["/og-image.png"],
    },
};

export default function Services() {
    return (
        <main>
            <StructuredData data={servicesSchema()} />
            <PageHero
                eyebrow="What We Do"
                title="Services Built to Move"
                highlight="Move"
                description="From idea to execution — technical services drafted to your goals, timeline, and budget. No cookie-cutter solutions, only what works for you."
            />
            <ServicesDetail />
            <WhoWeWorkWith />
            <ComparisonTable />
            <FAQs />
            <CTA />
        </main>
    );
}
