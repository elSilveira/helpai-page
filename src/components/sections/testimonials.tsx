"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const testimonials = [
  {
    quote:
      "I closed 3 deals in my first week using HelpAI. The real-time objection handling is like having a senior AE whispering in my ear.",
    name: "Sarah K.",
    role: "Account Executive",
    color: "accent-blue",
  },
  {
    quote:
      "Our recruitment team cut interview prep time by 60%. The AI follow-up questions are better than what most interviewers come up with.",
    name: "Marcus T.",
    role: "Head of Talent",
    color: "accent-purple",
  },
  {
    quote:
      "I used to dread architecture review meetings. Now I screenshot the diagram and get a full analysis before anyone finishes their sentence.",
    name: "Priya M.",
    role: "Staff Engineer",
    color: "accent-green",
  },
  {
    quote:
      "Stealth mode is a game-changer. I present to the board with full AI backup and nobody knows. I just look incredibly prepared.",
    name: "David L.",
    role: "VP of Operations",
    color: "accent-coral",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Trusted by Professionals Who Refuse to Be Average"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="glass-card glass-card-hover p-8 h-full flex flex-col">
                <blockquote className="text-lg leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  {/* Abstract avatar */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br from-${t.color}/40 to-${t.color}/10 flex items-center justify-center`}
                  >
                    <span className={`text-sm font-bold text-${t.color}`}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
