"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder",
        company: "RetailNow",
        initial: "R",
        quote: "Tecorbitron delivered our entire e-commerce platform in under 30 days. The quality was exceptional and communication was seamless throughout. Highly recommend.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "CEO",
        company: "MedConnect",
        initial: "P",
        quote: "The mobile app they built for us exceeded our expectations. They understood our vision perfectly and the final product was exactly what we needed — maybe better.",
        rating: 5,
    },
    {
        name: "Arjun Kapoor",
        role: "Marketing Head",
        company: "GrowthBrands",
        initial: "A",
        quote: "Our organic traffic tripled in 6 months thanks to their SEO strategy. They don't just talk numbers — they deliver them. Best investment we made this year.",
        rating: 5,
    },
    {
        name: "Sneha Gupta",
        role: "CTO",
        company: "FinEdge",
        initial: "S",
        quote: "Their team integrated our legacy system with a modern dashboard flawlessly. The code quality and documentation were both top-notch. We'll be working with them again.",
        rating: 5,
    },
    {
        name: "Vikram Nair",
        role: "Director",
        company: "EduLaunch",
        initial: "V",
        quote: "From design to deployment, the entire process was smooth. They kept us updated at every step and delivered ahead of schedule. Exactly the partner we needed.",
        rating: 5,
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-malachite"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const total = testimonials.length;
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
    const prev = useCallback(
        () => setActive((p) => (p - 1 + total) % total),
        [total],
    );

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(next, 4500);
    }, [next]);

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [startTimer]);

    const handleManual = (fn: () => void) => {
        fn();
        startTimer(); // reset timer on manual nav
    };

    // Indices for 3 visible cards: prev, active, next
    const indices = [
        (active - 1 + total) % total,
        active,
        (active + 1) % total,
    ];

    return (
        <section className="bg-deepspace overflow-hidden px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* ── HEADER ── */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        What Our{" "}
                        <span className="text-malachite">Clients Say</span>
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed font-light text-white/50">
                        Their success is our greatest accomplishment.
                    </p>
                </div>

                {/* ── CAROUSEL — lg: 3 cards, sm/md: 1 card ── */}
                <div
                    className="relative"
                    onMouseEnter={() => {
                        if (timerRef.current) clearInterval(timerRef.current);
                    }}
                    onMouseLeave={startTimer}
                >
                    {/* Cards */}
                    <div className="flex items-center justify-center gap-4">
                        {/* sm/md — single card */}
                        <div className="w-full lg:hidden">
                            <TestimonialCard
                                t={testimonials[active]}
                                size="center"
                            />
                        </div>

                        {/* lg — 3 cards */}
                        <div className="hidden w-full items-stretch justify-center gap-4 lg:flex">
                            {indices.map((idx, pos) => (
                                <div
                                    key={idx}
                                    className={`transition-all duration-500 ${
                                        pos === 1
                                            ? "z-10 w-[38%] scale-100"
                                            : "w-[28%] scale-95 opacity-60"
                                    }`}
                                >
                                    <TestimonialCard
                                        t={testimonials[idx]}
                                        size={pos === 1 ? "center" : "side"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── CONTROLS ── */}
                    <div className="mt-10 flex items-center justify-center gap-6">
                        {/* Prev */}
                        <button
                            onClick={() => handleManual(prev)}
                            className="hover:border-malachite/40 hover:bg-malachite/10 hover:text-malachite flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() =>
                                        handleManual(() => setActive(i))
                                    }
                                    className={`rounded-full transition-all duration-300 ${
                                        i === active
                                            ? "bg-malachite h-2 w-6"
                                            : "h-2 w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                                    aria-label={`Go to ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={() => handleManual(next)}
                            className="hover:border-malachite/40 hover:bg-malachite/10 hover:text-malachite flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200"
                            aria-label="Next"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Card Component ────────────────────────────────────────────────────────────
function TestimonialCard({
    t,
    size,
}: {
    t: (typeof testimonials)[0];
    size: "center" | "side";
}) {
    return (
        <div
            className={`relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-7 transition-all duration-500 ${
                size === "center"
                    ? "border-malachite border-2 bg-white/10"
                    : "border border-white/10 bg-white/5"
            }`}
        >
            {/* Decorative quote mark */}
            <span
                className="pointer-events-none absolute -top-4 -right-2 leading-none font-black text-white/4 select-none"
                style={{ fontSize: "9rem" }}
            >
                &ldquo;
            </span>

            {/* Stars */}
            <Stars count={t.rating} />

            {/* Quote */}
            <p
                className={`relative flex-1 leading-relaxed ${
                    size === "center" ? "text-white" : "text-white/50"
                }`}
            >
                &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                        size === "center"
                            ? "bg-malachite text-deepspace-deep"
                            : "bg-white/10 text-white"
                    }`}
                >
                    {t.initial}
                </div>
                <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs font-medium text-white/40">
                        {t.role}, {t.company}
                    </p>
                </div>
            </div>
        </div>
    );
}
