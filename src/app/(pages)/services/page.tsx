import Hero from "@/components/page/services/Hero";
import ServicesDetail from "@/components/page/services/ServicesDetail";
import WhoWeWorkWith from "@/components/page/services/WhoWeWorkWith";
import ComparisonTable from "@/components/page/services/ComparisonTable";
import FAQs from "@/components/page/services/FAQs";
import CTA from "@/components/page/services/CTA";
import type { Metadata } from "next";
import StructuredData, { servicesSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Tecorbitron offers end-to-end IT services — Web Development, App Development, Custom Software, UI/UX Design, AI Solutions, and SEO & Digital Marketing for businesses of all sizes.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "IT Services — Tecorbitron Solutions",
        description:
            "Web, mobile, software, AI, and marketing services built to scale. Transparent pricing, fast delivery, real results.",
        url: "https://www.tecorbitron.com/services",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function Services() {
    return (
        <main>
            <StructuredData data={servicesSchema()} />
            <Hero />
            <ServicesDetail />
            <WhoWeWorkWith />
            <ComparisonTable />
            <FAQs />
            <CTA />
        </main>
    );
}
