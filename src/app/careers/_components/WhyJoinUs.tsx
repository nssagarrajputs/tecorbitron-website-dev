const perks = [
  {
    icon: "🏠",
    title: "Remote-First",
    desc: "Work from anywhere in India. We trust our team to get things done — no micromanagement, no mandatory office.",
  },
  {
    icon: "🚀",
    title: "Real Ownership",
    desc: "You won't be a cog in a machine. Every team member owns their work end-to-end and sees the direct impact.",
  },
  {
    icon: "📈",
    title: "Fast Career Growth",
    desc: "Small team means big visibility. Grow faster here than at any large company — your work gets noticed.",
  },
  {
    icon: "🤖",
    title: "Work with AI",
    desc: "We use cutting-edge AI tools in our daily workflow. You'll learn and work with the latest tech — not legacy systems.",
  },
  {
    icon: "🎯",
    title: "Meaningful Work",
    desc: "Every product we build solves a real problem for a real business. Your work has tangible impact — always.",
  },
  {
    icon: "🤝",
    title: "Honest Culture",
    desc: "No politics, no hierarchy games. We communicate directly, give real feedback, and treat everyone as adults.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-malachite-dim px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-malachite" />
              <span className="text-xs font-bold uppercase tracking-widest text-malachite-rich">
                Why Tecorbitron
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-deepspace sm:text-5xl">
              A Place Where{" "}
              <span className="text-malachite">Great People</span>{" "}
              Do Great Work
            </h2>
            <p className="text-base font-light leading-relaxed text-muted">
              We&apos;re not your typical IT company. We move fast, care deeply
              about quality, and give our team the freedom to do their best work.
              No red tape, no boring projects.
            </p>

            {/* Culture values */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                "We ship fast and iterate faster",
                "Feedback is direct, never personal",
                "Everyone has a seat at the table",
                "Learning is part of the job",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-malachite-dim">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#00a34b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-subtle">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Perks Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="group flex flex-col gap-3 rounded-2xl bg-surface p-5
                  border border-transparent
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-malachite hover:bg-white hover:shadow-lg hover:shadow-deepspace/5"
              >
                <span className="text-2xl">{perk.icon}</span>
                <h3 className="text-sm font-black text-deepspace">{perk.title}</h3>
                <p className="text-xs font-light leading-relaxed text-muted">{perk.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
