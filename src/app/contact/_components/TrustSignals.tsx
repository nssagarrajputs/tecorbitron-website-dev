import { Zap, UserCheck, HandHeart } from "lucide-react";

const items = [
    {
        icon: Zap,
        title: "Quick Response",
        desc: "We typically reply within an hour on business days, ensuring prompt NDA signing and seamless scheduling for discussions.",
    },
    {
        icon: UserCheck,
        title: "Personalized Approach",
        desc: "You'll work directly with experienced specialists who understand your domain and business needs.",
    },
    {
        icon: HandHeart,
        title: "No Pressure",
        desc: "We focus on guiding you at your pace — offering insights and solutions only when you're ready to move forward.",
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
                            className=" flex flex-col gap-4 rounded-2xl p-6"
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
