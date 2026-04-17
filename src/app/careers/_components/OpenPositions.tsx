"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Clock,
    Briefcase,
    ChevronDown,
} from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";

const positions = [
    {
        id: 1,
        title: "Frontend Developer",
        type: "Full-time",
        mode: "Remote",
        experience: "1–3 years",
        department: "Engineering",
        description:
            "We're looking for a skilled frontend developer who loves building beautiful, fast, and accessible web interfaces. You'll work closely with our design and backend teams to ship polished products.",
        responsibilities: [
            "Build responsive UIs with Next.js, React, and Tailwind CSS",
            "Collaborate with designers to implement pixel-perfect designs",
            "Optimise for performance, SEO, and Core Web Vitals",
            "Write clean, maintainable, well-documented code",
            "Participate in code reviews and technical discussions",
        ],
        requirements: [
            "Strong proficiency in React and Next.js",
            "Experience with TypeScript and Tailwind CSS",
            "Understanding of web performance and SEO basics",
            "Familiarity with Git and modern dev workflows",
            "Good communication skills in English",
        ],
        niceToHave: [
            "Sanity or other headless CMS experience",
            "Framer Motion animations",
            "UI/UX sensibility",
        ],
    },
    {
        id: 2,
        title: "SEO & Content Specialist",
        type: "Full-time",
        mode: "Remote",
        experience: "1–2 years",
        department: "Marketing",
        description:
            "We need a data-driven SEO specialist who can build and execute content strategies that drive organic growth for our clients and our own brand.",
        responsibilities: [
            "Conduct keyword research and competitor analysis",
            "Create and optimise SEO-friendly content",
            "Manage on-page and technical SEO for client websites",
            "Monitor and report on rankings, traffic, and conversions",
            "Manage Google Business profiles and local SEO",
        ],
        requirements: [
            "Hands-on experience with SEMrush, Ahrefs, or similar tools",
            "Strong writing and editing skills",
            "Understanding of technical SEO fundamentals",
            "Familiarity with Google Analytics and Search Console",
            "Ability to manage multiple client accounts",
        ],
        niceToHave: [
            "Google Ads experience",
            "Video SEO knowledge",
            "Content marketing background",
        ],
    },
    {
        id: 3,
        title: "UI/UX Designer",
        type: "Freelance / Part-time",
        mode: "Remote",
        experience: "1–3 years",
        department: "Design",
        description:
            "We're looking for a talented designer who can create beautiful, user-centred designs for web and mobile products. You'll own design end-to-end — from wireframes to final handoff.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity designs in Figma",
            "Develop and maintain design systems and component libraries",
            "Collaborate closely with developers during implementation",
            "Conduct usability reviews and iterate based on feedback",
            "Contribute to brand identity and visual direction",
        ],
        requirements: [
            "Strong Figma skills — components, auto-layout, prototyping",
            "Portfolio demonstrating web and/or mobile design work",
            "Understanding of responsive design principles",
            "Eye for typography, spacing, and visual hierarchy",
            "Ability to give and receive design feedback",
        ],
        niceToHave: [
            "Motion design experience",
            "Framer prototyping",
            "Illustration skills",
        ],
    },
];

const departmentColors: Record<string, string> = {
    Engineering: "bg-deepspace-dim text-deepspace",
    Marketing: "bg-malachite-dim text-malachite-rich",
    Design: "bg-surface text-subtle border border-border",
};

function PositionCard({ position }: { position: (typeof positions)[0] }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`rounded-2xl border transition-all duration-300 ${open ? "border-malachite shadow-deepspace/5 bg-white shadow-lg" : "border-border hover:border-malachite/40 bg-white"}`}
        >
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-start justify-between gap-4 p-6 text-left"
            >
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span
                            className={`rounded-full px-3 py-0.5 text-xs font-bold ${departmentColors[position.department]}`}
                        >
                            {position.department}
                        </span>
                        <span className="bg-surface border-border text-subtle rounded-full border px-3 py-0.5 text-xs font-semibold">
                            {position.type}
                        </span>
                    </div>
                    <h3 className="text-deepspace text-lg font-black">
                        {position.title}
                    </h3>
                    <div className="text-muted flex flex-wrap items-center gap-3 text-xs font-medium">
                        <span className="flex items-center gap-1">
                            <MapPin size={11} /> {position.mode}
                        </span>
                        <span className="flex items-center gap-1">
                            <Briefcase size={11} /> {position.experience}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={11} /> {position.type}
                        </span>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`text-muted mt-1 shrink-0 transition-transform duration-300 ${open ? "text-malachite rotate-180" : ""}`}
                />
            </button>

            {/* Expanded */}
            {open && (
                <div className="border-border flex flex-col gap-6 border-t px-6 pt-5 pb-6">
                    <p className="text-muted text-sm leading-relaxed font-light">
                        {position.description}
                    </p>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Responsibilities */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-deepspace text-xs font-black tracking-wider uppercase">
                                Responsibilities
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {position.responsibilities.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2.5"
                                    >
                                        <span className="bg-malachite-dim mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                                            <svg
                                                width="8"
                                                height="8"
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
                                        <span className="text-subtle text-xs leading-relaxed font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div className="flex flex-col gap-3">
                            <h4 className="text-deepspace text-xs font-black tracking-wider uppercase">
                                Requirements
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {position.requirements.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2.5"
                                    >
                                        <span className="bg-deepspace/30 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                                        <span className="text-subtle text-xs leading-relaxed font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Nice to have */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-muted text-xs font-black tracking-wider uppercase">
                            Nice to Have
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {position.niceToHave.map((item) => (
                                <span
                                    key={item}
                                    className="border-border bg-surface text-subtle rounded-full border px-3 py-1 text-xs font-semibold"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Apply CTA */}
                    <div className="border-border flex flex-wrap items-center gap-3 border-t pt-2">
                        <Link
                            href={`mailto:careers@tecorbitron.com?subject=Application: ${position.title}`}
                            className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Apply for this Role
                            <ArrowRight size={14} />
                        </Link>
                        <span className="text-muted text-xs font-medium">
                            Send your resume + portfolio to{" "}
                            <a
                                href="mailto:careers@tecorbitron.com"
                                className="text-malachite-rich font-semibold hover:underline"
                            >
                                careers@tecorbitron.com
                            </a>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function OpenPositions() {
    return (
        <section className="bg-bkg-primary h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-4xl">
                <SectionHeader
                    eyebrow="OPEN POSITIONS"
                    heading="We're Hiring"
                    highlight="Hiring"
                    support="Click any role to see the full details and apply."
                />

                {/* Positions */}
                <div className="flex flex-col gap-4">
                    {positions.map((position) => (
                        <PositionCard key={position.id} position={position} />
                    ))}
                </div>
            </div>
        </section>
    );
}
