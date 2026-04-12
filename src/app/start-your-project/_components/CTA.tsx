import Link from "next/link";

export default function CTA() {
    return (
        <section className="h-breathing-6812 v-breathing-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-xl bg-linear-90 from-[#DBFCFF] to-[#E3FFF0] p-6 py-12 text-center sm:py-20 lg:py-24">
                <h2 className="text-h2 text-typocolor-primary font-black tracking-tight">
                    Need another way to reach us?
                </h2>

                <p className="text-body text-typocolor-secondary mx-auto mt-4 max-w-2xl leading-relaxed">
                    Visit our contact page for phone, email, WhatsApp, and
                    office details.
                </p>

                <div className="mt-6">
                    <Link
                        href="/contact"
                        className="bg-malachite text-deepspace hover:bg-malachite-rich inline-flex rounded-xl px-6 py-3 text-sm font-bold transition"
                    >
                        Go to Contact Page
                    </Link>
                </div>
            </div>
        </section>
    );
}
