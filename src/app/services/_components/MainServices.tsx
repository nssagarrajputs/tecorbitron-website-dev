import Image from "next/image";
import web from "@/assets/service-icon/web-development.png";
import app from "@/assets/service-icon/app-development.png";
import ecomm from "@/assets/service-icon/e-commerce.png";
import software from "@/assets/service-icon/custom-software.png";
import seo from "@/assets/service-icon/seo.png";
import cloudai from "@/assets/service-icon/cloud-and-ai.png";
import BrandBtn from "@/components/basic-ui/BrandBtn";

const services = [
    {
        icon: web,
        name: "Web Development",
        tagline: "Fast, scalable websites that rank and convert.",
        description:
            "We build high-performance websites and web applications using Next.js and React — optimised for speed, SEO, and user experience from day one.",
    },
    {
        icon: app,
        name: "App Development",
        tagline: "Mobile apps users love — on iOS and Android.",
        description:
            "Cross-platform mobile applications built with React Native. One codebase, two platforms — without compromising on performance or native feel.",
    },
    {
        icon: ecomm,
        name: "E-commerce Development",
        tagline: "Online stores built to sell, scale, and retain.",
        description:
            "From Shopify and WooCommerce to fully custom storefronts — we build e-commerce solutions with inventory, payments, and admin panels built in.",
    },
    {
        icon: software,
        name: "Custom Software",
        tagline: "Software that fits your business — not the other way.",
        description:
            "Tailored ERP systems, CRMs, dashboards, and automation tools designed around your exact workflows, team size, and scale requirements.",
    },
    {
        icon: seo,
        name: "SEO & Digital Growth",
        tagline: "Get found. Get leads. Get results.",
        description:
            "Data-driven SEO and marketing strategies that increase visibility, drive qualified traffic, and convert visitors into customers.",
    },
    {
        icon: cloudai,
        name: "Cloud & AI Integration",
        tagline: "Leverage AI to work smarter, not harder.",
        description:
            "We integrate cloud infrastructure and AI tools — chatbots, smart search, automation workflows — into your existing or new product.",
    },
];

export default function MainServices() {
    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="hover:border-malachite group bg-bkg-primary flex flex-col gap-4 rounded-2xl border border-transparent p-6 transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center select-none">
                                <Image
                                    src={service.icon}
                                    alt={service.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Name + tagline */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-h4 text-deepspace-rich font-bold">
                                    {service.name}
                                </h3>
                                <p className="text-small text-malachite-rich font-semibold">
                                    {service.tagline}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-small text-typocolor-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto">
                    <BrandBtn href="/contact" variant="secondary">
                        Start Your Project
                    </BrandBtn>
                </div>
            </div>
        </section>
    );
}
