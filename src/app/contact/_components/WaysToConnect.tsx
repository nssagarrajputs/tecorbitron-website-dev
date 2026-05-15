import Link from "next/link";
import {
    Phone,
    MessageCircleCode,
    Send,
    MapPin,
    Clock,
    LinkIcon,
} from "lucide-react";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";

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
        <SectionContainer width="lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                {/* ── LEFT — HQ Info ── */}
                <div className="shadow-0 rounded-4 flex flex-col gap-12 border p-6 lg:p-8">
                    {/* Address */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <MapPin
                                size={18}
                                className="text-malachite shrink-0"
                            />
                            <p className="text-body text-typocolor-primary font-bold tracking-widest uppercase">
                                Headquarter
                            </p>
                        </div>

                        <p className="text-small text-typocolor-secondary px-6 leading-relaxed">
                            Ghaziabad, NCR <br />
                            Uttar Pradesh, 201010 <br />
                            INDIA
                        </p>
                    </div>

                    {/* Business Hours */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Clock
                                size={18}
                                className="text-malachite shrink-0"
                            />
                            <p className="text-body text-typocolor-primary font-bold tracking-widest uppercase">
                                Business Hours
                            </p>
                        </div>
                        <div className="text-small text-typocolor-secondary flex flex-col gap-2 px-6">
                            <div className="flex max-w-xs items-center justify-between">
                                <span className="font-medium">Mon – Fri</span>
                                <span className="text-typocolor-primary font-bold">
                                    09:00 – 19:00
                                </span>
                            </div>
                            <div className="flex max-w-xs items-center justify-between">
                                <span className="font-medium">Saturday</span>
                                <span className="text-typocolor-primary font-bold">
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
                <div className="shadow-soft rounded-4 flex flex-col gap-8 border p-6 lg:p-8">
                    <div className="flex items-center gap-2">
                        <LinkIcon
                            size={18}
                            className="text-malachite shrink-0"
                        />
                        <p className="text-body text-typocolor-primary font-bold tracking-widest">
                            GET IN TOUCH
                        </p>
                    </div>
                    {channels.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.title}
                                href={item.link}
                                target={item.external ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="hover:border-malachite shadow-soft rounded-3 transition-base flex w-full gap-4 border bg-white p-4"
                            >
                                <div className="bg-malachite-dim rounded-2 flex-center transition-base h-10 w-10">
                                    <Icon
                                        size={18}
                                        className="text-malachite-rich"
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-small text-typocolor-secondary font-bold">
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
        </SectionContainer>
    );
}
