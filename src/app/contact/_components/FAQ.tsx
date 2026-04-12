"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How quickly do you respond to inquiries?",
        a: "We respond to all inquiries within 24 hours on business days. For urgent projects, reach out via WhatsApp for a faster response.",
    },
    {
        q: "Do you offer free consultations?",
        a: "Yes — our 30-minute discovery call is completely free. No sales pitch, just an honest conversation about your goals and how we can help.",
    },
    {
        q: "What information should I have ready before contacting you?",
        a: "A rough idea of what you want to build, your timeline, and budget range. Don't worry if it's not fully formed — we help you shape the idea during the consultation.",
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely. We work with clients across India, UAE, UK, USA, and beyond. Remote collaboration is seamless — we adapt to your timezone.",
    },
    {
        q: "What happens after I submit the contact form?",
        a: "You'll receive a confirmation email. Our team will review your project brief and get back within 24 hours with next steps or to schedule a discovery call.",
    },
    {
        q: "Is there a minimum project budget?",
        a: "Our projects start from ₹25,000 for simple websites. For complex web apps, software, or AI solutions, budgets vary. We're transparent about pricing from day one.",
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
            className={`overflow-hidden rounded-md border transition-all duration-300 ${
                isOpen
                    ? "border-malachite/30 bg-malachite/5"
                    : "border-white/10 bg-white/5"
            }`}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
                <span className="text-sm font-bold text-white sm:text-base">
                    {faq.q}
                </span>
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                            ? "bg-malachite text-deepspace-deep"
                            : "bg-white/10 text-white/50"
                    }`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="px-6 pb-5">
                            <p className="text-sm leading-relaxed font-light text-white/50">
                                {faq.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-deepspace px-4 py-24">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex flex-col items-center gap-4 text-center"
                >
                    <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            FAQs
                        </span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Before You{" "}
                        <span className="text-malachite">Reach Out</span>
                    </h2>
                    <p className="text-muted max-w-md text-base leading-relaxed font-light">
                        Quick answers to the most common questions we get.
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col gap-3"
                >
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
                </motion.div>
            </div>
        </section>
    );
}
