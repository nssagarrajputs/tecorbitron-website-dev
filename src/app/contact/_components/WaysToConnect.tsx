import Link from "next/link";
import { Phone, MessageCircleCode, Send, MapPin, Clock } from "lucide-react";
import BrandBtn from "@/components/basic-ui/BrandBtn";

const channels = [
    {
        icon: Phone,
        title: "Phone",
        subtitle: "+91 9084800496",
        link: "tel:+919084800496",
        external: false,
    },
    {
        icon: MessageCircleCode,
        title: "WhatsApp",
        subtitle: "Live chat now",
        link: "https://wa.me/919084800496",
        external: true,
    },
    {
        icon: Send,
        title: "Email",
        subtitle: "contact@tecorbitron.com",
        link: "mailto:contact@tecorbitron.com",
        external: false,
    },
];

export default function WaysToConnect() {
    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* ── LEFT — HQ Info ── */}
                    <div className="bg-bkg-primary flex flex-col gap-8 rounded-xl p-8">
                        {/* Address */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <MapPin
                                    size={16}
                                    className="text-malachite shrink-0"
                                />
                                <p className="text-small text-typocolor-muted font-bold tracking-widest uppercase">
                                    Headquarter
                                </p>
                            </div>

                            <p className="text-small text-typocolor-primary leading-relaxed">
                                Ghaziabad, NCR <br />
                                Uttar Pradesh, 201010 <br />
                                INDIA
                            </p>
                        </div>

                        {/* Business Hours */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Clock
                                    size={16}
                                    className="text-malachite shrink-0"
                                />
                                <p className="text-small text-typocolor-muted font-bold tracking-widest uppercase">
                                    Business Hours
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex max-w-xs items-center justify-between">
                                    <span className="text-small text-typocolor-secondary font-medium">
                                        Mon – Fri
                                    </span>
                                    <span className="text-small text-typocolor-primary font-bold">
                                        09:00 – 19:00
                                    </span>
                                </div>
                                <div className="flex max-w-xs items-center justify-between">
                                    <span className="text-small text-typocolor-secondary font-medium">
                                        Saturday
                                    </span>
                                    <span className="text-small text-typocolor-primary font-bold">
                                        10:00 – 16:00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Directions CTA */}
                        <BrandBtn
                            href="https://maps.app.goo.gl/M21mRzbWubCJtyHe8"
                            variant="secondary"
                        >
                            Get Directions
                        </BrandBtn>
                    </div>

                    {/* ── RIGHT — Channels ── */}
                    <div className="bg-bkg-primary flex flex-col gap-4 rounded-xl p-8">
                        <p className="text-small text-typocolor-muted font-bold tracking-widest uppercase">
                            Get in touch
                        </p>
                        {channels.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.title}
                                    href={item.link}
                                    target={item.external ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="group hover:border-malachite flex w-full gap-4 rounded-xl border border-transparent bg-white p-5 transition-all duration-200"
                                >
                                    <div className="bg-malachite-dim group-hover:bg-malachite-opac flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200">
                                        <Icon
                                            size={18}
                                            className="text-malachite-rich"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className="text-small text-typocolor-primary font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="text-xmall text-typocolor-muted font-medium">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
