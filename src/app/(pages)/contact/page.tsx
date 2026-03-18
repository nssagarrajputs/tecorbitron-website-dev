import type { Metadata } from "next";
import Hero from "@/components/page/contact/Hero";
import Channel from "@/components/page/contact/Channel";
import ContactSection from "@/components/page/contact/ContactSection";
import TrustSignals from "@/components/page/contact/TrustSignals";
import StructuredData, { contactSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Tecorbitron Solutions. Tell us about your project and we'll get back within 24 hours. Free consultation, no strings attached.",
    keywords: [
        "contact Tecorbitron",
        "hire IT company India",
        "web development consultation",
        "software project inquiry",
        "IT services Ghaziabad",
    ],
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Tecorbitron Solutions",
        description:
            "Start a project, book a free call, or just say hello. We respond within 24 hours.",
        url: "https://www.tecorbitron.com/contact",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function Contact() {
    return (
        <main>
            <StructuredData data={contactSchema()} />
            <Hero />
            <Channel />
            <ContactSection />
            <TrustSignals />
        </main>
    );
}
