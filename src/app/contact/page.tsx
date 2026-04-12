import type { Metadata } from "next";
import Channel from "@/app/contact/_components/Channel";
import TrustSignals from "@/app/contact/_components/TrustSignals";
import StructuredData, { contactSchema } from "@/components/StructuredData";
import FAQ from "@/app/contact/_components/FAQ";
import PageHero from "@/components/basic-ui/PageHero";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Have an idea or project in mind? Contact Tecorbitron for a free consultation. Get a clear plan, timeline, and cost within 24 hours. No commitment required.",
    keywords: [
        // High intent (VERY IMPORTANT)
        "hire web developer India",
        "hire app developer India",
        "contact software development company",
        "start a project web development",
        "book free consultation IT company",

        // Conversion intent
        "get website development quote",
        "app development consultation India",
        "custom software inquiry",
        "IT company contact India",

        // Local + brand
        "Tecorbitron contact",
        "IT company Ghaziabad contact",
        "software company NCR India",
    ],
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Start Your Project Today | Free Consultation | Tecorbitron",

        description:
            "Tell us about your idea and get a clear plan within 24 hours. Free consultation, transparent pricing, and expert guidance.",

        url: "https://www.tecorbitron.com/contact",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Tecorbitron — Start Your Project",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Tecorbitron | Start Your Project",
        description:
            "Book a free consultation and build your website, app, or software with experts.",
        images: ["/og-image.png"],
    },
};

export default function Contact() {
    return (
        <main>
            <StructuredData data={contactSchema()} />

            <PageHero
                eyebrow="Get in Touch"
                title="Let's Connect"
                highlight="Connect"
                description="Tell us about your project and we'll get back to you within 24 hours. Free consultation, no strings attached."
            />
            <Channel />
            <TrustSignals />
            <FAQ />
        </main>
    );
}
