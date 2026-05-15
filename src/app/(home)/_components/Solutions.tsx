import {
    Globe,
    AppWindow,
    Smartphone,
    LayoutDashboard,
    Building2,
    ShoppingCart,
    Users,
    GraduationCap,
} from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionContainer from "@/components/basic-ui/SectionContainer";

const solution = [
    {
        icon: Globe,
        title: "Custom Websites",
        description:
            "Modern business websites built to inform, engage, and convert your audience.",
    },
    {
        icon: AppWindow,
        title: "Web Apps & PWA",
        description:
            "Fast, scalable applications for workflows, customer access, and daily operations.",
    },
    {
        icon: Smartphone,
        title: "Cross Platform Apps",
        description:
            "Mobile apps that work across devices with a consistent and reliable user experience.",
    },
    {
        icon: LayoutDashboard,
        title: "Web Portals",
        description:
            "Secure portals for customers, teams, vendors, and role-based access needs.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Platforms",
        description:
            "Online stores designed for product management, smooth checkout, and growth.",
    },
    {
        icon: Building2,
        title: "CRM & ERP Systems",
        description:
            "Connected systems to manage customers, operations, data, and core business processes.",
    },
    {
        icon: Users,
        title: "HR & Internal Tools",
        description:
            "Internal software that simplifies team workflows, approvals, records, and everyday tasks.",
    },
    {
        icon: GraduationCap,
        title: "Learning Platforms",
        description:
            "Training and education platforms with structured content, progress tracking, and user access.",
    },
];

export default function Solutions() {
    return (
        <SectionContainer
            eyebrow="Solutions"
            heading="Built For Real Business Need"
            highlight="Business Need"
            support="From customer-facing platforms to internal systems, we build digital solutions tailored to how your business runs, serves, and scales."
        >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {solution.map(({ title, icon: Icon, description }) => (
                    <div
                        key={title}
                        className="rounded-4 shadow-card border p-6"
                    >
                        <Icon size={40} strokeWidth={1} />

                        <h3 className="text-body my-4 font-semibold">
                            {title}
                        </h3>
                        <p className="text-small text-typocolor-muted">
                            {description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto">
                <BrandBtn href="/contact" variant="secondary">
                    Start Your Project
                </BrandBtn>
            </div>
        </SectionContainer>
    );
}
