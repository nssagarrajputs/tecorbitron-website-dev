import Hero from "@/components/page/about/Hero";
import MissionVision from "@/components/page/about/MissionVision";
import OurStory from "@/components/page/about/OurStory";
import Founder from "@/components/page/about/Founder";
import Credibility from "@/components/page/about/Credibility";
import CTA from "@/components/page/about/CTA";
import Intro from "@/components/page/about/Intro";
import TrustedPartners from "@/components/page/about/TrustedPartners";

export default function About() {
    return (
        <main>
            <Hero />
            <Intro />
            <OurStory />
            <MissionVision />
            <Founder />
            <Credibility />
            <TrustedPartners />
            <CTA />
        </main>
    );
}
