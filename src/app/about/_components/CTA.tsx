import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function AboutCTA() {
    return (
        <section
            className="relative overflow-hidden px-4 py-24"
            style={{
                background:
                    "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 animate-pulse rounded-full" />
                    <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                        Work With Us
                    </span>
                </div>

                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Want to Work{" "}
                    <span className="text-malachite">With Us?</span>
                </h2>

                <p className="max-w-xl text-base leading-relaxed font-light text-white/50">
                    We&apos;re always open to new projects and long-term
                    partnerships. Tell us about your idea and let&apos;s see if
                    we&apos;re a good fit.
                </p>

                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/contact"
                        className="bg-malachite text-deepspace-deep hover:bg-malachite-soft hover:shadow-malachite/20 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Start a Conversation
                        <ArrowRight size={15} />
                    </Link>

                    <a
                        href="https://wa.me/919084800496"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                    >
                        <MessageCircle size={15} />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}
