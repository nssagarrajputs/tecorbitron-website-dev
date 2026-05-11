"use client";
import Image from "next/image";

import logo1 from "@/assets/client-stripe/1.png";
import logo2 from "@/assets/client-stripe/2.svg";
import logo3 from "@/assets/client-stripe/3.png";
import logo4 from "@/assets/client-stripe/4.png";
import logo5 from "@/assets/client-stripe/5.svg";
import logo6 from "@/assets/client-stripe/6.png";
import logo7 from "@/assets/client-stripe/7.png";
import logo8 from "@/assets/client-stripe/8.png";
import logo9 from "@/assets/client-stripe/9.png";
import logo10 from "@/assets/client-stripe/10.png";
import logo11 from "@/assets/client-stripe/11.svg";
import logo12 from "@/assets/client-stripe/12.svg";
import logo13 from "@/assets/client-stripe/13.svg";
import logo14 from "@/assets/client-stripe/14.png";
import logo15 from "@/assets/client-stripe/15.png";
import logo16 from "@/assets/client-stripe/16.webp";
import logo17 from "@/assets/client-stripe/17.png";
import logo18 from "@/assets/client-stripe/18.svg";
import logo19 from "@/assets/client-stripe/19.webp";
import logo20 from "@/assets/client-stripe/20.svg";

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
    { name: "Client Ten", src: logo10 },
];

const logosRow2 = [
    { name: "Client Eleven", src: logo11 },
    { name: "Client Twelve", src: logo12 },
    { name: "Client Thirteen", src: logo13 },
    { name: "Client Fourteen", src: logo14 },
    { name: "Client Fifteen", src: logo15 },
    { name: "Client Sixteen", src: logo16 },
    { name: "Client Seventeen", src: logo17 },
    { name: "Client Eighteen", src: logo18 },
    { name: "Client Nineteen", src: logo19 },
    { name: "Client Twenty", src: logo20 },
];

export default function ClientLogoStripe() {
    return (
        <section className="overflow-hidden py-12 md:py-14">
            {/* ── ROW 1 — scroll left ── */}
            <div
                className="flex w-max gap-8 md:gap-16 lg:gap-24"
                style={{ animation: "marquee-left 70s linear infinite" }}
            >
                {[...logosRow1, ...logosRow1, ...logosRow1].map((logo, i) => (
                    <div key={`r1-${i}`} className="h-6 min-w-16 md:h-7">
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            className="h-full w-auto object-contain transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* ── ROW 2 — Quote ── */}
            <p className="text-body my-12 px-4 text-center md:my-14">
                Loved by 100+ brands around the world
            </p>

            {/* ── ROW 3 — scroll right ── */}
            <div
                className="flex w-max gap-8 md:gap-16 lg:gap-24"
                style={{ animation: "marquee-right 80s linear infinite" }}
            >
                {[...logosRow2, ...logosRow2, ...logosRow2].map((logo, i) => (
                    <div key={`r2-${i}`} className="h-6 min-w-16 md:h-7">
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            className="h-full w-auto object-contain transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
