"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  triggerOnView?: boolean;
  mode?: "word" | "char";
}

export function WordFadeIn({
  words,
  delay = 0.03,
  triggerOnView = true,
  mode = "char",
  className,
}: WordFadeInProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(!triggerOnView);

  useEffect(() => {
    if (!triggerOnView || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  const letters = Array.from(words);
  const wordsArr = words.split(" ");

  const gradientClass =
    "bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent";

  return (
    <h1
      ref={ref}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {mode === "char"
        ? letters.map((char, i) => (
            <span
              key={`${char}-${i}`}
              className={cn(
                "inline-block",
                gradientClass,
                isVisible && "animate-fade-in-char"
              )}
              style={
                isVisible
                  ? {
                      animationDelay: `${i * delay}s`,
                      animationFillMode: "both",
                    }
                  : { opacity: 0 }
              }
            >
              {char}
            </span>
          ))
        : wordsArr.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={cn(
                "inline-block",
                gradientClass,
                isVisible && "animate-fade-in-char"
              )}
              style={
                isVisible
                  ? {
                      animationDelay: `${i * delay}s`,
                      animationFillMode: "both",
                    }
                  : { opacity: 0 }
              }
            >
              {word}{" "}
            </span>
          ))}
    </h1>
  );
}
