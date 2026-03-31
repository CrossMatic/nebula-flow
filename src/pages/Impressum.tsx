import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const Impressum = () => {
  const { language } = useLanguage();
  const t =
    language === "de"
      ? {
          legal: "Rechtliches",
          title: "Impressum",
          publisher: "Herausgeber",
          contact: "Kontakt",
          email: "E-Mail:",
          phone: "Telefon:",
          representative: "Vertretungsberechtigte Person",
          companyLine: "CrossMatic (Einzelfirma)",
          country: "Schweiz",
        }
      : {
          legal: "Legal",
          title: "Legal Notice",
          publisher: "Publisher",
          contact: "Contact",
          email: "Email:",
          phone: "Phone:",
          representative: "Authorized representative",
          companyLine: "CrossMatic (sole proprietorship)",
          country: "Switzerland",
        };

  useSeo({
    title: language === "de" ? "Impressum | CrossMatic" : "Legal Notice | CrossMatic",
    description:
      language === "de"
        ? "Impressum: Joshua Stöckli, CrossMatic, Riehen – Kontakt und Vertretung."
        : "Legal notice: Joshua Stöckli, CrossMatic, Riehen – contact and representation.",
  });

  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.legal}</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
        <div className="surface-glow-hover space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/90 md:p-8">
          <section>
            <h2 className="mb-3 font-semibold text-white">{t.publisher}</h2>
            <div className="space-y-1">
              <p>Joshua Stöckli</p>
              <p>{t.companyLine}</p>
              <p>Im Gehracker 4</p>
              <p>4125 Riehen</p>
              <p>{t.country}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-semibold text-white">{t.contact}</h2>
            <div className="space-y-2">
              <p>
                {t.email}{" "}
                <a className="text-blue-300 hover:text-blue-200" href="mailto:joshua@getcrossmatic.com">
                  joshua@getcrossmatic.com
                </a>
              </p>
              <p>
                {t.phone}{" "}
                <a className="text-blue-300 hover:text-blue-200" href="tel:+41787706058">
                  +41 78 770 60 58
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-semibold text-white">{t.representative}</h2>
            <p>Joshua Stöckli</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
