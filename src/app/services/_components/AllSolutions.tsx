import {
    Globe,
    AppWindow,
    Smartphone,
    LayoutDashboard,
    ShoppingCart,
    Users,
    GraduationCap,
    MonitorSmartphone,
    Store,
    ShoppingBag,
    PackageSearch,
    CalendarCheck,
    Bot,
    Cloud,
    SearchCheck,
    Megaphone,
    BarChart3,
    Plug,
} from "lucide-react";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import BrandBtn from "@/components/basic-ui/BrandBtn";

const solutions = [
    { icon: Globe, name: "Custom Websites" },
    { icon: AppWindow, name: "Web Apps & PWA" },
    { icon: Smartphone, name: "Cross-Platform Apps" },
    { icon: MonitorSmartphone, name: "Web Portals" },
    { icon: ShoppingCart, name: "E-Commerce Platforms" },
    { icon: Users, name: "CRM & ERP Systems" },
    { icon: GraduationCap, name: "Learning Platforms" },
    { icon: LayoutDashboard, name: "HR & Internal Tools" },
    { icon: Store, name: "Shopify & WooCommerce" },
    { icon: ShoppingBag, name: "Multi-Vendor System" },
    { icon: PackageSearch, name: "Inventory Management" },
    { icon: CalendarCheck, name: "Booking & Reservation" },
    { icon: Bot, name: "AI Chatbots & Assistants" },
    { icon: Cloud, name: "Cloud & DevOps" },
    { icon: SearchCheck, name: "SEO & Content Strategy" },
    { icon: Megaphone, name: "Google Ads & PPC" },
    { icon: BarChart3, name: "Business Intelligence" },
    { icon: Plug, name: "API Development" },
];

export default function AllSolutions() {
    return (
        <section className="bg-bkg-primary h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Solutions"
                    heading="Built For Real Business Need"
                    highlight="Business Need"
                    support="From customer-facing platforms to internal systems, we build digital solutions tailored to how your business runs, serves, and scales."
                />

                {/* ── GRID ── */}
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                    {solutions.map(({ icon: Icon, name }) => (
                        <div
                            key={name}
                            className="hover:border-malachite group flex flex-col items-center gap-3 rounded-xl border border-transparent bg-white p-5 transition-all duration-200 select-none"
                        >
                            <Icon
                                size={24}
                                strokeWidth={1.5}
                                className="text-typocolor-muted group-hover:text-malachite transition-colors duration-200"
                            />
                            <p className="text-xmall text-typocolor-secondary group-hover:text-malachite-rich text-center font-semibold transition-colors duration-200">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto">
                    <BrandBtn href="/contact" variant="secondary">
                        Start Your Project
                    </BrandBtn>
                </div>
            </div>
        </section>
    );
}
