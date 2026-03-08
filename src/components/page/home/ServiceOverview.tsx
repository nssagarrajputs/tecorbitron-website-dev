import Link from "next/link";
import {
    ArrowRight,
    Cpu,
    FileCodeCorner,
    ServerCog,
    Smartphone,
    Sparkle,
    SplinePointer,
} from "lucide-react";

// ── DATA ───────────────────────────────────────────

const services = [
    {
        icon: <FileCodeCorner />,
        name: "Web Development",
        description:
            "High-performance websites and web apps built with Next.js, React, and modern tech stacks. Fast, scalable, and SEO-ready.",
        tags: ["Next.js", "React", "Node.js"],
        href: "/services",
    },
    {
        icon: <Smartphone />,
        name: "App Development",
        description:
            "Native and cross-platform mobile apps for iOS and Android. Built with React Native for seamless performance on all devices.",
        tags: ["React Native", "iOS", "Android"],
        href: "/services",
    },
    {
        icon: <ServerCog />,
        name: "SEO & Digital Marketing",
        description:
            "Data-driven SEO and marketing strategies that increase visibility, drive organic traffic, and convert visitors into customers.",
        tags: ["SEO", "Google Ads", "Social Media"],
        href: "/services",
    },
    {
        icon: <SplinePointer />,
        name: "UI/UX Design",
        description:
            "User-centred design that balances aesthetics and functionality. From wireframes to polished Figma prototypes and design systems.",
        tags: ["Figma", "Prototyping", "Design Systems"],
        href: "/services",
    },
    {
        icon: <Cpu />,
        name: "Custom Software",
        description:
            "Tailor-made software solutions — ERP, CRM, dashboards, and automation tools built to fit your exact business workflows.",
        tags: ["ERP", "CRM", "Automation"],
        href: "/services",
    },
    {
        icon: <Sparkle />,
        name: "AI Solutions",
        description:
            "Leverage the power of AI — chatbots, automation pipelines, smart analytics, and AI-integrated workflows for your business.",
        tags: ["AI Integration", "Automation", "ML"],
        href: "/services",
    },
];

// ── COMPONENT ──────────────────────────────────────

export default function ServiceOverview() {
    return (
        <section className="bg-surface px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            What We Do
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        Services Built to{" "}
                        <span className="text-malachite">Scale</span>
                    </h2>
                    <p className="text-muted max-w-xl text-base leading-relaxed font-light">
                        From idea to launch — we offer end-to-end technology
                        services designed to help businesses grow faster and
                        smarter.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="group hover:shadow-deepspace/5 hover:border-malachite flex flex-col gap-4 rounded-2xl border border-transparent bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="bg-malachite-dim text-malachite-rich group-hover:bg-malachite flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white">
                                {service.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-deepspace text-lg font-bold">
                                {service.name}
                            </h3>

                            {/* Description */}
                            <p className="text-muted flex-1 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-surface text-subtle rounded-full px-3 py-1 text-xs font-semibold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <Link
                                href={service.href}
                                className="text-malachite-rich inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 hover:gap-2.5"
                            >
                                Learn More
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/services"
                        className="border-border text-deepspace hover:border-malachite hover:text-malachite inline-flex items-center gap-2 rounded-lg border bg-white px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View All Services
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
