// src/components/page/services/ComparisonTable.tsx

const rows = [
    {
        feature: "Direct communication with team",
        us: true,
        freelancer: true,
        agency: false,
    },
    {
        feature: "Transparent fixed pricing",
        us: true,
        freelancer: false,
        agency: false,
    },
    {
        feature: "30-day delivery guarantee",
        us: true,
        freelancer: false,
        agency: true,
    },
    {
        feature: "Post-launch support included",
        us: true,
        freelancer: true,
        agency: true,
    },
    {
        feature: "Dedicated project manager",
        us: true,
        freelancer: false,
        agency: true,
    },
    {
        feature: "Startup-friendly pricing",
        us: true,
        freelancer: true,
        agency: false,
    },
    {
        feature: "Full-stack capability",
        us: true,
        freelancer: false,
        agency: true,
    },
];

function Tick() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="rgba(0,208,96,0.15)" />
            <path
                d="M6 10l3 3 5-5"
                stroke="#00d060"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function Cross() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.05)" />
            <path
                d="M7 7l6 6M13 7l-6 6"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function ComparisonTable() {
    return (
        <section className="bg-deepspace px-4 py-24">
            <div className="mx-auto max-w-5xl">
                {/* ── HEADER ── */}
                <div className="mb-14 flex flex-col items-center gap-4 text-center">
                    <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            Why Us
                        </span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Tecorbitron vs{" "}
                        <span className="text-malachite">Alternatives</span>
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed text-white/50">
                        See how we stack up against freelancers and big
                        agencies.
                    </p>
                </div>

                {/* ── SCROLLABLE WRAPPER on mobile ── */}
                <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full min-w-135 border-collapse">
                        {/* Head */}
                        <thead>
                            <tr>
                                <th className="w-1/2 rounded-tl-2xl bg-white/5 px-6 py-4 text-left text-xs font-black tracking-wider text-white/30 uppercase">
                                    Feature
                                </th>
                                <th className="bg-malachite/10 border-malachite/20 border-x px-6 py-4 text-center">
                                    <p className="text-sm font-black text-white">
                                        Tecorbitron
                                    </p>
                                    <p className="text-malachite mt-0.5 text-xs font-semibold">
                                        That&apos;s Us ✦
                                    </p>
                                </th>
                                <th className="bg-white/5 px-6 py-4 text-center">
                                    <p className="text-sm font-bold text-white/50">
                                        Freelancer
                                    </p>
                                </th>
                                <th className="rounded-tr-2xl bg-white/5 px-6 py-4 text-center">
                                    <p className="text-sm font-bold text-white/50">
                                        Big Agency
                                    </p>
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={row.feature}
                                    className={`border-t border-white/5 ${
                                        i === rows.length - 1
                                            ? "[&>td:first-child]:rounded-bl-2xl [&>td:last-child]:rounded-br-2xl"
                                            : ""
                                    }`}
                                >
                                    {/* Feature */}
                                    <td
                                        className={`px-6 py-4 ${i % 2 === 0 ? "bg-white/2" : "bg-transparent"}`}
                                    >
                                        <span className="text-sm font-semibold text-white/60">
                                            {row.feature}
                                        </span>
                                    </td>

                                    {/* Tecorbitron */}
                                    <td
                                        className={`border-malachite/20 border-x px-6 py-4 text-center ${i % 2 === 0 ? "bg-malachite/6" : "bg-malachite/3"}`}
                                    >
                                        <div className="flex justify-center">
                                            {row.us ? <Tick /> : <Cross />}
                                        </div>
                                    </td>

                                    {/* Freelancer */}
                                    <td
                                        className={`px-6 py-4 text-center ${i % 2 === 0 ? "bg-white/2" : "bg-transparent"}`}
                                    >
                                        <div className="flex justify-center">
                                            {row.freelancer ? (
                                                <Tick />
                                            ) : (
                                                <Cross />
                                            )}
                                        </div>
                                    </td>

                                    {/* Agency */}
                                    <td
                                        className={`px-6 py-4 text-center ${i % 2 === 0 ? "bg-white/2" : "bg-transparent"}`}
                                    >
                                        <div className="flex justify-center">
                                            {row.agency ? <Tick /> : <Cross />}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
