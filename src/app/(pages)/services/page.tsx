import Hero from "@/components/page/services/Hero";
import ServicesDetail from "@/components/page/services/ServicesDetail";
import WhoWeWorkWith from "@/components/page/services/WhoWeWorkWith";
import ComparisonTable from "@/components/page/services/ComparisonTable";
import FAQs from "@/components/page/services/FAQs";
import CTA from "@/components/page/services/CTA";

export default function Services() {
    return (
        <main>
            <Hero />
            <ServicesDetail />
            <WhoWeWorkWith />
            <ComparisonTable />
            <FAQs />
            <CTA />
        </main>
    );
}
