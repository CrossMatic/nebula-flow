type Orb = {
  size: string;
  bg: string;
  blur: number;
  animation: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const orbs: Orb[] = [
  // großer, heller Blob rechts (wie im Referenzbild)
  {
    size: "clamp(1350px, 88vw, 2600px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 78,
    animation: "float2 26s ease-in-out infinite",
    top: "-6%",
    right: "-8%",
  },
  // Gegenstück links oben
  {
    size: "clamp(1260px, 82vw, 2450px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 45%)",
    blur: 72,
    animation: "float1 30s ease-in-out infinite",
    top: "-12%",
    left: "-8%",
  },
  // Blob links unten
  {
    size: "clamp(1320px, 86vw, 2550px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 45%)",
    blur: 72,
    animation: "float3 32s ease-in-out infinite",
    bottom: "-10%",
    left: "-6%",
  },
  // Blob rechts unten
  {
    size: "clamp(1240px, 80vw, 2400px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 68,
    animation: "float4 34s ease-in-out infinite",
    bottom: "-9%",
    right: "-6%",
  },
  // ein paar kleinere Partikel in der Nähe des Textzentrums
  {
    size: "clamp(760px, 50vw, 1550px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 58,
    animation: "float5 24s ease-in-out infinite",
    top: "24%",
    left: "-2%",
  },
  {
    size: "clamp(740px, 48vw, 1480px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 40%)",
    blur: 55,
    animation: "float6 22s ease-in-out infinite",
    top: "26%",
    right: "-1%",
  },
  {
    size: "clamp(700px, 44vw, 1380px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 40%)",
    blur: 54,
    animation: "float3 28s ease-in-out infinite",
    bottom: "6%",
    left: "20%",
  },
  // zusätzliche kleine Orbs für mehr Tiefe
  {
    size: "clamp(560px, 36vw, 1180px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 48,
    animation: "float1 26s ease-in-out infinite",
    top: "6%",
    left: "40%",
  },
  {
    size: "clamp(540px, 34vw, 1120px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 38%)",
    blur: 48,
    animation: "float2 28s ease-in-out infinite",
    bottom: "8%",
    right: "16%",
  },
  {
    size: "clamp(760px, 49vw, 1520px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.95), transparent 42%)",
    blur: 56,
    animation: "float4 30s ease-in-out infinite",
    top: "2%",
    left: "14%",
  },
  {
    size: "clamp(740px, 47vw, 1460px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 0.95), transparent 42%)",
    blur: 55,
    animation: "float5 30s ease-in-out infinite",
    bottom: "2%",
    right: "2%",
  },
];

const GradientBackground = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at center, rgba(30, 64, 175, 0.12), transparent 58%), radial-gradient(circle at 50% 45%, rgba(15, 23, 42, 0.08), transparent 65%), #02040a",
      zIndex: -1,
    }}
  >
    {orbs.map((orb, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: orb.size,
          height: orb.size,
          background: orb.bg,
          filter: `blur(${orb.blur}px)`,
          animation: orb.animation,
          willChange: "transform",
          top: orb.top,
          left: orb.left,
          right: orb.right,
          bottom: orb.bottom,
          opacity: 0.96,
          mixBlendMode: "screen",
          borderRadius: "50% 60% 40% 70%",
        }}
      />
    ))}
  </div>
);

export default GradientBackground;
