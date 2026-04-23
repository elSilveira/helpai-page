"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const features = [
  {
    heading: "Hears Everything. Forgets Nothing.",
    body: "HelpAI captures BOTH sides of the conversation  your microphone AND the other participants through system audio. Two independent streams. Continuous 120-second rolling buffer. Every word. Every speaker. Every time.",
    align: "left" as const,
  },
  {
    heading: "Responses in YOUR Voice, Not Robot-Speak",
    body: "HelpAI doesn't generate generic AI slop. It ghostwrites responses in first person  'I would...', 'In my experience...'  with natural conversational flow. It sounds like YOU at your absolute best.",
    align: "right" as const,
  },
  {
    heading: "See Code on Screen? Get the Fix Instantly.",
    body: "Press Ctrl+Shift+E and HelpAI captures your screen, identifies the programming language and framework, and generates a complete, production-ready fix. Python, TypeScript, React, Java, SQL  it reads the screen and responds.",
    align: "left" as const,
  },
  {
    heading: "Full Privacy. Zero Cloud Dependency.",
    body: "Run everything locally with Ollama + Faster-Whisper. Your audio never leaves your machine. Your transcripts stay on your device. For teams with strict data policies, HelpAI is the only solution that's fully air-gappable.",
    align: "right" as const,
  },
];

export function Features() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Built Different" subtitle="Features that actually matter." />

        <div className="space-y-24">
          {features.map((feature, i) => (
            <FadeIn
              key={feature.heading}
              delay={0.1}
              direction={feature.align === "left" ? "left" : "right"}
            >
              <div
                className={`flex flex-col ${
                  feature.align === "right" ? "md:items-end md:text-right" : ""
                } max-w-2xl ${feature.align === "right" ? "ml-auto" : ""}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  {feature.heading}
                </h3>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  {feature.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
