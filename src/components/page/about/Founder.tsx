import Image from "next/image";
import Link from "next/link";
import FounderImage from "@/assets/about/founder.png";

export default function Founder() {
    return (
        <section className="overflow-hidden bg-white px-4">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-8 pt-20">
                        {/* Eyebrow */}
                        <div className="bg-malachite-dim inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5">
                            <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                            <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                                The Founder
                            </span>
                        </div>

                        {/* Name + Title */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-deepspace text-5xl font-black tracking-tight sm:text-5xl">
                                Sagar{" "}
                                <span className="text-malachite">Chauhan</span>
                            </h2>
                            <p className="text-muted text-base font-semibold">
                                Founder & CEO — Tecorbitron Solutions Pvt. Ltd.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="bg-malachite h-px w-16" />

                        {/* Bio */}
                        <div className="flex flex-col gap-4 leading-relaxed">
                            <p>
                                Sagar founded Tecorbitron with a clear vision —
                                to build a technology company that prioritises
                                client outcomes over everything else. With
                                expertise spanning web development, digital
                                strategy, and product design, he leads every
                                project with a hands-on approach and an
                                obsession for quality.
                            </p>
                            <p>
                                Before starting Tecorbitron, Sagar worked across
                                multiple domains — building products, running
                                campaigns, and solving real business problems
                                with technology. That experience shaped the way
                                Tecorbitron operates: fast, transparent, and
                                always results-first.
                            </p>
                        </div>

                        {/* Social links — text only */}

                        <Link
                            href="https://www.linkedin.com/in/nssagarrajput"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-deepspace hover:text-malachite w-fit font-bold transition-colors duration-200"
                        >
                            LinkedIn
                        </Link>
                    </div>

                    <div className="mx-auto w-85 sm:w-100 lg:w-115">
                        <Image
                            src={FounderImage}
                            alt="Sagar Chauhan — Founder & CEO, Tecorbitron"
                            width={460}
                            height={580}
                            className="w-full object-contain object-center drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
