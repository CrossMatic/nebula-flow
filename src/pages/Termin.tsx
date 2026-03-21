import { GlassButton } from "@/components/ui/glass-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const BOOKING_URL = "https://cal.com/crossmatic/call";

const Termin = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const faqs =
    language === "de"
      ? [
          {
            question: "Wie schnell sehen wir erste Ergebnisse?",
            answer:
              "Akquise-System: Braucht eine Aufbauzeit von mindestens 2 Wochen. Nach dem Launch der Kampagne kommen die ersten Anfragen typischerweise innerhalb weniger Tage.\n\nConversion-System: Erste Ergebnisse zeigen sich bereits 1-2 Wochen nach Implementierung - abhängig von Ihrer bestehenden Traffic- und Lead-Qualität.",
          },
          {
            question: "Was kostet das System?",
            answer:
              "Wir arbeiten nicht mit Fixpreisen, da jedes System individuell auf Ihre Anforderungen zugeschnitten wird. Unsere Kunden sehen jedoch typischerweise bereits in den ersten 1-2 Monaten einen ROI von 200-400%.",
          },
          {
            question: "Ist das komplett Done-for-You oder eine Zusammenarbeit?",
            answer:
              "Akquise-System: Zusammenarbeit - wir liefern qualifizierte Termine, Sie führen die Gespräche. Der Verkauf bleibt persönlich.\n\nConversion-System: Weitgehend automatisiert (95%+), abhängig von Ihren Kanälen. Je nach Setup komplett hands-off oder mit gemeinsamer Optimierung.",
          },
          {
            question: "Ist das DSGVO-konform?",
            answer:
              "Ja. Wir arbeiten mit DACH-fokussierten Lösungen, nutzen europäisches Hosting und bieten klare Opt-In/Opt-Out-Mechaniken sowie transparente Absenderangaben an.",
          },
          {
            question: "Kann ich CrossMatics System auch selber managen?",
            answer:
              "Absolut! Wir entwickeln unsere Systeme so, dass sie sich leicht in Ihre Konten integrieren lassen, und stehen Ihnen jederzeit mit Rat und Tat zur Seite. Wenn Sie es jedoch vorziehen, dass wir die Verwaltung übernehmen, sind wir nur einen Anruf entfernt und helfen Ihnen bei allen Fragen gerne weiter.",
          },
        ]
      : [
          {
            question: "How quickly can we expect first results?",
            answer:
              "Acquisition system: Requires a setup period of at least 2 weeks. After campaign launch, the first inquiries usually come in within a few days.\n\nConversion system: First results are typically visible within 1-2 weeks after implementation, depending on your existing traffic and lead quality.",
          },
          {
            question: "How much does the system cost?",
            answer:
              "We do not work with fixed prices because every system is tailored to your exact requirements. Our clients typically see an ROI of 200-400% within the first 1-2 months.",
          },
          {
            question: "Is this fully done-for-you or collaborative?",
            answer:
              "Acquisition system: Collaborative - we deliver qualified appointments, you run the sales calls. Sales remain personal.\n\nConversion system: Largely automated (95%+), depending on your channels. Depending on setup, it can be fully hands-off or jointly optimized.",
          },
          {
            question: "Is it GDPR-compliant?",
            answer:
              "Yes. We use DACH-focused solutions, European hosting, and clear opt-in/opt-out mechanisms with transparent sender information.",
          },
          {
            question: "Can I manage the system myself?",
            answer:
              "Absolutely. We build systems so they can be integrated easily into your accounts, and we are always available to support you. If you prefer us to manage everything, we are only one call away.",
          },
        ];

  const t =
    language === "de"
      ? {
          section: "Termin",
          title: "Erstgespräch buchen",
          subtitle: "Wählen Sie direkt einen passenden Termin. Die Buchung erfolgt auf dieser Seite.",
          back: "Zurück zur Startseite",
          iframeTitle: "CrossMatic Terminbuchung",
          fallbackLabel: "Falls das eingebettete Formular nicht lädt, öffnen Sie die Buchung direkt:",
          faq: "FAQ",
          faqTitle: "Häufige Fragen",
          footerTagline: "Automatisierte Lead-Generierung für B2B-Unternehmen.",
          nav: "Navigation",
          services: "Leistungen",
          process: "Prozess",
          book: "Termin buchen",
          contact: "Kontakt",
          rights: "© 2025 CrossMatic. Alle Rechte vorbehalten.",
          imprint: "Impressum",
          privacy: "Datenschutz",
          country: "Basel, Schweiz",
        }
      : {
          section: "Booking",
          title: "Book an Intro Call",
          subtitle: "Choose a suitable appointment directly. Booking is completed on this page.",
          back: "Back to Homepage",
          iframeTitle: "CrossMatic Booking",
          fallbackLabel: "If the embedded form does not load, open the booking directly:",
          faq: "FAQ",
          faqTitle: "Frequently Asked Questions",
          footerTagline: "Automated lead generation for B2B companies.",
          nav: "Navigation",
          services: "Services",
          process: "Process",
          book: "Book a Call",
          contact: "Contact",
          rights: "© 2025 CrossMatic. All rights reserved.",
          imprint: "Legal Notice",
          privacy: "Privacy Policy",
          country: "Basel, Switzerland",
        };

  useSeo({
    title: language === "de" ? "Termin buchen | CrossMatic" : "Book a Call | CrossMatic",
    description:
      language === "de"
        ? "Buchen Sie Ihr kostenloses Erstgespräch mit CrossMatic direkt online."
        : "Book your free intro call with CrossMatic directly online.",
    ogTitle: language === "de" ? "Termin buchen | CrossMatic" : "Book a Call | CrossMatic",
    ogDescription:
      language === "de"
        ? "Wählen Sie direkt einen passenden Termin. Die Buchung erfolgt auf dieser Seite."
        : "Choose a suitable appointment directly. Booking happens on this page.",
  });

  useEffect(() => {
    // Always land on top/bookings block when entering the page.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-8 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.section}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {t.subtitle}
            </p>
          </div>
          <GlassButton size="sm" onClick={() => navigate("/")} contentClassName="inline-flex items-center gap-2">
            {t.back}
          </GlassButton>
        </div>

        <div id="buchungskalender" className="surface-glow-hover relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <GlowingEffect
            spread={36}
            glow={false}
            disabled={false}
            proximity={84}
            inactiveZone={0.22}
            borderWidth={1}
            variant="white"
          />
          <iframe
            src={BOOKING_URL}
            title={t.iframeTitle}
            className="h-[78vh] w-full min-h-[720px] border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          {t.fallbackLabel}
          {" "}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
            {BOOKING_URL}
          </a>
        </p>
      </div>

      <section id="faq" className="w-full px-0 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.faq}</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.faqTitle}</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group surface-glow-hover relative rounded-xl border border-white/10 bg-white/5 p-5">
                <GlowingEffect
                  spread={30}
                  glow={false}
                  disabled={false}
                  proximity={72}
                  inactiveZone={0.22}
                  borderWidth={1}
                  variant="white"
                />
                <summary className="cursor-pointer list-none text-left font-medium">
                  {faq.question}
                  <span className="ml-2 inline-block text-blue-300 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-20 w-full border-t border-white/10 px-0 py-14 md:mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-5">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-[3.75rem] w-auto object-contain" />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t.footerTagline}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.nav}</p>
              <div className="flex flex-col gap-3.5 text-sm text-slate-200/90">
                <a href="/#leistungen" className="transition-colors hover:text-white">{t.services}</a>
                <a href="/#prozess" className="transition-colors hover:text-white">{t.process}</a>
                <a href="/#faq" className="transition-colors hover:text-white">{t.faq}</a>
                <a href="/termin" className="transition-colors hover:text-white">{t.book}</a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact}</p>
              <div className="flex flex-col gap-3.5 text-sm text-slate-200/90">
                <a href="mailto:joshua@getcrossmatic.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>joshua@getcrossmatic.com</span>
                </a>
                <a href="tel:+41787706058" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <PhoneCall className="h-4 w-4 text-muted-foreground" />
                  <span>+41 78 770 60 58</span>
                </a>
                <p className="inline-flex items-center gap-2 text-slate-200/90">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{t.country}</span>
                </p>
                <a
                  href="https://www.linkedin.com/in/joshua-st%C3%B6ckli-0a2862394/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{t.rights}</p>
            <div className="flex items-center gap-4">
              <a href="/impressum" className="transition-colors hover:text-white">{t.imprint}</a>
              <a href="/datenschutz" className="transition-colors hover:text-white">{t.privacy}</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Termin;
