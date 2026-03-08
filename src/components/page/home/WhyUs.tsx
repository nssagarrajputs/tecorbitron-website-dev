// src/components/page/home/WhyUs.tsx

import { Lightbulb, Heart, ShieldCheck } from "lucide-react";


const points = [
    {
        icon: Lightbulb,
        title: "Innovative Approach",
    },
    {
        icon: Heart,
        title: "Client-Centric Focus",
    },
    {
        icon: ShieldCheck,
        title: "Proven Expertise",
    },
];

export default function WhyUs() {
    return (
        <section className="bg-surface px-4 py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
                {/* ── HEADER ── */}
                <div className="flex flex-col items-center gap-5">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        The Role of Tecorbitron in & as{" "}
                        <span className="text-malachite">
                            Adaptation & Growth
                        </span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed">
                        Backed by tech enthusiasts and industry leaders, we
                        create powerful digital assets with intuitive design,
                        seamless performance, and top-tier security — ensuring
                        your business stays ahead in a competitive landscape.
                    </p>
                </div>

                {/* ── DIVIDER ── */}
                <div className="flex w-full items-center gap-4">
                    <div className="bg-border h-px flex-1" />
                    <span className="text-muted text-xs font-black tracking-widest uppercase">
                        What sets us apart
                    </span>
                    <div className="bg-border h-px flex-1" />
                </div>

                {/* ── BADGES ── */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {points.map(({ icon: Icon, title }) => (
                        <div
                            key={title}
                            className=" inline-flex items-center gap-2.5 rounded-full  bg-white px-5 py-3 shadow-xs"
                        >
                            <Icon
                                size={16}
                                className="text-malachite-rich shrink-0"
                            />
                            <span className="text-deepspace text-sm font-medium">
                                {title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
