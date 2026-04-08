import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl px-4 py-24"
            style={{
                background: "linear-gradient(90deg, #DBFCFF 0%, #E3FFF0 100%)",
            }}
        >
            {/* ── CONTENT ── */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                {/* Eyebrow */}
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 animate-pulse rounded-full" />
                    <span className="text-xs font-bold tracking-widest uppercase">
                        Let&apos;s Work Together
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                    Start Your Project Today
                </h2>

                {/* Sub */}
                <p className="text-body max-w-xl leading-relaxed">
                    Tell us about your project and {"we'll"} get back to you
                    within 24 hours. <br /> Free consultation, No strings
                    attached.
                </p>

                {/* CTAs */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/contact"
                        className="bg-malachite text-deepspace-deep hover:bg-malachite-soft hover:shadow-malachite/20 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Start a Project
                        <ArrowRight size={15} />
                    </Link>

                    <a
                        href="https://wa.me/919084800496"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                    >
                        <MessageCircle size={15} />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}
