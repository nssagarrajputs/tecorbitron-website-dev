// app/blog/[slug]/components/PostHero.tsx
// Props will come from Sanity — placeholder data for now

type Props = {
    category: string;
    title: string;
};

export default function PostHero({ category, title }: Props) {
    return (
        <section
            className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 pt-40 pb-24"
            style={{
                background:
                    "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
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

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
                {/* Category */}
                <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                        {category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl">
                    {title}
                </h1>
            </div>
        </section>
    );
}
