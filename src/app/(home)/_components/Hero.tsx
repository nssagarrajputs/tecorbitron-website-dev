import { MapPin, Users, Star } from "lucide-react";
import BrandBtn from "@/components/basic-ui/BrandBtn";

export default function Hero() {
    return (
        <section className="h-breathing-468 relative min-h-screen pt-32">
            {/* Radial glow center */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                }}
            />

            {/* ── CONTENT ── */}
            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
                {/* Eyebrow */}
                <div className="border-malachite-soft bg-malachite-opac flex-center gap-2 rounded-full border px-4 py-1.5 select-none">
                    <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                    <span className="text-malachite text-xmall font-bold tracking-wider">
                        FOR STARTUPS AND BUSINESS
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-h1 leading-tight font-light tracking-tight">
                    Build your digital product {/* <br /> */}
                    <span className="text-deepspace-rich font-bold">
                        Superfast
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-typocolor-secondary text-body max-w-2xl leading-relaxed tracking-tight">
                    Turn your ideas into powerful web, mobile, and software
                    solutions. From strategy to execution, our team ensures
                    scalable, secure, and user-centric digital experiences.
                </p>

                {/* CTAs */}

                <div className="mt-4">
                    <BrandBtn href="/contact" variant="primary">
                        Start Your Project
                    </BrandBtn>
                </div>

                {/* Trust Badges */}
                <div className="flex-center my-12 gap-4 sm:gap-6">
                    <div className="flex items-center gap-1.5 max-sm:flex-col">
                        <Users size={15} className="text-malachite" />
                        <span className="text-xmall font-semibold">
                            120+ Jobs done
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 max-sm:flex-col">
                        <Star
                            size={15}
                            strokeWidth={2}
                            className="text-warning"
                        />
                        <span className="text-xmall font-semibold">
                            Trusted by 100+ clients
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 max-sm:flex-col">
                        <MapPin size={15} className="text-malachite" />
                        <span className="text-xmall font-semibold">
                            NCR Based
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
