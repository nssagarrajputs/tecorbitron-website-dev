"use client";
import Image from "next/image";

import logo1 from "@/assets/home/client-stripe/img1.png";
import logo2 from "@/assets/home/client-stripe/img2.png";
import logo3 from "@/assets/home/client-stripe/img3.png";
import logo4 from "@/assets/home/client-stripe/img4.png";
import logo5 from "@/assets/home/client-stripe/img5.png";
import logo6 from "@/assets/home/client-stripe/img6.png";
import logo7 from "@/assets/home/client-stripe/img7.png";
import logo8 from "@/assets/home/client-stripe/img8.png";
import logo9 from "@/assets/home/client-stripe/img9.png";
import logo10 from "@/assets/home/client-stripe/img10.png";
import logo11 from "@/assets/home/client-stripe/img11.png";
import logo12 from "@/assets/home/client-stripe/img12.png";
import logo13 from "@/assets/home/client-stripe/img13.png";
import logo14 from "@/assets/home/client-stripe/img14.png";
import logo15 from "@/assets/home/client-stripe/img15.png";
import logo16 from "@/assets/home/client-stripe/img16.png";
import logo17 from "@/assets/home/client-stripe/img17.png";
import logo18 from "@/assets/home/client-stripe/img18.png";

const logosRow1 = [
    { name: "Client One", src: logo1 },
    { name: "Client Two", src: logo2 },
    { name: "Client Three", src: logo3 },
    { name: "Client Four", src: logo4 },
    { name: "Client Five", src: logo5 },
    { name: "Client Six", src: logo6 },
    { name: "Client Seven", src: logo7 },
    { name: "Client Eight", src: logo8 },
    { name: "Client Nine", src: logo9 },
];

const logosRow2 = [
    { name: "Client Ten", src: logo10 },
    { name: "Client Eleven", src: logo11 },
    { name: "Client Twelve", src: logo12 },
    { name: "Client Thirteen", src: logo13 },
    { name: "Client Fourteen", src: logo14 },
    { name: "Client Fifteen", src: logo15 },
    { name: "Client Sixteen", src: logo16 },
    { name: "Client Seventeen", src: logo17 },
    { name: "Client Eighteen", src: logo18 },
];

export default function ClientLogoStripe() {
    return (
        <section className="bg-snow overflow-hidden py-20">
            {/* ── ROW 1 — scroll left ── */}
            <div className="relative mb-4">
                <div
                    className="flex w-max gap-12"
                    style={{ animation: "marquee-left 50s linear infinite" }}
                >
                    {[...logosRow1, ...logosRow1].map((logo, i) => (
                        <div
                            key={`r1-${i}`}
                            className="flex h-12 w-36 shrink-0 items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={36}
                                className="h-7 w-auto object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── ROW 2 — Quote ── */}
            <div className="my-10 flex items-center justify-center px-4">
                <blockquote className="max-w-xl text-center">
                    <p className="text-subtle sm:text-xl">
                        Elevate, Engage, and Excel in the Digital World
                    </p>
                </blockquote>
            </div>

            {/* ── ROW 3 — scroll right ── */}
            <div className="relative mt-4">
                <div
                    className="flex w-max gap-14"
                    style={{ animation: "marquee-right 50s linear infinite" }}
                >
                    {[...logosRow2, ...logosRow2].map((logo, i) => (
                        <div
                            key={`r2-${i}`}
                            className="flex h-12 w-36 shrink-0 items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={36}
                                className="h-7 w-auto object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
