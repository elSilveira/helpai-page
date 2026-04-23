"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/ui/animations";

const faqs = [
  {
    q: "Is this cheating?",
    a: "HelpAI is a productivity tool — like having notes, a CRM, or a prep doc open during a call. It helps you perform at your best. What you say is still YOUR words, YOUR decision. The AI suggests, you decide.",
  },
  {
    q: "Can people see the overlay during screen shares?",
    a: "Not with Stealth Mode (Pro plan). It uses Windows' native display-exclusion API — the same technology used by password managers and DRM players. The overlay is physically excluded from the capture pipeline.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Use Ollama for AI and Faster-Whisper for speech-to-text. Everything runs on your machine. Your data never leaves your device.",
  },
  {
    q: "What about my API keys?",
    a: "Your API keys (OpenAI, xAI) are stored locally on your machine and sent directly to the respective APIs. HelpAI never sees, stores, or proxies your keys.",
  },
  {
    q: "Which meeting platforms are supported?",
    a: "All of them. HelpAI captures system audio and microphone audio. If you can hear the meeting, HelpAI can too. Works with Zoom, Teams, Meet, Webex, Slack Huddles, Discord, and any other platform.",
  },
  {
    q: "What languages are supported?",
    a: "English, Portuguese, Spanish, French, German, Japanese, Chinese, Korean, Arabic, Russian, and Hindi for speech-to-text. AI responses follow the language of the conversation.",
  },
  {
    q: "Is there a Mac version?",
    a: "Not yet. HelpAI currently requires Windows 10/11. Mac support is on the roadmap.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold pr-4 group-hover:text-accent-blue transition-colors">
          {q}
        </span>
        <span
          className={`text-muted transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Questions? We've Got Answers." />

        <FadeIn>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
