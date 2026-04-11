import Hero from "./_components/Hero";
import ClientLogoStripe from "./_components/ClientLogoStripe";
import CoreServices from "./_components/CoreServices";
import Solutions from "./_components/Solutions";
import Technologies from "./_components/Technologies";
import StatsBand from "./_components/StatsBand";
import FeaturedProjects from "./_components/FeaturedProjects";
import Testimonials from "./_components/Testimonials";
import FeaturedBlogs from "./_components/FeaturedBlogs";
import CTA from "./_components/CTA";
import StructuredData, { homePageSchema } from "@/components/StructuredData";

export default function Home() {
    return (
        <main>
            <StructuredData data={homePageSchema()} />

            <Hero />
            <ClientLogoStripe />
            <CoreServices />
            <Solutions />
            <Technologies />
            <StatsBand />
            <FeaturedProjects />
            <Testimonials />
            <FeaturedBlogs />
            <CTA />
        </main>
    );
}
