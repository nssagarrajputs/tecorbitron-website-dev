import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-kit/logo-light.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-typo-secondary mt-40 select-none">
            <div className="text-small mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-12 px-8">
                {/* Intro */}
                <div className="flex w-fit flex-col gap-5">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Tecorbitron Solutions"
                            width={180}
                        />
                    </Link>
                    <h3 className="max-w-sm">
                        Next-Gen IT Solutions, Powered by AI.
                    </h3>

                    {/* Social */}
                    <div className="text-h4 text-typo-muted **:hover:text-primary-hover flex gap-6">
                        <Link href="https://www.linkedin.com/company/tecorbitrons">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://www.facebook.com/tecorbitron">
                            <FaFacebook />
                        </Link>
                        <Link href="https://www.instagram.com/tecorbitron">
                            <FaInstagram />
                        </Link>

                        <Link href="https://www.youtube.com/@Tecorbitron">
                            <FaYoutube />
                        </Link>
                        <Link href="https://wa.me/919084800496">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 font-bold">Quick Links</h3>
                    <div className="**:hover:text-primary-hover flex flex-col gap-3 transition-all **:w-fit">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/blog">Blogs</Link>
                    </div>
                </div>

                {/* Important */}
                <div>
                    <h3 className="mb-6 font-bold">Importants</h3>
                    <div className="**:hover:text-primary-hover flex flex-col gap-3 transition-all **:w-fit">
                        <Link href="/contact">{"Let's Talk"}</Link>
                        <Link href="/careers">Career</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="mb-6 font-bold">Get In Touch</h3>
                    <div className="**:hover:text-primary-hover flex flex-col gap-3 transition-all **:w-fit">
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
