"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const useCases = [
  {
    icon: "💰",
    role: "For Sellers",
    headline: "Close More, Talk Less",
    bullets: [
      "Get real-time objection-handling suggestions during discovery and demo calls",
      "Never miss a buying signal — AI highlights key moments and intent cues",
      "Sound prepared even when you're winging it",
    ],
  },
  {
    icon: "🎯",
    role: "For Recruiters & HR",
    headline: "Run Interviews Like a Pro",
    bullets: [
      "Get AI-suggested follow-up questions based on candidate responses",
      "Stay compliant — AI helps frame questions within legal boundaries",
      "Evaluate candidates consistently with AI-assisted scoring",
    ],
  },
  {
    icon: "⚙️",
    role: "For Tech Leads",
    headline: "Debug in the Meeting, Not After",
    bullets: [
      "Screenshot your screen during a technical discussion — get instant fixes",
      "AI identifies the language, framework, and gives production-ready solutions",
      "Stop saying 'I'll look into it' — have the answer NOW",
    ],
  },
  {
    icon: "👔",
    role: "For Leaders",
    headline: "Lead Every Room You Walk Into",
    bullets: [
      "Get strategic talking points while stakeholders are mid-sentence",
      "Instant data-backed responses during board meetings and QBRs",
      "Never be caught off-guard by a question you didn't prepare for",
    ],
  },
  {
    icon: "🗂️",
    role: "For Consultants",
    headline: "Deliver Expertise on the Spot",
    bullets: [
      "Sound like you prepared for weeks — even on a first call",
      "AI pulls relevant frameworks and methodologies in real-time",
      "Clients remember the consultant who always had the right answer",
    ],
  },
  {
    icon: "🎓",
    role: "For Trainers & Coaches",
    headline: "Teach Without Missing a Beat",
    bullets: [
      "Get AI-generated explanations when participants ask unexpected questions",
      "Live code assistance during technical workshops",
      "Keep sessions flowing — AI suggests transitions and follow-ups",
    ],
  },
];

export function UseCases() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Built for People Who Live in Meetings"
          subtitle="Whether you're closing deals, hiring talent, or leading teams — HelpAI makes you dangerously effective."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((card, i) => (
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
