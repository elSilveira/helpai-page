"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directionMap[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
