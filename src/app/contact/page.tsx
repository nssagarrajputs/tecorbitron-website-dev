import type { Metadata } from "next";
import Channel from "./_components/Channel";
import TrustSignals from "@/app/contact/_components/TrustSignals";
import StructuredData, { contactSchema } from "@/components/StructuredData";
import PageHero from "@/components/basic-ui/PageHero";
import BookDiscoveryCall from "./_components/BookDiscoveryCall";
import FAQSection from "@/components/templetes/FAQFormat";
import ProjectInquiry from "./_components/ProjectInquiry";
import CTAFormat from "@/components/templetes/CTAFormat";

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

const faqdata = [
    {
        question: "How quickly do you respond to inquiries?",
        answer: "We respond to all inquiries within 24 hours on business days. For urgent projects, reach out via WhatsApp for a faster response.",
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes — our 30-minute discovery call is completely free. No sales pitch, just an honest conversation about your goals and how we can help.",
    },
    {
        question: "What information should I have ready before contacting you?",
        answer: "A rough idea of what you want to build, your timeline, and budget range. Don't worry if it's not fully formed — we help you shape the idea during the consultation.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely. We work with clients across India, UAE, UK, USA, and beyond. Remote collaboration is seamless — we adapt to your timezone.",
    },
    {
        question: "What happens after I submit the contact form?",
        answer: "You'll receive a confirmation email. Our team will review your project brief and get back within 24 hours with next steps or to schedule a discovery call.",
    },
    {
        question: "Is there a minimum project budget?",
        answer: "Our projects start from ₹25,000 for simple websites. For complex web apps, software, or AI solutions, budgets vary. We're transparent about pricing from day one.",
    },
];

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
            <ProjectInquiry />

            <BookDiscoveryCall />
            <TrustSignals />
            <FAQSection
                bg="bg-white"
                eyebrow="COMMON QUESTIONS"
                heading="Before You Reach Out"
                highlight="Out"
                support="Quick answers to the most common questions we get."
                items={faqdata}
            />
            <CTAFormat
                eypill="get in touch"
                heading="Need another way to reach us?"
                highlight="reach us?"
                bodyText="Visit our contact page for phone, email, WhatsApp, and office details."
                primaryAction={{
                    text: "Contact Us",
                    href: "/contact",
                }}
            />
        </main>
    );
}
