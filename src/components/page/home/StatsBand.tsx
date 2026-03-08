"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 6.3, suffix: "+", label: "Years of Excellence" },
    { value: 82, suffix: "+", label: "Projects Completed" },
    { value: 68, suffix: "+", label: "Happy Clients" },
    { value: 30, suffix: "+", label: "Hands-On Technologies" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 1500;
                    const step = Math.ceil(target / (duration / 16));
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function StatsBand() {
    return (
        <section className="bg-deepspace-dim px-4 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center gap-2 text-center ${index < stats.length - 1 ? "lg:border-border-strong lg:border-r" : ""}`}
                        >
                            <p className="text-malachite-soft text-5xl font-black tracking-tight">
                                <CountUp
                                    target={stat.value}
                                    suffix={stat.suffix}
                                />
                            </p>
                            <p className="text-muted font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
