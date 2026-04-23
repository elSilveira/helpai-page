"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";

const platforms = ["Zoom", "Teams", "Google Meet", "Webex", "Slack"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-accent-blue/8 via-accent-purple/8 to-accent-blue/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
        <FadeIn delay={0.1}>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Become the{" "}
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
              God of Meetings
            </span>
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed">
            HelpAI listens to your meetings in real-time, feeds you AI-powered
            insights, suggested responses, and strategic talking points {" "}
            <span className="text-foreground font-medium">
              completely invisible to everyone else on the call.
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-16">
            <p className="text-sm text-muted mb-5">
              Works with all major meeting platforms
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {platforms.map((name) => (
                <span
                  key={name}
                  className="text-sm font-medium text-muted/60 tracking-wide uppercase"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Hero visual  floating overlay mockup */}
        <FadeIn delay={0.9}>
          <div className="mt-20 relative mx-auto max-w-3xl">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-blue/5 rounded-2xl blur-2xl scale-105" />

            <div className="relative glass-card p-1 rounded-2xl">
              {/* Fake blurred video call background */}
              <div className="rounded-xl bg-gradient-to-br from-surface via-surface-light to-surface overflow-hidden">
                <div className="p-6 md:p-10 space-y-4">
                  {/* Fake meeting UI background */}
                  <div className="flex gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent-coral/60" />
                    <div className="w-3 h-3 rounded-full bg-accent-green/40" />
                    <div className="w-3 h-3 rounded-full bg-accent-blue/40" />
                  </div>

                  {/* Blurred participant placeholders */}
                  <div className="grid grid-cols-2 gap-3 mb-8 opacity-30">
                    <div className="h-24 md:h-32 rounded-lg bg-gradient-to-br from-muted/20 to-muted/10" />
                    <div className="h-24 md:h-32 rounded-lg bg-gradient-to-br from-muted/20 to-muted/10" />
                  </div>

                  {/* Floating AI overlay */}
                  <motion.div
                    className="absolute bottom-8 right-8 left-8 md:left-auto md:w-80 glass-card p-4 border border-accent-blue/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      <span className="text-xs font-semibold text-accent-blue tracking-wider uppercase">
                        HelpAI  Live
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      &ldquo;I&apos;d suggest pivoting the conversation toward
                      Q3 deliverables  they seem concerned about the
                      timeline...&rdquo;
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="px-2 py-0.5 text-[10px] rounded bg-accent-blue/10 text-accent-blue">
                        strategy
                      </span>
                      <span className="px-2 py-0.5 text-[10px] rounded bg-accent-purple/10 text-accent-purple">
                        response
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
