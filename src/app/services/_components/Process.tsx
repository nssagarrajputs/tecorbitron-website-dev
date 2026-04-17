import SectionHeader from "@/components/basic-ui/SectionHeader";

import Discovery from "@/assets/services/discovery.png";
import Design from "@/assets/services/design.png";
import Develop from "@/assets/services/develop.png";
import Deploy from "@/assets/services/deploy.png";
import Image from "next/image";

const steps = [
    {
        sr: "1",
        title: "Discovery",
        tagline: "Understand your goals before we write a single line of code",
        icon: Discovery,
        content:
            "We start by mapping your business objectives, audience needs, and technical requirements. This phase ensures we solve the right problem with the right solution — no assumptions, just clarity.",
    },
    {
        sr: "2",
        title: "Design",
        tagline: "Create intuitive experiences that users actually love",
        icon: Design,
        content:
            "We design with your users in mind, building wireframes, prototypes, and visual systems that balance business goals with exceptional user experience. Everything is validated before development begins.",
    },
    {
        sr: "3",
        title: "Develop",
        tagline:
            "Build reliable systems with modern technology and clean architecture",
        icon: Develop,
        content:
            "Our development follows proven engineering practices — modular code, continuous testing, performance optimization, and security from the ground up. We build solutions that scale and endure.",
    },
    {
        sr: "4",
        title: "Deliver",
        tagline: "Launch smoothly and support your success long-term",
        icon: Deploy,
        content:
            "We handle deployment, training, documentation, and optimization. Post-launch support ensures your solution continues performing as your business grows. We're in it for the long haul.",
    },
];

export default function Process() {
    return (
        <section className="bg-bkg-primary h-breathing-6812 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Our Process"
                    heading="The 4D's Framework"
                    highlight="Framework"
                    support="We transform ideas into working products through structured Discovery, thoughtful Design, Development, and seamless Delivery."
                />

                <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.sr}
                            className="shadow-card rounded-xl bg-white p-6"
                        >
                            <Image
                                src={step.icon}
                                alt={step.tagline}
                                className="mx-auto w-full max-w-96 rounded-lg select-none"
                            />
                            <h3 className="text-h4 mt-8 mb-4 font-bold">
                                {step.sr}. {step.title}
                            </h3>

                            <p className="text-small text-typocolor-muted">
                                {step.tagline}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
