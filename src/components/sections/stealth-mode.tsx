"use client";

import { FadeIn, SectionHeading } from "@/components/ui/animations";

const features = [
  "Hidden from Zoom, Teams, Google Meet screen shares",
  "Hidden from OBS, Game Bar, and all recording tools",
  "No kernel drivers or admin privileges required",
  "Toggle on/off with one click",
];

export function StealthMode() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
              Pro Feature
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Stealth Mode:{" "}
              <span className="text-accent-blue">Invisible</span> to Everyone
              But You
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Activate Stealth Mode and HelpAI becomes completely invisible to
              screen recordings, screen shares, and capture tools. It&apos;s
              there for you — and <strong className="text-foreground">ONLY</strong> you.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              This isn&apos;t a hack or a workaround. It uses the same Windows
              API that password managers and DRM players use. Built-in, native,
              undetectable.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span className="text-accent-green">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Split-screen comparison visual */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 rounded-2xl blur-2xl" />
              <div className="relative glass-card rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* What YOU see */}
                  <div className="p-6 border-r border-border">
                    <span className="text-[10px] font-bold text-accent-green uppercase tracking-wider">
                      What YOU See
                    </span>
                    <div className="mt-4 space-y-3">
                      <div className="h-16 rounded-lg bg-muted/10" />
                      {/* Overlay visible */}
                      <div className="rounded-lg bg-accent-blue/10 border border-accent-blue/20 p-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                          <span className="text-[8px] font-bold text-accent-blue uppercase">
                            HelpAI
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-1.5 w-full bg-foreground/20 rounded" />
                          <div className="h-1.5 w-3/4 bg-foreground/15 rounded" />
                          <div className="h-1.5 w-1/2 bg-foreground/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What THEY see */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-accent-coral uppercase tracking-wider">
                      What THEY See
                    </span>
                    <div className="mt-4 space-y-3">
                      <div className="h-16 rounded-lg bg-muted/10" />
                      {/* No overlay — just empty space */}
                      <div className="h-[72px]" />
                    </div>
                  </div>
                </div>

                {/* Center divider with lock */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface border border-accent-blue/30 flex items-center justify-center">
                  <span className="text-xs">🔒</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
