"use client";
import { Star, Verified } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import DefaultAvatar from "@/assets/home/testimonials/default-avatar.jpg";

const testimonials = [
    {
        name: "James Whitfield",
        role: "Product Manager",
        companyName: "TravelSync",
        quote: "Hired them for a React Native travel app with complex offline sync logic. They handled edge cases I didn't even think of, delivered clean code with documentation, and shipped on schedule. Solid team.",
        rating: "5.0",
        source: "Bark.com",
    },
    {
        name: "Ananya Bose",
        role: "Brand Manager",
        companyName: "ThreadCo",
        quote: "Honestly refreshing to work with a team that actually gets design. They redesigned our entire storefront and it just *looks* like money now. Conversions went up within the first month. Couldn't be happier.",
        rating: "5.0",
        source: "Trustpilot",
    },
    {
        name: "Rohan Desai",
        role: "CTO",
        companyName: "DataNest",
        quote: "Tecorbitron integrated a custom AI pipeline into our SaaS product — complete with API design, cloud deployment on AWS, and monitoring setup. The code quality was production-grade. We've already brought them back for phase two.",
        rating: "4.5",
        source: "Clutch.co",
    },
    {
        name: "Amit Verma",
        role: "Operations Head",
        companyName: "LogiFreight",
        quote: "We needed a custom internal tool to manage our logistics workflow — nothing off the shelf fit. Tecorbitron built it from scratch, and it's saved us hours every week. Timelines were slightly tight but they pulled through.",
        rating: "4.5",
        source: "GoodFirms",
    },
    {
        name: "Sarah Mitchell",
        role: "Head of Growth",
        companyName: "NutriBox UK",
        quote: "We engaged Tecorbitron for a full website rebuild paired with an SEO strategy targeting the UK market. The project was managed professionally, the communication across time zones was seamless, and the results have been measurable.",
        rating: "4.0",
        source: "Trustpilot",
    },
    {
        name: "Kabir Malhotra",
        role: "Founder",
        companyName: "EduSpark",
        quote: "Before they wrote a single line of code, they sat with us, understood the business, and pointed out things we hadn't considered. That consulting phase alone was worth it. The product they built after was exactly what we needed.",
        rating: "5.0",
        source: "Google",
    },
];

export default function Testimonials() {
    return (
        <section className="h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Testimonials"
                    heading="What Our Clients Say"
                    highlight="Clients Say"
                    support="Verified feedback from clients across industries — in their own words."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((review) => (
                        <div
                            key={review.companyName}
                            className="shadow-soft border-border mx-auto max-w-4xl rounded-2xl border p-6"
                        >
                            <div className="text-typocolor-muted flex items-center gap-2 select-none">
                                {review.rating}
                                <Star size={15} />
                                on {review.source}{" "}
                                <Verified size={16} className="text-info" />
                            </div>

                            <p className="text-body mt-4 mb-8 line-clamp-4 leading-relaxed">
                                {review.quote}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={DefaultAvatar}
                                        alt=""
                                        className="aspect-square h-8 w-8 rounded-full select-none"
                                    />
                                    <div>
                                        <h3 className="text-small font-bold">
                                            {review.name}
                                        </h3>
                                        <p className="text-xmall">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-small text-typocolor-muted max-w-28 text-right font-black select-none">
                                    {review.companyName}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
