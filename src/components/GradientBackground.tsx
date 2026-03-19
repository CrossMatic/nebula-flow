import { useEffect, useMemo, useState } from "react";

type Orb = {
  size: string;
  bg: string;
  animation: string;
  blend?: boolean;
  opacity?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const orbs: Orb[] = [
  // großer, heller Blob rechts (wie im Referenzbild)
  {
    size: "clamp(1200px, 84vw, 2100px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.95) 0%, rgba(56, 189, 248, 0.42) 36%, transparent 64%)",
    animation: "float2 26s ease-in-out infinite",
    blend: true,
    opacity: 0.9,
    top: "-6%",
    right: "-8%",
  },
  // Gegenstück links oben
  {
    size: "clamp(1140px, 78vw, 1960px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 0.92) 0%, rgba(59, 130, 246, 0.4) 34%, transparent 62%)",
    animation: "float1 30s ease-in-out infinite",
    blend: true,
    opacity: 0.88,
    top: "-12%",
    left: "-8%",
  },
  // Blob links unten
  {
    size: "clamp(1160px, 80vw, 2000px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 0.92) 0%, rgba(37, 99, 235, 0.38) 36%, transparent 64%)",
    animation: "float3 32s ease-in-out infinite",
    opacity: 0.84,
    bottom: "-10%",
    left: "-6%",
  },
  // Blob rechts unten
  {
    size: "clamp(1100px, 76vw, 1900px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.9) 0%, rgba(56, 189, 248, 0.36) 34%, transparent 62%)",
    animation: "float4 34s ease-in-out infinite",
    opacity: 0.84,
    bottom: "-9%",
    right: "-6%",
  },
  // ein paar kleinere Partikel in der Nähe des Textzentrums
  {
    size: "clamp(620px, 44vw, 1220px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(56, 189, 248, 0.26) 36%, transparent 62%)",
    animation: "float5 24s ease-in-out infinite",
    opacity: 0.8,
    top: "24%",
    left: "-2%",
  },
  {
    size: "clamp(600px, 42vw, 1160px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.24) 34%, transparent 60%)",
    animation: "float6 22s ease-in-out infinite",
    opacity: 0.8,
    top: "26%",
    right: "-1%",
  },
  {
    size: "clamp(560px, 40vw, 1080px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 0.78) 0%, rgba(37, 99, 235, 0.24) 34%, transparent 60%)",
    animation: "float3 28s ease-in-out infinite",
    opacity: 0.78,
    bottom: "6%",
    left: "20%",
  },
  // zusätzliche kleine Orbs für mehr Tiefe
  {
    size: "clamp(460px, 30vw, 920px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.74) 0%, rgba(56, 189, 248, 0.22) 34%, transparent 58%)",
    animation: "float1 26s ease-in-out infinite",
    opacity: 0.75,
    top: "6%",
    left: "40%",
  },
  {
    size: "clamp(430px, 28vw, 880px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 0.72) 0%, rgba(59, 130, 246, 0.2) 32%, transparent 58%)",
    animation: "float2 28s ease-in-out infinite",
    opacity: 0.74,
    bottom: "8%",
    right: "16%",
  },
  {
    size: "clamp(620px, 42vw, 1220px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.78) 0%, rgba(56, 189, 248, 0.24) 34%, transparent 60%)",
    animation: "float4 30s ease-in-out infinite",
    opacity: 0.78,
    top: "2%",
    left: "14%",
  },
  {
    size: "clamp(610px, 41vw, 1180px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 0.76) 0%, rgba(37, 99, 235, 0.24) 34%, transparent 60%)",
    animation: "float5 30s ease-in-out infinite",
    opacity: 0.78,
    bottom: "2%",
    right: "2%",
  },
];

const GradientBackground = ({ active = true }: { active?: boolean }) => {
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqTabletDown = window.matchMedia("(max-width: 1024px)");
    let isDisposed = false;
    let rafId = 0;

    const detectLowFps = () =>
      new Promise<boolean>((resolve) => {
        const start = performance.now();
        let frames = 0;

        const tick = (now: number) => {
          frames += 1;
          if (now - start >= 650) {
            const fps = (frames * 1000) / (now - start);
            resolve(fps < 50);
            return;
          }
          rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
      });

    const applyQualityFast = () => {
      const lowerPowerCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 6;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 0;
      const lowerMemory = memory > 0 && memory <= 8;
      setReducedMotion(mqReduced.matches);
      setIsLiteMode(mqTabletDown.matches || lowerPowerCpu || lowerMemory || mqReduced.matches);
    };

    const applyQualityAdaptive = async () => {
      const lowerPowerCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 6;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 0;
      const lowerMemory = memory > 0 && memory <= 8;
      const lowFps = mqReduced.matches ? false : await detectLowFps();
      if (isDisposed) return;
      setReducedMotion(mqReduced.matches);
      setIsLiteMode(mqTabletDown.matches || lowerPowerCpu || lowerMemory || mqReduced.matches || lowFps);
    };

    applyQualityFast();
    applyQualityAdaptive();
    mqReduced.addEventListener("change", applyQualityFast);
    mqTabletDown.addEventListener("change", applyQualityFast);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(rafId);
      mqReduced.removeEventListener("change", applyQualityFast);
      mqTabletDown.removeEventListener("change", applyQualityFast);
    };
  }, []);

  const visibleOrbs = useMemo(() => {
    if (!isLiteMode) return orbs.slice(0, 10);
    return orbs.slice(0, 4);
  }, [isLiteMode]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at center, rgba(30, 64, 175, 0.1), transparent 60%), radial-gradient(circle at 50% 45%, rgba(15, 23, 42, 0.08), transparent 67%), #02040a",
        zIndex: -1,
      }}
    >
      {visibleOrbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            background: orb.bg,
            animation: active && !reducedMotion ? orb.animation : "none",
            willChange: active && !reducedMotion && i < 4 ? "transform" : "auto",
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity ?? 0.82,
            mixBlendMode: orb.blend && !isLiteMode ? "screen" : "normal",
            borderRadius: "50% 60% 40% 70%",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}
    </div>
  );
};

export default GradientBackground;
