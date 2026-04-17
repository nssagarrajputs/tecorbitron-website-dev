import SectionHeader from "@/components/basic-ui/SectionHeader";
import { Rocket, Store, Building2, Globe } from "lucide-react";

const clients = [
    {
        icon: <Rocket size={24} />,
        type: "Startups",
        tagline: "From idea to MVP — fast.",
        description:
            "We help early-stage startups move fast, validate ideas, and build products that attract users and investors. Fixed pricing, startup-friendly timelines.",
        fits: ["MVP development", "Brand & design", "Early-stage SEO"],
    },
    {
        icon: <Store size={24} />,
        type: "Small Businesses",
        tagline: "Get online. Get customers.",
        description:
            "Local and small businesses that need a professional online presence, better search rankings, and more leads — without paying big agency prices.",
        fits: ["Professional website", "Local SEO", "Google Ads"],
    },
    {
        icon: <Building2 size={24} />,
        type: "Mid-size Companies",
        tagline: "Scale with confidence.",
        description:
            "Growing companies that need scalable systems, automation, and digital strategies to support expansion without proportional cost increases.",
        fits: ["Custom software", "Marketing automation", "App development"],
    },
    {
        icon: <Globe size={24} />,
        type: "Enterprises",
        tagline: "Complex problems, clean solutions.",
        description:
            "Larger organisations looking for dedicated tech partners to build, maintain, and evolve mission-critical digital products and infrastructure.",
        fits: ["Dedicated teams", "System integrations", "AI solutions"],
    },
];

export default function WhoWeWorkWith() {
    return (
        <section className="bg-surface h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Clients scope"
                    heading="Built for Every Stage of Business"
                    highlight="Stage of Business"
                    support="Whether you're launching your first product or
                        scaling your tenth — we have the right approach for
                        where you are right now."
                />

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {clients.map((client) => (
                        <div
                            key={client.type}
                            className="group border-border hover:border-malachite hover:shadow-deepspace/5 flex flex-col gap-5 rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="bg-malachite-dim text-malachite-rich group-hover:bg-malachite flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white">
                                {client.icon}
                            </div>

                            {/* Type + tagline */}
                            <div>
                                <h3 className="text-deepspace text-lg font-black">
                                    {client.type}
                                </h3>
                                <p className="text-malachite-rich mt-0.5 text-sm font-semibold">
                                    {client.tagline}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-muted flex-1 text-sm leading-relaxed font-light">
                                {client.description}
                            </p>

                            {/* Fits */}
                            <div className="flex flex-col gap-1.5">
                                {client.fits.map((fit) => (
                                    <div
                                        key={fit}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="bg-malachite h-1 w-1 shrink-0 rounded-full" />
                                        <span className="text-subtle text-xs font-semibold">
                                            {fit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
