import Hero from "@/components/page/careers/Hero";
import WhyJoinUs from "@/components/page/careers/WhyJoinUs";
import OpenPositions from "@/components/page/careers/OpenPositions";
import HiringProcess from "@/components/page/careers/HiringProcess";
import CareersCTA from "@/components/page/careers/CareersCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join the Tecorbitron team. We're hiring remote-first developers, designers, and marketers. Fast growth, real ownership, honest culture.",
    alternates: { canonical: "/careers" },
    openGraph: {
        title: "Careers at Tecorbitron Solutions",
        description:
            "Remote-first roles in engineering, design, and marketing. Build the future with us.",
        url: "https://www.tecorbitron.com/careers",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function CareersPage() {
    return (
        <main>
            <Hero />
            <WhyJoinUs />
            <OpenPositions />
            <HiringProcess />
            <CareersCTA />
        </main>
    );
}
