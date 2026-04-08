import Hero from "@/components/page/home/Hero";
import ServiceOverview from "@/components/page/home/ServiceOverview";
import Solutions from "@/components/page/home/Solutions";
import Technologies from "@/components/page/home/Technologies";
import WhyUs from "@/components/page/home/WhyUs";
import FeaturedProjects from "@/components/page/home/FeaturedProjects";
import Testimonials from "@/components/page/home/Testimonials";
import StatsBand from "@/components/page/home/StatsBand";
import FeaturedBlogs from "@/components/page/home/FeaturedBlogs";
import CTA from "@/components/page/home/CTA";
import ClientLogoStripe from "@/components/page/home/ClientLogoStripe";
import StructuredData, { homePageSchema } from "@/components/StructuredData";

export default function Home() {
    return (
        <main>
            <StructuredData data={homePageSchema()} />
            <Hero />
            <ClientLogoStripe />
            <ServiceOverview />
            <Solutions />
            <Technologies />
            <StatsBand />
            <FeaturedProjects />
            <Testimonials />
            <WhyUs />
            <FeaturedBlogs />
            <CTA />
        </main>
    );
}
