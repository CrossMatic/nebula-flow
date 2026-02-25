const orbs = [
  { size: 900, bg: "radial-gradient(circle, rgba(77, 166, 255, 0.45), transparent 70%)", blur: 180, animation: "float1 30s ease-in-out infinite" },
  { size: 700, bg: "radial-gradient(circle, rgba(135, 206, 235, 0.35), transparent 70%)", blur: 150, animation: "float2 35s ease-in-out infinite" },
  { size: 1000, bg: "radial-gradient(circle, rgba(100, 149, 237, 0.5), transparent 70%)", blur: 200, animation: "float3 25s ease-in-out infinite" },
  { size: 500, bg: "radial-gradient(circle, rgba(77, 166, 255, 0.3), transparent 70%)", blur: 120, animation: "float4 40s ease-in-out infinite" },
  { size: 600, bg: "radial-gradient(circle, rgba(80, 120, 200, 0.35), transparent 70%)", blur: 160, animation: "float5 28s ease-in-out infinite" },
  { size: 450, bg: "radial-gradient(circle, rgba(120, 180, 255, 0.25), transparent 70%)", blur: 100, animation: "float6 22s ease-in-out infinite" },
];

const GradientBackground = () => (
  <div
    className="fixed inset-0 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0a0e1a 100%)",
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
        }}
      />
    ))}
  </div>
);

export default GradientBackground;
