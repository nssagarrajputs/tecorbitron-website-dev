export default function OurStory() {
    return (
        <section className="bg-surface px-4 py-24">
            <div className="mx-auto flex max-w-4xl flex-col gap-8">
                <div className="bg-malachite-dim inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                        Our Story
                    </span>
                </div>

                <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                    Why Tecorbitron{" "}
                    <span className="text-malachite">Exists</span>
                </h2>

                <div className="flex flex-col gap-4 leading-relaxed">
                    <p>
                        Tecorbitron was born out of frustration. Too many
                        businesses were being overcharged by agencies that
                        didn&apos;t communicate, underserved by freelancers who
                        disappeared after delivery, and left with products that
                        looked good but didn&apos;t work.
                    </p>
                    <p>
                        We started with a simple belief — that businesses of
                        every size deserve access to premium technology,
                        transparent pricing, and a team that genuinely cares
                        about their growth.
                    </p>
                    <p>
                        Founded in August 2024 and incorporated as a Private
                        Limited company, Tecorbitron Solutions is built to be
                        the technology partner we always wished existed — fast,
                        honest, and results-driven.
                    </p>
                </div>

                {/* Timeline */}
                <div className="border-border mt-2 flex flex-col gap-4 border-l-2 pl-5">
                    {[
                        {
                            year: "Dec 2019",
                            event: "We started working as a freelancing",
                        },
                        {
                            year: "June 2024",
                            event: "Idea was blink to build Tecorbitron",
                        },
                        {
                            year: "Aug 2024",
                            event: "Incorporat Tecorbitron",
                        },
                        {
                            year: "Sep 2024",
                            event: "First client project delivered",
                        },
                        {
                            year: "Jan 2025",
                            event: "Expanding team & service offerings",
                        },
                    ].map((item) => (
                        <div key={item.year} className="flex items-start gap-4">
                            <span className="bg-malachite-dim text-malachite-rich shrink-0 rounded-full px-3 py-0.5 text-sm font-black">
                                {item.year}
                            </span>
                            <span className="text-subtle pt-0.5 text-sm font-medium">
                                {item.event}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
