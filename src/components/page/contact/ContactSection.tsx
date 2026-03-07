"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    budget: string;
    message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStatus("sending");
        // Replace with actual form submission — Resend, Formspree, or API route
        await new Promise((res) => setTimeout(res, 1500));
        setStatus("success");
    };

    const inputClass =
        "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm font-medium text-deepspace placeholder:text-muted/60 outline-none transition-all duration-200 focus:border-malachite focus:bg-white focus:ring-2 focus:ring-malachite/10";

    const labelClass = "text-xs font-bold uppercase tracking-wider text-subtle";

    return (
        <section className="bg-white px-4 pt-8 pb-24">
            <div className="mx-auto max-w-4xl">
                <div className="rounded-lg bg-white p-8 shadow-xl">
                    <h3 className="text-deepspace mb-6 text-xl font-bold">
                        Have a project in mind or need expert IT solutions? Our
                        team is ready to help you take the next step.
                    </h3>

                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                            <div className="bg-malachite-dim flex h-16 w-16 items-center justify-center rounded-full">
                                <span className="text-3xl">✓</span>
                            </div>
                            <h3 className="text-deepspace text-xl font-black">
                                Message Sent!
                            </h3>
                            <p className="text-muted max-w-sm text-sm font-light">
                                Thanks for reaching out. We&apos;ll get back to
                                you within 24 hours. Check your inbox — we might
                                reply sooner.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            {/* Row 1 — Name + Email */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Rahul Sharma"
                                        className={inputClass}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="rahul@company.com"
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2 — Phone + Company */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Company / Brand
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Row 3 — Service + Budget */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Service Needed *
                                    </label>
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className={inputClass}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option
                                            value="Web
                                            Development"
                                        >
                                            Web Development
                                        </option>
                                        <option
                                            value="App
                                            Development"
                                        ></option>
                                        <option value="">
                                            App Development
                                        </option>
                                        <option
                                            value="SEO &
                                            Digital Marketing"
                                        ></option>
                                        <option value="">
                                            SEO & Digital Marketing
                                        </option>
                                        <option value="UI/UX Design">
                                            UI/UX Design
                                        </option>
                                        <option value="Custom Software">
                                            Custom Software
                                        </option>
                                        <option value="AI Solutions">
                                            AI Solutions
                                        </option>
                                        <option value="Not Sure Yet">
                                            Not Sure Yet
                                        </option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className={labelClass}>
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        className={inputClass}
                                    >
                                        <option value="" disabled>
                                            Select budget
                                        </option>
                                        <option value="Under ₹25,000">
                                            Under ₹25,000
                                        </option>
                                        <option value="₹25,000 – ₹75,000">
                                            ₹25,000 – ₹75,000
                                        </option>
                                        <option value="₹75,000 – ₹2,00,000">
                                            ₹75,000 – ₹2,00,000
                                        </option>
                                        <option value="₹2,00,000 – ₹5,00,000">
                                            ₹2,00,000 – ₹5,00,000
                                        </option>
                                        <option value="₹5,00,000+">
                                            ₹5,00,000+
                                        </option>
                                        <option value="Let's discuss">
                                            {"Let's discuss"}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4 — Message */}
                            <div className="flex flex-col gap-2">
                                <label className={labelClass}>
                                    Project Brief *
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project — what you're building, what problem it solves, and any specific requirements..."
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                    required
                                />
                            </div>

                            {/* Submit */}
                            <button
                                onClick={handleSubmit}
                                disabled={status === "sending"}
                                className="bg-malachite text-deepspace-deep hover:bg-malachite-soft inline-flex w-full items-center justify-center gap-2 rounded-sm py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "sending" ? (
                                    <>
                                        <span className="border-deepspace/30 border-t-deepspace h-4 w-4 animate-spin rounded-full border-2" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>

                            <small className="text-muted text-center text-xs font-medium">
                                By submitting, you agree to our{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="text-malachite-rich hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                                . We never spam.
                            </small>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
