import { Zap, UserCheck, HandHeart } from "lucide-react";

const items = [
    {
        icon: Zap,
        title: "Fast Response",
        desc: "We respond to all inquiries within one business day. For time-sensitive projects, WhatsApp is the fastest way to reach us.",
    },
    {
        icon: UserCheck,
        title: "Direct Approach",
        desc: "You work directly with experienced specialists - understand your domain and business needs, no handoffs, no lost context.",
    },
    {
        icon: HandHeart,
        title: "Zero Pressure",
        desc: "We focus on helping you make the right decision for your business — even if that means referring you elsewhere.",
    },
];

export default function TrustSignals() {
    return (
        <section className="bg-white px-4 pb-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {items.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-4 rounded-2xl p-6"
                        >
                            <div className="bg-malachite-dim flex h-11 w-11 items-center justify-center rounded-xl">
                                <Icon
                                    size={20}
                                    className="text-malachite-rich"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-deepspace font-bold">
                                    {title}
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
