"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-kit/logo-light.svg";

// ── NAV LINKS ──────────────────────────────────────
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
];
const mobNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <>
            {/* ── NAVBAR ── */}
            <nav className="fixed z-50 min-h-20 w-full">
                <div className="m-auto flex h-16 max-w-325 items-center justify-between rounded-b-lg bg-white px-4 shadow-md">
                    {/* LOGO */}
                    <Link href="/">
                        <Image
                            src={logo}
                            width={200}
                            alt="Tecorbitron Solutions"
                            priority
                        />
                    </Link>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center justify-end gap-8">
                        {/* NAV LINKS — Desktop */}
                        <ul className="hidden gap-4 font-semibold lg:flex">
                            {navLinks.map((link) => (
                                <li
                                    key={link.href}
                                    className="hover:bg-surface rounded-sm px-2 py-1"
                                >
                                    <Link
                                        href={link.href}
                                        className={`relative pb-1 transition-colors duration-200 ${
                                            isActive(link.href)
                                                ? "text-deepspace font-bold"
                                                : "text-muted hover:text-deepspace"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button — Desktop */}
                        <div className="hidden sm:block">
                            <Link
                                href="/contact"
                                className="bg-deepspace hover:bg-malachite rounded-sm px-4 py-2 text-base font-semibold text-white transition-colors duration-200"
                            >
                                Let&apos;s Talk
                            </Link>
                        </div>

                        {/* Hamburger — Mobile */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Open menu"
                            >
                                <Menu size={25} className="text-deepspace" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── MOBILE SIDEBAR ── */}
            {/* Backdrop */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`bg-deepspace-deep/60 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 ${
                    menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            />

            {/* Sidebar Panel */}
            <aside
                className={`fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="border-border flex items-center justify-end border-b px-5 py-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="hover:bg-surface rounded-xl p-2 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={25} className="text-deepspace" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
                    {mobNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                isActive(link.href)
                                    ? "bg-malachite-dim text-deepspace"
                                    : "text-muted hover:bg-surface hover:text-deepspace"
                            }`}
                        >
                            {link.label}
                            {isActive(link.href) ? (
                                <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                            ) : (
                                <ArrowRight
                                    size={14}
                                    className="text-border-strong"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Sidebar CTA */}
                <div className="border-border border-t px-4 pt-4 pb-8">
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-malachite text-deepspace-deep hover:bg-malachite-rich flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all duration-200"
                    >
                        {"Let's Talk"}
                        <ArrowRight size={14} />
                    </Link>
                    <p className="text-muted mt-3 text-center text-xs font-medium">
                        info@tecorbitron.com
                    </p>
                </div>
            </aside>
        </>
    );
}
