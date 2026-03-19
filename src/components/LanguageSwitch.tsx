import { useLanguage } from "@/i18n/language";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-4 top-4 z-[70] rounded-xl border border-white/15 bg-[#02040a]/90 p-1 shadow-[0_0_16px_rgba(59,130,246,0.18)] backdrop-blur-sm">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage("de")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            language === "de" ? "bg-blue-500/20 text-blue-100" : "text-slate-300 hover:text-white"
          }`}
          aria-pressed={language === "de"}
        >
          Deutsch
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            language === "en" ? "bg-blue-500/20 text-blue-100" : "text-slate-300 hover:text-white"
          }`}
          aria-pressed={language === "en"}
        >
          English
        </button>
      </div>
    </div>
  );
}
