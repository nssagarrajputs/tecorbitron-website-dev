import Eypill from "./Eypill";

type PageHeroProps = {
    width?: "sm" | "md" | "lg" | "xl";
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
};

const widthMap = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
};

function PageHero({
    width = "sm",
    eyebrow,
    title,
    highlight,
    description,
}: PageHeroProps) {
    const parts =
        highlight && title.includes(highlight) ? title.split(highlight) : null;

    return (
        <section className="h-breathing relative overflow-hidden pt-32 pb-12">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-deepspace) 1px, transparent 1px), linear-gradient(90deg, var(--color-deepspace) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                }}
            />

            {/* <div className="tb1 mx-auto flex max-w-4xl flex-col items-center text-center"> */}
            <div
                className={`mx-auto flex ${widthMap[width]} flex-col items-center text-center`}
            >
                <Eypill text={eyebrow} />

                <h1 className="text-h1 mx-auto mt-6 mb-5 leading-tight font-black tracking-tight">
                    {parts ? (
                        <>
                            {parts[0]}
                            <span className="text-malachite">{highlight}</span>
                            {parts[1]}
                        </>
                    ) : (
                        title
                    )}
                </h1>

                {description ? (
                    <p className="text-typocolor-secondary text-body max-w-xl leading-relaxed">
                        {description}
                    </p>
                ) : null}
            </div>
        </section>
    );
}

export default PageHero;
