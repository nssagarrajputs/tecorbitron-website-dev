import Hero from "@/components/page/contact/Hero";
import ContactSection from "@/components/page/contact/ContactSection";
import MapSection from "@/components/page/contact/MapSection";
import Channel from "@/components/page/contact/Channel";

export default function Contact() {
    return (
        <main>
            <Hero />
            <Channel />
            <ContactSection />
            <MapSection />
        </main>
    );
}
