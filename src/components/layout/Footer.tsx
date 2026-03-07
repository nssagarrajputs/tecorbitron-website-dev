"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-kit/logo-dark.svg";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    {
        label: "LI",
        full: "LinkedIn",
        href: "https://linkedin.com/company/tecorbitron",
    },
    {
        label: "IG",
        full: "Instagram",
        href: "https://instagram.com/tecorbitron",
    },
    { label: "FB", full: "Facebook", href: "https://facebook.com/tecorbitron" },
    { label: "WA", full: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
    { label: "YT", full: "YouTube", href: "https://youtube.com/@tecorbitron" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-deepspace-soft relative overflow-hidden">
            {/* ── GIANT BACKGROUND TEXT ── */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden select-none"
                aria-hidden
            >
                <span
                    className="leading-none font-black whitespace-nowrap text-white/3 uppercase"
                    style={{
                        fontSize: "clamp(80px, 18vw, 220px)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    TECORBITRON
                </span>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-10">
                {/* ── TOP ROW — Logo + Nav ── */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    {/* Logo + tagline */}
                    <div className="flex max-w-xs flex-col gap-5">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Tecorbitron Solutions"
                                width={180}
                            />
                        </Link>
                        <p className="text-sm text-white/60">
                            Next-Gen IT Solutions, Powered by AI.
                        </p>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-5">
                        <p className="text-xs font-black tracking-[0.2em] text-white/20 uppercase">
                            Navigate
                        </p>
                        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group hover:text-malachite flex items-center gap-2 text-sm font-semibold text-white/40 transition-all duration-200"
                                >
                                    <span className="bg-malachite h-px w-0 transition-all duration-300 group-hover:w-4" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ── SOCIAL LINKS ── */}
                <div className="my-16 flex flex-col justify-between gap-4 md:flex-row">
                    {socialLinks.map((s) => (
                        <Link
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.full}
                            title={s.full}
                            className="hover:text-malachite inline-flex gap-4 font-black text-white underline underline-offset-4 transition-all duration-200"
                        >
                            {s.full} <ArrowUpRight />
                        </Link>
                    ))}
                </div>

                {/* ── CONTACT STRIP ── */}
                <div className="my-12 grid grid-cols-1 gap-6 border-t border-white/5 pt-10 sm:grid-cols-3">
                    <a
                        href="mailto:info@tecorbitron.com"
                        className="group flex flex-col gap-1"
                    >
                        <span className="group-hover:text-malachite text-xs font-black tracking-widest text-white/20 uppercase transition-colors duration-200">
                            Email
                        </span>
                        <span className="text-sm font-semibold text-white/50 transition-colors duration-200 group-hover:text-white">
                            info@tecorbitron.com
                        </span>
                    </a>

                    <a
                        href="tel:+919084800496"
                        className="group flex flex-col gap-1"
                    >
                        <span className="group-hover:text-malachite text-xs font-black tracking-widest text-white/20 uppercase transition-colors duration-200">
                            Phone
                        </span>
                        <span className="text-sm font-semibold text-white/50 transition-colors duration-200 group-hover:text-white">
                            +91 9084800496
                        </span>
                    </a>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-black tracking-widest text-white/20 uppercase">
                            Office
                        </span>
                        <span className="text-sm font-semibold text-white/50">
                            Ghaziabad, NCR, India
                        </span>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div className="relative z-10 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 py-5">
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <p className="text-sm font-medium text-white">
                            © {year} Tecorbitron Solutions Pvt. Ltd. All rights
                            reserved.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/privacy-policy"
                                className="text-sm font-medium text-white transition-colors duration-200 hover:text-white/50"
                            >
                                Privacy Policy
                            </Link>
                            <span className="text-white/10">·</span>
                            <Link
                                href="/terms"
                                className="text-sm font-medium text-white transition-colors duration-200 hover:text-white/50"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
