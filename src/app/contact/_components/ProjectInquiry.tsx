"use client";

import { Zap, UserCheck, HandHeart } from "lucide-react";
import { useState, useEffect } from "react";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    description: string;
};

type Status = "idle" | "sending" | "success" | "error";

const trustSignals = [
    {
        icon: Zap,
        title: "Fast Response",
        desc: "We respond to all inquiries within one business day. For time-sensitive projects, WhatsApp is the fastest way to reach us.",
    },
    {
        icon: UserCheck,
        title: "Direct Approach",
        desc: "You work directly with experienced specialists — no handoffs, no lost context.",
    },
    {
        icon: HandHeart,
        title: "Zero Pressure",
        desc: "We focus on helping you make the right decision for your business — even if that means referring you elsewhere.",
    },
];

const emptyForm: FormData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
};

export default function ProjectInquiry() {
    const [form, setForm] = useState<FormData>(emptyForm);
    const [status, setStatus] = useState<Status>("idle");

    // ── Auto-dismiss success after 3s ──
    useEffect(() => {
        if (status !== "success") return;
        const timer = setTimeout(() => setStatus("idle"), 3000);
        return () => clearTimeout(timer);
    }, [status]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.description)
            return;

        setStatus("sending");
        try {
            const res = await fetch("/api/project-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm(emptyForm);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
                    {/* ── LEFT — Trust Signals (always visible) ── */}
                    <div className="flex flex-col gap-8 p-8">
                        {trustSignals.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Icon
                                        size={18}
                                        className="text-malachite"
                                    />
                                    <h3 className="text-small font-bold">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-small text-typocolor-muted leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── RIGHT — Form or Success (scoped) ── */}
                    <div className="bg-bkg-primary flex flex-col gap-8 rounded-xl p-8">
                        {status === "success" ? (
                            <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12 text-center">
                                <div className="bg-malachite-opac flex h-16 w-16 items-center justify-center rounded-full">
                                    <span className="text-malachite text-3xl font-bold">
                                        ✓
                                    </span>
                                </div>
                                <h3 className="text-h4 text-typocolor-primary font-black tracking-tight">
                                    Inquiry Received
                                </h3>
                                <p className="text-small text-typocolor-secondary max-w-sm leading-relaxed">
                                    Thank you! Our team will review your
                                    submission and reach out within 24 hours.
                                </p>
                                <p className="text-xmall text-typocolor-muted">
                                    This message will close automatically…
                                </p>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <h2 className="text-h4 font-black">
                                        Discuss your project
                                    </h2>
                                    <p className="text-small text-typocolor-muted mt-2 leading-relaxed">
                                        Have a question or want to discuss your
                                        project? Send your request below and
                                        {"we'll"} get back within 24 hours.
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                                >
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="border-border text-small focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                                        required
                                    />
                                    <input
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Company / Brand Name"
                                        className="border-border text-small focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Work Email"
                                        className="border-border text-small focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="border-border text-small focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        rows={5}
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project, goals, features, or current challenges."
                                        className="border-border text-small focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none sm:col-span-2"
                                        required
                                    />
                                    <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2 sm:flex-row sm:items-center">
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="bg-malachite hover:bg-malachite-rich text-small mx-auto mt-4 rounded-xl px-6 py-3 font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {status === "sending"
                                                ? "Sending..."
                                                : "Send Project Inquiry"}
                                        </button>
                                        {status === "error" && (
                                            <p className="text-sm font-medium text-red-600">
                                                Something went wrong. Email us
                                                at{" "}
                                                <a
                                                    href="mailto:info@tecorbitron.com"
                                                    className="underline"
                                                >
                                                    info@tecorbitron.com
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
