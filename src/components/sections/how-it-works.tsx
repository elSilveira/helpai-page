"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const steps = [
  {
    number: "01",
    title: "It Listens",
    body: "HelpAI captures both sides of the conversation in real-time — your mic and their audio — with dual-stream transcription. You don't press anything.",
    color: "accent-blue",
  },
  {
    number: "02",
    title: "It Thinks",
    body: "GPT-4o or a local AI model analyzes what the other person just said and drafts YOUR perfect response — in your voice, in first person.",
    color: "accent-purple",
  },
  {
    number: "03",
    title: "It Whispers",
    body: "A sleek overlay appears on your screen with the suggested response. Read it, riff on it, or ignore it. It's your call.",
    color: "accent-green",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Your Secret Weapon in Every Meeting"
          subtitle="Three steps. Zero effort. Infinite advantage."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.2}>
              <div className="glass-card glass-card-hover p-8 h-full relative overflow-hidden group">
                {/* Step number watermark */}
                <span
                  className={`absolute -top-4 -right-2 text-[120px] font-extrabold leading-none text-${step.color}/5 group-hover:text-${step.color}/10 transition-colors duration-500 select-none`}
                >
                  {step.number}
                </span>

                <div className="relative z-10">
                  <span
                    className={`inline-block text-sm font-bold text-${step.color} tracking-wider mb-4`}
                  >
                    STEP {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.body}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${step.color}/60 to-transparent`}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Product mockup */}
        <FadeIn delay={0.6}>
          <div className="mt-20 relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-purple/5 to-accent-green/5 rounded-2xl blur-2xl scale-105" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Three-panel mockup */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Transcription panel */}
                  <div className="bg-background/60 rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-accent-green" />
                      <span className="text-[10px] font-bold text-accent-green uppercase tracking-wider">
                        Conversation
                      </span>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-accent-coral font-semibold">
                          [THEM]
                        </span>
                        <p className="text-muted mt-0.5">
                          &ldquo;We need the Q3 numbers by Friday...&rdquo;
                        </p>
                      </div>
                      <div>
                        <span className="text-accent-blue font-semibold">
                          [YOU]
                        </span>
                        <p className="text-muted mt-0.5">
                          &ldquo;I can pull those from the dashboard...&rdquo;
                        </p>
                      </div>
                      <div>
                        <span className="text-accent-coral font-semibold">
                          [THEM]
                        </span>
                        <p className="text-muted mt-0.5">
                          &ldquo;What about the regional breakdown?&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Processing panel */}
                  <div className="bg-background/60 rounded-xl p-4 border border-border flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-accent-purple/30 border-t-accent-purple animate-spin mb-3" />
                    <span className="text-[10px] font-bold text-accent-purple uppercase tracking-wider">
                      Analyzing...
                    </span>
                  </div>

                  {/* Response panel */}
                  <div className="bg-background/60 rounded-xl p-4 border border-accent-blue/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                      <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">
                        Suggested Response
                      </span>
                    </div>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      &ldquo;I&apos;ll have the{" "}
                      <strong>regional breakdown</strong> ready alongside the
                      overall Q3 numbers. I can segment by{" "}
                      <strong>EMEA, APAC, and Americas</strong> — want me to
                      include YoY comparisons?&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
