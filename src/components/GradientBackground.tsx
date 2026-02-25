const orbs = [
  // großer, heller Blob rechts (wie im Referenzbild)
  {
    size: "clamp(1000px, 62vw, 1800px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 78,
    animation: "float2 26s ease-in-out infinite",
    top: "-4%",
    right: "-14%",
  },
  // Gegenstück links oben
  {
    size: "clamp(920px, 55vw, 1650px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 45%)",
    blur: 72,
    animation: "float1 30s ease-in-out infinite",
    top: "-10%",
    left: "-14%",
  },
  // Blob links unten
  {
    size: "clamp(980px, 58vw, 1700px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 45%)",
    blur: 72,
    animation: "float3 32s ease-in-out infinite",
    bottom: "-16%",
    left: "-12%",
  },
  // Blob rechts unten
  {
    size: "clamp(900px, 52vw, 1550px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 68,
    animation: "float4 34s ease-in-out infinite",
    bottom: "-14%",
    right: "-12%",
  },
  // ein paar kleinere Partikel in der Nähe des Textzentrums
  {
    size: "clamp(520px, 32vw, 980px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 58,
    animation: "float5 24s ease-in-out infinite",
    top: "30%",
    left: "6%",
  },
  {
    size: "clamp(500px, 30vw, 920px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 40%)",
    blur: 55,
    animation: "float6 22s ease-in-out infinite",
    top: "38%",
    right: "10%",
  },
  {
    size: "clamp(470px, 28vw, 860px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 40%)",
    blur: 54,
    animation: "float3 28s ease-in-out infinite",
    bottom: "14%",
    left: "28%",
  },
  // zusätzliche kleine Orbs für mehr Tiefe
  {
    size: "clamp(380px, 22vw, 760px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 48,
    animation: "float1 26s ease-in-out infinite",
    top: "12%",
    left: "48%",
  },
  {
    size: "clamp(360px, 21vw, 700px)",
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 38%)",
    blur: 48,
    animation: "float2 28s ease-in-out infinite",
    bottom: "18%",
    right: "24%",
  },
  {
    size: "clamp(520px, 30vw, 940px)",
    bg: "radial-gradient(circle, rgba(56, 189, 248, 0.95), transparent 42%)",
    blur: 56,
    animation: "float4 30s ease-in-out infinite",
    top: "8%",
    left: "22%",
  },
  {
    size: "clamp(500px, 28vw, 900px)",
    bg: "radial-gradient(circle, rgba(37, 99, 235, 0.95), transparent 42%)",
    blur: 55,
    animation: "float5 30s ease-in-out infinite",
    bottom: "8%",
    right: "8%",
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
          top: (orb as any).top,
          left: (orb as any).left,
          right: (orb as any).right,
          bottom: (orb as any).bottom,
          opacity: 0.96,
          mixBlendMode: "screen",
          borderRadius: "50% 60% 40% 70%",
        }}
      />
    ))}
  </div>
);

export default GradientBackground;
