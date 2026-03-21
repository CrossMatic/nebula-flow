import { useLanguage } from "@/i18n/language";

type LanguageSwitchProps = {
  variant?: "floating" | "inline";
  compact?: boolean;
};

export function LanguageSwitch({ variant = "floating", compact = false }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();

  const wrapperClass =
    variant === "inline"
      ? "surface-glow-hover rounded-lg border border-white/10 bg-[#02040a]/90 p-1"
      : "surface-glow-hover fixed right-4 top-4 z-[70] rounded-xl border border-white/15 bg-[#02040a]/95 p-1 shadow-[0_0_16px_rgba(59,130,246,0.18)]";

  const activeClass = compact ? "bg-blue-500/20 text-blue-100" : "bg-blue-500/20 text-blue-100";
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
