"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/ui/animations";

/* ── Live sales scenario data ── */
const scenarios = [
  {
    id: "objection",
    label: "Price Objection",
    buyer: "Honestly, the price is way higher than what we budgeted. I'm not sure we can justify this to our CFO.",
    bad: "I understand. We can maybe do a small discount... let me check with my manager.",
    ai: "I hear you — and that's exactly why I want to walk you through the ROI breakdown. Companies in your space typically recover the investment within 6 weeks through reduced churn alone. Would it help if I built a custom cost-savings model for your CFO?",
    tag: "reframe → value",
    insight: "AI detected a price objection and reframed to ROI — no discounting, no weakness.",
  },
  {
    id: "competitor",
    label: "Competitor Mention",
    buyer: "We've been looking at [Competitor] too. They seem to offer something similar at a lower price point.",
    bad: "Oh yeah, they're okay I guess... but we're better because we have more features.",
    ai: "Great that you're doing your due diligence — that's how the best decisions get made. The key difference is that our platform handles [specific pain point they mentioned earlier] natively, which means your team won't need the 2-3 workarounds that solution typically requires. Want me to show you a side-by-side on that specific workflow?",
    tag: "acknowledge → differentiate",
    insight: "AI recalled their earlier pain point and used it as a competitive advantage — specific, not generic.",
  },
  {
    id: "stall",
    label: "Decision Stall",
    buyer: "This looks interesting. Let me take it back to the team and we'll circle back in a few weeks.",
    bad: "Sure, take your time! I'll follow up next month.",
    ai: "Absolutely — I want your team to feel confident about this. What if I put together a 2-slide summary addressing the specific concerns you mentioned today? That way you're walking in with answers, not just another vendor pitch. Can we lock in 15 minutes next Thursday to review their feedback together?",
    tag: "create urgency → next step",
    insight: "AI prevented the deal from going dark by securing a concrete next step with clear value.",
  },
  {
    id: "technical",
    label: "Technical Deep-Dive",
    buyer: "How does your API handle rate limiting? Our current provider throttles us at 100 requests per second and it's killing our batch jobs.",
    bad: "Uh, I'd need to check with our engineering team on the specifics and get back to you.",
    ai: "That's a real pain point — and one we solved specifically. Our API supports 10,000 requests per second on the Growth plan with burst capacity up to 25K. For batch jobs, we also have a dedicated async endpoint that processes in parallel with no throttling. I can get you sandbox access today so your team can stress-test it themselves.",
    tag: "precise answer → immediate action",
    insight: "AI pulled exact technical specs and offered a hands-on next step — no 'I'll get back to you' needed.",
  },
];

/* ── Equation component ── */
function EquationBlock() {
  return (
    <FadeIn delay={0.2}>
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-purple/5 to-accent-green/5 rounded-2xl blur-2xl" />
        <div className="relative glass-card rounded-2xl p-8 md:p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="glass-card px-6 py-4 rounded-xl border-accent-blue/20">
              <p className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-1">Your Skills</p>
              <p className="text-2xl md:text-3xl font-extrabold">Selling Skills</p>
            </div>
            <span className="text-3xl font-bold text-accent-purple">+</span>
            <div className="glass-card px-6 py-4 rounded-xl border-accent-purple/20">
              <p className="text-xs font-bold text-accent-purple uppercase tracking-wider mb-1">Our Engine</p>
              <p className="text-2xl md:text-3xl font-extrabold">AI Whispering</p>
            </div>
            <span className="text-3xl font-bold text-accent-green">=</span>
            <div className="glass-card px-6 py-4 rounded-xl border-accent-green/30 bg-accent-green/5">
              <p className="text-xs font-bold text-accent-green uppercase tracking-wider mb-1">The Result</p>
              <p className="text-2xl md:text-3xl font-extrabold text-accent-green">Top 1% Seller</p>
            </div>
          </div>
          <p className="mt-8 text-muted max-w-2xl mx-auto leading-relaxed">
            Selling skills alone leave gaps. AI alone sounds robotic. But when a great seller
            gets real-time AI whispering the perfect response — that combination{" "}
            <span className="text-foreground font-semibold">surpasses any other reality.</span>{" "}
            You don&apos;t replace your instincts. You <span className="text-accent-green font-semibold">amplify</span> them.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Live demo component ── */
function LiveSalesDemo() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <FadeIn delay={0.3}>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-purple/5 to-accent-green/5 rounded-2xl blur-2xl scale-105" />
        <div className="relative glass-card rounded-2xl overflow-hidden">
          {/* Scenario tabs */}
          <div className="flex overflow-x-auto border-b border-border">
            {scenarios.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  active === i
                    ? "text-accent-blue border-b-2 border-accent-blue bg-accent-blue/5"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
            >
              {/* Buyer says */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent-coral/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-coral">B</span>
                  </div>
                  <span className="text-xs font-bold text-accent-coral uppercase tracking-wider">
                    Buyer Says
                  </span>
                </div>
                <div className="glass-card p-4 border-accent-coral/10">
                  <p className="text-foreground leading-relaxed">&ldquo;{scenario.buyer}&rdquo;</p>
                </div>
              </div>

              {/* Two-column: without vs with AI */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without AI */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-muted/20 flex items-center justify-center">
                      <span className="text-[10px] text-muted">✗</span>
                    </div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      Without HelpAI
                    </span>
                  </div>
                  <div className="rounded-xl bg-background/40 border border-border p-4 h-full">
                    <p className="text-sm text-muted/70 leading-relaxed italic">
                      &ldquo;{scenario.bad}&rdquo;
                    </p>
                    <p className="mt-3 text-[10px] text-accent-coral/60 uppercase font-bold tracking-wider">
                      ⚠ Weak response — deal at risk
                    </p>
                  </div>
                </div>

                {/* With AI */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center">
                      <span className="text-[10px] text-accent-green">✓</span>
                    </div>
                    <span className="text-xs font-bold text-accent-green uppercase tracking-wider">
                      With HelpAI Whispering
                    </span>
                    <span className="ml-auto px-2 py-0.5 text-[10px] rounded bg-accent-blue/10 text-accent-blue font-semibold">
                      {scenario.tag}
                    </span>
                  </div>
                  <div className="rounded-xl bg-accent-green/[0.03] border border-accent-green/15 p-4 h-full">
                    <p className="text-sm text-foreground leading-relaxed">
                      &ldquo;{scenario.ai}&rdquo;
                    </p>
                    <p className="mt-3 text-[10px] text-accent-green/80 uppercase font-bold tracking-wider">
                      ✦ {scenario.insight}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Other roles grid ── */
const otherRoles = [
  {
    icon: "🎯",
    role: "For Recruiters & HR",
    headline: "Run Interviews Like a Pro",
    bullets: [
      "AI-suggested follow-up questions based on candidate responses",
      "Stay compliant — questions framed within legal boundaries",
      "Consistent evaluation with AI-assisted scoring",
    ],
  },
  {
    icon: "⚙️",
    role: "For Tech Leads",
    headline: "Debug in the Meeting, Not After",
    bullets: [
      "Screenshot your screen — get instant production-ready fixes",
      "AI identifies language, framework, and gives solutions",
      "Stop saying 'I'll look into it' — have the answer NOW",
    ],
  },
  {
    icon: "👔",
    role: "For Leaders",
    headline: "Lead Every Room You Walk Into",
    bullets: [
      "Strategic talking points while stakeholders are mid-sentence",
      "Data-backed responses during board meetings and QBRs",
      "Never be caught off-guard by unexpected questions",
    ],
  },
  {
    icon: "🗂️",
    role: "For Consultants",
    headline: "Deliver Expertise on the Spot",
    bullets: [
      "Sound like you prepared for weeks — even on a first call",
      "AI pulls relevant frameworks and methodologies in real-time",
      "Be the consultant who always has the right answer",
    ],
  },
  {
    icon: "🎓",
    role: "For Trainers & Coaches",
    headline: "Teach Without Missing a Beat",
    bullets: [
      "AI-generated explanations for unexpected questions",
      "Live code assistance during technical workshops",
      "Smooth transitions and follow-ups suggested in real-time",
    ],
  },
];

export function UseCases() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Selling Skills + AI = Top 1% Sellers"
          subtitle="Skills alone leave gaps. AI alone sounds robotic. Together they surpass any other reality. Watch HelpAI turn ordinary calls into closed deals."
        />

        {/* Equation visual */}
        <EquationBlock />

        {/* Interactive sales demo */}
        <LiveSalesDemo />

        {/* Other roles */}
        <FadeIn delay={0.1}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mt-24 mb-12">
            Not just for sales —{" "}
            <span className="text-accent-blue">built for every meeting.</span>
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherRoles.map((card, i) => (
            <FadeIn key={card.role} delay={i * 0.1}>
              <div className="glass-card glass-card-hover p-6 h-full flex flex-col">
                <span className="text-3xl mb-4">{card.icon}</span>
                <span className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-2">
                  {card.role}
                </span>
                <h3 className="text-xl font-bold mb-4">{card.headline}</h3>
                <ul className="space-y-2 mt-auto">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-accent-green mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
