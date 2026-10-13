import type { ReactNode } from "react";

// Gemeinsame Gestaltungs-Bausteine für Startseite und Unterseiten.

// Karte mit feinem Rahmen, weichem Schatten und dezentem Verlauf von oben.
export const cardClass =
  "surface-glow-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]";

export const serifAccentClass = "font-serif text-[1.12em] font-normal italic tracking-normal";

// Setzt einzelne Schlüsselwörter eines Titels in die kursive Serifenschrift, optional in Gold.
export const accentWords = (text: string, accents: { word: string; gold?: boolean; white?: boolean }[]) => {
  if (!accents.length) return text;
  const escaped = accents.map((a) => a.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return text.split(new RegExp(`(${escaped.join("|")})`)).map((part, i) => {
    const accent = accents.find((a) => a.word === part);
    if (!accent) return part;
    return (
      <span key={i} className={`${serifAccentClass} ${accent.white ? "text-white" : "text-gold"}`}>
        {part}
      </span>
    );
  });
};

// Abschnittslabel als Pille mit feinem goldenen Rahmen.
export const SectionPill = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span
    className={`inline-flex items-center rounded-full border border-gold/30 bg-white/[0.05] px-3.5 py-1 text-xs font-medium text-stone-200 ${className}`}
  >
    {children}
  </span>
);

// Einleitungsabsatz: erster Satz hell und Medium, der Rest im gewohnten Grau.
export const LeadParagraph = ({ text, className = "" }: { text: string; className?: string }) => {
  const match = text.match(/^(.+?[.!?])\s+([\s\S]+)$/);
  return (
    <p className={`text-muted-foreground ${className}`}>
      <span className="font-medium text-stone-100">{match ? match[1] : text}</span>
      {match && ` ${match[2]}`}
    </p>
  );
};

// Sehr weicher, grossflächiger Goldschein in einer Ecke der Sektion.
export const CornerGlow = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold)/0.07),transparent)] ${className}`}
  />
);

// Feine vertikale Hilfslinien im Hintergrund, oben und unten ausgeblendet.
export const GuideLines = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 mx-auto hidden max-w-6xl grid-cols-4 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:grid"
  >
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className={`border-l border-white/[0.04] ${i === 3 ? "border-r" : ""}`} />
    ))}
  </div>
);
