import Link from "next/link";

const sections = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: `Tecorbitron Solutions Private Limited ("Company", "we", "us", or "our") is committed to protecting your privacy and handling your personal data with transparency and care.

This Privacy Policy explains how we collect, use, store, share, and protect information relating to individuals ("you" or "your") who interact with us through our website, web applications, mobile applications, or any communication channel including email, WhatsApp, LinkedIn, and partner networks.

By accessing or using our Services, you agree to the practices described in this Policy. If you do not agree, please discontinue use of our Services.`,
    },
    {
        id: "scope",
        title: "2. Scope of This Policy",
        content: `This Privacy Policy applies to:

• Visitors to our official website and subdomains
• Users of our web-based and mobile software solutions
• Individuals submitting contact forms or blog comments
• Clients and prospects communicating via email, WhatsApp, or other channels
• Job applicants and freelance collaborators

This Policy does not apply to third-party websites linked from our platforms. We encourage you to review the privacy policies of those services independently.`,
    },
    {
        id: "data-collected",
        title: "3. Information We Collect",
        content: `We collect the following categories of personal data:

3.1 Identity & Contact Information
Full name, email address, phone number, and company or organisation name (where applicable).

3.2 Technical & Device Information
IP address, browser type and version, operating system, device identifiers, referring URLs, and session timestamps.

3.3 Behavioural & Usage Data
Time spent on pages, click behaviour, scroll depth, traffic sources, and navigation patterns — collected through analytics tools.

3.4 Communication Data
Content of messages sent via contact forms, email, or chat platforms. Attachments and project briefs shared voluntarily.

3.5 Sensitive Business Data
In rare cases, temporary access credentials (e.g., staging logins or cloud keys) may be collected solely for service fulfilment. These are securely handled and permanently deleted upon task completion.`,
    },
    {
        id: "how-collected",
        title: "4. How We Collect Data",
        content: `We collect personal data through:

4.1 Direct Interactions
Contact forms, email inquiries, WhatsApp/SMS communications, job applications, and video or voice calls.

4.2 Automated Technologies
Website cookies, local storage, web beacons, and analytics tools such as Google Analytics.

4.3 Third-Party Sources
Professional networks (LinkedIn), freelance platforms, referrals, and business partnerships.

We collect data only from authentic, traceable sources and use it exclusively for lawful, stated purposes.`,
    },
    {
        id: "why-collected",
        title: "5. Why We Collect & Use Your Data",
        content: `We process personal information for the following legitimate purposes:

5.1 Service Fulfilment
Responding to service requests, managing client communications, and delivering contracted work.

5.2 Business Operations
Managing timelines, milestones, invoices, agreements, and maintaining accurate business and tax records.

5.3 Analytics & Improvement
Understanding user behaviour, improving website experience, and identifying technical issues.

5.4 Marketing & Communication
Sharing updates or promotions in professional or opt-in contexts; following up with leads or prospects.

5.5 Legal Compliance
Fulfilling statutory obligations and cooperating with authorised government bodies when required.`,
    },
    {
        id: "cookies",
        title: "6. Cookies & Tracking Technologies",
        content: `Our website uses cookies to enhance your experience and measure performance.

Types of cookies used:

• Essential Cookies — Required for core platform functionality and security
• Performance Cookies — Track usage patterns via tools like Google Analytics
• Functional Cookies — Remember preferences such as language or form inputs

By continuing to use our website, you consent to the use of cookies. You may disable cookies in your browser settings, though this may affect certain features of our Services.`,
    },
    {
        id: "data-sharing",
        title: "7. Data Sharing & Third-Party Access",
        content: `We do not sell, lease, rent, or trade your personal information to any third party under any circumstances.

Your data is not shared with external vendors, contractors, or service providers except:

• When required by applicable law, regulation, or court order
• To enforce our legal rights or protect our operations
• When you have provided explicit, informed consent

All data is handled exclusively by authorised internal personnel.`,
    },
    {
        id: "storage-security",
        title: "8. Data Storage & Security",
        content: `We implement industry-standard security measures to protect your personal data.

8.1 Storage Infrastructure
Personal data is stored within Zoho cloud infrastructure, physically located in India. We use enterprise-grade tools including Zoho, Google Workspace, and Tally for business operations.

8.2 Security Measures
• SSL encryption for all communications and forms
• Enforced authentication for all internal access
• Firewall and access control layers on servers
• Regular internal audits of data handling practices
• Immediate deletion of temporary sensitive data post-service

Despite these measures, no method of transmission over the internet is 100% secure. We encourage users to exercise caution when sharing sensitive information online.`,
    },
    {
        id: "retention",
        title: "9. Data Retention & Your Rights",
        content: `9.1 Retention Period
We retain personal data for as long as necessary to complete service delivery, comply with accounting or taxation obligations, and maintain accurate business records.

9.2 User Rights
As our services are primarily B2B in nature, direct consumer rights mechanisms are not currently implemented. However, if you wish to:

• Request a review of your personal data
• Correct inaccurate information
• Request deletion of your data

Please contact us at info@tecorbitron.com. We will address your request in good faith and within a reasonable timeframe.`,
    },
    {
        id: "international",
        title: "10. International Data Transfers",
        content: `Our current operations and client base are based within India. We do not intentionally transfer personal data to or process it in jurisdictions outside India, including the European Union or the United States of America.

Should our operations expand internationally, we will update this Policy to reflect applicable cross-border data protection requirements.`,
    },
    {
        id: "children",
        title: "11. Children's Privacy",
        content: `Our Services are designed for professionals and businesses. We do not knowingly collect or process personal data from individuals under the age of 18.

If you believe we have inadvertently collected data from a minor, please contact us immediately at info@tecorbitron.com and we will delete such information promptly.`,
    },
    {
        id: "legal-basis",
        title: "12. Legal Basis for Processing",
        content: `We process personal data on one or more of the following legal bases:

• Contractual Necessity — Where required to perform services requested by clients
• Legal Obligation — To fulfil regulatory duties under Indian law
• Legitimate Interest — To operate our business, improve services, and communicate professionally

We comply with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, under the IT Act, 2000.`,
    },
    {
        id: "changes",
        title: "13. Changes to This Policy",
        content: `We may update this Privacy Policy periodically to reflect legal, technical, or operational changes. When updates are made:

• The "Last Updated" date at the bottom of this page will be revised
• Significant changes will be communicated via email or website notice

Your continued use of our Services after any changes constitutes your acceptance of the updated Policy. We recommend reviewing this page periodically.`,
    },
    {
        id: "contact",
        title: "14. Contact Us",
        content: `For any questions, concerns, or complaints regarding this Privacy Policy or the handling of your personal data, please contact:

Tecorbitron Solutions Private Limited
S9, Angel Mega Mall, Ghaziabad, Uttar Pradesh — 201010, India

Email: info@tecorbitron.com`,
    },
];

export default function PrivacyPolicyPage() {
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
                        Privacy <span className="text-malachite">Policy</span>
                    </h1>
                    <p className="max-w-xl text-sm leading-relaxed font-light text-white/50">
                        We respect your privacy. This policy explains how
                        Tecorbitron Solutions Pvt. Ltd. collects, uses, and
                        protects your personal information.
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
                            <div className="bg-surface border-border sticky top-28 flex flex-col gap-1 rounded-2xl border p-5">
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
                            <div className="bg-malachite-dim border-malachite/20 rounded-2xl border px-6 py-4">
                                <p className="text-malachite-rich text-sm leading-relaxed font-medium">
                                    This Privacy Policy applies to all users of
                                    Tecorbitron Solutions Pvt. Ltd.&apos;s
                                    website, applications, and services. We
                                    process data in accordance with the
                                    Information Technology Act, 2000 and
                                    applicable Indian data protection
                                    regulations.
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
                                    href="/terms"
                                    className="text-malachite-rich inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                                >
                                    View Terms & Conditions →
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
