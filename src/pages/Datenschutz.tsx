import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const Datenschutz = () => {
  const { language } = useLanguage();
  const t =
    language === "de"
      ? {
          legal: "Rechtliches",
          title: "Datenschutz",
          intro:
            "Der Schutz Ihrer Daten ist uns wichtig. Diese Seite dient aktuell als Platzhalter für die vollständige Datenschutzerklärung.",
          sectionTitle: "Video-Analyse",
          body:
            "Wenn Sie unser Formular für die kostenlose Video-Analyse ausfüllen, verarbeiten wir Ihre Angaben (Name, E-Mail, Firmenname, Branche und Problembeschreibung) ausschließlich zum Erstellen und Versand Ihres persönlichen Analyse-Videos. Die Daten werden über unseren Workflow-Dienst übertragen und in verbundenen Tools gespeichert. Die Speicherdauer beträgt maximal 12 Monate nach letztem Kontakt, sofern Sie nicht vorher der Löschung zustimmen. Eine Weitergabe an Dritte erfolgt nicht.",
          questions: "Bei Fragen kontaktieren Sie uns unter",
        }
      : {
          legal: "Legal",
          title: "Privacy Policy",
          intro:
            "Protecting your data is important to us. This page currently serves as a placeholder for the full privacy policy.",
          sectionTitle: "Video Analysis",
          body:
            "If you submit our form for the free video analysis, we process your information (name, email, company name, industry, and problem description) solely to create and deliver your personal analysis video. Data is transmitted via our workflow service and stored in connected tools. Data is retained for a maximum of 12 months after the last contact unless you request deletion earlier. No data is shared with third parties.",
          questions: "For questions, contact us at",
        };

  useSeo({
    title: language === "de" ? "Datenschutz | CrossMatic" : "Privacy Policy | CrossMatic",
    description:
      language === "de"
        ? "Datenschutzhinweise zur Nutzung der CrossMatic Website und Video-Analyse."
        : "Privacy information for using the CrossMatic website and video analysis.",
  });

  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.legal}</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
        <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/90">
          <p>{t.intro}</p>

          <section>
            <h2 className="mb-2 font-semibold text-white">{t.sectionTitle}</h2>
            <p>{t.body}</p>
          </section>

          <p>
            {t.questions}{" "}
            <a className="text-blue-300 hover:text-blue-200" href="mailto:joshua@getcrossmatic.com">
              joshua@getcrossmatic.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
