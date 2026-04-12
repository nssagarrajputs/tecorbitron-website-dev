import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ProjectInquiry from "./_components/ProjectInquiry";
import BookDiscoveryCall from "./_components/BookDiscoveryCall";
import CTA from "./_components/CTA";
import PageHero from "@/components/basic-ui/PageHero";

const startProjectSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Start Your Project with Tecorbitron",
    serviceType: "Project inquiry and consultation",
    provider: {
        "@type": "Organization",
        name: "Tecorbitron Solutions Private Limited",
        url: "https://www.tecorbitron.com",
    },
    areaServed: "Worldwide",
    availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.tecorbitron.com/start-your-project",
    },
};

export const metadata: Metadata = {
    title: "Start Your Project",
    description:
        "Tell Tecorbitron about your website, app, SaaS, AI, or custom software project. Share scope, budget, timeline, and book a free founder consultation.",
    alternates: { canonical: "/start-your-project" },
    openGraph: {
        title: "Start Your Project | Tecorbitron",
        description:
            "Share your project details, upload references, and book a free consultation with the founder.",
        url: "https://www.tecorbitron.com/start-your-project",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Start Your Project with Tecorbitron",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Start Your Project | Tecorbitron",
        description:
            "Get a project plan, timeline context, and a direct consultation path for your next digital product.",
        images: ["/og-image.png"],
    },
};

export default function StartYourProject() {
    return (
        <main>
            <StructuredData data={startProjectSchema} />
            <PageHero
                eyebrow="START Your PROJECT"
                title="Let’s talk about what you’re building"
                highlight="building"
                description="Share your idea, goals, and budget. Send a project inquiry or book a
            discovery call directly — whichever works best for you."
            />
            <ProjectInquiry />
            <BookDiscoveryCall />
            <CTA />
        </main>
    );
}
