"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-kit/logo-light.svg";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
];

const mobNavLinks = [...navLinks, { label: "Contact Us", href: "/contact" }];

const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
    },
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
};

const linkItemVariants = {
    hidden: { x: 24, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
};

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header>
            {/* ── NAVBAR ── */}
            <motion.nav
                className="fixed z-50 min-h-20 w-full select-none"
                initial={false}
            >
                <motion.div
                    className="rounded-b-2 bg-bkg-primary h-breathing m-auto flex h-16 max-w-325 items-center justify-between"
                    animate={{
                        boxShadow: scrolled
                            ? "0 4px 24px rgba(7,30,45,0.12)"
                            : "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
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
                                    className="hover:bg-deepspace-dim rounded-1 px-2 py-1"
                                >
                                    <Link
                                        href={link.href}
                                        className={`transition-base relative pb-1 ${
                                            isActive(link.href)
                                                ? "text-typocolor-primary font-bold"
                                                : "text-typocolor-secondary"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button — Desktop */}
                        <div className="hidden sm:block">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                }}
                            >
                                <Link
                                    href="/contact"
                                    className="bg-deepspace hover:bg-malachite rounded-1 transi-base block px-4 py-2 text-base font-semibold text-white"
                                >
                                    Let's Connect
                                </Link>
                            </motion.div>
                        </div>

                        {/* Hamburger — Mobile */}
                        <div className="flex-center lg:hidden">
                            <motion.button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Open menu"
                                whileTap={{ scale: 0.9 }}
                            >
                                <Menu size={25} className="text-deepspace" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.nav>

            {/* ── MOBILE SIDEBAR ── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMenuOpen(false)}
                            className="bg-deepspace-deep/10 fixed inset-0 z-40 backdrop-blur-sm"
                        />

                        {/* Sidebar Panel */}
                        <motion.aside
                            key="sidebar"
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-bkg-primary fixed top-0 right-0 z-50 flex h-full w-80 flex-col shadow-2xl"
                        >
                            {/* Sidebar Header */}
                            <div className="h-breathing border-base flex h-16 items-center justify-end border-b">
                                <motion.button
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:bg-bkg-secondary rounded-1"
                                    aria-label="Close menu"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={25} className="text-deepspace" />
                                </motion.button>
                            </div>

                            {/* Sidebar Links — staggered */}
                            <motion.nav
                                className="h-breathing flex flex-1 flex-col gap-2 overflow-y-auto py-6"
                                variants={linkContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {mobNavLinks.map((link) => (
                                    <motion.div
                                        key={link.href}
                                        variants={linkItemVariants}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`rounded-2 text-body transi-base flex items-center justify-between px-4 py-4 font-semibold ${
                                                isActive(link.href)
                                                    ? "bg-malachite-dim text-malachite-rich"
                                                    : "text-typocolor-muted hover:bg-bkg-secondary hover:text-typocolor-primary hover:border-base border border-transparent"
                                            }`}
                                        >
                                            {link.label}
                                            <div className="flex-center aspect-square w-6">
                                                {isActive(link.href) ? (
                                                    <span className="bg-malachite block h-2 w-2 rounded-full" />
                                                ) : (
                                                    <ArrowRight
                                                        size={18}
                                                        className="text-border-strong"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>

                            {/* Sidebar CTA */}
                            <div className="border-base h-breathing border-t py-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 20,
                                    }}
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setMenuOpen(false)}
                                        className="bg-malachite hover:bg-malachite-rich flex-center rounded-2 transi-base w-full gap-2 py-4 font-bold text-white"
                                    >
                                        Let's Connect
                                        <ArrowRight size={16} strokeWidth={3} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
