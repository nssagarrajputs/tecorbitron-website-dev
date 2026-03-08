type Tech = { name: string; icon: string };
type SubCategory = { label: string; items: Tech[] };
type Category = {
    id: string;
    title: string;
    emoji: string;
    subcategories: SubCategory[];
};

// ── Column 1: Web, App, UI/UX ──
const col1: Category[] = [
    {
        id: "web",
        title: "Web",
        emoji: "🌐",
        subcategories: [
            {
                label: "Frontend & Frameworks",
                items: [
                    { name: "HTML5", icon: "devicon-html5-plain" },
                    { name: "CSS3", icon: "devicon-css3-plain" },
                    { name: "JavaScript", icon: "devicon-javascript-plain" },
                    { name: "TypeScript", icon: "devicon-typescript-plain" },
                    { name: "React", icon: "devicon-react-original" },
                    { name: "Next.js", icon: "devicon-nextjs-plain" },
                    { name: "Vue.js", icon: "devicon-vuejs-plain" },
                    { name: "Angular", icon: "devicon-angularjs-plain" },
                    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
                    { name: "Redux", icon: "devicon-redux-original" },
                ],
            },
            {
                label: "Backend & Libraries",
                items: [
                    { name: "Node.js", icon: "devicon-nodejs-plain" },
                    { name: "Express", icon: "devicon-express-original" },
                    { name: "Laravel", icon: "devicon-laravel-original" },
                    { name: "SpringBoot", icon: "devicon-spring-original" },
                    { name: "Python", icon: "devicon-python-plain" },
                    { name: "GraphQL", icon: "devicon-graphql-plain" },
                    { name: "Prisma", icon: "devicon-prisma-original" },
                    { name: "FastAPI", icon: "devicon-fastapi-plain" },
                ],
            },
            {
                label: "Version Control & CI/CD",
                items: [
                    { name: "Git", icon: "devicon-git-plain" },
                    { name: "GitHub", icon: "devicon-github-original" },
                    { name: "GitLab", icon: "devicon-gitlab-plain" },
                    { name: "BitBucket", icon: "devicon-bitbucket-original" },
                    { name: "Vercel", icon: "devicon-vercel-original" },
                    { name: "Jenkins", icon: "devicon-jenkins-plain" },
                ],
            },
        ],
    },
    {
        id: "app",
        title: "App",
        emoji: "📱",
        subcategories: [
            {
                label: "Native & Cross-Platform",
                items: [
                    { name: "React Native", icon: "devicon-react-original" },
                    { name: "Expo", icon: "devicon-expo-original" },
                    { name: "Flutter", icon: "devicon-flutter-plain" },
                    { name: "Swift", icon: "devicon-swift-plain" },
                    { name: "Kotlin", icon: "devicon-kotlin-plain" },
                    { name: "Android", icon: "devicon-android-plain" },
                ],
            },
            {
                label: "Backend for Mobile",
                items: [
                    { name: "Firebase", icon: "devicon-firebase-plain" },
                    { name: "Supabase", icon: "devicon-supabase-plain" },
                    {
                        name: "AWS Amplify",
                        icon: "devicon-amazonwebservices-plain",
                    },
                    { name: "Node.js", icon: "devicon-nodejs-plain" },
                ],
            },
            {
                label: "Mobile Testing",
                items: [
                    { name: "Jest", icon: "devicon-jest-plain" },
                    { name: "Appium", icon: "devicon-selenium-original" },
                    { name: "Detox", icon: "devicon-jest-plain" },
                ],
            },
        ],
    },
    {
        id: "software",
        title: "Software",
        emoji: "🖥️",
        subcategories: [
            {
                label: "Programming Languages",
                items: [
                    { name: "Java", icon: "devicon-java-plain" },
                    { name: "C++", icon: "devicon-cplusplus-plain" },
                    { name: "Python", icon: "devicon-python-plain" },
                    { name: "Go", icon: "devicon-go-plain" },
                    { name: "Rust", icon: "devicon-rust-plain" },
                    { name: "C#", icon: "devicon-csharp-plain" },
                    { name: "PHP", icon: "devicon-php-plain" },
                ],
            },
            {
                label: "Desktop Frameworks",
                items: [
                    { name: "Electron", icon: "devicon-electron-original" },
                    { name: ".NET", icon: "devicon-dot-net-plain" },
                    { name: "Qt", icon: "devicon-qt-original" },
                    { name: "Tauri", icon: "devicon-rust-plain" },
                ],
            },
            {
                label: "APIs & Integrations",
                items: [
                    { name: "REST", icon: "devicon-fastapi-plain" },
                    { name: "GraphQL", icon: "devicon-graphql-plain" },
                    { name: "Postman", icon: "devicon-postman-plain" },
                    { name: "Swagger", icon: "devicon-swagger-plain" },
                    { name: "gRPC", icon: "devicon-grpc-plain" },
                ],
            },
        ],
    },
];

// ── Column 2: Software, DBMS, Cloud & AI ──
const col2: Category[] = [
    {
        id: "uiux",
        title: "UI/UX & CX",
        emoji: "🎨",
        subcategories: [
            {
                label: "Design, Prototyping & Graphics",
                items: [
                    { name: "Figma", icon: "devicon-figma-plain" },
                    { name: "Adobe XD", icon: "devicon-xd-plain" },
                    { name: "Illustrator", icon: "devicon-illustrator-plain" },
                    { name: "Photoshop", icon: "devicon-photoshop-plain" },
                    {
                        name: "After Effects",
                        icon: "devicon-aftereffects-plain",
                    },
                    { name: "Framer", icon: "devicon-framermotion-original" },
                    { name: "Blender", icon: "devicon-blender-original" },
                ],
            },
            {
                label: "Wireframing & UI Libraries",
                items: [
                    { name: "Storybook", icon: "devicon-storybook-plain" },
                    { name: "Radix UI", icon: "devicon-react-original" },
                    { name: "Shadcn/ui", icon: "devicon-react-original" },
                    { name: "Maze", icon: "devicon-figma-plain" },
                ],
            },
        ],
    },
    {
        id: "dbms",
        title: "DBMS",
        emoji: "🗄️",
        subcategories: [
            {
                label: "Relational & NoSQL",
                items: [
                    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                    { name: "MySQL", icon: "devicon-mysql-plain" },
                    { name: "MongoDB", icon: "devicon-mongodb-plain" },
                    { name: "Redis", icon: "devicon-redis-plain" },
                    { name: "SQLite", icon: "devicon-sqlite-plain" },
                    { name: "Supabase", icon: "devicon-supabase-plain" },
                ],
            },
            {
                label: "Data Warehousing & Lakes",
                items: [
                    { name: "BigQuery", icon: "devicon-googlecloud-plain" },
                    {
                        name: "Snowflake",
                        icon: "devicon-amazonwebservices-plain",
                    },
                    {
                        name: "Redshift",
                        icon: "devicon-amazonwebservices-plain",
                    },
                    {
                        name: "Databricks",
                        icon: "devicon-apachespark-original",
                    },
                    { name: "dbt", icon: "devicon-python-plain" },
                ],
            },
            {
                label: "Real-Time Streaming",
                items: [
                    { name: "Kafka", icon: "devicon-apachekafka-original" },
                    { name: "RabbitMQ", icon: "devicon-rabbitmq-original" },
                    { name: "Spark", icon: "devicon-apachespark-original" },
                    { name: "Flink", icon: "devicon-apachespark-original" },
                ],
            },
        ],
    },
    {
        id: "cloud",
        title: "Cloud & AI",
        emoji: "☁️",
        subcategories: [
            {
                label: "Cloud Platforms",
                items: [
                    { name: "AWS", icon: "devicon-amazonwebservices-plain" },
                    { name: "GCP", icon: "devicon-googlecloud-plain" },
                    { name: "Azure", icon: "devicon-azure-plain" },
                    { name: "Vercel", icon: "devicon-vercel-original" },
                    { name: "Netlify", icon: "devicon-netlify-plain" },
                    {
                        name: "DigitalOcean",
                        icon: "devicon-digitalocean-plain",
                    },
                ],
            },
            {
                label: "Containerization & Orchestration",
                items: [
                    { name: "Docker", icon: "devicon-docker-plain" },
                    { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
                    { name: "Terraform", icon: "devicon-terraform-plain" },
                    { name: "Ansible", icon: "devicon-ansible-plain" },
                    { name: "Nginx", icon: "devicon-nginx-original" },
                ],
            },
            {
                label: "Cloud Storage & AI",
                items: [
                    { name: "OpenAI", icon: "devicon-python-plain" },
                    { name: "TensorFlow", icon: "devicon-tensorflow-original" },
                    { name: "PyTorch", icon: "devicon-pytorch-original" },
                    { name: "LangChain", icon: "devicon-python-plain" },
                    { name: "HuggingFace", icon: "devicon-python-plain" },
                    { name: "AWS S3", icon: "devicon-amazonwebservices-plain" },
                ],
            },
        ],
    },
];

// ── Single Category Card ──────────────────────────────────────────────────────
function CategoryCard({ cat }: { cat: Category }) {
    return (
        <div className="bg-deepspace-dim flex flex-col gap-6 rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-3 lg:hidden">
                <span className="border-border flex h-10 w-10 items-center justify-center rounded-xl border bg-white text-xl shadow-sm">
                    {cat.emoji}
                </span>
                <h3 className="text-deepspace text-lg font-black">
                    {cat.title}
                </h3>
            </div>

            {/* Subcategories */}
            <div className="flex flex-col gap-6">
                {cat.subcategories.map((sub) => (
                    <div key={sub.label} className="flex flex-col gap-3">
                        {/* Sub label */}
                        <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                            {sub.label}
                        </p>

                        {/* Tech item boxes */}
                        <div className="flex flex-wrap gap-2">
                            {sub.items.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex min-w-16 flex-col items-center gap-1.5 rounded-lg bg-white px-3 py-2.5 "
                                >
                                    <i
                                        className={`${tech.icon} colored text-2xl leading-none`}
                                    />
                                    <span className="text-muted text-center text-[10px] leading-tight font-semibold">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Technologies() {
    return (
        <section className="bg-white px-4 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="bg-malachite-dim inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite-rich text-xs font-bold tracking-widest uppercase">
                            Tech Stack
                        </span>
                    </div>
                    <h2 className="text-deepspace text-4xl font-black tracking-tight sm:text-5xl">
                        {"Technologies "}
                        <span className="text-malachite">We Work With</span>
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed">
                        {
                            "We pick the right technology for the right problem — not just what's trending."
                        }
                    </p>
                </div>

                {/* ── 2 Column Grid — items-start = fit-content height ── */}
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    {/* Column 1 — Web, App, UI/UX */}
                    <div className="flex flex-col gap-8">
                        {col1.map((cat) => (
                            <CategoryCard key={cat.id} cat={cat} />
                        ))}
                    </div>

                    {/* Column 2 — Software, DBMS, Cloud & AI */}
                    <div className="flex flex-col gap-8">
                        {col2.map((cat) => (
                            <CategoryCard key={cat.id} cat={cat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
