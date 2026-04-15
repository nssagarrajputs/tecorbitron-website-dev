import SectionHeader from "@/components/basic-ui/SectionHeader";
import BrandBtn from "../basic-ui/BrandBtn";

type CTAAction = {
    text: string;
    href: string;
};

type CTAFormatProps = {
    eypill: string;
    heading: string;
    highlight: string;
    bodyText?: string;
    primaryAction?: CTAAction;
    secondaryAction?: CTAAction;
    bgFrom?: string;
    bgTo?: string;
};

export default function CTAFormat({
    eypill,
    heading,
    highlight,
    bodyText,
    primaryAction,
    secondaryAction,
    bgFrom = "#DBFCFF",
    bgTo = "#E3FFF0",
}: CTAFormatProps) {
    return (
        <section className="h-breathing-6812 v-breathing-20">
            <div
                className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl p-6 py-12 text-center sm:py-20 lg:py-24"
                style={{
                    background: `linear-gradient(90deg, ${bgFrom}, ${bgTo})`,
                }}
            >
                <SectionHeader
                    eyebrow={eypill}
                    heading={heading}
                    highlight={highlight}
                />

                {bodyText ? (
                    <p className="text-body max-w-xl leading-relaxed">
                        {bodyText}
                    </p>
                ) : null}

                {primaryAction || secondaryAction ? (
                    <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                        {primaryAction ? (
                            <BrandBtn
                                href={primaryAction.href}
                                variant="primary"
                            >
                                {primaryAction.text}
                            </BrandBtn>
                        ) : null}

                        {secondaryAction ? (
                            <BrandBtn
                                href={secondaryAction.href}
                                variant="secondary"
                            >
                                {secondaryAction.text}
                            </BrandBtn>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
