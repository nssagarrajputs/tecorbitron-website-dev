// src/components/page/home/Solutions.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    Globe,
    AppWindow,
    Smartphone,
    LayoutDashboard,
    Building2,
    Monitor,
    ShoppingCart,
    BadgeDollarSign,
    Users,
    Package,
    GraduationCap,
    Boxes,
    Handshake,
    Megaphone,
} from "lucide-react";

const solutions = [
    { title: "Custom Websites", icon: Globe },
    { title: "Web Apps & PWA", icon: AppWindow },
    { title: "Cross Platform Apps", icon: Smartphone },
    { title: "Web Portals", icon: LayoutDashboard },
    { title: "Enterprise Application", icon: Building2 },
    { title: "Desktop Application", icon: Monitor },
    { title: "E-Commerce", icon: ShoppingCart },
    { title: "Financial Management", icon: BadgeDollarSign },
    { title: "HR Software", icon: Users },
    { title: "Assets Management", icon: Package },
    { title: "Learning Platform", icon: GraduationCap },
    { title: "Inventory System", icon: Boxes },
    { title: "CRM System", icon: Handshake },
    { title: "Digital Marketing", icon: Megaphone },
];

export default function Solutions() {
    return (
        <section className="bg-deepspace px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* ── HEADER ── */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            What We Build
                        </span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Solutions for{" "}
                        <span className="text-malachite">
                            Every Business Need
                        </span>
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed font-light text-white/50">
                        From simple websites to complex enterprise systems — we
                        build it all.
                    </p>
                </div>

                {/* ── GRID ── */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                    {solutions.map(({ title, icon: Icon }) => (
                        <div
                            key={title}
                            className="group hover:border-malachite/40 flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-3 py-5 text-center transition-all duration-300 hover:bg-white/10"
                        >
                            <div className="group-hover:border-malachite/30 group-hover:bg-malachite/10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300">
                                <Icon
                                    size={20}
                                    className="group-hover:text-malachite text-white/50 transition-colors duration-300"
                                />
                            </div>
                            <span className="text-xs leading-snug font-bold text-white/60 transition-colors duration-300 group-hover:text-white">
                                {title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/contact"
                        className="hover:border-malachite/40 hover:bg-malachite/10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white/70 transition-all duration-200 hover:text-white"
                    >
                        Discuss Your Project
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
