
import React from "react";
import { ChevronRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Link } from "react-router-dom";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export interface CustomerLogo {
  src: string;
  alt: string;
  height: number;
}

interface CustomersSectionProps {
  customers: CustomerLogo[];
  className?: string;
}

export function CustomersSection({ customers = [], className }: CustomersSectionProps) {
  return (
    <section className={`bg-background pb-16 pt-16 md:pb-32 ${className ?? ""}`}>
      <div className="m-auto max-w-5xl px-6">

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-5 gap-8"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex">
              <img
                className="mx-auto h-auto w-fit dark:invert max-h-[30px] max-w-[60px] object-contain sm:max-h-[45px] sm:max-w-[90px] md:max-h-[65px] md:max-w-[120px]"
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width="auto"
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
