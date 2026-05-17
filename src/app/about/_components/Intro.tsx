import SectionContainer from "@/components/basic-ui/SectionContainer";
import { Star } from "lucide-react";
import Image from "next/image";

const ratings = [
    {
        platform: "Google",
        rating: 4.9,
        reviews: "12 reviews",
        color: "#4285F4",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                />
            </svg>
        ),
    },
    {
        platform: "Trustpilot",
        rating: 4.8,
        reviews: "8 reviews",
        color: "#00B67A",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                    fill="#00B67A"
                />
            </svg>
        ),
    },
    {
        platform: "Clutch",
        rating: 5.0,
        reviews: "6 reviews",
        color: "#EF4335",
        logo: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#EF4335" />
                <path
                    d="M12 7a5 5 0 1 0 3.54 8.54l-1.42-1.42A3 3 0 1 1 12 9v2l3-3-3-3v2z"
                    fill="white"
                />
            </svg>
        ),
    },
];

function StarRow({ rating }: { rating: number }) {
    const full = Math.floor(rating);
    const partial = rating % 1;
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => {
                if (i < full) {
                    return (
                        <Star
                            key={i}
                            size={13}
                            className="fill-amber-400 text-amber-400"
                        />
                    );
                }
                if (i === full && partial > 0) {
                    return (
                        <span key={i} className="relative inline-block">
                            <Star
                                size={13}
                                className="text-border fill-border"
                            />
                            <span
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${partial * 100}%` }}
                            >
                                <Star
                                    size={13}
                                    className="fill-amber-400 text-amber-400"
                                />
                            </span>
                        </span>
                    );
                }
                return (
                    <Star
                        key={i}
                        size={13}
                        className="text-border fill-border"
                    />
                );
            })}
        </div>
    );
}

export default function Intro() {
    return (
        <SectionContainer>
            <div className="">
                <div className="flex flex-col gap-6">
                    <h2 className="text-typocolor-primary text-h2 text-center font-black tracking-tight">
                        About Tec
                        <span className="text-malachite">o</span>
                        rbitron
                    </h2>

                    <p className="text-body mx-auto max-w-3xl text-center leading-relaxed">
                        Welcome to Tecorbitron, your premier partner in IT
                        development solutions across diverse industries sectors.
                        Founded by a team of seasoned tech experts, Tecorbitron
                        is dedicated to transforming your digital vision into
                        reality with innovation and precision.
                    </p>
                </div>

                <div className="my-8 flex items-center justify-center gap-5 max-md:flex-col">
                    {ratings.map((r) => (
                        <div
                            key={r.platform}
                            className="cardbox flex w-fit items-center justify-between gap-6 p-2"
                        >
                            {/* Logo + name */}
                            <div className="flex items-center gap-4">
                                <div className="flex-center h-12 w-12">
                                    {r.logo}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-body font-bold">
                                        {r.platform}
                                    </span>
                                    <span className="text-typocolor-muted text-xmall">
                                        {r.reviews}
                                    </span>
                                </div>
                            </div>

                            {/* Rating number */}
                            <div className="flex shrink-0 flex-col items-end gap-1">
                                <span
                                    className="text-h4 leading-none font-black opacity-65"
                                    style={{ color: r.color }}
                                >
                                    {r.rating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto w-fit">
                    <a
                        href="https://global.showmelocal.com/39762168-tecorbitron-solutions-private-limited-website-designer-ghaziabad"
                        target="_blank"
                    >
                        <Image
                            src="https://www.showmelocal.com/showmelocal-member-39762168"
                            alt="Tecorbitron Solutions Private Limited,Website Designer,Ghaziabad,Uttar Pradesh"
                            width={100}
                            height={60}
                        />
                    </a>
                </div>

                {/* Note */}
                <p className="text-typocolor-muted text-xmall text-center font-semibold">
                    Ratings reflect verified client feedback across platforms.
                </p>
            </div>
        </SectionContainer>
    );
}
