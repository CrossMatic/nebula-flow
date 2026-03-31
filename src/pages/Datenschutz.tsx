import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const Datenschutz = () => {
  const { language } = useLanguage();

  const de = {
    legal: "Rechtliches",
    title: "Datenschutz",
    updated: "Stand: März 2026",
    sections: [
      {
        title: "Verantwortliche Stelle",
        blocks: [
          "Verantwortlich für die Datenbearbeitung im Zusammenhang mit dieser Website ist:",
          "Joshua Stöckli, CrossMatic (Einzelfirma), Im Gehracker 4, 4125 Riehen, Schweiz. E-Mail: joshua@getcrossmatic.com",
        ],
      },
      {
        title: "Allgemeines",
        blocks: [
          "Wir verarbeiten personenbezogene Daten im Einklang mit dem schweizerischen Bundesgesetz über den Datenschutz (nDSG) sowie – soweit anwendbar – der Datenschutz-Grundverordnung der EU (DSGVO), insbesondere wenn Sie sich in einem EU-/EWR-Staat befinden oder unsere Angebote dort nutzen.",
          "Die folgenden Hinweise geben einen einfachen Überblick darüber, welche Daten wir erheben und wofür wir sie nutzen.",
        ],
      },
      {
        title: "Datenerfassung auf unserer Website",
        subsections: [
          {
            title: "Server-Log-Dateien",
            blocks: [
              "Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch technische Informationen erfasst und in Server-Log-Dateien gespeichert (z. B. Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse).",
              "Diese Daten dienen der Sicherheit und Stabilität der Website sowie der Fehleranalyse und werden in der Regel nach kurzer Zeit gelöscht oder anonymisiert, soweit keine längere Aufbewahrung zur Dokumentation erforderlich ist.",
            ],
          },
          {
            title: "Kontaktformular und Video-Analyse",
            blocks: [
              "Wenn Sie unser Formular für die kostenlose Video-Analyse nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben – insbesondere Name, E-Mail-Adresse und Firmenbezogene Daten (z. B. Firmenname, Branche, Beschreibung Ihres Anliegens) – zur Erstellung und Zusendung Ihres persönlichen Analyse-Videos sowie zur Kontaktaufnahme im Rahmen dieser Anfrage.",
              "Die Daten werden über unsere technische Infrastruktur übertragen und können in verbundenen Tools zur Bearbeitung gespeichert werden. Wir speichern diese Daten höchstens 12 Monate nach dem letzten Kontakt oder bis Sie die Löschung verlangen bzw. Ihre Einwilligung widerrufen, je nachdem, was zuerst eintritt.",
            ],
          },
        ],
      },
      {
        title: "Drittanbieter-Dienste",
        subsections: [
          {
            title: "Terminbuchung (Cal.com)",
            blocks: [
              "Wenn Sie unseren Buchungslink nutzen, um einen Termin zu vereinbaren, werden Sie zum Dienst Cal.com weitergeleitet. Dabei können personenbezogene Daten (z. B. Name, E-Mail-Adresse, gewählter Termin) an Cal.com übermittelt und dort gemäss deren Datenschutzerklärung verarbeitet werden. Bitte beachten Sie die Informationen von Cal.com direkt auf deren Seite.",
            ],
          },
          {
            title: "Hosting",
            blocks: [
              "Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite werden Daten auf Servern von Vercel verarbeitet; Details finden Sie in der Datenschutzerklärung von Vercel.",
            ],
          },
        ],
      },
      {
        title: "Ihre Rechte",
        blocks: [
          "Sie haben nach Massgabe der geltenden gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft über die Sie betreffenden Daten, auf Berichtigung unrichtiger Daten, auf Löschung sowie – soweit die Verarbeitung auf Einwilligung beruht – auf Widerruf Ihrer Einwilligung mit Wirkung für die Zukunft.",
          "Zur Geltendmachung Ihrer Rechte oder bei Fragen zur Datenbearbeitung erreichen Sie uns unter der oben genannten E-Mail-Adresse.",
        ],
      },
    ],
    contactLabel: "Kontakt zum Datenschutz",
    contactBody: "Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten:",
  };

  const en = {
    legal: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: March 2026",
    sections: [
      {
        title: "Data controller",
        blocks: [
          "The controller responsible for processing personal data in connection with this website is:",
          "Joshua Stöckli, CrossMatic (sole proprietorship), Im Gehracker 4, 4125 Riehen, Switzerland. Email: joshua@getcrossmatic.com",
        ],
      },
      {
        title: "General",
        blocks: [
          "We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP / nDSG) and, where applicable, the EU General Data Protection Regulation (GDPR), in particular if you are located in the EU/EEA or use our services there.",
          "The following information provides a simple overview of what data we collect and for what purposes we use it.",
        ],
      },
      {
        title: "Data collection on our website",
        subsections: [
          {
            title: "Server log files",
            blocks: [
              "When you visit this website, the hosting provider automatically collects technical information and stores it in server log files (e.g. browser type and version, operating system, referrer URL, hostname of the accessing device, time of the server request, IP address).",
              "This data is used for security and stability of the website and for error analysis and is usually deleted or anonymised after a short time, unless longer retention is required for documentation purposes.",
            ],
          },
          {
            title: "Contact form and video analysis",
            blocks: [
              "If you use our form for the free video analysis, we process the information you provide—especially name, email address, and business-related data (e.g. company name, industry, description of your request)—to create and send your personal analysis video and to contact you in connection with this request.",
              "Data is transmitted via our technical infrastructure and may be stored in connected tools for processing. We retain this data for no longer than 12 months after the last contact or until you request deletion or withdraw your consent, whichever comes first.",
            ],
          },
        ],
      },
      {
        title: "Third-party services",
        subsections: [
          {
            title: "Appointment booking (Cal.com)",
            blocks: [
              "If you use our booking link to schedule an appointment, you will be redirected to Cal.com. Personal data (e.g. name, email address, selected time slot) may be transferred to Cal.com and processed there in accordance with their privacy policy. Please refer to Cal.com’s information on their website.",
            ],
          },
          {
            title: "Hosting",
            blocks: [
              "This website is hosted by Vercel Inc. When you access the site, data is processed on Vercel’s servers; see Vercel’s privacy policy for details.",
            ],
          },
        ],
      },
      {
        title: "Your rights",
        blocks: [
          "Subject to applicable law, you have in particular the right to obtain information about your personal data, to request correction of inaccurate data, to request deletion, and—where processing is based on consent—to withdraw your consent with effect for the future.",
          "To exercise your rights or if you have questions about data processing, please contact us at the email address above.",
        ],
      },
    ],
    contactLabel: "Privacy contact",
    contactBody: "If you have questions about this privacy policy or the processing of your data:",
  };

  const t = language === "de" ? de : en;

  useSeo({
    title: language === "de" ? "Datenschutz | CrossMatic" : "Privacy Policy | CrossMatic",
    description:
      language === "de"
        ? "Datenschutzerklärung: nDSG, DSGVO, Hosting, Video-Analyse, Cal.com, Ihre Rechte."
        : "Privacy policy: Swiss FADP, GDPR, hosting, video analysis, Cal.com, your rights.",
  });

  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.legal}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
          <p className="text-xs text-muted-foreground">{t.updated}</p>
        </div>
        <div className="surface-glow-hover space-y-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/90 md:p-8">
          {t.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-base font-semibold text-white md:text-lg">{section.title}</h2>
              {"subsections" in section && section.subsections ? (
                <div className="space-y-6 border-l border-white/10 pl-4 md:pl-5">
                  {section.subsections.map((sub) => (
                    <div key={sub.title} className="space-y-3">
                      <h3 className="text-sm font-medium text-blue-200/95">{sub.title}</h3>
                      {sub.blocks.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                "blocks" in section &&
                section.blocks && (
                  <div className="space-y-3">
                    {section.blocks.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )
              )}
            </section>
          ))}

          <section className="border-t border-white/10 pt-8">
            <h2 className="mb-3 text-base font-semibold text-white md:text-lg">{t.contactLabel}</h2>
            <p className="mb-2">{t.contactBody}</p>
            <p>
              <a className="text-blue-300 hover:text-blue-200" href="mailto:joshua@getcrossmatic.com">
                joshua@getcrossmatic.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
