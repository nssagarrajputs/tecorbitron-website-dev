import WhyJoinUs from "@/app/careers/_components/WhyJoinUs";
import OpenPositions from "@/app/careers/_components/OpenPositions";
import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join the Tecorbitron team. We're hiring remote-first developers, designers, and marketers. Fast growth, real ownership, honest culture.",
    keywords: [
        "Tecorbitron careers",
        "IT jobs remote India",
        "web developer jobs India",
        "software company hiring",
        "remote tech jobs India",
    ],
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
            <PageHero
                eyebrow="Careers"
                title="Build the Future With Us"
                highlight="With Us"
                description="
We're a small but ambitious team building next-gen digital products. If you love technology, care about craft, and want your work to actually matter — you'll fit right in."
            />
            <WhyJoinUs />
            <OpenPositions />
        </main>
    );
}
