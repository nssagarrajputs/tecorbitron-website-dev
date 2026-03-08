import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Web from "@/assets/services/services-web.jpg";
import App from "@/assets/services/services-app.jpg";
import Software from "@/assets/services/services-software.jpg";
import UIUX from "@/assets/services/services-UIUX.jpg";
import AI from "@/assets/services/services-ai-ml.jpg";

const services = [
    {
        id: "web-development",
        number: "01",
        name: "Web Development",
        tagline: "Fast, scalable websites that rank and convert.",
        image: Web,
        description:
            "We build high-performance websites and web applications using Next.js, React, and modern tech stacks. Every project is optimised for speed, SEO, and user experience — because a beautiful website that doesn't convert is just art.",
        features: [
            "Custom website design & development",
            "Next.js / React web applications",
            "E-commerce platforms & storefronts",
            "CMS integration (Sanity, WordPress)",
            "SEO-optimised architecture",
            "Performance & Core Web Vitals",
            "Post-launch support & maintenance",
        ],
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "Sanity",
        ],
        timeline: "2–6 weeks",
    },
    {
        id: "app-development",
        number: "02",
        name: "App Development",
        tagline: "Mobile apps users love — on iOS and Android.",
        image: App,
        description:
            "We design and develop cross-platform mobile applications using React Native. One codebase, two platforms — without compromising on performance or native feel. From MVP to full-scale product, we've got you covered.",
        features: [
            "iOS & Android app development",
            "React Native cross-platform apps",
            "UI/UX design for mobile",
            "API & backend integration",
            "Push notifications & analytics",
            "App Store & Play Store deployment",
            "Ongoing maintenance & updates",
        ],
        techStack: [
            "React Native",
            "Expo",
            "TypeScript",
            "Node.js",
            "Firebase",
            "AWS",
        ],
        timeline: "4–10 weeks",
    },
    {
        id: "seo-digital-marketing",
        number: "03",
        name: "SEO & Digital Marketing",
        tagline: "Get found. Get leads. Get results.",
        image: Web,
        description:
            "Data-driven SEO and marketing strategies that increase visibility, drive qualified traffic, and convert visitors into customers. Every campaign is tied to real business metrics — not just impressions.",
        features: [
            "On-page & technical SEO",
            "Local SEO & Google Business",
            "Content strategy & creation",
            "Google Ads (PPC) management",
            "Social media marketing",
            "Monthly performance reports",
            "Competitor analysis",
        ],
        techStack: [
            "Google Analytics",
            "Search Console",
            "SEMrush",
            "Google Ads",
            "Meta Ads",
        ],
        timeline: "Ongoing (3+ months)",
    },
    {
        id: "ui-ux-design",
        number: "04",
        name: "UI/UX Design",
        tagline: "Design that works as good as it looks.",
        image: UIUX,
        description:
            "Great design is not just about aesthetics — it's about guiding users to take action. We create user-centred designs that balance visual appeal with functionality, backed by research and tested with real users.",
        features: [
            "User research & persona development",
            "Wireframes & information architecture",
            "High-fidelity Figma prototypes",
            "Design systems & component libraries",
            "Usability testing & iteration",
            "Brand identity & visual design",
            "Handoff-ready developer assets",
        ],
        techStack: ["Figma", "FigJam", "Framer", "Adobe XD", "Maze"],
        timeline: "1–4 weeks",
    },
    {
        id: "custom-software",
        number: "05",
        name: "Custom Software Solutions",
        tagline: "Software that fits your business — not the other way.",
        image: Software,
        description:
            "Off-the-shelf software rarely fits perfectly. We build custom solutions — ERP systems, CRMs, dashboards, and automation tools — designed around your exact workflows, team, and scale requirements.",
        features: [
            "Custom ERP & CRM development",
            "Business process automation",
            "Internal dashboards & tools",
            "Third-party API integrations",
            "Data pipelines & reporting",
            "Legacy system modernisation",
            "Scalable cloud architecture",
        ],
        techStack: [
            "Node.js",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Docker",
        ],
        timeline: "6–16 weeks",
    },
    {
        id: "ai-solutions",
        number: "06",
        name: "AI Solutions",
        tagline: "Leverage AI to work smarter, not harder.",
        image: AI,
        description:
            "AI isn't just for big companies. We integrate intelligent automation, chatbots, smart analytics, and AI-powered workflows into your business — helping you save time, reduce costs, and make better decisions.",
        features: [
            "AI chatbot development",
            "Workflow automation with AI",
            "Smart analytics & insights",
            "NLP & document processing",
            "AI integration into existing products",
            "OpenAI / Gemini API integrations",
            "Custom ML model deployment",
        ],
        techStack: [
            "OpenAI",
            "LangChain",
            "Python",
            "TensorFlow",
            "AWS",
            "Node.js",
        ],
        timeline: "4–12 weeks",
    },
];

export default function ServicesDetail() {
    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-28">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        id={service.id}
                        className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center ${
                            index % 2 !== 0
                                ? "lg:[&>div:first-child]:order-2"
                                : ""
                        }`}
                    >
                        {/* ── Content ── */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <span className="text-deepspace/8 text-6xl leading-none font-black">
                                    {service.number}
                                </span>
                                <div className="flex flex-col gap-1 pt-1">
                                    <div className="bg-malachite-dim inline-flex w-fit items-center gap-2 rounded-full px-3 py-1">
                                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                                            {service.name}
                                        </span>
                                    </div>
                                    <p className="text-muted text-sm font-semibold">
                                        {service.tagline}
                                    </p>
                                </div>
                            </div>

                            <p className="text-muted text-base leading-relaxed font-light">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="flex flex-col gap-2.5">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2.5"
                                    >
                                        <span className="bg-malachite-dim mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 5l2 2 4-4"
                                                    stroke="#00a34b"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-subtle text-sm font-medium">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="mt-2 flex justify-center md:justify-start">
                                <Link
                                    href="/contact"
                                    className="bg-malachite-soft text-deepspace-deep hover:bg-malachite inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    {"Let's Build Something Great"}
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* ── Visual Card ── */}
                        <div className="relative min-h-80 overflow-hidden rounded-2xl">
                            {/* Background image */}
                            <Image
                                src={service.image}
                                alt={service.name}
                                fill
                                className="object-cover"
                            />

                            {/* Bottom gradient for extra contrast under tech stack */}
                            <div className="from-deepspace-deep absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t to-transparent" />

                            {/* Content on top */}
                            <div className="relative z-10 flex h-full min-h-80 flex-col justify-end p-7">
                                {/* Tech stack — bottom */}
                                <div className="flex flex-col gap-3">
                                    <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">
                                        Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
