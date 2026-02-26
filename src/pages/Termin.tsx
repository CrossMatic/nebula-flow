import { GlassButton } from "@/components/ui/glass-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BOOKING_URL = "https://cal.com/crossmatic/call";
const faqs = [
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
];

const Termin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always land on top/bookings block when entering the page.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-8 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Termin</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Erstgespräch buchen</h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Wählen Sie direkt einen passenden Termin. Die Buchung erfolgt auf dieser Seite.
            </p>
          </div>
          <GlassButton size="sm" onClick={() => navigate("/")} contentClassName="inline-flex items-center gap-2">
            Zurück zur Startseite
          </GlassButton>
        </div>

        <div id="buchungskalender" className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
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
            title="CrossMatic Terminbuchung"
            className="h-[78vh] w-full min-h-[720px] border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Falls das eingebettete Formular nicht lädt, öffnen Sie die Buchung direkt:
          {" "}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
            {BOOKING_URL}
          </a>
        </p>
      </div>

      <section id="faq" className="w-full px-0 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group relative rounded-xl border border-white/10 bg-white/5 p-5">
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
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-12 w-auto object-contain" />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Automatisierte Lead-Generierung für B2B-Unternehmen.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
              <div className="flex flex-col gap-3.5 text-sm text-slate-200/90">
                <a href="/#leistungen" className="transition-colors hover:text-white">Leistungen</a>
                <a href="/#prozess" className="transition-colors hover:text-white">Prozess</a>
                <a href="/#faq" className="transition-colors hover:text-white">FAQ</a>
                <a href="/termin" className="transition-colors hover:text-white">Termin buchen</a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kontakt</p>
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
                  <span>Basel, Schweiz</span>
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
            <p>© 2025 CrossMatic. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-white">Impressum</a>
              <a href="#" className="transition-colors hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Termin;
