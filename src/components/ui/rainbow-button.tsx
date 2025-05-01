import React from "react";

import { cn } from "@/lib/utils";
import "./rainbow-button.css";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-2)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-5)))] px-8 py-2 font-medium text-white transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
