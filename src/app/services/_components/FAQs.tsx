"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "How long does it take to build a website?",
        a: "Most business websites take 2–4 weeks. E-commerce platforms or complex web apps take 4–8 weeks. We always give you a clear timeline before starting, and we stick to it.",
    },
    {
        q: "What is your pricing? Do you have fixed packages?",
        a: "We offer three engagement models — Fixed Price (starting ₹25,000), Monthly Retainer (starting ₹15,000/mo), and Dedicated Resource (custom). All pricing is transparent with no hidden costs.",
    },
    {
        q: "How many revisions do I get?",
        a: "All projects include at least 2 rounds of revisions. For design projects, we do revisions until you're happy — within the agreed scope. We want you to love what we build.",
    },
    {
        q: "What technologies do you use?",
        a: "We primarily use Next.js, React, TypeScript, Node.js, and Tailwind CSS for web. React Native for mobile. Figma for design. We choose the best tool for each project — not just what we're comfortable with.",
    },
    {
        q: "Do you provide support after the project is delivered?",
        a: "Yes. Every project includes 30 days of post-launch support. Beyond that, we offer AMC (Annual Maintenance Contracts) and monthly retainer plans to keep your product running smoothly.",
    },
    {
        q: "Can you work with our existing team or codebase?",
        a: "Absolutely. We regularly work alongside in-house teams, integrate with existing codebases, and adapt to your tools and workflows. We're flexible.",
    },
    {
        q: "Do you work with international clients?",
        a: "Yes. We work with clients across India, USA, UK, UAE, and beyond. We're comfortable with different time zones and communicate in English. Payments in multiple currencies accepted.",
    },
    {
        q: "What if I'm not sure which service I need?",
        a: "Book a free 30-minute discovery call. We'll understand your goals and recommend the right solution — honestly, even if that means telling you what you don't need.",
    },
    {
        q: "Are you a registered company?",
        a: "Yes. We are Tecorbitron Solutions Pvt. Ltd., incorporated in August 2024, GST registered, and based in Ghaziabad, NCR, India. Full company details available on our About page.",
    },
    {
        q: "How do we communicate during the project?",
        a: "We keep it simple — WhatsApp for quick updates, email for formal communication, and weekly video calls for project reviews. You always know what's happening.",
    },
];

function FAQItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: { q: string; a: string };
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`rounded-xl transition-all duration-200 ${isOpen ? "bg-deepspace-dim" : "bg-white"}`}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
                <span
                    className={`text-sm leading-snug font-bold ${isOpen ? "text-deepspace" : "text-deepspace"}`}
                >
                    {faq.q}
                </span>
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${isOpen ? "bg-malachite text-white" : "bg-surface text-muted"}`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            {isOpen && (
                <div className="px-5 pb-5">
                    <p className="text-muted text-sm leading-relaxed font-light md:text-base">
                        {faq.a}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-surface px-4 py-24">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            FAQs
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        Questions We Get{" "}
                        <span className="text-malachite">Asked a Lot</span>
                    </h2>
                    <p className="max-w-lg leading-relaxed">
                        Everything you need to know.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
