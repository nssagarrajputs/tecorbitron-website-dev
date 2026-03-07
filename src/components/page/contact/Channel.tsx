"use client";
import { Phone, MapPin, MessageCircleCode, Send } from "lucide-react";
import Link from "next/link";

const options = [
    {
        icon: <Phone size={30} className="text-warning" />,
        bg: "bg-warning/10",
        title: "Just make a call",
        link: "tel:+919084800496",
    },
    {
        icon: <MessageCircleCode size={30} className="text-success" />,
        bg: "bg-success/10",
        title: "Chat on WhatsApp",
        link: "https://wa.me/919084800496",
    },
    {
        icon: <Send size={30} className="text-info" />,
        bg: "bg-info/10",
        title: "Drop us a line",
        link: "mailto:info@tecorbitron",
    },
    {
        icon: <MapPin size={30} className="text-error" />,
        bg: "bg-error/10",
        title: "Meet us here",
        link: "https://maps.app.goo.gl/1b6i8MfeSnz7W1Xk7",
    },
];

export default function Channel() {
    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
                    {/* Card */}
                    {options.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            target={
                                item.link.startsWith("http")
                                    ? "_blank"
                                    : "_self"
                            }
                            rel="noopener noreferrer"
                        >
                            <div className="bg-surface flex flex-col items-center justify-center rounded-lg p-4">
                                <div className="mb-4 flex items-center justify-center">
                                    <div
                                        className={`${item.bg} rounded-full p-5`}
                                    >
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h2 className="mb-4 font-bold">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
