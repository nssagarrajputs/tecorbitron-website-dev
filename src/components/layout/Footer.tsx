import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-kit/logo-light.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-small text-typocolor-secondary mt-40">
            <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-8 gap-y-12 px-8">
                {/* Intro */}
                <div className="flex w-fit flex-col gap-4">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Tecorbitron Solutions"
                            width={220}
                            className="opacity-80 select-none"
                        />
                    </Link>
                    <p className="max-w-sm">
                        Next-Gen IT Solutions, Powered by AI. <br />
                        #WeBuildBold
                    </p>

                    {/* Social */}
                    <div className="text-body text-typocolor-muted **:hover:text-malachite flex gap-4">
                        <Link
                            href="https://www.linkedin.com/company/tecorbitrons"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on LinkedIn"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            href="https://www.instagram.com/tecorbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on Instagram"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="https://www.facebook.com/tecorbitron"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Tecorbitron on Facebook"
                        >
                            <FaFacebook />
                        </Link>

                        <Link
                            href="https://wa.me/919084800496"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Tecorbitron on WhatsApp"
                        >
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 font-bold">Quick Links</h3>
                    <div className="**:hover:text-malachite flex flex-col gap-3 transition-all **:w-fit">
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/blog">Blogs</Link>
                    </div>
                </div>

                {/* Important */}
                <div>
                    <h3 className="mb-6 font-bold">Importants</h3>
                    <div className="**:hover:text-malachite flex flex-col gap-3 transition-all **:w-fit">
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/careers">Career</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="mb-6 font-bold">Get In Touch</h3>
                    <div className="**:hover:text-malachite flex flex-col gap-3 transition-all **:w-fit">
                        <span>Ghaziabad, NCR, India</span>
                        <a href="mailto:info@tecorbitron.com">
                            info@tecorbitron.com
                        </a>
                        <a href="tel:+919084800496">908-480-0496</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12">
                <div className="border-border mx-auto flex max-w-7xl justify-center border-t px-4 py-8">
                    <small className="text-small">
                        © {year} Tecorbitron Solutions Pvt. Ltd.
                    </small>
                </div>
            </div>
        </footer>
    );
}
