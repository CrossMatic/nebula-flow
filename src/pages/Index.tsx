import GradientBackground from "@/components/GradientBackground";
import { GlassButton } from "@/components/ui/glass-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import farnerLogo from "@/assets/client-logos/farner.svg";
import arliconLogo from "@/assets/client-logos/arlicon.svg";
import bueroHaeberliLogo from "@/assets/client-logos/buero-haeberli.svg";
import gianBessetLogo from "@/assets/client-logos/gian-besset-brand-design.png";
import saschaVoelkiLogo from "@/assets/client-logos/sascha-voelki.png";
import caseGianBessetImage from "@/assets/case-gian-besset.png";
import caseGianReportingImage from "@/assets/case-gian-reporting.png";
import {
  CalendarCheck2,
  Clock3,
  Database,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Maximize,
  MessageSquare,
  Pause,
  PhoneCall,
  Play,
  Rocket,
  ScanSearch,
  SendHorizontal,
  Settings2,
  Target,
  Volume2,
  VolumeX,
} from "lucide-react";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const services = [
  {
    title: "AI Lead Scout",
    subtitle: "Ihr Markt-Radar",
    description:
      "Jede Woche 3 bis 5 Dossiers zu Unternehmen, bei denen gerade jetzt ein Anlass besteht: ein Führungswechsel, eine Expansion, ein neues Projekt, eine Finanzierungsrunde. Kein Kontaktdatensatz, sondern eine ausgearbeitete Ausgangslage. Sie wissen vor dem ersten Kontakt, was passiert ist, wer entscheidet und warum Sie gerade jetzt relevant sind.",
    benefits: [
      "Konkreter Anlass mit Datum und offengelegten Quellen",
      "Entscheider namentlich, mit direkten Kontaktdaten",
      "Ausgangslage und Hintergrund des Unternehmens",
      "Begründung, warum Ihr Angebot zu diesem Fall passt",
      "Fertiger Aufhänger für die Erstansprache",
      "Prüfhinweise: wir kennzeichnen, was nicht gesichert ist",
    ],
    footer: "Ideal für: Unternehmen mit eigenem Vertrieb, die wissen wollen, wo sich der Aufwand lohnt.",
    icon: "scout",
    dashboardNote: "Inklusive Zugang zu Ihrem persönlichen Lead-Intelligence-Dashboard.",
    cardCta: "Lead-Potenzial prüfen →",
  },
  {
    title: "Gespräche auf Bestellung",
    subtitle: "Persönliche Ansprache in einer Menge, die von Hand nicht geht",
    description:
      "Normalerweise muss man sich entscheiden: entweder zwanzig sorgfältig recherchierte Nachrichten pro Woche, oder fünfhundert generische. Wir bauen den Weg dazwischen. Jedes Unternehmen wird einzeln recherchiert, jede Nachricht bezieht sich auf dessen konkrete Situation, und das über E-Mail und LinkedIn hinweg in einem Volumen, das planbar Gespräche bringt.",
    benefits: [
      "Zielliste und Recherche pro Unternehmen, nicht pro Segment",
      "E-Mail und LinkedIn als kombinierte Kanäle",
      "Sprachnachrichten auf LinkedIn, individuell zugeschnitten und automatisiert versendet",
      "Follow-ups, die auf die Reaktion reagieren",
      "Terminbuchung direkt in Ihren Kalender",
      "Wöchentliches Reporting mit echten Zahlen",
    ],
    footer: "Ideal für: Unternehmen, die planbar neue Gespräche brauchen, ohne selbst zu akquirieren.",
    icon: "mail",
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
    type: "outbound",
    label: "Case Study - Arlicon",
    role: "3D-Visualisierung, Luxusuhren & Juweliere",
    contentEmpty: true,
    video: "/case-arlicon.mp4",
    kpis: [
      { value: "E-Mail-Akquise-System", label: "System", icon: "system" },
      { value: "400+ Entscheider kontaktiert", label: "Kontaktiert", icon: "leads" },
      { value: "15 positive Rückmeldungen", label: "Interessenten", icon: "calls" },
      { value: "Luxus Uhrengeschäfte & Juweliere, Schweiz", label: "Zielgruppe", icon: "audience" },
    ],
    madeLabel: "Was wir gemacht haben",
    resultLabel: "Resultat",
    built: ["", ""],
    situation:
      "Ralf suchte nach einer Lösung, um Marketing und Vertrieb zu automatisieren – sodass er sich ausschliesslich auf Gespräche und Abschlüsse konzentrieren kann.",
    builtText:
      "Aufbau eines automatisierten E-Mail-Akquise-Systems für den Schweizer Luxusmarkt. 400 Uhrengeschäfte und Juweliere wurden individuell und personalisiert angesprochen.",
    result:
      "Direkter Zugang zu einem der exklusivsten Märkte der Schweiz – 15 positive Rückmeldungen und 11 engere Konversationen mit Entscheidern.",
  },
];

const formatVideoTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes}:${remaining.toString().padStart(2, "0")}`;
};

const CaseStudyVideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen?.();
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const time = (Number(event.target.value) / 100) * duration;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="surface-glow-hover group relative overflow-hidden rounded-2xl border border-blue-300/20 bg-black">
      <video
        ref={videoRef}
        src={src}
        className="block w-full cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 py-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="shrink-0 text-white/90 transition-colors hover:text-white"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <span className="shrink-0 text-xs tabular-nums text-white/80">
          {formatVideoTime(currentTime)} / {formatVideoTime(duration)}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          aria-label="Video-Fortschritt"
          className="h-1 flex-1 cursor-pointer accent-blue-400"
        />
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Ton an" : "Stumm schalten"}
          className="shrink-0 text-white/90 transition-colors hover:text-white"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Vollbild"
          className="shrink-0 text-white/90 transition-colors hover:text-white"
        >
          <Maximize className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const Index = () => {
  const { language } = useLanguage();
  const isDe = language === "de";
  const [showNavbar, setShowNavbar] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const t = isDe
    ? {
        navServices: "Leistungen",
        navVideo: "Video-Analyse",
        navProcess: "Prozess",
        navFaq: "FAQ",
        bookCall: "Gespräch buchen",
        heroKicker: "Für Agenturen, Beratungen und Kreativdienstleister in der Schweiz",
        heroHeadline: "Wir finden die Kunden, die gerade jetzt kaufen wollen",
        heroSub: "Über 50 vermittelte Erstgespräche für Schweizer Dienstleister.",
        heroCta: "Termin vereinbaren",
        heroMainCta: "Kostenloses Erstgespräch buchen",
        heroServices: "Unsere Leistungen ↓",
        heroFree: "Kostenlose Video-Analyse",
        trustedByTitle: "Vertraut von",
        problemTag: "Das Problem",
        problemTitle: "Ihre besten Kunden entscheiden gerade. Ohne Sie.",
        problemIntro:
          "In Ihrem Markt entstehen ständig konkrete Anlässe: ein Führungswechsel, eine Expansion, ein neues Projekt, eine Finanzierungsrunde. In genau diesen Momenten wird über Budgets und Partner entschieden. Die meisten Unternehmen erfahren davon erst, wenn die Entscheidung längst gefallen ist.",
        problemPoints: [
          {
            title: "Sie erfahren es zu spät",
            body: "Wenn eine Ausschreibung öffentlich ist oder jemand aktiv sucht, sind Sie einer von vielen. Der interessante Moment liegt Wochen davor und bleibt unsichtbar, wenn niemand danach sucht.",
          },
          {
            title: "Ohne Signale trifft man ins Leere",
            body: "Wer nicht weiss, bei wem gerade etwas ansteht, spricht alle gleich an. Die Nachricht bleibt allgemein, und wer wirklich Bedarf hat, merkt nicht, dass er gemeint ist.",
          },
          {
            title: "Recherche kostet die falsche Zeit",
            body: "Wer seinen Markt wirklich beobachten will, verbringt Stunden mit Suchen und Lesen. Zeit, die im Gespräch mit Kunden mehr wert wäre.",
          },
        ],
        problemClosing:
          "Wir sorgen dafür, dass Sie im richtigen Moment sichtbar sind: mit Recherche, die die Anlässe findet, und Ansprache, die dazu passt.",
        servicesTag: "Leistungen",
        servicesTitle: "Zwei Systeme, ein Ziel:\ndas richtige Gespräch zum richtigen Zeitpunkt",
        servicesSub:
          "Das eine findet die Unternehmen, bei denen gerade jetzt ein Anlass besteht. Das andere bringt Sie ins Gespräch. Beide werden auf Ihre Zielgruppe und Ihr Angebot zugeschnitten.",
        socialProof: "Social Proof",
        videoTag: "Video-Analyse",
        videoTitle: "Kostenlose Video-Analyse Ihres Business",
        videoSub:
          "Beantworten Sie ein paar kurze Fragen – wir analysieren Ihr Unternehmen und zeigen Ihnen in einem persönlichen Video, wo Sie Kunden verlieren und Potential verschenken.",
        caseSituation: "Ausgangssituation",
        processTag: "Prozess",
        processTitle: "So läuft die Zusammenarbeit ab",
        faqTag: "FAQ",
        faqTitle: "Häufige Fragen",
        contactTitle: "Bereit für planbare Neukunden?",
        footerTagline: "Automatisierte Lead-Generierung für B2B-Unternehmen.",
        footerNav: "Navigation",
        footerContact: "Kontakt",
        footerBook: "Termin buchen",
        imprint: "Impressum",
        privacy: "Datenschutz",
        rights: "© 2025 CrossMatic. Alle Rechte vorbehalten.",
        city: "Basel, Schweiz",
      }
    : {
        navServices: "Services",
        navVideo: "Video Analysis",
        navProcess: "Process",
        navFaq: "FAQ",
        bookCall: "Book a Call",
        heroKicker: "For agencies, consultancies, and creative service providers in Switzerland",
        heroHeadline: "We find the customers who are ready to buy right now",
        heroSub: "Over 50 booked first calls for Swiss service providers.",
        heroCta: "Schedule a Call",
        heroMainCta: "Book a Free Intro Call",
        heroServices: "Our Services ↓",
        heroFree: "Free Video Analysis",
        trustedByTitle: "Trusted by",
        problemTag: "The Problem",
        problemTitle: "Your best customers are deciding right now. Without you.",
        problemIntro:
          "Concrete triggers are constantly emerging in your market: a change in leadership, an expansion, a new project, a funding round. These are exactly the moments when budgets and partners get decided. Most companies only find out once the decision has already been made.",
        problemPoints: [
          {
            title: "You find out too late",
            body: "By the time a tender is public or someone is actively searching, you're one of many. The interesting moment is weeks earlier and stays invisible if no one is looking for it.",
          },
          {
            title: "Without signals, outreach misses the mark",
            body: "If you don't know who has something coming up, you address everyone the same way. The message stays generic, and the ones who actually have a need don't notice it's meant for them.",
          },
          {
            title: "Research eats the wrong kind of time",
            body: "Anyone who truly wants to watch their market spends hours searching and reading. Time that would be worth more in conversation with customers.",
          },
        ],
        problemClosing:
          "We make sure you're visible at the right moment: with research that finds the triggers, and outreach that fits.",
        servicesTag: "Services",
        servicesTitle: "Two systems, one goal: the right conversation at the right time",
        servicesSub:
          "One finds the companies where a trigger exists right now. The other gets you into the conversation. Both are tailored to your target audience and your offering.",
        socialProof: "Social Proof",
        videoTag: "Video Analysis",
        videoTitle: "Free Video Analysis for Your Business",
        videoSub:
          "Answer a few short questions – we analyze your business and show you in a personal video where you lose customers and leave potential untapped.",
        caseSituation: "Initial Situation",
        processTag: "Process",
        processTitle: "How we work together",
        faqTag: "FAQ",
        faqTitle: "Frequently Asked Questions",
        contactTitle: "Ready for predictable new customers?",
        footerTagline: "Automated lead generation for B2B companies.",
        footerNav: "Navigation",
        footerContact: "Contact",
        footerBook: "Book a Call",
        imprint: "Legal Notice",
        privacy: "Privacy Policy",
        rights: "© 2025 CrossMatic. All rights reserved.",
        city: "Basel, Switzerland",
      };

  const localizedServices = isDe
    ? services
    : [
        {
          icon: "scout",
          title: "AI Lead Scout",
          subtitle: "Your market radar",
          description:
            "Every week, 3 to 5 dossiers on companies where a trigger exists right now: a change in leadership, an expansion, a new project, a funding round. Not a contact record, but a fully worked-out starting point. Before the first contact, you know what happened, who decides, and why you're relevant right now.",
          benefits: [
            "Concrete trigger with date and disclosed sources",
            "Decision-makers by name, with direct contact details",
            "Company background and context",
            "Rationale for why your offer fits this case",
            "Ready-made hook for the first outreach",
            "Verification notes: we flag what isn't confirmed",
          ],
          footer: "Ideal for: companies with their own sales team who want to know where the effort pays off.",
        },
        {
          icon: "mail",
          title: "Conversations on Demand",
          subtitle: "Personal outreach at a volume that's not possible by hand",
          description:
            "Normally you have to choose: either twenty carefully researched messages a week, or five hundred generic ones. We build the path in between. Every company is researched individually, every message references its specific situation, across email and LinkedIn, at a volume that predictably brings conversations.",
          benefits: [
            "Target list and research per company, not per segment",
            "Email and LinkedIn as combined channels",
            "Voice messages on LinkedIn, individually tailored and sent automatically",
            "Follow-ups that respond to the reaction",
            "Meeting booking directly into your calendar",
            "Weekly reporting with real numbers",
          ],
          footer: "Ideal for: companies that need predictable new conversations without doing the outreach themselves.",
        },
      ];

  const localizedProcessSteps = isDe
    ? processSteps
    : [
        { ...processSteps[0], title: "Free Intro Call", text: "In this call, you tell us more about your business and current processes, and we suggest areas where AI and automation can help." },
        { ...processSteps[1], title: "Planning & Strategy Session", text: "If it is a fit, we start planning after the intro call. We schedule a strategy session to align on next steps and fine-tune the plan where needed." },
        { ...processSteps[2], title: "Implementation", text: "Once we align on strategy and action plan, we start building your new automation solutions." },
        { ...processSteps[3], title: "Launch + Optimization", text: "When development is complete, we deploy the system and continuously optimize it." },
      ];

  const localizedFaqs = isDe
    ? faqs
    : [
        {
          question: "How quickly can we expect first results?",
          answer:
            "Acquisition system: Requires a setup period of at least 2 weeks. After launch, first inquiries typically come in within a few days.\n\nConversion system: First results usually appear 1-2 weeks after implementation, depending on your existing traffic and lead quality.",
        },
        {
          question: "How much does the system cost?",
          answer:
            "We do not work with fixed pricing because each system is tailored to your needs. Our clients typically see an ROI of 200-400% within the first 1-2 months.",
        },
        {
          question: "Is it fully done-for-you or collaborative?",
          answer:
            "Acquisition system: Collaborative - we deliver qualified meetings, you run the sales calls.\n\nConversion system: Largely automated (95%+), depending on your channels.",
        },
        {
          question: "Is it GDPR-compliant?",
          answer:
            "Yes. We use DACH-focused solutions, European hosting, clear opt-in/opt-out mechanics, and transparent sender details.",
        },
        {
          question: "Can I manage the system myself?",
          answer:
            "Absolutely. We build systems that integrate smoothly into your accounts and remain easy to manage, while still supporting you whenever needed.",
        },
      ];

  const localizedCaseStudies = isDe
    ? caseStudies
    : [
        {
          ...caseStudies[0],
          label: "Case Study - Gian Besset",
          role: "Graphic & Web Design, Basel",
          hook: "5 sales calls in 2 weeks through personalized email outreach",
          kpis: [
            { value: "Automated acquisition system", label: "System", icon: "system" },
            { value: "18 generated prospects in 2 weeks", label: "Prospects", icon: "leads" },
            { value: "5 booked sales calls in 2 weeks", label: "Calls", icon: "calls" },
            { value: "Physio & veterinary clinics, Switzerland", label: "Target Group", icon: "audience" },
          ],
          situation:
            "Gian Besset wanted predictable new clients - independent of referrals and without manual effort.",
          built: [
            "Built an automated email outreach system focused on physiotherapy and veterinary clinics in Switzerland.",
            "Each message was individually personalized for the specific clinic.",
          ],
          madeLabel: "What we did",
          resultLabel: "Result after 2 weeks",
          result:
            "Numerous positive responses and 5 booked calls with potential clients. The campaign was paused after two weeks - not due to weak performance, but because incoming demand exceeded available capacity.",
          quote:
            "The collaboration was very easy, direct, and uncomplicated. The results exceeded my expectations.",
          authorRole: "Founder, Gian Besset Brand Design",
        },
        {
          ...caseStudies[1],
          role: "3D Visualization, Luxury Watches & Jewelers",
          madeLabel: "What we built",
          resultLabel: "Result",
          kpis: [
            { value: "Email outreach system", label: "System", icon: "system" },
            { value: "400+ decision-makers contacted", label: "Contacted", icon: "leads" },
            { value: "15 positive responses", label: "Prospects", icon: "calls" },
            { value: "Luxury watch stores & jewelers, Switzerland", label: "Target Group", icon: "audience" },
          ],
          situation:
            "Ralf was looking for a way to automate marketing and sales - so he could focus exclusively on conversations and closing deals.",
          builtText:
            "Built an automated email outreach system for the Swiss luxury market. 400 watch stores and jewelers were approached individually and personally.",
          result:
            "Direct access to one of Switzerland's most exclusive markets - 15 positive responses and 11 in-depth conversations with decision-makers.",
        },
      ];

  useSeo({
    title: isDe
      ? "CrossMatic | Automatisierte Lead-Generierung für Schweizer Unternehmen"
      : "CrossMatic | Automated Lead Generation for Swiss Businesses",
    description: isDe
      ? "CrossMatic hilft Schweizer Unternehmen bei planbarer Neukundengewinnung durch personalisierte Akquise und Conversion-Automatisierung."
      : "CrossMatic helps Swiss businesses generate predictable new customers through personalized outreach and conversion automation.",
    ogTitle: isDe ? "CrossMatic | Automatisierte Lead-Generierung" : "CrossMatic | Automated Lead Generation",
    ogDescription: isDe
      ? "Von personalisierter Neukundengewinnung bis zur Automatisierung bestehender Kanäle."
      : "From personalized lead generation to automation of existing channels.",
    twitterTitle: isDe ? "CrossMatic | Automatisierte Lead-Generierung" : "CrossMatic | Automated Lead Generation",
    twitterDescription: isDe
      ? "Planbare Neukundengewinnung und Conversion-Automatisierung für Schweizer Unternehmen."
      : "Predictable lead generation and conversion automation for Swiss businesses.",
  });
  const processTimelineData = localizedProcessSteps.map((item) => ({
    title: `${item.step} ${item.title}`,
    content: (
      <div className="surface-glow-hover relative rounded-2xl border border-white/10 bg-white/5 p-5">
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
        <div className="surface-glow-hover mx-auto mt-4 w-[min(86%,920px)] rounded-xl border border-white/10 bg-[#02040a]/80 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-[10rem_1fr_10rem]">
            <a href="#hero" className="inline-flex items-center">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-[3.125rem] w-auto object-contain" />
            </a>
            <nav className="hidden items-center justify-center gap-5 text-sm text-slate-200/90 md:flex">
              <a href="#leistungen" className="transition-colors hover:text-white">
                {t.navServices}
              </a>
              <a href="#video-analyse" className="transition-colors hover:text-white">
                {t.navVideo}
              </a>
              <a href="#prozess" className="transition-colors hover:text-white">
                {t.navProcess}
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                {t.navFaq}
              </a>
            </nav>
            <div className="flex items-center justify-end gap-2">
              <div className="block">
                <LanguageSwitch variant="inline" compact />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section ref={heroRef} id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4">
        <GradientBackground active={heroInView} />
        <div className="relative z-10 mx-auto max-w-4xl space-y-5 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{t.heroKicker}</p>
          <h1 className="font-display text-4xl font-bold tracking-[-0.02em] md:text-6xl md:leading-[1.1] bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            {t.heroHeadline}
          </h1>
          <p className="text-lg text-muted-foreground">{t.heroSub}</p>
          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-center">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              {t.heroMainCta}
              <span>→</span>
            </GlassButton>
            <button
              type="button"
              onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.heroServices}
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#02040a]" />
      </section>

      <section className="w-full bg-[#02040a] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.trustedByTitle}</p>
          <div className="flex flex-nowrap items-start justify-center gap-x-4 overflow-x-auto sm:gap-x-6 md:gap-x-10">
            {[
              { name: "Farner Consulting AG", logo: farnerLogo },
              { name: "Arlicon AG", logo: arliconLogo },
              { name: "Büro Häberli", logo: bueroHaeberliLogo },
              { name: "Gian Besset Brand Design", logo: gianBessetLogo },
              { name: "Sascha Völki – Büro für visuelle Konzepte", logo: saschaVoelkiLogo },
            ].map((client, index) => (
              <div key={index} className="flex w-24 shrink-0 flex-col items-center gap-2 sm:w-32 md:w-36">
                <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center sm:h-16 sm:w-16 md:h-[4.8rem] md:w-[4.8rem]">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name ?? "Client logo"} className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-xs text-muted-foreground/50">Logo {index + 1}</span>
                  )}
                </div>
                <span className="flex min-h-[2.4em] items-start justify-center text-center text-[11px] leading-tight text-muted-foreground/70 sm:text-xs">{client.name ?? "Firmenname"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="w-full px-4 pb-20 pt-28 md:px-8 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.problemTag}</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
              {t.problemTitle}
            </h2>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground md:text-base">{t.problemIntro}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {t.problemPoints.map((point, index) => (
              <div key={point.title} className="space-y-3 text-center md:text-left">
                <span className="text-sm font-semibold text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-white md:text-lg">
            {t.problemClosing}
          </p>
        </div>
      </section>

      <section id="leistungen" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.servicesTag}</p>
            <h2 className="whitespace-pre-line bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">{t.servicesTitle}</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground md:text-base">
              {t.servicesSub}
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {localizedServices.map((service) => (
              <article
                key={service.title}
                className="surface-glow-hover relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
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
                  ) : service.icon === "scout" ? (
                    <ScanSearch className="h-5 w-5 text-blue-200" />
                  ) : (
                    <CalendarCheck2 className="h-5 w-5 text-blue-200" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-blue-300">{service.subtitle}</p>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">{service.description}</p>
                <div className="mt-5 flex-1">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-slate-100/90">
                        <span className="mt-[2px] text-blue-300">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 border-t border-white/10 pt-4 text-sm text-muted-foreground">{service.footer}</p>
              </article>
            ))}
          </div>
          <div className="pt-2 text-center">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              {t.bookCall}
              <span>→</span>
            </GlassButton>
          </div>

        </div>
      </section>

      <section className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.socialProof}</p>
          <div className="space-y-14">
            {localizedCaseStudies.map((caseStudy, index) => (
              <article key={`case-study-${index}`} className={`space-y-8 ${index > 0 ? "pt-10 md:pt-14" : ""}`}>
              <div className="space-y-3 text-center">
                <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
                  {caseStudy.label}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">{caseStudy.role}</p>
              </div>

              <ContainerScroll disableTilt>
              {caseStudy.kpis && caseStudy.kpis.some((kpi) => kpi.value) && (
                <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="group flex h-full flex-col rounded-xl border border-blue-300/20 bg-white/[0.03] p-4 transition-all hover:border-blue-300/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.2)]"
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
                      {kpi.value && (
                        <p className="text-sm font-semibold leading-relaxed text-slate-100 md:text-base">{kpi.value}</p>
                      )}
                      <p className="mt-auto pt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="surface-glow-hover relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <GlowingEffect
                  spread={34}
                  glow={false}
                  disabled
                  proximity={84}
                  inactiveZone={0.2}
                  borderWidth={1}
                  variant="white"
                />

                {caseStudy.contentEmpty && caseStudy.video ? (
                  <div className="space-y-6">
                    <CaseStudyVideoPlayer src={caseStudy.video} />
                    {(caseStudy.situation || caseStudy.builtText || caseStudy.result) && (
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">{t.caseSituation}</p>
                          <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.situation}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">
                            {caseStudy.madeLabel ?? "Was wir gebaut haben"}
                          </p>
                          <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.builtText}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">{caseStudy.resultLabel}</p>
                          <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.result}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`grid gap-6 ${caseStudy.type === "outbound" ? "md:grid-cols-[1.2fr_0.8fr]" : "md:grid-cols-[1.1fr_0.9fr]"}`}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        {!caseStudy.contentEmpty && (
                          <>
                            <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">{t.caseSituation}</p>
                            <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.situation}</p>
                          </>
                        )}
                        {caseStudy.contentEmpty && <div className="min-h-[4.5rem]" />}
                      </div>

                      <div className="space-y-3">
                        {!caseStudy.contentEmpty && (
                          <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">
                            {caseStudy.madeLabel ?? "Was wir gebaut haben"}
                          </p>
                        )}
                        {!caseStudy.contentEmpty ? (
                          <ul className="space-y-3">
                            {caseStudy.built?.map((item, builtIndex) => (
                              <li key={`built-${builtIndex}`} className="flex items-start gap-3 text-sm leading-relaxed text-slate-100/90 md:text-base">
                                {caseStudy.type === "outbound" && builtIndex === 0 && <SendHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                                {caseStudy.type === "outbound" && builtIndex === 1 && <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                                {caseStudy.type === "conversion" && builtIndex === 0 && <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                                {caseStudy.type === "conversion" && builtIndex === 1 && <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                                {caseStudy.type === "conversion" && builtIndex >= 2 && <Database className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />}
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="min-h-[5rem]" />
                        )}
                      </div>

                      <div className={`space-y-2 ${!caseStudy.contentEmpty ? "border-t border-white/10 pt-4" : ""}`}>
                        {!caseStudy.contentEmpty && (
                          <>
                            <p className="text-xs uppercase tracking-[0.16em] text-blue-200/90">{caseStudy.resultLabel}</p>
                            <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">{caseStudy.result}</p>
                          </>
                        )}
                        {caseStudy.contentEmpty && <div className="min-h-[4.5rem]" />}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {caseStudy.type === "outbound" && !caseStudy.contentEmpty && caseStudy.image && (
                        <div className="surface-glow-hover overflow-hidden rounded-2xl border border-blue-300/20 bg-black/30">
                          <img
                            src={caseStudy.image}
                            alt={caseStudy.imageAlt}
                            className="block w-full"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {caseStudy.video && <CaseStudyVideoPlayer src={caseStudy.video} />}

                      {!caseStudy.contentEmpty && caseStudy.image && caseStudy.type !== "outbound" && (
                        <div className="surface-glow-hover overflow-hidden rounded-2xl border border-blue-300/20 bg-black/30">
                          <img
                            src={caseStudy.image}
                            alt={caseStudy.imageAlt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {caseStudy.contentEmpty ? (
                        <div className="min-h-[5rem]" />
                      ) : (
                        <div className="surface-glow-hover rounded-2xl border border-blue-300/20 bg-blue-500/5 p-5">
                          <div className="flex items-start gap-4">
                            {caseStudy.avatar ? (
                              <img
                                src={caseStudy.avatar}
                                alt={caseStudy.author}
                                className="h-14 w-14 shrink-0 rounded-xl border border-white/15 object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="h-14 w-14 shrink-0 rounded-xl border border-white/15 bg-white/5" />
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
                      )}
                    </div>
                  </div>
                )}
              </div>
              </ContainerScroll>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="video-analyse" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.videoTag}</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
              {t.videoTitle}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              {t.videoSub}
            </p>
          </div>
          <LeadMagnetForm />
        </div>
      </section>

      <section id="prozess" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.processTag}</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">{t.processTitle}</h2>
          </div>
          <Timeline data={processTimelineData} />
        </div>
      </section>

      <section id="faq" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.faqTag}</p>
            <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">{t.faqTitle}</h2>
          </div>
          <div className="space-y-3">
            {localizedFaqs.map((faq) => (
              <details key={faq.question} className="group surface-glow-hover relative rounded-xl border border-white/10 bg-white/5 p-5">
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
          <h2 className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">{t.contactTitle}</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              {t.heroCta}
              <span>→</span>
            </GlassButton>
            <a href="#video-analyse">
              <GlassButton contentClassName="inline-flex items-center gap-2">
                {t.heroFree}
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
                {t.footerTagline}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.footerNav}</p>
              <div className="flex flex-col gap-3.5 text-sm text-slate-200/90">
                <a href="#leistungen" className="transition-colors hover:text-white">{t.navServices}</a>
                <a href="#video-analyse" className="transition-colors hover:text-white">{t.navVideo}</a>
                <a href="#prozess" className="transition-colors hover:text-white">{t.navProcess}</a>
                <a href="#faq" className="transition-colors hover:text-white">{t.navFaq}</a>
                <a href="/termin" className="transition-colors hover:text-white">{t.footerBook}</a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.footerContact}</p>
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
                  <span>{t.city}</span>
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

export default Index;
