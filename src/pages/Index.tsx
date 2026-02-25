import GradientBackground from "@/components/GradientBackground";
import { Timeline } from "@/components/ui/timeline";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import crossmaticLogo from "@/assets/crossmatic-logo.png";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import { CalendarCheck2, Mail, PhoneCall, Rocket, Settings2, Target } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Neukundengewinnung",
    subtitle: "Automatisierte Akquise-Kampagnen",
    description:
      "Wir bauen personalisierte Akquise Kampagnen, die konstant qualifizierte Gespräche in Ihren Kalender bringen – komplett automatisiert.",
    benefits: [
      "Wöchentliche Erstgespräche",
      "100% Done-for-You Service",
      "Volle CRM-Integration",
    ],
    footer: "Ideal für: B2B-Unternehmen mit klarem ICP, die planbar skalieren wollen.",
    icon: "mail",
  },
  {
    title: "Conversion-Automatisierung",
    subtitle: "Lead-zu-Kunde-Systeme",
    description:
      "Automatische Prozesse, die bestehende Leads durch Follow-ups und proaktiver Ansprache in zahlende Kunden verwandeln.",
    benefits: [
      "Höhere Conversion-Rate",
      "Keine vergessenen Leads",
      "Automatisches Performance-Tracking",
    ],
    footer: "Ideal für: Teams mit vorhandenen Leads, die schneller konvertieren wollen.",
    icon: "calendar",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kostenloses Erstgespräch",
    text: "In diesem Gespräch teilen Sie uns mehr über Ihr Unternehmen mit, Ihre aktuellen Prozesse und wir schlagen Bereiche vor, in denen KI und Automatisierung Ihnen helfen kann.",
    icon: "call",
  },
  {
    step: "02",
    title: "Planung & Strategie-Session",
    text: "Wenn es passt, starten wir nach dem Erstgespräch mit der Planung. Wir vereinbaren einen Strategie-Termin, in dem wir die nächsten Schritte besprechen und den Plan bei Bedarf anpassen.",
    icon: "strategy",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Sobald wir uns auf die Strategie und den Aktionsplan geeinigt haben, beginnen wir mit der Entwicklung Ihrer neuen Automatisierungslösungen.",
    icon: "build",
  },
  {
    step: "04",
    title: "Launch + Optimierung",
    text: "Sobald die Entwicklung abgeschlossen ist, setzten wir das System auf und suchen kontinuierlich nach Verbesserungsmöglichkeiten.",
    icon: "launch",
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
  const [showNavbar, setShowNavbar] = useState(false);
  const processTimelineData = processSteps.map((item) => ({
    title: `${item.step} ${item.title}`,
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/30 bg-blue-500/10 shadow-[0_0_24px_rgba(59,130,246,0.3)]">
          {item.icon === "call" && <PhoneCall className="h-5 w-5 text-blue-200" />}
          {item.icon === "strategy" && <Target className="h-5 w-5 text-blue-200" />}
          {item.icon === "build" && <Settings2 className="h-5 w-5 text-blue-200" />}
          {item.icon === "launch" && <Rocket className="h-5 w-5 text-blue-200" />}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
      </div>
    ),
  }));

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowNavbar(heroBottom <= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative bg-[#02040a] text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto mt-4 w-[min(86%,920px)] rounded-xl border border-white/10 bg-[#02040a]/80 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="inline-flex items-center">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-10 w-auto object-contain" />
            </a>
            <nav className="hidden items-center gap-5 text-sm text-slate-200/90 md:flex">
              <a href="#leistungen" className="transition-colors hover:text-white">
                Leistungen
              </a>
              <a href="#prozess" className="transition-colors hover:text-white">
                Prozess
              </a>
              <a href="#ergebnisse" className="transition-colors hover:text-white">
                Ergebnisse
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </nav>
            <a
              href="/termin"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-xs text-foreground transition-colors hover:bg-secondary/80 md:text-sm"
            >
              Gespräch buchen
            </a>
          </div>
        </div>
      </header>

      <section id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4">
        <GradientBackground />
        <div className="relative z-10 text-center space-y-0">
          <img src={crossmaticLogo} alt="CrossMatic" className="mx-auto h-64 w-auto -mb-24 md:h-[22rem] md:-mb-32" />
          <p className="text-lg text-muted-foreground">Automatisierte Lead-Generierung für B2B-Unternehmen</p>
          <div className="pt-4">
            <a
              href="/termin"
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

      <section id="leistungen" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leistungen</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Mehr Kunden durch Systeme statt Zufall</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground md:text-base">
              Jedes Unternehmen ist einzigartig - unsere Automatisierungssysteme werden speziell auf Ihre Ziele,
              Kunden und täglichen Abläufe zugeschnitten.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-blue-400/30"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                  {service.icon === "mail" ? (
                    <Mail className="h-5 w-5 text-blue-200" />
                  ) : (
                    <CalendarCheck2 className="h-5 w-5 text-blue-200" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-blue-300">{service.subtitle}</p>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">{service.description}</p>
                <div className="mt-5">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-slate-100/90">
                        <span className="mt-[2px] text-blue-300">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 border-t border-white/10 pt-4 text-sm text-muted-foreground">{service.footer}</p>
              </article>
            ))}
          </div>
          <div className="pt-2 text-center">
            <a
              href="/termin"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/80"
            >
              Gespräch buchen
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      <section id="prozess" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Prozess</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">So läuft die Zusammenarbeit ab</h2>
          </div>
          <Timeline data={processTimelineData} />
        </div>
      </section>

      <section id="ergebnisse" className="w-full px-4 py-16 md:px-8 lg:px-16">
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

      <section id="faq" className="w-full px-4 py-16 md:px-8 lg:px-16">
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
              href="/termin"
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
