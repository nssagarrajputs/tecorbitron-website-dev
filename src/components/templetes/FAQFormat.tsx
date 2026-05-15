"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import SectionContainer from "../basic-ui/SectionContainer";

type FAQItem = {
    question: string;
    answer: string;
    link?: string;
    linkText?: string;
};

type FAQSectionProps = {
    eyebrow: string;
    heading: string;
    highlight: string;
    support?: string;
    items: FAQItem[];
    defaultOpenIndex?: number | null;
};

export default function FAQFormat({
    eyebrow,
    heading,
    highlight,
    support,
    items,
    defaultOpenIndex = null,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <SectionContainer
            width="sm"
            eyebrow={eyebrow}
            heading={heading}
            highlight={highlight}
            support={support}
        >
            <div className="flex flex-col gap-4">
                {items.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <article
                            key={index}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="border-base border-b"
                        >
                            <div className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left">
                                <h4 className="text-body text-typocolor-primary font-bold">
                                    {faq.question}
                                </h4>

                                <div
                                    className={`text-typocolor-secondary transi-base flex-center rounded-full ${
                                        isOpen ? "rotate-45" : "rotate-0"
                                    }`}
                                >
                                    <Plus />
                                </div>
                            </div>

                            {isOpen && (
                                <div className="px-5 pb-5">
                                    <p className="text-typocolor-secondary text-small leading-relaxed">
                                        {faq.answer}
                                    </p>

                                    {faq.link && faq.linkText ? (
                                        <div className="mt-3">
                                            <Link
                                                href={faq.link}
                                                className="text-small text-malachite hover:text-malachite-rich transi-base inline-flex font-bold"
                                            >
                                                {faq.linkText}
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </SectionContainer>
    );
}
