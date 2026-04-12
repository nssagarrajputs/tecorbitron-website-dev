"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      style={{
        background: "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-malachite/20 bg-malachite/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-malachite" />
          <span className="text-xs font-bold uppercase tracking-widest text-malachite">
            Stay Updated
          </span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Get Fresh Insights{" "}
          <span className="text-malachite">In Your Inbox</span>
        </h2>

        <p className="text-sm font-light leading-relaxed text-white/50 max-w-md">
          No spam — just practical tech tips, SEO guides, and industry
          insights delivered twice a month.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-full bg-malachite/10 border border-malachite/20 px-6 py-3">
            <span className="text-malachite font-black">✓</span>
            <span className="text-sm font-semibold text-white">
              You&apos;re subscribed! Check your inbox.
            </span>
          </div>
        ) : (
          <div className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3
                text-sm font-medium text-white placeholder:text-white/30
                outline-none transition-all duration-200
                focus:border-malachite focus:bg-white/15"
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="flex items-center gap-1.5
                bg-malachite text-deepspace-deep
                px-5 py-3 rounded-full text-sm font-bold shrink-0
                transition-all duration-200
                hover:bg-malachite-soft disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-deepspace/30 border-t-deepspace" />
              ) : (
                <>Subscribe <ArrowRight size={13} /></>
              )}
            </button>
          </div>
        )}

        <p className="text-xs text-white/20 font-medium">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
