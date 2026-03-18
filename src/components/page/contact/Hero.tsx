export default function Hero() {
    return (
        <section
            className="relative flex  w-full flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
            style={{
                background:
                    "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            }}
        >
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                        Get in Touch
                    </span>
                </div>

                <h1 className="text-5xl leading-tight font-black tracking-tight text-white sm:text-6xl">
                    {"Let's "}
                    <span className="text-malachite">Connect</span>{" "}
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-white/60">
                    Tell us about your project and we&apos;ll get back to you
                    within 24 hours. Free consultation, no strings attached.
                </p>
            </div>
        </section>
    );
}
