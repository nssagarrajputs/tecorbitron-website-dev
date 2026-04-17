import OurStory from "@/app/about/_components/OurStory";
import Founder from "@/app/about/_components/Founder";
import Credibility from "@/app/about/_components/Credibility";
import Intro from "@/app/about/_components/Intro";
import TrustedPartners from "@/app/about/_components/TrustedPartners";
import type { Metadata } from "next";
import PageHero from "@/components/basic-ui/PageHero";
import CTAFormat from "@/components/templetes/CTAFormat";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Tecorbitron is a fast-growing IT company helping startups and businesses build high-performance websites, scalable apps, and custom software solutions. Founded by Sagar Chauhan, Based in Ghaziabad, NCR, India, serving clients worldwide.",

    keywords: [
        "About Tecorbitron",
        "Tecorbitron",
        "Tecorbitron Solutions Pvt Ltd",
        "IT company Ghaziabad",
        "Sagar Chauhan founder",
        "software development company India",
        "web development company NCR",
        "app development company Ghaziabad",
        "technology partner for startups",
        "digital product development company",
        "custom software company India",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Tecorbitron | Building Digital Products That Drive Growth",
        description:
            "Founded in 2024, Tecorbitron helps businesses turn ideas into powerful digital products — from websites and apps to custom software and AI solutions.",
        url: "https://www.tecorbitron.com/about",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Tecorbitron Solutions Pvt Ltd",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Tecorbitron | Web & App Development Company",
        description:
            "Learn how Tecorbitron helps startups and businesses build scalable digital solutions.",
        images: ["/og-image.png"],
    },
};

export default function About() {
    return (
        <main>
            <PageHero
                eyebrow="who we are"
                title="Built on Ambition. Driven by Results."
                highlight="Driven by Results."
                description="Discover our journey, mission, and the team behind our
                    innovative solutions — dedicated to transforming ideas into
                    exceptional experiences."
            />
            <Intro />
            <OurStory />
            <Founder />
            <Credibility />
            <TrustedPartners />
            <CTAFormat
                eypill="Work With Us"
                heading="Have a Project in Mind?"
                highlight="Mind?"
                bodyText="We're always open to new projects and partnerships. Tell us what you're building and we'll tell you honestly if we're the right fit."
                primaryAction={{
                    text: "View Our Services",
                    href: "/services",
                }}
                secondaryAction={{
                    text: "Contact Us",
                    href: "/contact",
                }}
            />
        </main>
    );
}
