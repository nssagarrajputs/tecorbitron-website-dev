"use client";

import { useState } from "react";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    description: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ProjectInquiry() {
    const [form, setForm] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        phone: "",
        description: "",
    });

    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.phone || !form.description) {
            return;
        }

        setStatus("sending");

        try {
            const res = await fetch("/api/project-inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    description: "",
                });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <section className="v-breathing-20 h-breathing-468">
                <div className="section-vlex-gap mx-auto max-w-4xl">
                    <div className="border-border flex flex-col items-center justify-center rounded-3xl border bg-white px-6 py-14 text-center">
                        <div className="bg-malachite-opac mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                            <span className="text-malachite text-3xl font-bold">
                                ✓
                            </span>
                        </div>

                        <h3 className="text-h3 text-typocolor-primary font-black tracking-tight">
                            Inquiry sent successfully
                        </h3>

                        <p className="text-body text-typocolor-secondary mt-4 max-w-xl leading-relaxed">
                            Thanks for sharing your project details. Our team
                            will review your inquiry and get back to you with
                            the best next step.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="v-breathing-20 h-breathing-468">
            <div className="section-vlex-gap mx-auto max-w-4xl">
                <p className="text-h4 text-typocolor-secondary font-semibold">
                    Share a few details about what you need. We’ll review it and
                    get back to you.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="text-typocolor-primary mb-2 block text-sm font-semibold"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="border-border text-body focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="company"
                            className="text-typocolor-primary mb-2 block text-sm font-semibold"
                        >
                            Company / Brand Name{" "}
                            <span className="text-typocolor-muted">
                                (Optional)
                            </span>
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company or brand"
                            className="border-border text-body focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="text-typocolor-primary mb-2 block text-sm font-semibold"
                        >
                            Work Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="border-border text-body focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="text-typocolor-primary mb-2 block text-sm font-semibold"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 000-000-0000"
                            className="border-border text-body focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label
                            htmlFor="description"
                            className="text-typocolor-primary mb-2 block text-sm font-semibold"
                        >
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={6}
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Tell us about your project, goals, features, current challenges, or anything else that will help us understand what you need."
                            className="border-border text-body focus:border-malachite w-full rounded-xl border bg-white px-4 py-3 transition outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-4 pt-2 md:col-span-2 md:flex-row md:items-center">
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="bg-malachite text-deepspace hover:bg-malachite-rich rounded-xl px-6 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "sending"
                                ? "Sending..."
                                : "Send Project Inquiry"}
                        </button>

                        {status === "error" && (
                            <p className="text-sm font-medium text-red-600">
                                Something went wrong. Please try again or email
                                us at{" "}
                                <a
                                    href="mailto:info@tecorbitron.com"
                                    className="underline"
                                >
                                    info@tecorbitron.com
                                </a>
                                .
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
