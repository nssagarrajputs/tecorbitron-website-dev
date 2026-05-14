import SectionHeader from "@/components/basic-ui/SectionHeader";

import React from "@/assets/technology-icon/react.svg";
import Nextjs from "@/assets/technology-icon/next-js.svg";
import TypeScript from "@/assets/technology-icon/typescript.svg";
import Angular from "@/assets/technology-icon/angular.svg";
import Nodejs from "@/assets/technology-icon/nodejs.svg";
import Express from "@/assets/technology-icon/expressjs.svg";
import Laravel from "@/assets/technology-icon/laravel-2.svg";
import ReactNative from "@/assets/technology-icon/react-native.svg";
import Flutter from "@/assets/technology-icon/flutter.svg";
import Swift from "@/assets/technology-icon/swift-15.svg";
import SpringBoot from "@/assets/technology-icon/spring-3.svg";
import Java from "@/assets/technology-icon/java-14.svg";
import Cplusplus from "@/assets/technology-icon/c.svg";
import Python from "@/assets/technology-icon/python-5.svg";
import Go from "@/assets/technology-icon/go-lang.svg";
import PHP from "@/assets/technology-icon/php-4.svg";
import Figma from "@/assets/technology-icon/figma-icon.svg";
import PostgreSQL from "@/assets/technology-icon/postgresql.svg";
import MySQL from "@/assets/technology-icon/mysql-logo-pure.svg";
import MongoDB from "@/assets/technology-icon/mongodb-icon-1.svg";
import Redis from "@/assets/technology-icon/redis.svg";
import AWS from "@/assets/technology-icon/aws-2.svg";
import GCP from "@/assets/technology-icon/google-cloud-1.svg";
import Azure from "@/assets/technology-icon/azure-2.svg";
import Image from "next/image";
import SectionContainer from "@/components/basic-ui/SectionContainer";

const technology = [
    { name: "React", icon: React },
    { name: "Next.js", icon: Nextjs },
    { name: "TypeScript", icon: TypeScript },
    { name: "Angular", icon: Angular },
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: Express },
    { name: "Laravel", icon: Laravel },
    { name: "React Native", icon: ReactNative },
    { name: "Flutter", icon: Flutter },
    { name: "Swift", icon: Swift },
    { name: "SpringBoot", icon: SpringBoot },
    { name: "Java", icon: Java },
    { name: "C++", icon: Cplusplus },
    { name: "Python", icon: Python },
    { name: "Go", icon: Go },
    { name: "PHP", icon: PHP },
    { name: "Figma", icon: Figma },
    { name: "PostgreSQL", icon: PostgreSQL },
    { name: "MySQL", icon: MySQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "AWS", icon: AWS },
    { name: "GCP", icon: GCP },
    { name: "Azure", icon: Azure },
];

// ── Main Section ─────────────────────────────────────────────────────────────
export default function Technologies() {
    return (
        <SectionContainer
            eyebrow="Tech Stack"
            heading="Technologies We Work With"
            highlight="We Work With"
            support="We pick the right technology for the right problem — not just what's trending."
        >
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-8">
                {technology.map((tech) => (
                    <div
                        key={tech.name}
                        className="cardbox flex flex-col items-center gap-2 py-4"
                    >
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            className="aspect-square w-[30%] object-contain select-none"
                        />
                        <p className="text-xmall text-typocolor-muted">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
