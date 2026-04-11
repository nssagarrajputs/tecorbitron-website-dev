import Link from "next/link";
import { ArrowRight } from "lucide-react";

import webapp from "@/assets/home/services-card/web-app.png";
import seo from "@/assets/home/services-card/seo-dg.png";
import software from "@/assets/home/services-card/custom-software.png";
import ai from "@/assets/home/services-card/cloud-ai.png";
import Image from "next/image";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import SectionAction from "@/components/basic-ui/SectionAction";

// ── DATA ───────────────────────────────────────────
const services = [
    {
        icon: webapp,
        name: "Web & App Development",
        description:
            "We build fast, scalable websites and applications that help businesses launch, operate, and grow with confidence.",
        tags: [
            "Business Websites",
            "Web Apps",
            "Dashboards",
            "E-Commerce",
            "Mobile Apps",
        ],
    },
    {
        icon: seo,
        name: "SEO & Digital Growth",
        description:
            "We improve visibility, attract qualified traffic, and turn digital channels into measurable business growth.",
        tags: [
            "Technical SEO",
            "Local SEO",
            "Google Ads",
            "Social Media",
            "Performance Tracking",
        ],
    },
    {
        icon: software,
        name: "Custom Software Solutions",
        description:
            "We create tailored business software that simplifies operations, connects workflows, and reduces manual work.",
        tags: [
            "ERP Systems",
            "CRM Platforms",
            "Workflow Automation",
            "Order Management",
            "Internal Business Tools",
        ],
    },
    {
        icon: ai,
        name: "Cloud & AI Integration",
        description:
            "We integrate cloud infrastructure and AI tools to automate tasks, improve decisions, and scale systems efficiently.",
        tags: [
            "AI Chatbots",
            "AI Assistants",
            "Smart Search",
            "Cloud Deployment",
            "Database",
        ],
    },
];

export default function CoreServices() {
    return (
        <section className="bg-bkg-primary h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Core services"
                    heading="Services Designed to Grow Your Business"
                    highlight="Business"
                    support="From idea to launch — we offer end-to-end services designed to help businesses launch, operate, and scale with confidence."
                />

                {/* service card */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="hover:border-malachite flex flex-col justify-between gap-4 rounded-2xl border border-transparent bg-white p-6 transition-all duration-300"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Icon */}
                                <div className="flex h-18 w-18 items-center justify-center select-none">
                                    <Image src={service.icon} alt="S" />
                                </div>

                                {/* Name */}
                                <h3 className="text-deepspace-rich text-h4 font-bold">
                                    {service.name}
                                </h3>

                                <p className="text-typocolor-secondary text-small mb-4">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-surface text-typocolor-muted text-xmall rounded-full px-2 py-0.5 font-semibold select-none"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link */}
                            <Link
                                href="/services"
                                className="text-malachite-rich text-xmall mt-4 flex items-center gap-1.5 font-bold transition-all duration-200 select-none hover:gap-2.5"
                            >
                                Explore More
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <SectionAction url="/services" name="View All Services" />
            </div>
        </section>
    );
}
