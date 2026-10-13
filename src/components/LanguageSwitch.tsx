import { useLanguage } from "@/i18n/language";

type LanguageSwitchProps = {
  variant?: "floating" | "inline";
  compact?: boolean;
};

export function LanguageSwitch({ variant = "floating", compact = false }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();

  const wrapperClass =
    variant === "inline"
      ? "surface-glow-hover rounded-lg border border-white/10 bg-background/90 p-1"
      : "surface-glow-hover fixed right-4 top-4 z-[70] rounded-xl border border-white/15 bg-background/95 p-1 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]";

  const activeClass = "bg-white/10 text-white";
  const inactiveClass = compact ? "text-slate-300 hover:text-white" : "text-slate-300 hover:text-white";

  return (
    <div className={wrapperClass}>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage("de")}
          className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${
            language === "de" ? activeClass : inactiveClass
          }`}
          aria-pressed={language === "de"}
        >
          {compact ? "DE" : "Deutsch"}
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${
            language === "en" ? activeClass : inactiveClass
          }`}
          aria-pressed={language === "en"}
        >
          {compact ? "EN" : "English"}
        </button>
      </div>
    </div>
  );
}
