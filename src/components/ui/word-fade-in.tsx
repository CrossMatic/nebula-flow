 "use client";

import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
  triggerOnView?: boolean;
  mode?: "word" | "char";
}

function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  triggerOnView = false,
  mode = "word",
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const letters = Array.from(words);

  const containerVariants: Variants =
    mode === "char"
      ? {
          hidden: { opacity: 1, y: 0 },
          visible: { opacity: 1, y: 0 },
        }
      : variants;

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate={triggerOnView ? undefined : "visible"}
      whileInView={triggerOnView ? "visible" : undefined}
      viewport={triggerOnView ? { once: true, amount: 0.25 } : undefined}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] bg-transparent",
        className,
      )}
    >
      {mode === "char"
        ? letters.map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={charVariants} custom={i}>
              {char}
            </motion.span>
          ))
        : _words.map((word, i) => (
            <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
              {word}{" "}
            </motion.span>
          ))}
    </motion.h1>
  );
}

export { WordFadeIn };

