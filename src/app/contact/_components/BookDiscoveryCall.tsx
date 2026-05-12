"use client";
import SectionHeader from "@/components/basic-ui/SectionHeader";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookDiscoveryCall() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "discovery-call" });
            cal("ui", {
                theme: "light",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#00d060" },
                    dark: { "cal-brand": "#00d060" },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="v-breathing-20 h-breathing-468">
            <div className="section-vlex-gap mx-auto max-w-6xl">
                <SectionHeader
                    eyebrow="Online Meeting"
                    heading="Or Book a Discovery Call"
                    highlight="Discovery Call"
                    support="Prefer to talk first? Choose a time that works for you — we'll discuss your goals, requirements, and the clearest path forward."
                />

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <span className="bg-malachite-opac text-malachite rounded-full px-3 py-1 text-sm font-semibold">
                        30-minute intro call
                    </span>
                    <span className="bg-deepspace-dim text-deepspace rounded-full px-3 py-1 text-sm font-semibold">
                        Scope & next steps
                    </span>
                    <span className="bg-deepspace-dim text-deepspace rounded-full px-3 py-1 text-sm font-semibold">
                        No obligation
                    </span>
                </div>

                <Cal
                    namespace="discovery-call"
                    calLink="tecorbitron/discovery-call"
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "scroll",
                    }}
                    config={{
                        layout: "month_view",
                        useSlotsViewOnSmallScreen: "true",
                        theme: "light",
                    }}
                />
            </div>
        </section>
    );
}
