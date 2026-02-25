import GradientBackground from "@/components/GradientBackground";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import crossmaticLogo from "@/assets/crossmatic-logo.png";

const services = [
  {
    title: "Zielgruppenrecherche",
    description:
      "Wir identifizieren ICPs, Branchencluster und relevante Entscheider mit klaren Priorisierungen.",
    outcome: "Ergebnis: Fokus auf Kontakte mit hoher Abschlusswahrscheinlichkeit.",
  },
  {
    title: "Personalisierte Outreach-Sequenzen",
    description:
      "Mehrstufige E-Mail- und LinkedIn-Nachrichten, die auf Rolle, Branche und Trigger zugeschnitten sind.",
    outcome: "Ergebnis: Höhere Antwortquote durch relevante Ansprache.",
  },
  {
    title: "Follow-up-Automation",
    description:
      "Automatische Follow-ups im richtigen Timing, ohne dass Leads unpersönlich oder generisch wirken.",
    outcome: "Ergebnis: Mehr gebuchte Gespräche ohne manuellen Mehraufwand.",
  },
  {
    title: "Reporting & Optimierung",
    description:
      "Live-Dashboard mit Öffnungen, Antworten, Meetings und klaren Hebeln zur laufenden Verbesserung.",
    outcome: "Ergebnis: Kontinuierliche Performance-Steigerung statt Blindflug.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse",
    text: "Wir prüfen Positionierung, Zielkunden und Angebot, um die richtige Botschaft zu definieren.",
  },
  {
    step: "02",
    title: "Setup",
    text: "Technisches Setup, Sequenzen, Datenquellen und Tracking werden sauber aufgesetzt.",
  },
  {
    step: "03",
    title: "Kampagnenstart",
    text: "Outreach startet kontrolliert mit ersten Wellen und enger Qualitätskontrolle.",
  },
  {
    step: "04",
    title: "Optimierung",
    text: "Wir testen Hooks, Nachrichten und Zielgruppen kontinuierlich auf bessere Ergebnisse.",
  },
];

const faqs = [
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "In der Regel sehen wir innerhalb von 2-4 Wochen erste positive Signale wie Antworten und qualifizierte Gespräche.",
  },
  {
    question: "Für welche Unternehmen ist das geeignet?",
    answer:
      "Besonders gut für B2B-Unternehmen mit erklärungsbedürftigem Angebot und klarem ICP im DACH- oder EU-Raum.",
  },
  {
    question: "Wie persönlich ist die Kommunikation wirklich?",
    answer:
      "Jede Sequenz wird mit variablen Personalisierungsbausteinen aufgebaut, damit Nachrichten relevant statt generisch wirken.",
  },
  {
    question: "Ist das DSGVO-konform umsetzbar?",
    answer:
      "Ja, wir arbeiten mit sauberen Prozessen, transparenten Datenquellen und konformen Outreach-Richtlinien.",
  },
  {
    question: "Müssen wir intern viel Zeit investieren?",
    answer:
      "Nein, nach dem initialen Briefing läuft der Großteil operativ über uns. Ihr gebt nur punktuell Feedback.",
  },
];

const Index = () => {
  return (
    <main className="relative bg-[#02040a] text-white">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4">
        <GradientBackground />
        <div className="relative z-10 text-center space-y-0">
          <img src={crossmaticLogo} alt="CrossMatic" className="mx-auto h-64 w-auto -mb-24 md:h-[22rem] md:-mb-32" />
          <p className="text-lg text-muted-foreground">Automatisierte Lead-Generierung für B2B-Unternehmen</p>
          <div className="pt-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/80"
            >
              Termin vereinbaren
              <span>→</span>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#02040a]/70 to-[#02040a]" />
      </section>

      <section className="w-full bg-[#02040a] px-4 pb-24 pt-44 md:px-8 md:pt-56 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-6">
          <WordFadeIn
            words="Kommunikation, die sich persönlich anfühlt, aber automatisch abläuft."
            className="text-white md:text-5xl"
            triggerOnView
          />
          <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            Wir kombinieren datengetriebene Zielgruppenrecherche mit personalisierten, mehrstufigen E-Mail- und
            LinkedIn-Kampagnen – komplett automatisiert, aber trotzdem individuell.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leistungen</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Was wir konkret für dich umsetzen</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{service.description}</p>
                <p className="mt-4 text-sm text-blue-300">{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Prozess</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">So läuft die Zusammenarbeit ab</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-blue-300">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ergebnisse</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Performance, die messbar ist</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-blue-300">+42%</p>
              <p className="mt-2 text-sm text-muted-foreground">Durchschnittliche Antwortquote nach Optimierung</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-blue-300">3-6x</p>
              <p className="mt-2 text-sm text-muted-foreground">Mehr qualifizierte Termine pro Monat</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl font-bold text-blue-300">-70%</p>
              <p className="mt-2 text-sm text-muted-foreground">Weniger manueller Aufwand im Outreach-Prozess</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-left font-medium">
                  {faq.question}
                  <span className="ml-2 inline-block text-blue-300 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="w-full px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Bereit für planbare B2B-Leads?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Buche ein kurzes Strategiegespräch und wir zeigen dir, wie dein Outreach-Prozess automatisiert, messbar
            und skalierbar wird.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/80"
            >
              Termin vereinbaren
              <span>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
            >
              Kostenlose Analyse anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
