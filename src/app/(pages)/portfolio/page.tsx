import Hero from "@/components/page/portfolio/Hero";
import ProjectList from "@/components/page/portfolio/ProjectList";

export const metadata = {
    title: "Our Work ",
    description:
        "Explore our featured projects — web development, mobile apps, SEO campaigns, and custom software solutions delivered for clients across India and beyond.",
};

export default async function PortfolioPage() {
    return (
        <main>
            <Hero />
            <ProjectList />
        </main>
    );
}
