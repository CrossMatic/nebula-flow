import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
};

export function ContainerScroll({
  titleComponent,
  children,
  className,
  cardClassName,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <div ref={containerRef} className={cn("relative py-1 md:py-2", className)}>
      {titleComponent ? (
        <motion.div style={{ y: translateY }} className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </motion.div>
      ) : null}

      <div className="relative" style={{ perspective: "1000px" }}>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            y: translateY,
            transformStyle: "preserve-3d",
          }}
          className={cn("origin-center", cardClassName)}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

