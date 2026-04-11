import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";

export default function CTA() {
    return (
        <section className="h-breathing-6812">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl bg-linear-90 from-[#DBFCFF] to-[#E3FFF0] p-6 py-12 text-center sm:py-20 lg:py-24">
                <SectionHeader
                    eyebrow="Let's Work Together"
                    heading="Start Your Project Today"
                    highlight="Today"
                />
                <p className="text-body max-w-xl leading-relaxed">
                    Tell us about your project and {"we'll"} get back to you
                    within 24 hours. <br /> Free consultation, No strings
                    attached.
                </p>

                {/* CTAs */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/start-your-project"
                        className="bg-malachite-soft text-deepspace hover:bg-malachite-soft hover:shadow-malachite/20 border-malachite inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all duration-200 select-none hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Start a Project
                        <ArrowRight size={15} />
                    </Link>

                    <a
                        href="https://wa.me/919084800496"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all duration-200 select-none hover:-translate-y-0.5 hover:bg-white/15"
                    >
                        <MessageCircle size={15} />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}
