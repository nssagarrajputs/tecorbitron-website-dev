import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms & Conditions for Tecorbitron Solutions Pvt. Ltd.",
    alternates: { canonical: "/terms" },
    robots: { index: false, follow: false },
};

const sections = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("user", "you", or "your") and Tecorbitron Solutions Private Limited ("Company", "we", "our", or "us"), governing your access to and use of all services, platforms, and digital interfaces provided by us (collectively referred to as the "Platform" or "Services").

By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree, you are not authorised to access or use any portion of our Platform.

We strongly advise you to read these Terms carefully before proceeding. Continued use of our Services constitutes acceptance of the most current version of these Terms.`,
    },
    {
        id: "scope",
        title: "2. Scope of Application",
        content: `These Terms apply to your access and use of the following:

• Our official website and all subdomains
• Web applications and tools hosted under our domain
• Mobile applications developed or owned by us
• APIs, integrations, and digital tools provided by Tecorbitron Solutions Pvt. Ltd.
• Blog content, comment sections, and interactive content spaces

These Terms govern both registered and unregistered users. Even in the absence of an account system, they apply fully to all visitors and users who engage with our Platform.`,
    },
    {
        id: "modifications",
        title: "3. Modifications & Updates",
        content: `We reserve the right to update, modify, or replace these Terms at any time, with or without prior notice. All changes will be reflected on this page with a revised effective date.

For substantial modifications, we may notify users via email, in-app notifications, or website banners. Your continued use of the Services following any changes constitutes your acceptance of the revised Terms.

It is your responsibility to review these Terms periodically. If you disagree with any modification, you must discontinue use of our Services.`,
    },
    {
        id: "eligibility",
        title: "4. User Eligibility",
        content: `Our Services are intended for professionals and businesses. While no minimum age requirement is currently enforced, we reserve the right to introduce age or identity verification in the future as we expand our platform.

At this time, no user registration or login is required to browse our website. Should account functionality be introduced in the future, users must:

• Provide accurate, current, and complete registration information
• Maintain the confidentiality of their account credentials
• Accept full responsibility for all activities conducted under their account
• Notify us immediately of any unauthorised access or security breach`,
    },
    {
        id: "services",
        title: "5. Services Description",
        content: `Tecorbitron Solutions Pvt. Ltd. offers a range of professional IT services, including but not limited to:

• Custom Web Development & Web Applications
• Mobile Application Development (iOS & Android)
• UI/UX and Product Design
• E-commerce Development & Integration
• Search Engine Optimisation (SEO) & Digital Marketing
• Custom Software & Enterprise Solutions
• Artificial Intelligence & Machine Learning Integration
• Cloud Computing, DevOps & IT Infrastructure
• Testing, Quality Assurance & Maintenance
• Low-code / No-code Development

Each engagement is governed by a separate service agreement and subject to individually agreed pricing, scope, and timelines.`,
    },
    {
        id: "conduct",
        title: "6. User Conduct & Acceptable Use",
        content: `You agree to use our Services lawfully, responsibly, and in good faith. The following activities are strictly prohibited:

• Posting, transmitting, or distributing spam or unsolicited promotional content
• Scraping, harvesting, or extracting data using bots, scripts, or automated tools
• Reverse engineering, decompiling, or attempting to access source code
• Impersonating any individual, entity, or brand
• Interfering with server operations, network systems, or platform infrastructure
• Sharing, reselling, or redistributing proprietary software or content without written consent
• Engaging in any activity that violates applicable Indian law or regulation

We reserve the right to suspend or permanently terminate access for violations, with or without prior notice, at our sole discretion.`,
    },
    {
        id: "intellectual-property",
        title: "7. Intellectual Property Rights",
        content: `All intellectual property on our Platform — including but not limited to website layout, source code, mobile applications, trademarks, logos, blog content, illustrations, design assets, business methodologies, and service names — is the exclusive property of Tecorbitron Solutions Private Limited or its licensors.

Unless explicitly stated otherwise, no right, title, or interest in our intellectual property is granted to users. You may not reproduce, modify, distribute, sell, lease, or commercially exploit any part of our Services without our explicit written consent.

Unauthorised use of our intellectual property may result in civil and criminal liability under applicable Indian law.`,
    },
    {
        id: "user-content",
        title: "8. User-Generated Content",
        content: `Certain areas of our Platform (such as blog comment sections) may permit users to submit content. By submitting content, you grant Tecorbitron Solutions Pvt. Ltd. a non-exclusive, royalty-free, worldwide, perpetual licence to use, reproduce, distribute, and display such content on our platforms.

You agree not to post content that is:

• Defamatory, abusive, threatening, or offensive
• Infringing on third-party intellectual property or privacy rights
• Obscene, unlawful, fraudulent, or misleading
• Harmful to minors or any individual or group

We reserve the right to remove any user-generated content at our sole discretion, without prior notice, and to cooperate with legal authorities where content violates applicable law.`,
    },
    {
        id: "payment",
        title: "9. Payment Terms",
        content: `Currently, we do not process payments directly through our Platform. All services are contracted and invoiced via third-party platforms or agreed manual payment channels.

All payment terms, including amounts, milestones, and due dates, are outlined in individual service agreements or proposals.

If payment gateways are integrated into our Platform in the future, they will be subject to their own secure transaction handling protocols and supplementary terms.`,
    },
    {
        id: "refund",
        title: "10. Refund & Cancellation Policy",
        content: `Refunds: Refunds are evaluated on a case-by-case basis. A refund is not guaranteed unless mutually agreed upon in writing prior to or during the service engagement.

Cancellations: If a confirmed project is cancelled by the client, Tecorbitron Solutions reserves the right to charge a cancellation fee proportional to the work completed, resources committed, and time invested up to the point of cancellation.

All refund and cancellation requests must be submitted in writing to info@tecorbitron.com with supporting documentation. We aim to respond within 5 business days.`,
    },
    {
        id: "subscriptions",
        title: "11. Subscription Services",
        content: `We do not currently offer subscription-based services or recurring billing through our Platform.

Should such services be introduced, we will:

• Clearly communicate subscription duration, renewal policy, and pricing
• Provide transparent cancellation procedures
• Obtain explicit user opt-in before initiating any recurring charges`,
    },
    {
        id: "third-party",
        title: "12. Third-Party Services",
        content: `Our Platform may contain links to or integrations with third-party services such as payment processors, hosting providers, analytics tools, and freelance platforms (e.g., Upwork, GitHub, PayPal).

We do not control and are not responsible for the content, terms, policies, or practices of any third-party service. Your interactions with such services are governed entirely by their own Terms and Privacy Policies.

We recommend reviewing the policies of any third-party service you engage with through or alongside our Platform.`,
    },
    {
        id: "liability",
        title: "13. Limitation of Liability",
        content: `To the fullest extent permitted by applicable law, Tecorbitron Solutions Private Limited and its affiliates, directors, employees, agents, contractors, and licensors shall not be liable for any:

• Indirect, incidental, special, punitive, or consequential damages
• Loss of profits, revenue, data, goodwill, or business opportunities
• Business interruption arising from use of or inability to use our Services
• Errors, inaccuracies, or omissions in any content or information on our Platform

All Services are provided on an "as is" and "as available" basis, without warranties of any kind — express or implied — including but not limited to warranties of merchantability or fitness for a particular purpose.`,
    },
    {
        id: "indemnification",
        title: "14. Indemnification",
        content: `You agree to fully defend, indemnify, and hold harmless Tecorbitron Solutions Pvt. Ltd., its affiliates, directors, employees, and agents from and against any and all claims, demands, damages, obligations, losses, liabilities, costs, or debts (including reasonable legal fees) arising from:

• Your access to or use of our Services
• Your violation of any provision of these Terms
• Your violation of any third-party rights, including intellectual property, privacy, or contractual rights
• Any content you submit, post, or transmit through our Platform`,
    },
    {
        id: "termination",
        title: "15. Termination & Suspension",
        content: `We reserve the right to suspend or permanently terminate your access to all or part of our Services, at any time and without prior notice, for reasons including but not limited to:

• Violation of any provision of these Terms
• Engagement in unlawful or fraudulent activity
• Request by law enforcement or government authorities
• Operational, technical, or security concerns

Upon termination, all provisions relating to intellectual property rights, limitations of liability, indemnification, dispute resolution, and governing law shall continue to apply and remain in full force.`,
    },
    {
        id: "governing-law",
        title: "16. Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Ghaziabad, Uttar Pradesh, India.

By using our Services, you expressly consent to the jurisdiction of these courts.`,
    },
    {
        id: "dispute",
        title: "17. Dispute Resolution",
        content: `In the event of any dispute, claim, or controversy arising out of or in connection with these Terms or our Services, the following resolution process applies:

Step 1 — Negotiation: Both parties will first attempt to resolve the matter through good-faith negotiation within 30 days of written notice of the dispute.

Step 2 — Mediation: If negotiation fails, parties may pursue mediation through a mutually agreed mediator.

Step 3 — Arbitration: If mediation is unsuccessful, the dispute shall be submitted to final and binding arbitration in Ghaziabad, India, under the Arbitration and Conciliation Act, 1996. Proceedings shall be conducted in English.

Nothing herein shall prevent either party from seeking urgent interim or injunctive relief from a competent court.`,
    },
    {
        id: "contact",
        title: "18. Contact & Notices",
        content: `For any questions, legal notices, or concerns regarding these Terms and Conditions, please contact:

Tecorbitron Solutions Private Limited
S9, Angel Mega Mall, Ghaziabad, Uttar Pradesh — 201010, India

Email: info@tecorbitron.com

All formal legal notices must be sent via email with confirmation of receipt.`,
    },
];

export default function TermsPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section
                className="relative flex min-h-[38vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-40 pb-20"
                style={{
                    background:
                        "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <div className="border-malachite/20 bg-malachite/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                        <span className="bg-malachite h-1.5 w-1.5 rounded-full" />
                        <span className="text-malachite text-xs font-bold tracking-widest uppercase">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl">
                        Terms &{" "}
                        <span className="text-malachite">Conditions</span>
                    </h1>
                    <p className="max-w-xl text-sm leading-relaxed font-light text-white/50">
                        Please read these Terms carefully. By using our
                        Services, you agree to be bound by these legally binding
                        Terms and Conditions.
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/30">
                        Last Updated: October 15, 2025 &nbsp;·&nbsp; Effective
                        Immediately
                    </p>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
                        {/* ── SIDEBAR TOC ── */}
                        <aside className="hidden lg:block">
                            <div className="bg-surface border-border sticky top-28 flex max-h-[80vh] flex-col gap-1 overflow-y-auto rounded-2xl border p-5">
                                <p className="text-muted mb-3 text-xs font-black tracking-wider uppercase">
                                    Contents
                                </p>
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="text-muted hover:text-malachite-rich py-1 text-xs leading-relaxed font-medium transition-colors duration-200"
                                    >
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* ── MAIN CONTENT ── */}
                        <article className="flex min-w-0 flex-col gap-12">
                            {/* Intro note */}
                            <div className="bg-deepspace-dim border-deepspace/10 rounded-2xl border px-6 py-4">
                                <p className="text-deepspace text-sm leading-relaxed font-medium">
                                    This is a legally binding agreement between
                                    you and Tecorbitron Solutions Private
                                    Limited. These Terms govern your use of our
                                    website, applications, and all services we
                                    provide. Jurisdiction: Ghaziabad, Uttar
                                    Pradesh, India.
                                </p>
                            </div>

                            {sections.map((section) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="flex scroll-mt-28 flex-col gap-4"
                                >
                                    <h2 className="text-deepspace border-border border-b pb-3 text-lg font-bold">
                                        {section.title}
                                    </h2>
                                    <div className="text-subtle leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </div>
                                </div>
                            ))}

                            {/* Bottom nav */}
                            <div className="border-border mt-4 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
                                <p className="text-muted text-xs font-medium">
                                    Last Updated: October 15, 2025
                                </p>
                                <Link
                                    href="/privacy-policy"
                                    className="text-malachite-rich inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                                >
                                    View Privacy Policy →
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
