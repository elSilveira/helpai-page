"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const painPoints = [
  {
    icon: "🧠",
    title: "Cognitive Overload",
    body: "Listening, thinking, and responding simultaneously drains your mental bandwidth.",
  },
  {
    icon: "😶",
    title: "Missed Opportunities",
    body: "That perfect response comes to you 5 minutes after the meeting ends.",
  },
  {
    icon: "📉",
    title: "Weak Follow-Through",
    body: "Vague notes lead to vague actions. Your meetings produce talk, not results.",
  },
];

export function PainPoints() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Meetings Shouldn&apos;t Feel Like{" "}
              <span className="text-accent-coral">Survival Mode</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              You&apos;re juggling note-taking, formulating responses,
              remembering context from 20 minutes ago, AND trying to sound smart
              — all at the same time. It&apos;s exhausting. And it shows.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {painPoints.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.15} direction="right">
                <div className="glass-card glass-card-hover p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-1">
                      {card.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
