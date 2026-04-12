"use client";

import { Phone, MessageCircleCode, Send, CalendarDays } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const options = [
    {
        icon: Phone,
        title: "Phone",
        subtitle: "Just make a call",
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
        subtitle: "info@tecorbitron.com",
        link: "mailto:info@tecorbitron.com",
        external: false,
    },
    {
        icon: CalendarDays,
        title: "Book a Free Call",
        subtitle: "30 min discovery call",
        link: "https://cal.com/tecorbitron/discovery-call",
        external: true,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 260, damping: 22 },
    },
};

export default function Channel() {
    return (
        <section className="bg-white px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {options.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                            >
                                <Link
                                    href={item.link}
                                    target={item.external ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="group border-malachite/10 hover:border-malachite/40 bg-deepspace hover:shadow-deepspace/20 flex h-full gap-4 rounded-md border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {/* Icon */}
                                    <div className="bg-malachite/10 group-hover:bg-malachite/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-all duration-300">
                                        <Icon
                                            size={22}
                                            className="text-malachite"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm font-medium text-white/70">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
