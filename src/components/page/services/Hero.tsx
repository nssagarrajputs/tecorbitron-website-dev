export default function Hero() {
    return (
        <section
            className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-40 pb-24"
            style={{
                background:
                    "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            }}
        >
            {/* Radial glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                        What We Do
                    </span>
                </div>

                <h1 className="text-5xl leading-tight font-black tracking-tight text-white sm:text-6xl">
                    Services Built to{" "}
                    <span className="text-malachite">Move</span>
                </h1>

                <p className="max-w-xl text-base leading-relaxed font-light text-white/50">
                    From idea to execution — technical services drafted to your
                    goals, timeline, and budget. No cookie-cutter solutions,
                    only what works for you.
                </p>
            </div>
        </section>
    );
}
