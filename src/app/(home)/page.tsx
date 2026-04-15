import Hero from "./_components/Hero";
import ClientLogoStripe from "./_components/ClientLogoStripe";
import CoreServices from "./_components/CoreServices";
import Solutions from "./_components/Solutions";
import Technologies from "./_components/Technologies";
import StatsBand from "./_components/StatsBand";
import FeaturedProjects from "./_components/FeaturedProjects";
import Testimonials from "./_components/Testimonials";
import FeaturedBlogs from "./_components/FeaturedBlogs";
import StructuredData, { homePageSchema } from "@/components/StructuredData";
import CTAFormat from "@/components/templetes/CTAFormat";

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

            <CTAFormat
                eypill="LET'S TALK"
                heading="Ready to Build Something Better"
                highlight="Better"
                bodyText="Tell us about your project and we'll get back to you
                    within 24 hours. Free consultation, No strings
                    attached."
                primaryAction={{
                    text: "Start Your Project",
                    href: "/start-your-project",
                }}
                secondaryAction={{
                    text: "Chat on WhatsApp",
                    href: "https://wa.me/919084800496",
                }}
            />
        </main>
    );
}
