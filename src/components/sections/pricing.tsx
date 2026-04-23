"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";

const sharedFeatures = [
  "Stealth Mode  invisible to screen shares & recordings",
  "Priority support",
  "Early access to new features",
];

const freeFeatures = [
  "Real-time dual-stream transcription",
  "AI-powered response suggestions (GPT-4o or local AI)",
  "Screenshot analysis with code detection",
  "Quick input for ad-hoc questions",
  "Full offline mode (Ollama + Whisper)",
  "Configurable hotkeys and appearance",
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Simple Pricing. No Surprises."
          subtitle="Start free. Upgrade when you're ready to go invisible."
        />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Free */}
          <FadeIn delay={0}>
            <div className="glass-card p-8 h-full perspective-card">
              <h3 className="text-xl font-bold mb-1">Free</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold">$0</span>
              </div>
              <p className="text-sm text-muted mb-8">forever</p>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-green mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-muted/40 mt-0.5 flex-shrink-0">✗</span>
                  <span className="text-muted/40">Stealth Mode</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                Get Started Free
              </Button>
            </div>
          </FadeIn>

          {/* Pro Yearly  highlighted */}
          <FadeIn delay={0.15}>
            <div className="glass-card p-8 h-full perspective-card border-accent-green/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-accent-green text-background rounded-full whitespace-nowrap">
                Best Value  Save 50%
              </div>

              <h3 className="text-xl font-bold mb-1">Pro</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-accent-green">
                  $4.99
                </span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <p className="text-sm text-muted mb-8">
                billed yearly ($59.88/year)
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-sm font-medium text-accent-blue mb-2">
                  Everything in Free, plus:
                </li>
                {sharedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-green mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" className="w-full">
                Go Pro  Save 50%
              </Button>
            </div>
          </FadeIn>

          {/* Pro Monthly */}
          <FadeIn delay={0.3}>
            <div className="glass-card p-8 h-full perspective-card">
              <h3 className="text-xl font-bold mb-1">Pro</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold">$9.99</span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <p className="text-sm text-muted mb-8">billed monthly</p>

              <ul className="space-y-3 mb-8">
                <li className="text-sm font-medium text-accent-blue mb-2">
                  Everything in Free, plus:
                </li>
                {sharedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-green mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" className="w-full">
                Start Monthly
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-muted mt-10 max-w-xl mx-auto">
            All plans include unlimited meetings. Your AI API keys (OpenAI, xAI)
            are yours  we never touch them. Cancel anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
