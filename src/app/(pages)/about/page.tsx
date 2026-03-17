import Hero from "@/components/page/about/Hero";
import MissionVision from "@/components/page/about/MissionVision";
import OurStory from "@/components/page/about/OurStory";
import Founder from "@/components/page/about/Founder";
import Credibility from "@/components/page/about/Credibility";
import CTA from "@/components/page/about/CTA";
import Intro from "@/components/page/about/Intro";
import TrustedPartners from "@/components/page/about/TrustedPartners";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Tecorbitron Solutions — a registered IT company based in Ghaziabad, NCR, India. Founded by Sagar Chauhan, we build web, app, and software solutions for businesses globally.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Tecorbitron Solutions",
        description:
            "A registered Private Limited IT company founded in 2024. Web, app, software, AI, and SEO services for businesses across India and beyond.",
        url: "https://www.tecorbitron.com/about",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function About() {
    return (
        <main>
            <Hero />
            <Intro />
            <OurStory />
            <MissionVision />
            <Founder />
            <Credibility />
            <TrustedPartners />
            <CTA />
        </main>
    );
}
