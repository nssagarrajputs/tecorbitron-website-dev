const details = [
    { label: "Company Legal Name", value: "Tecorbitron Solutions Pvt. Ltd." },
    { label: "Type", value: "Private Limited Company" },
    { label: "Incorporated", value: "August 2024" },
    { label: "Headquarters", value: "Ghaziabad, NCR, India" },
    { label: "Official Email", value: "info@tecorbitron.com" },
];

export default function Credibility() {
    return (
        <section className="bg-deepspace px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-6">
                    <div className="border-malachite/20 bg-malachite/10 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            Company Credentials
                        </span>
                    </div>

                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        A Company You Can{" "}
                        <span className="text-malachite">Trust</span>
                    </h2>

                    <p className="max-w-3xl text-center leading-relaxed text-white">
                        We are a fully registered Private Limited company — not
                        a freelancer or unregistered agency. Enterprise clients
                        and international partners can verify our credentials
                        through official channels.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-white/10">
                    <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                        <h3 className="font-black text-white/50">
                            Company Information
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        {details.map((detail, index) => (
                            <div
                                key={detail.label}
                                className={`flex items-start justify-between gap-4 border-b border-white/5 px-6 py-4 last:border-0 ${index % 2 === 0 ? "bg-white/2" : "bg-transparent"}`}
                            >
                                <span className="shrink-0 pt-0.5 text-xs font-bold tracking-wider text-white/30 uppercase">
                                    {detail.label}
                                </span>
                                <span className="text-right text-sm font-semibold text-white/70">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-8 text-center text-sm leading-relaxed font-medium text-white/20">
                    * CIN and full registration details available upon request
                    for enterprise clients and procurement teams.
                </p>
            </div>
        </section>
    );
}
