import GradientBackground from "@/components/GradientBackground";
import { GlassButton } from "@/components/ui/glass-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Timeline } from "@/components/ui/timeline";
import crossmaticLogo from "@/assets/crossmatic-logo.png";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import toolsAirtableLogo from "@/assets/tools-airtable-logo.png";
import toolsMakeLogo from "@/assets/tools-make-logo.png";
import toolsN8nLogo from "@/assets/tools-n8n-logo.png";
import toolsOpenAiLogo from "@/assets/tools-openai-logo.png";
import toolsSlackLogo from "@/assets/tools-slack-logo.png";
import toolsStripeLogo from "@/assets/tools-stripe-logo.png";
import caseAiAssistantImage from "@/assets/case-ai-assistant.png";
import caseCoachMichaelImage from "@/assets/case-coach-michael.png";
import caseGianBessetImage from "@/assets/case-gian-besset.png";
import caseGianReportingImage from "@/assets/case-gian-reporting.png";
import { CalendarCheck2, Clock3, Database, Instagram, Linkedin, Mail, MapPin, MessageSquare, PhoneCall, Rocket, SendHorizontal, Settings2, Target } from "lucide-react";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Neukundengewinnung",
    subtitle: "Automatisierte Akquise-Kampagnen",
    description:
      "Individuelles Akquise System, das planbar qualifizierte Gespräche in Ihren Kalender bringt",
    benefits: [
      "ICP-basierte Lead-Generierung",
      "Hoch personalisierte Nachrichten",
      "Multi-Channel Follow-up Sequenzen",
      "Wöchentliche Erstgespräche",
      "Volle CRM & Kalender-Integration",
      "Performance-Analytics & Reporting",
    ],
    footer: "Ideal für: B2B-Unternehmen mit klarem ICP, die planbar skalieren wollen.",
    icon: "mail",
  },
  {
    title: "Conversion-Automatisierung",
    subtitle: "Lead-zu-Kunde-Systeme",
    description:
      "Automatische Prozesse auf der Website und Social Media um mehr Anfragen zu generieren.",
    benefits: [
      "Proaktive Besucher-Ansprache (24/7)",
      "Echtzeit Lead-Qualifizierung",
      "Intelligente Kontakterfassung",
      "Automatische Follow-up Sequenzen",
      "CRM & Kalender-Integration",
      "Performance-Tracking & Analytics",
    ],
    footer: "Ideal für: Unternehmen mit vorhandenem Traffic, die mehr aus ihren bestehenden Kanälen rausholen wollen.",
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

const caseStudies = [
  {
    type: "outbound",
    hook: "5 Gespräche in 2 Wochen durch personalisierte E-Mail-Akquise",
    label: "Case Study - Gian Besset",
    role: "Grafik & Webdesign, Basel",
    kpis: [
      { value: "Automatisiertes Akquise-System", label: "System", icon: "system" },
      { value: "18 generierte Interessenten in 2 Wochen", label: "Interessenten", icon: "leads" },
      { value: "5 gebuchte Verkaufsgespräche in 2 Wochen", label: "Gespräche", icon: "calls" },
      { value: "Physio- & Tierarztpraxen, Schweiz", label: "Zielgruppe", icon: "audience" },
    ],
    situation:
      "Gian Besset wollte planbar neue Kunden gewinnen - unabhängig von Empfehlungen und ohne manuellen Aufwand.",
    built: [
      "Aufbau eines automatisierten E-Mail-Akquise-Systems fokussiert auf Physiopraxen und Tierarztpraxen in der Schweiz.",
      "Jede Nachricht wurde individuell personalisiert - auf die jeweilige Praxis zugeschnitten.",
    ],
    madeLabel: "Was wir gemacht haben",
    resultLabel: "Resultat nach 2 Wochen",
    result:
      "Zahlreiche positive Rückmeldungen und 5 gebuchte Gespräche mit potenziellen Kunden. Die Kampagne wurde nach zwei Wochen pausiert - nicht wegen mangelnder Performance, sondern weil die eingehenden Anfragen die verfügbare Kapazität überstiegen.",
    outcomeCards: [
      "Zahlreiche positive Rückmeldungen",
      "5 gebuchte Gespräche in 2 Wochen",
      "Kampagne wegen Kapazitätsgrenze pausiert",
    ],
    pipeline: ["Lead-Liste", "Personalisierte E-Mail", "Antwort", "Gebuchtes Gespräch"],
    personalizationSnippets: [
      'Betreff mit Praxisname: "Kurze Idee für {{Praxisname}}"',
      "Opener mit Fachbereich und lokalem Kontext",
      "CTA passend zur jeweiligen Praxis-Situation",
    ],
    quote:
      "Die Zusammenarbeit war sehr einfach, direkt und unkompliziert. Die Resultate haben meine Erwartungen übertroffen.",
    author: "Gian Besset",
    authorRole: "Gründer Gian Besset Brand Design",
    avatar: caseGianBessetImage,
    image: caseGianReportingImage,
    imageAlt: "Reporting-Ausschnitt der E-Mail-Akquise-Kampagne von Gian Besset",
  },
  {
    type: "conversion",
    label: "Case Study - Michael Bachman",
    role: "Personal Trainer & Coaching, Zürich",
    situation:
      "Michael hatte Website-Traffic und eine aktive Instagram-Präsenz, aber keine planbaren Anfragen. Viele Besucher kamen, informierten sich und gingen wieder, ohne Kontakt aufzunehmen.",
    built: [
      "KI-Assistent auf der Website, der Besucher proaktiv anspricht, qualifiziert und Kontaktdaten erfasst.",
      "Instagram-Automatisierung, die neue Follower automatisch kontaktiert und bei definierten Keywords gezielt den Funnel startet.",
      "Zentrales CRM, das Leads aus beiden Kanälen automatisch zusammenführt und bei jedem neuen Kontakt direkt benachrichtigt.",
    ],
    resultLabel: "Resultat",
    result:
      "Statt unstrukturierter Einzelanfragen laufen beide Kanäle nun als System: kontinuierlich, qualifiziert und ohne zusätzlichen manuellen Aufwand im Tagesgeschäft.",
    quote:
      "Es wurde professionell und präzise auf mein Anliegen eingegangen. Das System war schnell aufgesetzt und funktioniert einwandfrei.",
    author: "Michael Bachman",
    authorRole: "Personal Trainer & Gründer",
    image: caseAiAssistantImage,
    imageAlt: "KI-Assistent Workflow für Michael Bachman",
    avatar: caseCoachMichaelImage,
  },
];

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const processTimelineData = processSteps.map((item) => ({
    title: `${item.step} ${item.title}`,
    content: (
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
        <GlowingEffect
          spread={32}
          glow={false}
          disabled
          proximity={72}
          inactiveZone={0.2}
          borderWidth={1}
          variant="white"
        />
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
    const hero = heroRef.current;
    if (!hero) return;

    const navbarObserver = new IntersectionObserver(
      ([entry]) => {
        const nextShowNavbar = !entry.isIntersecting;
        setShowNavbar((prev) => (prev === nextShowNavbar ? prev : nextShowNavbar));
      },
      { threshold: 0 },
    );

    const animationObserver = new IntersectionObserver(
      ([entry]) => {
        // Start/stop animation with a buffer around hero to avoid jank at viewport edge.
        const nextActive = entry.isIntersecting;
        setHeroInView((prev) => (prev === nextActive ? prev : nextActive));
      },
      { threshold: 0, rootMargin: "320px 0px 320px 0px" },
    );

    navbarObserver.observe(hero);
    animationObserver.observe(hero);

    return () => {
      navbarObserver.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#02040a] text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto mt-4 w-[min(86%,920px)] rounded-xl border border-white/10 bg-[#02040a]/80 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="inline-flex items-center">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-[3.125rem] w-auto object-contain" />
            </a>
            <nav className="hidden items-center gap-5 text-sm text-slate-200/90 md:flex">
              <a href="#leistungen" className="transition-colors hover:text-white">
                Leistungen
              </a>
              <a href="#video-analyse" className="transition-colors hover:text-white">
                Video-Analyse
              </a>
              <a href="#prozess" className="transition-colors hover:text-white">
                Prozess
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </nav>
            <GlassButton
              size="sm"
              onClick={() => navigate("/termin")}
              contentClassName="inline-flex items-center gap-2"
            >
              Gespräch buchen
            </GlassButton>
          </div>
        </div>
      </header>

      <section ref={heroRef} id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4">
        <GradientBackground active={heroInView} />
        <div className="relative z-10 text-center space-y-0">
          <div
            role="img"
            aria-label="CrossMatic"
            className="mx-auto h-80 w-[min(94vw,64rem)] -mb-24 md:h-[27.5rem] md:-mb-32"
            style={{
              background: "linear-gradient(90deg, #ffffff 0%, #bfdbfe 54%, #60a5fa 100%)",
              WebkitMaskImage: `url(${crossmaticLogo})`,
              maskImage: `url(${crossmaticLogo})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <p className="text-lg text-muted-foreground">Automatisierte Lead-Generierung für Schweizer Unternehmen</p>
          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-center">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              Termin vereinbaren
              <span>→</span>
            </GlassButton>
            <a href="#video-analyse">
              <GlassButton contentClassName="inline-flex items-center gap-2">
                Kostenlose Video-Analyse
              </GlassButton>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#02040a]" />
      </section>

      <section className="relative w-full bg-[#02040a] px-4 pb-24 pt-44 md:px-8 md:pt-56 lg:px-16">
        <div className="relative mx-auto max-w-4xl space-y-6">
          <h1 className="font-display text-center text-4xl font-bold tracking-[-0.02em] md:text-5xl md:leading-[5rem] bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Kommunikation, die sich persönlich anfühlt aber automatisch läuft
          </h1>
          <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            Von personalisierter Neukundengewinnung bis zur Automatisierung bestehender Kanäle – Ihr Partner für
            planbare Kunden.
          </p>
        </div>
      </section>

      <section className="relative z-10 w-full bg-[#02040a] px-4 pb-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Unterstützt durch</p>
          <div className="relative">
            <InfiniteSlider gap={56} duration={20} className="w-full py-2">
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsN8nLogo} alt="n8n" className="h-[9.375rem] w-auto object-contain" />
              </div>
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsAirtableLogo} alt="Airtable" className="h-[7.5rem] w-auto object-contain" />
              </div>
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsOpenAiLogo} alt="OpenAI" className="h-[9.375rem] w-auto object-contain" />
              </div>
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsMakeLogo} alt="Make" className="h-[7.5rem] w-auto object-contain" />
              </div>
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsSlackLogo} alt="Slack" className="h-[2.35rem] w-auto object-contain" />
              </div>
              <div className="flex h-[10rem] w-[11rem] shrink-0 items-center justify-center">
                <img src={toolsStripeLogo} alt="Stripe" className="h-[7.5rem] w-auto object-contain" />
              </div>
            </InfiniteSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#02040a] to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#02040a] to-transparent md:w-24" />
          </div>
        </div>
      </section>

      <section id="leistungen" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leistungen</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">Mehr Kunden durch Systeme statt Zufall</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground md:text-base">
              Jedes Unternehmen ist einzigartig - unsere Automatisierungssysteme werden speziell auf Ihre Ziele,
              Kunden und täglichen Abläufe zugeschnitten.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-blue-400/30"
              >
                <GlowingEffect
                  spread={34}
                  glow={false}
                  disabled
                  proximity={80}
                  inactiveZone={0.2}
                  borderWidth={1}
                  variant="white"
                />
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
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              Gespräch buchen
              <span>→</span>
            </GlassButton>
          </div>

        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Social Proof</p>
          <div className="space-y-14">
            {caseStudies.map((caseStudy, index) => (
              <article key={caseStudy.label} className={`space-y-8 ${index > 0 ? "pt-10 md:pt-14" : ""}`}>
              <div className="space-y-3 text-center">
                <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
                  {caseStudy.label}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">{caseStudy.role}</p>
              </div>

              {caseStudy.kpis && (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="group flex h-full flex-col rounded-xl border border-blue-300/20 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-blue-300/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]"
                    >
                      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-300/30 bg-blue-500/10">
                        {kpi.icon === "system" && <Settings2 className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "leads" && <SendHorizontal className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "calls" && <CalendarCheck2 className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "audience" && <Target className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "time" && <Clock3 className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "meetings" && <CalendarCheck2 className="h-4 w-4 text-blue-200" />}
                        {kpi.icon === "market" && <Target className="h-4 w-4 text-blue-200" />}
                      </div>
                      <p className="text-sm font-semibold leading-relaxed text-slate-100 md:text-base">{kpi.value}</p>
                      <p className="mt-auto pt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <GlowingEffect
                  spread={34}
                  glow={false}
                  disabled
                  proximity={84}
                  inactiveZone={0.2}
                  borderWidth={1}
                  variant="white"
                />

                <div className={`grid gap-6 ${caseStudy.type === "outbound" ? "md:grid-cols-[1.2fr_0.8fr]" : "md:grid-cols-[1.1fr_0.9fr]"}`}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">Ausgangssituation</p>
                      <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.situation}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">
                        {caseStudy.madeLabel ?? "Was wir gebaut haben"}
                      </p>
                      <ul className="space-y-3">
                        {caseStudy.built.map((item, index) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-100/90 md:text-base">
                            {caseStudy.type === "outbound" && index === 0 && <SendHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                            {caseStudy.type === "outbound" && index === 1 && <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                            {caseStudy.type === "conversion" && index === 0 && <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                            {caseStudy.type === "conversion" && index === 1 && <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                            {caseStudy.type === "conversion" && index >= 2 && <Database className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 border-t border-white/10 pt-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">{caseStudy.resultLabel}</p>
                      <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {caseStudy.type === "outbound" && caseStudy.image && (
                      <div className="overflow-hidden rounded-2xl border border-blue-300/20 bg-black/30">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.imageAlt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {caseStudy.image && caseStudy.type !== "outbound" && (
                      <div className="overflow-hidden rounded-2xl border border-blue-300/20 bg-black/30">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.imageAlt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="rounded-2xl border border-blue-300/20 bg-blue-500/5 p-5">
                      <div className="flex items-start gap-4">
                        {caseStudy.avatar && (
                          <img
                            src={caseStudy.avatar}
                            alt={caseStudy.author}
                            className="h-14 w-14 shrink-0 rounded-xl border border-white/15 object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="min-w-0 flex-1 space-y-3">
                          <p className="text-sm italic leading-relaxed text-slate-100/95 md:text-base">{`"${caseStudy.quote}"`}</p>
                          <div>
                            <p className="text-sm font-medium text-blue-200">{caseStudy.author}</p>
                            <p className="text-xs text-muted-foreground">{caseStudy.authorRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="video-analyse" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Video-Analyse</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
              Kostenlose Video-Analyse Ihres Business
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              Beantworten Sie ein paar kurze Fragen – wir analysieren Ihr Unternehmen und zeigen Ihnen in einem
              persönlichen Video, wo Sie Kunden verlieren und Potential verschenken.
            </p>
          </div>
          <LeadMagnetForm />
        </div>
      </section>

      <section id="prozess" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Prozess</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">So läuft die Zusammenarbeit ab</h2>
          </div>
          <Timeline data={processTimelineData} />
        </div>
      </section>

      <section id="faq" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group relative rounded-xl border border-white/10 bg-white/5 p-5">
                <GlowingEffect
                  spread={30}
                  glow={false}
                  disabled
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

      <section id="kontakt" className="w-full px-4 pb-20 pt-14 md:px-8 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-4xl p-8 text-center md:p-12">
          <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">Bereit für planbare Neukunden?</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              Termin vereinbaren
              <span>→</span>
            </GlassButton>
            <a href="#video-analyse">
              <GlassButton contentClassName="inline-flex items-center gap-2">
                Kostenlose Video-Analyse
              </GlassButton>
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-16 w-full border-t border-white/10 px-4 py-14 md:mt-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-5">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-[3.75rem] w-auto object-contain" />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Automatisierte Lead-Generierung für B2B-Unternehmen.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
              <div className="flex flex-col gap-3.5 text-sm text-slate-200/90">
                <a href="#leistungen" className="transition-colors hover:text-white">Leistungen</a>
                <a href="#video-analyse" className="transition-colors hover:text-white">Video-Analyse</a>
                <a href="#prozess" className="transition-colors hover:text-white">Prozess</a>
                <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
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
              <a href="/impressum" className="transition-colors hover:text-white">Impressum</a>
              <a href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
