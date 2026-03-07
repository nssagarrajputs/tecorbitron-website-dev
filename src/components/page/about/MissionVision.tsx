export default function MissionVision() {
    return (
        <section className="bg-surface px-4 py-12">
            <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="bg-deepspace-dim flex flex-col gap-4 rounded-lg p-8">
                        <div className="bg-malachite/10 flex h-10 w-10 items-center justify-center rounded-xl">
                            <span className="text-xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-black">Our Mission</h3>
                        <p className="leading-relaxed">
                            To make premium technology accessible to every
                            business — startups, SMEs, and enterprises alike —
                            through transparent pricing, honest communication,
                            and results that speak for themselves.
                        </p>
                    </div>

                    <div className="bg-deepspace-dim flex flex-col gap-4 rounded-lg p-8">
                        <div className="bg-malachite-dim flex h-10 w-10 items-center justify-center rounded-xl">
                            <span className="text-xl">🔭</span>
                        </div>
                        <h3 className="text-deepspace text-xl font-black">
                            Our Vision
                        </h3>
                        <p className="leading-relaxed">
                            To become the most trusted technology partner for
                            growing businesses across India and beyond — known
                            not just for the products we build, but for the
                            outcomes we deliver.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
