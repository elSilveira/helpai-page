"use client";

import { FadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-gradient-to-r from-accent-blue/8 via-accent-purple/8 to-accent-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Stop Surviving Meetings.{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Start Dominating Them.
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted">
            Join thousands of professionals who upgraded their meeting game with
            HelpAI.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg">
              Download HelpAI Free
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Windows 10/11 · Free forever · Pro starts at $4.99/mo
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
