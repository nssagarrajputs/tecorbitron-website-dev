type Props = {
    eyebrow: string;
    heading: string;
    highlight: string;
    support?: string;
};

export default function SectionHeader({
    eyebrow,
    heading,
    support,
    highlight,
}: Props) {
    const parts = heading.split(highlight);

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            {/* Eypill */}
            <div className="border-malachite-soft bg-malachite-opac flex-center gap-2 rounded-full border px-4 py-1.5 select-none">
                <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                <span className="text-malachite-rich text-xmall font-bold tracking-wider uppercase">
                    {eyebrow}
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-h2/tight font-black tracking-tight">
                {parts[0]} <span className="text-malachite">{highlight}</span>
                {parts[1]}
            </h2>

            {/* Support text */}
            {support && (
                <p className="text-typocolor-secondary text-body max-w-xl leading-relaxed">
                    {support}
                </p>
            )}
        </div>
    );
}
