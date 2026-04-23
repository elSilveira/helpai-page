import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-accent-green text-background btn-glow hover:brightness-110",
    secondary:
      "bg-surface-light text-foreground hover:bg-surface-light/80 border border-border",
    outline:
      "bg-transparent text-foreground border border-border hover:border-accent-blue/40 hover:bg-surface/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
