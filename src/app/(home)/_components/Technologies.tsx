import SectionHeader from "@/components/basic-ui/SectionHeader";

const technology = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Angular", icon: "devicon-angularjs-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Laravel", icon: "devicon-laravel-original" },
    { name: "React Native", icon: "devicon-react-original" },
    { name: "Flutter", icon: "devicon-flutter-plain" },
    { name: "Swift", icon: "devicon-swift-plain" },
    { name: "SpringBoot", icon: "devicon-spring-original" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Go", icon: "devicon-go-plain" },
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Redis", icon: "devicon-redis-plain" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain" },
    { name: "GCP", icon: "devicon-googlecloud-plain" },
    { name: "Azure", icon: "devicon-azure-plain" },
];

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Technologies() {
    return (
        <section className="bg-snow h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Tech Stack"
                    heading="Technologies We Work With"
                    highlight="We Work With"
                    support="We pick the right technology for the right problem — not just what's trending."
                />

                <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                    {technology.map((tech) => (
                        <div
                            key={tech.name}
                            className="shadow-soft flex min-w-16 flex-col items-center gap-2 rounded-xl bg-white py-4 grayscale-0"
                        >
                            <i
                                className={`${tech.icon} colored text-3xl leading-none`}
                            />
                            <p className="text-xmall text-typocolor-muted">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
