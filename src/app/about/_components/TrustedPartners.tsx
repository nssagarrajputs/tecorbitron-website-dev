import SectionHeader from "@/components/basic-ui/SectionHeader";

import AWS from "@/assets/trusted-partner/aws-2.svg";
import GoogleCloud from "@/assets/trusted-partner/google-cloud-1.svg";
import Azure from "@/assets/trusted-partner/azure-2.svg";
import DigitalOcean from "@/assets/trusted-partner/digitalocean-icon-1.svg";
import Salesforce from "@/assets/trusted-partner/salesforce-2.svg";
import WooComerce from "@/assets/trusted-partner/woocommerce.svg";
import Meta from "@/assets/trusted-partner/meta-3.svg";
import GAds from "@/assets/trusted-partner/google-ads-2.svg";
import Ln from "@/assets/trusted-partner/linkedin-icon-3.svg";
import Oracle from "@/assets/trusted-partner/oracle-india.svg";
import Docker from "@/assets/trusted-partner/docker-4.svg";
import Kuber from "@/assets/trusted-partner/kubernets.svg";
import Image from "next/image";

const partners = [
    { category: "Cloud", name: "AWS", icon: AWS },
    { category: "Cloud", name: "Google Cloud", icon: GoogleCloud },
    { category: "Cloud", name: "Azure", icon: Azure },
    { category: "Cloud", name: "DigitalOcean", icon: DigitalOcean },
    { category: "Commerce", name: "Salesforce", icon: Salesforce },
    { category: "Commerce", name: "WooCommerce", icon: WooComerce },
    { category: "Marketing", name: "Meta", icon: Meta },
    { category: "Marketing", name: "Google Ads", icon: GAds },
    { category: "Marketing", name: "LinkedIn", icon: Ln },
    { category: "Database", name: "Oracle", icon: Oracle },
    { category: "DevOps", name: "Docker", icon: Docker },
    { category: "DevOps", name: "Kubernetes", icon: Kuber },
];

export default function TrustedPartners() {
    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="TECHNOLOGY PARTNERS"
                    heading="Integration Across Platforms"
                    highlight="Platforms"
                    support="We work with globally recognised platforms and cloud providers — giving every project enterprise-grade reliability from day one."
                />

                {/* ── FLAT GRID ── */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {partners.map((p) => (
                        <div
                            key={p.name}
                            className="bg-bkg-primary flex flex-col items-center gap-3 rounded-lg px-2 py-4"
                        >
                            {/* Category label */}
                            <span className="text-muted text-[10px] font-black tracking-widest uppercase">
                                {p.category}
                            </span>

                            {/* Logo */}
                            <Image
                                src={p.icon}
                                alt={p.name}
                                className="aspect-square w-[30%]"
                            />

                            {/* Name */}
                            <span className="text-muted/50 text-center text-xs font-bold">
                                {p.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-muted mt-8 text-center text-xs font-medium">
                    Partner network continues to grow — reach out to explore
                    collaboration opportunities.
                </p>
            </div>
        </section>
    );
}
