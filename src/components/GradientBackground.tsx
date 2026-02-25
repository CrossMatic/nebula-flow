const orbs = [
  // großer, heller Blob rechts (wie im Referenzbild)
  {
    size: 1200,
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 70,
    animation: "float2 26s ease-in-out infinite",
    top: "5%",
    right: "-10%",
  },
  // Gegenstück links oben
  {
    size: 1050,
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 45%)",
    blur: 65,
    animation: "float1 30s ease-in-out infinite",
    top: "-5%",
    left: "-5%",
  },
  // Blob links unten
  {
    size: 1100,
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 45%)",
    blur: 65,
    animation: "float3 32s ease-in-out infinite",
    bottom: "-10%",
    left: "-5%",
  },
  // Blob rechts unten
  {
    size: 980,
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 45%)",
    blur: 60,
    animation: "float4 34s ease-in-out infinite",
    bottom: "-8%",
    right: "-5%",
  },
  // ein paar kleinere Partikel in der Nähe des Textzentrums
  {
    size: 620,
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 55,
    animation: "float5 24s ease-in-out infinite",
    top: "35%",
    left: "10%",
  },
  {
    size: 580,
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 40%)",
    blur: 50,
    animation: "float6 22s ease-in-out infinite",
    top: "45%",
    right: "20%",
  },
  {
    size: 540,
    bg: "radial-gradient(circle, rgba(37, 99, 235, 1), transparent 40%)",
    blur: 50,
    animation: "float3 28s ease-in-out infinite",
    bottom: "22%",
    left: "32%",
  },
  // zusätzliche kleine Orbs für mehr Tiefe
  {
    size: 460,
    bg: "radial-gradient(circle, rgba(56, 189, 248, 1), transparent 40%)",
    blur: 45,
    animation: "float1 26s ease-in-out infinite",
    top: "18%",
    left: "55%",
  },
  {
    size: 440,
    bg: "radial-gradient(circle, rgba(59, 130, 246, 1), transparent 38%)",
    blur: 45,
    animation: "float2 28s ease-in-out infinite",
    bottom: "28%",
    right: "30%",
  },
];

const GradientBackground = () => (
  <div
    className="fixed inset-0 overflow-hidden"
    style={{
      background:
        "radial-gradient(circle at center, rgba(15, 23, 42, 0.15), transparent 60%), #02040a",
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
          opacity: 0.9,
          mixBlendMode: "screen",
          borderRadius: "50% 60% 40% 70%",
        }}
      />
    ))}
  </div>
);

export default GradientBackground;
