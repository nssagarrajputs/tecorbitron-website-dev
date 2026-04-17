import ServicesDetail from "@/app/services/_components/ServicesDetail";
import WhoWeWorkWith from "@/app/services/_components/WhoWeWorkWith";
import ComparisonTable from "@/app/services/_components/ComparisonTable";
import type { Metadata } from "next";
import StructuredData, { servicesSchema } from "@/components/StructuredData";
import PageHero from "@/components/basic-ui/PageHero";
import FAQFormat from "@/components/templetes/FAQFormat";
import Process from "./_components/Process";
import CTAFormat from "@/components/templetes/CTAFormat";

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

const faqdata = [
    {
        question: "How long does it take to build a website?",
        answer: "Most business websites take 2–4 weeks. E-commerce platforms or complex web apps take 4–8 weeks. We always give you a clear timeline before starting, and we stick to it.",
    },
    {
        question: "What is your pricing? Do you have fixed packages?",
        answer: "We offer three engagement models — Fixed Price (starting ₹25,000), Monthly Retainer (starting ₹15,000/mo), and Dedicated Resource (custom). All pricing is transparent with no hidden costs.",
    },
    {
        question: "How many revisions do I get?",
        answer: "All projects include at least 2 rounds of revisions. For design projects, we do revisions until you're happy — within the agreed scope. We want you to love what we build.",
    },
    {
        question: "What technologies do you use?",
        answer: "We primarily use Next.js, React, TypeScript, Node.js, and Tailwind CSS for web. React Native for mobile. Figma for design. We choose the best tool for each project — not just what we're comfortable with.",
    },
    {
        question: "Do you provide support after the project is delivered?",
        answer: "Yes. Every project includes 30 days of post-launch support. Beyond that, we offer AMC (Annual Maintenance Contracts) and monthly retainer plans to keep your product running smoothly.",
    },
    {
        question: "Can you work with our existing team or codebase?",
        answer: "Absolutely. We regularly work alongside in-house teams, integrate with existing codebases, and adapt to your tools and workflows. We're flexible.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes. We work with clients across India, USA, UK, UAE, and beyond. We're comfortable with different time zones and communicate in English. Payments in multiple currencies accepted.",
    },
    {
        question: "What if I'm not sure which service I need?",
        answer: "Book a free 30-minute discovery call. We'll understand your goals and recommend the right solution — honestly, even if that means telling you what you don't need.",
    },
    {
        question: "Are you a registered company?",
        answer: "Yes. We are Tecorbitron Solutions Pvt. Ltd., incorporated in August 2024, GST registered, and based in Ghaziabad, NCR, India. Full company details available on our About page.",
    },
    {
        question: "How do we communicate during the project?",
        answer: "We keep it simple — WhatsApp for quick updates, email for formal communication, and weekly video calls for project reviews. You always know what's happening.",
    },
];

export default function Services() {
    return (
        <main>
            <StructuredData data={servicesSchema()} />
            <PageHero
                eyebrow="What We OFFER"
                title="Services Built Around Your Goals"
                highlight="Your Goals"
                description="Technical services scoped to your business — not cookie-cutter packages. From first website to enterprise software, work within your timeline and budget."
            />
            <ServicesDetail />
            <Process />
            <WhoWeWorkWith />
            <ComparisonTable />
            <FAQFormat
                bg="bg-bkg-primary"
                eyebrow="FAQS"
                heading="Questions We Get Asked"
                highlight="Asked"
                support="Everything you need to know."
                items={faqdata}
            />
            <CTAFormat
                eypill="FREE CONSULTATION"
                heading="Not Sure Where to Begin?"
                highlight="Begin?"
                bodyText="Book a free 30-minute discovery call. No sales pitch — just an honest conversation about your goals and the best way to move forward."
                primaryAction={{
                    text: "Book Discovery Call",
                    href: "/contact",
                }}
                secondaryAction={{
                    text: "View Our Work",
                    href: "/portfolio",
                }}
            />
        </main>
    );
}
