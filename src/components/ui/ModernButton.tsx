import React from 'react';
import { cn } from "@/lib/utils";

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
}

export function ModernButton({
  children,
  className,
  variant = 'primary',
  ...props
}: ModernButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        variant === 'primary' ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700" : "bg-white text-gray-800 hover:bg-gray-50",
        className,
      )}
      {...props}
    >
      <span className="px-1.5">{children}</span>
    </button>
  );
}
