
"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGroupProps {
  children: ReactNode;
  variants: any;
  className?: string;
}

export function AnimatedGroup({ children, variants, className }: AnimatedGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants?.container || {}}
      className={cn("", className)}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={variants?.item || {}}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
