import Hero from "@/components/page/home/Hero";
import ServiceOverview from "@/components/page/home/ServiceOverview";
import Solutions from "@/components/page/home/Solutions";
import Technologies from "@/components/page/home/Technologies";
import WhyUs from "@/components/page/home/WhyUs";
import PortfolioPreview from "@/components/page/home/PortfolioPreview";
import Testimonials from "@/components/page/home/Testimonials";
import StatsBand from "@/components/page/home/StatsBand";
import BlogTeaser from "@/components/page/home/BlogTeaser";
import CTA from "@/components/page/home/CTA";
import ClientLogoStripe from "@/components/page/home/ClientLogoStripe";

export default function Home() {
    return (
        <main>
            <Hero />
            <ClientLogoStripe />
            <ServiceOverview />
            <Solutions />
            <Technologies />
            <StatsBand />
            <PortfolioPreview />
            <Testimonials />
            <WhyUs />
            <BlogTeaser />
            <CTA />
        </main>
    );
}
