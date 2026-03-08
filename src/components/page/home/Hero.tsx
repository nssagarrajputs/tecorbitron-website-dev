import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-32"
            style={{
                background:
                    "linear-gradient(135deg, #0c3146 0%, #164965 50%, #0c3146 100%)",
            }}
        >
            {/* ── BACKGROUND EFFECTS ── */}

            {/* Radial glow center */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                }}
            />

     
            {/* Top fade */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(12,49,70,0.6), transparent)",
                }}
            />

            {/* Bottom fade */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                style={{
                    background:
                        "linear-gradient(to top, rgba(12,49,70,0.8), transparent)",
                }}
            />

            {/* ── CONTENT ── */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                {/* Eyebrow */}
                <div className="border-malachite/20 bg-malachite-muted inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xs font-bold  uppercase">
                        Next-Gen IT Solutions, Powered by AI
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl leading-tight font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Your Idea, Our Code <br />{" "}
                    <span className="text-malachite-soft">
                        {"Let's Build It Boldly"}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-3xl leading-relaxed text-white/50 sm:text-lg">
                    Transform ideas into powerful web, mobile, and software
                    solutions. From strategy to execution, our team ensures
                    scalable, secure, and user-centric digital experiences.
                </p>

                {/* CTAs */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    {/* Primary */}
                    <Link
                        href="/contact"
                        className="bg-malachite text-deepspace-deep hover:bg-malachite-soft hover:shadow-malachite/20 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                    >
                        Start a Project
                        <ArrowRight size={16} />
                    </Link>

                    {/* Secondary */}
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-0"
                    >
                        View Our Work
                    </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-1.5 text-white/40">
                        <Briefcase size={13} className="text-malachite/70" />
                        <span className="text-xs font-semibold">
                            50+ Projects
                        </span>
                    </div>
                    <span className="text-white/20">•</span>
                    <div className="flex items-center gap-1.5 text-white/40">
                        <Users size={13} className="text-malachite/70" />
                        <span className="text-xs font-semibold">
                            30+ Clients
                        </span>
                    </div>
                    <span className="text-white/20">•</span>
                    <div className="flex items-center gap-1.5 text-white/40">
                        <MapPin size={13} className="text-malachite/70" />
                        <span className="text-xs font-semibold">NCR Based</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
