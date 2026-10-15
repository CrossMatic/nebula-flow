import { AccentButton } from "@/components/ui/accent-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import {
  accentWords,
  cardClass,
  CornerGlow,
  GuideLines,
  LeadParagraph,
  SectionPill,
  serifAccentClass,
} from "@/components/section-style";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import crossmaticCLogo from "@/assets/crossmatic-c-logo-clean.png";
import farnerLogo from "@/assets/client-logos/farner.svg";
import arliconLogo from "@/assets/client-logos/arlicon.svg";
import bueroHaeberliLogo from "@/assets/client-logos/buero-haeberli.svg";
import gianBessetLogo from "@/assets/client-logos/gian-besset-brand-design.png";
import saschaVoelkiLogo from "@/assets/client-logos/sascha-voelki.png";
import caseGianReportingImage from "@/assets/case-gian-reporting.png";
import caseHaeberliReportingImage from "@/assets/case-haeberli-reporting.png";
import joshuaPortrait from "@/assets/joshua-stoeckli-portrait.jpg";
import adrianKohlerPortrait from "@/assets/adrian-kohler-portrait.jpg";
import leadScoutDossierImage from "@/assets/lead-scout-dossier.png";
import leadScoutCaseDatabaseImage from "@/assets/lead-scout-falldatenbank.png";
import leadScoutKnowledgeGraphImage from "@/assets/lead-scout-wissensgraph.png";
import {
  BrainCircuit,
  Check,
  FileSearch,
  Inbox,
  Linkedin,
  Mail,
  MapPin,
  Maximize,
  Pause,
  PhoneCall,
  Play,
  ScanSearch,
  SlidersHorizontal,
  Volume2,
  VolumeX,
} from "lucide-react";
import { DossierRequestDialog } from "@/components/DossierRequestDialog";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Fragment, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const AnimatedWords = ({
  text,
  baseDelay,
  step = 70,
  wordClassName = "",
  highlightWord,
  highlightClassName = "",
}: {
  text: string;
  baseDelay: number;
  step?: number;
  wordClassName?: string;
  highlightWord?: string;
  highlightClassName?: string;
}) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`animate-word-fade-in ${
            highlightWord && word.replace(/[.,!?]/g, "") === highlightWord ? highlightClassName : wordClassName
          }`}
          style={{ animationDelay: `${baseDelay + i * step}ms` }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
};

const services = [
  {
    title: "Lead Scout",
    subtitle: "Ihr Markt-Radar",
    description:
      "Jede Woche erhalten Sie bis zu drei Dossiers zu Organisationen, bei denen gerade ein Anlass für Ihre Leistung entsteht. Was als Anlass zählt, legen wir gemeinsam fest, zugeschnitten auf Ihren Markt. Sie erhalten keinen Kontaktdatensatz, sondern eine ausgearbeitete Ausgangslage: Sie wissen vor dem ersten Kontakt, was passiert ist, wer entscheidet und warum Sie gerade jetzt relevant sind.",
    benefits: [
      "Konkreter Anlass mit Datum und offengelegten Quellen",
      "Entscheider namentlich, mit direkten Kontaktdaten",
      "Ausgangslage und Hintergrund des Unternehmens",
      "Warum Sie gerade jetzt relevant sind",
      "Fertiger Aufhänger für die Erstansprache",
      "Jede Angabe belegt, Unsicheres offen gekennzeichnet",
      "Wöchentliche Lieferung, nach drei Monaten monatlich kündbar",
    ],
    footer: "Ideal für: Beratungen, Agenturen und Kreativdienstleister, die gezielt akquirieren wollen und wissen möchten, bei wem sich der Aufwand gerade lohnt. Ob Sie die Dossiers selbst nutzen oder an Ihr Team weitergeben.",
    icon: "scout",
    dashboardNote: "Inklusive Zugang zu Ihrem persönlichen Lead-Intelligence-Dashboard.",
    cardCta: "Lead-Potenzial prüfen →",
  },
  {
    title: "Akquise-System",
    subtitle: "Wir übernehmen die Ansprache für Sie.",
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

type LeadScoutStep = {
  label: string;
  title: string;
  accent: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
};

const leadScoutStepsDe: LeadScoutStep[] = [
  {
    label: "Kalibrierung",
    title: "Zuerst klären wir, wonach wir suchen",
    accent: "wonach",
    paragraphs: [
      "Bevor der erste Lauf startet, legen wir gemeinsam fest, was in Ihrem Markt überhaupt ein Anlass ist. Bei einer Beratung kann das ein Führungswechsel sein, bei einem Designbüro ein Jubiläum oder ein neuer Auftritt, bei einem technischen Dienstleister ein Bauprojekt oder eine anstehende Sanierung.",
      "Dazu kommen Ihre Grenzen: welche Regionen, welche Organisationsgrössen, welche Branchen, und welche Unternehmen als Bestandskunden ausgeschlossen bleiben.",
      "Diese Kalibrierung ist die Grundlage für alles Weitere. Sie dauert rund zwei Wochen, in denen wir zwei bis drei Testläufe machen und gemeinsam nachschärfen.",
    ],
  },
  {
    label: "Recherche",
    title: "Jede Woche mehrere hundert Quellen",
    accent: "hundert",
    paragraphs: [
      "Für jeden Lauf arbeiten mehrere spezialisierte Rechercheprozesse parallel. Jeder davon deckt einen anderen Quellentyp ab: Handelsregister und Amtsblätter, Ausschreibungen und Baugesuche, Jahresberichte und Geschäftszahlen, Verbandspublikationen, Fachmedien, Regionalzeitungen.",
      "Der Schwerpunkt liegt dabei auf Schweizer Primärquellen. Also dort, wo ein Signal entsteht, bevor es zur Nachricht wird. Wenn etwas in der überregionalen Presse steht, ist es für eine Erstansprache meist schon zu spät.",
    ],
  },
  {
    label: "Prüfung",
    title: "Was nicht überzeugt, fliegt raus",
    accent: "raus",
    paragraphs: [
      "Die Ergebnisse werden zusammengeführt und gegen Ihre Kriterien getestet. Ist der Anlass aktuell und datiert? Passt die Organisation ins Profil? Gibt es einen erreichbaren Entscheider? Arbeitet dort bereits ein Mitbewerber?",
      "Was diese Prüfung nicht besteht, erscheint nicht im Bericht. Dafür steht am Ende jeder Ausgabe, was geprüft und warum verworfen wurde.",
      "Jede Angabe ist belegt, jede Quelle verlinkt mit Datum. Kontaktdaten stammen aus offiziellen Unternehmensseiten oder aus dem Handelsregister, nie aus Adressdatenbanken. Was sich nicht belegen lässt, kennzeichnen wir als ungesichert, statt es wegzulassen.",
      "Es gibt bewusst keine garantierte Anzahl Dossiers. Gibt eine Woche nichts her, sagen wir das offen. Zwei Fälle, bei denen das Gespräch von selbst läuft, sind mehr wert als fünf, die niemand anruft.",
    ],
    image: leadScoutDossierImage,
    imageAlt: "Lead Scout Dossier: Ausgabe mit Management Summary",
  },
  {
    label: "Ihr Portal",
    title: "Alles an einem Ort, nicht als Datei im Postfach",
    accent: "Ort",
    paragraphs: [
      "Sie erhalten einen eigenen Arbeitsbereich. Darin liegt pro Woche eine Ausgabe mit einer kurzen Übersicht und den vollständigen Dossiers.",
      "Darüber liegt eine Falldatenbank, in der alle Fälle zusammenlaufen. Filterbar nach Region, Anlass und Stand. Sie sehen auf einen Blick, was offen ist, was Sie bereits kontaktiert haben und was daraus geworden ist.",
      "Jede Woche prüfen wir zusätzlich die bestehenden Fälle auf Veränderungen: Ist ein Verfahren weitergegangen, wurde eine Frist verschoben, wurde eine andere Agentur beauftragt. So geht kein Fall verloren. Eine Organisation, die im Frühling noch nicht so weit war, taucht im Herbst wieder auf, wenn der Zeitpunkt passt.",
    ],
    image: leadScoutCaseDatabaseImage,
    imageAlt: "Lead Scout Falldatenbank mit Fällen nach Typ, Kanton, Trägerschaft und Lage",
  },
  {
    label: "Das Gedächtnis",
    title: "Das System lernt Ihren Markt",
    accent: "lernt",
    paragraphs: [
      "Ein übliches KI-Werkzeug beginnt bei jeder Anfrage von vorne. Es sucht, antwortet und vergisst danach wieder. Beim nächsten Mal macht es dieselben Fehler und schlägt dieselben Organisationen vor.",
      "Der Lead Scout führt für jeden Kunden ein eigenes Gedächtnis. Nach jedem Lauf wird festgehalten, welche Organisationen geprüft wurden und mit welchem Ergebnis, welche Anlässe zu Gesprächen geführt haben und was Sie abgelehnt haben und warum. Dieses Wissen fliesst in den nächsten Lauf ein.",
      "Das hat drei Folgen. Keine Organisation wird zweimal geprüft. Fälle, die zu früh kamen, werden zum richtigen Zeitpunkt wieder aufgegriffen. Und das System trifft mit jeder Ausgabe genauer, weil es Ihren Markt besser kennt. Mit der Zeit sucht der Scout nicht mehr den ganzen Markt ab, sondern das, was sich verändert hat.",
    ],
    image: leadScoutKnowledgeGraphImage,
    imageAlt: "Wissens-Graph des Lead Scout mit verknüpften Organisationen und Anlässen",
  },
];

const leadScoutStepsEn: LeadScoutStep[] = [
  {
    label: "Calibration",
    title: "First, we clarify what we're looking for",
    accent: "looking",
    paragraphs: [
      "Before the first run starts, we define together what actually counts as a trigger in your market. For a consultancy, that might be a change in leadership; for a design studio, an anniversary or a new brand presence; for a technical service provider, a construction project or an upcoming renovation.",
      "Then come your boundaries: which regions, which organisation sizes, which industries, and which companies stay excluded as existing clients.",
      "This calibration is the foundation for everything that follows. It takes about two weeks, during which we run two to three test runs and refine together.",
    ],
  },
  {
    label: "Research",
    title: "Several hundred sources every week",
    accent: "hundred",
    paragraphs: [
      "For each run, several specialised research processes work in parallel. Each one covers a different type of source: commercial registers and official gazettes, tenders and building permits, annual reports and financials, association publications, trade media, regional newspapers.",
      "The focus is on Swiss primary sources. That is, where a signal emerges before it becomes news. Once something is in the national press, it's usually too late for a first approach.",
    ],
  },
  {
    label: "Review",
    title: "What doesn't hold up gets cut",
    accent: "cut",
    paragraphs: [
      "The results are merged and tested against your criteria. Is the trigger current and dated? Does the organisation fit the profile? Is there a reachable decision-maker? Is a competitor already working there?",
      "Whatever fails this review doesn't appear in the report. Instead, the end of each edition lists what was checked and why it was discarded.",
      "Every statement is backed up, every source linked with a date. Contact details come from official company websites or the commercial register, never from address databases. What can't be verified, we flag as unconfirmed rather than leaving it out.",
      "There is deliberately no guaranteed number of dossiers. If a week turns up nothing, we say so openly. Two cases where the conversation flows naturally are worth more than five that nobody calls.",
    ],
    image: leadScoutDossierImage,
    imageAlt: "Lead Scout dossier: issue with management summary",
  },
  {
    label: "Your portal",
    title: "Everything in one place, not as a file in your inbox",
    accent: "place",
    paragraphs: [
      "You get your own workspace. Each week, it holds an edition with a short overview and the complete dossiers.",
      "Above that sits a case database where all cases come together. Filterable by region, trigger, and status. At a glance you see what's open, what you've already contacted, and what came of it.",
      "Every week we also check existing cases for changes: has a procedure moved forward, has a deadline shifted, has another agency been hired. That way no case gets lost. An organisation that wasn't ready in spring resurfaces in autumn, when the timing is right.",
    ],
    image: leadScoutCaseDatabaseImage,
    imageAlt: "Lead Scout case database with cases by type, canton, ownership and status",
  },
  {
    label: "The memory",
    title: "The system learns your market",
    accent: "learns",
    paragraphs: [
      "A typical AI tool starts from scratch with every request. It searches, answers, and then forgets. Next time, it makes the same mistakes and suggests the same organisations.",
      "Lead Scout keeps a dedicated memory for each client. After every run, it records which organisations were checked and with what result, which triggers led to conversations, and what you turned down and why. This knowledge feeds into the next run.",
      "That has three consequences. No organisation is checked twice. Cases that came too early are picked up again at the right time. And the system gets more accurate with every issue, because it knows your market better. Over time, the Scout no longer searches the whole market, but only what has changed.",
    ],
    image: leadScoutKnowledgeGraphImage,
    imageAlt: "Lead Scout knowledge graph with connected organisations and triggers",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Beispieldossier",
    accent: "Beispieldossier",
    text: "Sie nennen uns Ihre Firma und Ihre Wunschkunden. Wir recherchieren einen echten Fall aus Ihrem Markt und schicken ihn Ihnen zu. Kostenlos und unverbindlich.",
    note: "Statt des Dossiers klären wir in einem kurzen Gespräch Ihre Zielgruppe und die passenden Kanäle.",
    icon: "dossier",
  },
  {
    step: "02",
    title: "Kalibrierung, Woche 1 und 2",
    accent: "Kalibrierung",
    text: "Wir legen gemeinsam fest, was in Ihrem Markt ein Anlass ist, welche Regionen und Grössen zählen und wen wir ausschliessen. In zwei bis drei Testläufen schärfen wir die Suche nach.",
    note: "Wir bauen die Zielliste auf, schreiben die Nachrichten zu Ihrer Freigabe und wärmen die Absenderadressen auf, damit alles zuverlässig ankommt.",
    icon: "calibrate",
  },
  {
    step: "03",
    title: "Start, ab Woche 3",
    accent: "Start",
    text: "Jede Woche erhalten Sie die geprüften Dossiers in Ihrem Portal, mit Anlass, Entscheider und Aufhänger für das erste Gespräch.",
    note: "Die ersten Nachrichten gehen raus, Antworten landen direkt bei Ihnen.",
    icon: "delivery",
  },
  {
    step: "04",
    title: "Laufender Betrieb",
    accent: "Betrieb",
    text: "Wir prüfen bestehende Fälle wöchentlich auf Veränderungen, und Ihre Rückmeldungen fliessen in die Suche ein. So wird sie mit der Zeit präziser.",
    note: "Sie erhalten ein wöchentliches Reporting, und wir schärfen Ansprache und Zielgruppe laufend nach.",
    icon: "learn",
  },
];

const faqs = [
  {
    question: "Was kostet das?",
    answer:
      "Das Akquise-System startet bei CHF 2'000 für den Aufbau, abhängig von Zielgruppengrösse und Kanälen. Der Lead Scout läuft ab CHF 500 pro Monat, mit drei Monaten Erstlaufzeit. Was es in Ihrem Fall konkret kostet, sagen wir Ihnen im Erstgespräch — ohne dass Sie sich zu etwas verpflichten.",
  },
  {
    question: "Welches der beiden Systeme passt zu mir?",
    answer:
      "Wenn Sie oder Ihr Team bereits Gespräche führen und nur nicht wissen, bei wem sich der Aufwand lohnt, ist der Lead Scout richtig. Wenn Sie neue Gespräche brauchen, aber niemanden haben, der aktiv akquiriert, ist es das Akquise-System. Beides zusammen ergibt Sinn, wenn Sie systematisch wachsen wollen. Im Erstgespräch klären wir das in wenigen Minuten.",
  },
  {
    question: "Was, wenn es nicht funktioniert?",
    answer:
      "Das kann vorkommen. Wenn eine Zielgruppe nicht reagiert, sagen wir das offen und passen an: Ansprache, Segment oder Kanal. Was wir nicht machen, ist eine Kampagne weiterlaufen zu lassen, die keine Ergebnisse liefert, nur weil sie bezahlt ist. Und wir arbeiten grundsätzlich mit einer Vereinbarung, die das Risiko für Sie begrenzt — wie die aussieht, hängt vom Projekt ab und besprechen wir vor der Zusammenarbeit.\n\nBeim Lead Scout gilt zusätzlich: Liefern wir im ersten Monat kein einziges Dossier, das dem gemeinsam festgelegten Suchprofil entspricht, erstatten wir den ersten Monatsbeitrag.",
  },
  {
    question: "Wie persönlich sind die Nachrichten wirklich?",
    answer:
      "Jedes Unternehmen wird einzeln recherchiert, und jede Nachricht bezieht sich auf dessen konkrete Situation — nicht auf ein Segment oder eine Branche. Sie geben alle Texte frei, bevor die erste Nachricht rausgeht, und sehen damit genau, was in Ihrem Namen verschickt wird.",
  },
  {
    question: "Wie viel Zeit kostet mich das?",
    answer:
      "Vor dem Start brauchen wir wenig von Ihnen: das Erstgespräch, einen kurzen Abgleich zur Zielgruppe und Ihre Freigabe der Texte. Sobald die Kampagne läuft, kommen die Antworten direkt bei Ihnen an. Sie führen die Konversation weiter und vereinbaren die Termine selbst. Das ist Absicht, denn ab diesem Punkt kauft man von Ihnen und nicht von einem Dienstleister. Rechnen Sie mit etwa einer Stunde pro Woche.\n\nBeim Lead Scout ist der Aufwand noch geringer: Sie erhalten die fertigen Dossiers und entscheiden, wen Sie ansprechen. Die Recherche, die Sie sonst selbst machen müssten, entfällt.",
  },
  {
    question: "Ist das DSGVO-konform?",
    answer:
      "E-Mail-Akquise führen wir ausschliesslich für die Schweiz und den englischsprachigen Raum durch. Für Deutschland und Österreich arbeiten wir über LinkedIn, weil Cold E-Mail dort rechtlich nicht sauber umsetzbar ist. Wir sagen Ihnen lieber vorher, was nicht geht, als Sie in ein Risiko laufen zu lassen. Alle Kampagnen laufen mit transparenten Absenderangaben und funktionierender Abmeldemöglichkeit.",
  },
  {
    question: "Kann ich das System später selbst übernehmen?",
    answer:
      "Bei den Akquise-Systemen ja: Sie laufen auf Ihren eigenen Konten und Zugängen, und wir übergeben sauber, wenn Sie den Betrieb intern übernehmen wollen. Beim Lead Scout gehören Ihnen alle gelieferten Dossiers. Sie können sie jederzeit exportieren und behalten sie auch nach Ende der Zusammenarbeit.",
  },
];

// Zahlen im Fliesstext in der Serifenschrift setzen.
const serifNumbers = (text: string, colorClass = "text-gold") =>
  text.split(/(\d+(?:[.,']\d+)*(?:\s?%)?)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={`font-serif text-[1.18em] font-normal leading-none ${colorClass}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );

const proofCardPositions = [
  "md:absolute md:-left-3 md:-top-6 lg:-left-14",
  "md:absolute md:-right-3 md:top-[42%] lg:-right-14",
  "md:absolute md:-bottom-6 md:left-[16%]",
];

// Dossier-Vorschau im Hero. Sobald der Screenshot vorliegt, als `image` übergeben;
// bis dahin zeigt die Karte einen neutralen Platzhalter mit der Dossier-Struktur.
const HeroDossierPreview = ({
  image,
  imageAlt,
  overviewLabel,
  proofs,
}: {
  image?: string;
  imageAlt?: string;
  overviewLabel: string;
  proofs: string[];
}) => (
  <div className="animate-hero-rise-in relative mx-auto mt-16 max-w-4xl md:mt-20" style={{ animationDelay: "2500ms" }}>
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-3">
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#1a1917]/80 text-left">
        {image ? (
          <img src={image} alt={imageAlt} className="block w-full" />
        ) : (
          <div aria-hidden="true" className="p-6 md:p-10">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded-full bg-white/15" />
              <div className="h-2 w-16 rounded-full bg-white/10" />
            </div>
            <div className="mt-6 h-4 w-3/4 rounded bg-white/20 md:h-5" />
            <div className="mt-2 h-4 w-1/2 rounded bg-white/20 md:h-5" />
            <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mt-9 md:text-[11px]">
              Management Summary
            </p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-[92%] rounded-full bg-white/10" />
              <div className="h-2 w-[70%] rounded-full bg-white/10" />
            </div>
            <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:mt-9 md:text-[11px]">
              {overviewLabel}
            </p>
            <div className="mt-3 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {[0, 1, 2].map((row) => (
                <div key={row} className="grid grid-cols-[1fr_2fr_1fr] gap-4 py-2.5">
                  <div className="h-2 w-3/4 rounded-full bg-white/15" />
                  <div className="h-2 w-5/6 rounded-full bg-white/10" />
                  <div className="h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="mt-5 flex flex-col items-center gap-3 md:mt-0">
      {proofs.map((proof, index) => (
        <div
          key={proof}
          className={`flex items-center gap-3 rounded-xl border border-white/10 bg-[#1d1c1a]/85 px-4 py-3 text-left text-sm text-stone-100 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md ${proofCardPositions[index] ?? ""}`}
        >
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
            <Check className="h-3.5 w-3.5 text-gold" />
          </span>
          {proof}
        </div>
      ))}
    </div>
  </div>
);

type QuoteFigureProps = {
  quote: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  initials: string;
};

// Porträt später via authorImage setzen, bis dahin erscheinen die Initialen.
const QuoteFigure = ({ quote, author, authorRole, authorImage, initials }: QuoteFigureProps) => (
  <figure className={`${cardClass} relative flex flex-col items-center gap-5 p-6 text-center sm:flex-row sm:text-left md:gap-6 md:p-8`}>
    <Avatar className="h-16 w-16 border border-white/15 md:h-20 md:w-20">
      {authorImage && <AvatarImage src={authorImage} alt={author} className="object-cover" />}
      <AvatarFallback className="bg-white/10 text-base font-medium text-stone-200 md:text-lg">{initials}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <blockquote className="text-base italic leading-relaxed text-slate-100/95 md:text-lg">
        {`"${quote}"`}
      </blockquote>
      <figcaption className="mt-4">
        <p className="text-sm font-medium text-stone-100">{author}</p>
        <p className="text-xs text-muted-foreground">{authorRole}</p>
      </figcaption>
    </div>
  </figure>
);

type CaseStudy = {
  title: string;
  titleAccent: string;
  role: string;
  text: string;
  metrics: string[];
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  quote?: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
};

const caseStudiesDe: CaseStudy[] = [
  {
    title: "5 gebuchte Gespräche in 2 Wochen",
    titleAccent: "Gespräche",
    role: "Gian Besset Brand Design · Grafik & Webdesign, Basel",
    text: "Gian Besset wollte planbar neue Kunden gewinnen, unabhängig von Empfehlungen. Wir bauten ein automatisiertes E-Mail-System für Physio- und Tierarztpraxen in der Schweiz, jede Nachricht auf die einzelne Praxis zugeschnitten. Schon nach zwei Wochen mussten wir die Kampagne pausieren, nicht wegen mangelnder Ergebnisse, sondern weil die Anfragen die Kapazität überstiegen. Insgesamt lief sie vier Wochen.",
    metrics: ["18 Interessenten", "4 Wochen Laufzeit", "14 % Antwortrate"],
    image: caseGianReportingImage,
    imageAlt: "Reporting-Ausschnitt der E-Mail-Akquise-Kampagne von Gian Besset",
    quote:
      "Die Zusammenarbeit war sehr einfach, direkt und unkompliziert. Die Resultate haben meine Erwartungen übertroffen.",
    author: "Gian Besset",
    authorRole: "Gründer Gian Besset Brand Design",
    authorImage: gianBessetLogo,
  },
  {
    title: "3 gebuchte Gespräche in den ersten 3 Tagen",
    titleAccent: "Gespräche",
    role: "Büro Haeberli · Agentur für Grafik und Web, Zürich",
    text: "Büro Haeberli wollte gezielt Architekturbüros in der Deutschschweiz erreichen, eine Zielgruppe, die auf Standardanfragen kaum reagiert. Wir recherchierten jedes Büro einzeln und schrieben 308 davon persönlich an. Schon in den ersten drei Tagen kamen drei Gespräche zustande.",
    metrics: ["17 Interessenten", "4 Wochen Laufzeit", "19 % Antwortrate"],
    image: caseHaeberliReportingImage,
    imageAlt: "Reporting-Ausschnitt der E-Mail-Akquise-Kampagne von Büro Haeberli",
  },
];

const caseStudiesEn: CaseStudy[] = [
  {
    ...caseStudiesDe[0],
    title: "5 booked calls in 2 weeks",
    titleAccent: "calls",
    role: "Gian Besset Brand Design · Graphic & Web Design, Basel",
    text: "Gian Besset wanted to win new clients predictably, independent of referrals. We built an automated email system for physiotherapy and veterinary clinics in Switzerland, with every message tailored to the individual clinic. After just two weeks we had to pause the campaign, not for lack of results, but because demand exceeded capacity. In total it ran for four weeks.",
    metrics: ["18 prospects", "4 weeks runtime", "14% reply rate"],
    imageAlt: "Reporting excerpt from Gian Besset's email outreach campaign",
    quote:
      "The collaboration was very easy, direct, and uncomplicated. The results exceeded my expectations.",
    authorRole: "Founder, Gian Besset Brand Design",
  },
  {
    ...caseStudiesDe[1],
    title: "3 booked calls in the first 3 days",
    titleAccent: "calls",
    role: "Büro Haeberli · Graphic and Web Agency, Zurich",
    text: "Büro Haeberli wanted to reach architecture firms in German-speaking Switzerland, an audience that barely responds to standard outreach. We researched every firm individually and contacted 308 of them personally. Three conversations came about within the first three days.",
    metrics: ["17 prospects", "4 weeks runtime", "19% reply rate"],
    imageAlt: "Reporting excerpt from Büro Haeberli's email outreach campaign",
  },
];

const formatVideoTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes}:${remaining.toString().padStart(2, "0")}`;
};

const CaseStudyVideoPlayer = ({ src, labels }: { src: string; labels: { progress: string; unmute: string; mute: string; fullscreen: string } }) => {
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
    <div className="surface-glow-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-black">
      <video
        ref={videoRef}
        src={src}
        className="block w-full cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
          aria-label={labels.progress}
          className="h-1 flex-1 cursor-pointer accent-gold"
        />
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? labels.unmute : labels.mute}
          className="shrink-0 text-white/90 transition-colors hover:text-white"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={labels.fullscreen}
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
  const heroRef = useRef<HTMLElement | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const t = isDe
    ? {
        navServices: "Leistungen",
        navResults: "Ergebnisse",
        navAbout: "Über mich",
        navProcess: "Prozess",
        navFaq: "FAQ",
        heroKicker: "Für Agenturen, Beratungen und Kreativdienstleister in der Schweiz",
        heroHeadline: "Wissen, wo gerade entschieden wird",
        heroSub: "Jede Woche recherchierte Dossiers zu den Organisationen, bei denen gerade ein Auftrag entsteht.",
        heroProof: "Im Einsatz bei Farner Consulting.",
        heroHighlight: "entschieden",
        heroProofCards: ["Im Einsatz bei Farner Consulting", "Jede Angabe mit Quelle belegt", "Mehrere hundert Quellen pro Lauf"],
        heroPreviewOverview: "Übersicht",
        heroMainCta: "Kostenloses Beispieldossier anfordern",
        bookCall: "Erstgespräch buchen",
        bookCallHint: "Lieber direkt sprechen?",
        trustedByTitle: "Vertraut von",
        problemTag: "Das Problem",
        problemTitle: "Ihre besten Kunden entscheiden gerade. Ohne Sie.",
        problemTitleAccent: "entscheiden",
        problemIntro:
          "In Ihrem Markt entstehen ständig konkrete Anlässe: ein Führungswechsel, eine Expansion, ein neues Projekt, eine Finanzierungsrunde. In genau diesen Momenten wird über Budgets und Partner entschieden. Die meisten Unternehmen erfahren davon erst, wenn die Entscheidung längst gefallen ist.",
        problemPoints: [
          {
            title: "Sie erfahren es zu spät",
            accent: "spät",
            body: "Wenn eine Ausschreibung öffentlich ist oder jemand aktiv sucht, sind Sie einer von vielen. Der interessante Moment liegt Wochen davor und bleibt unsichtbar, wenn niemand danach sucht.",
          },
          {
            title: "Ohne Signale trifft man ins Leere",
            accent: "Signale",
            body: "Wer nicht weiss, bei wem gerade etwas ansteht, spricht alle gleich an. Die Nachricht bleibt allgemein, und wer wirklich Bedarf hat, merkt nicht, dass er gemeint ist.",
          },
          {
            title: "Recherche kostet die falsche Zeit",
            accent: "falsche",
            body: "Wer seinen Markt wirklich beobachten will, verbringt Stunden mit Suchen und Lesen. Zeit, die im Gespräch mit Kunden mehr wert wäre.",
          },
        ],
        problemClosing:
          "Wir sorgen dafür, dass Sie im richtigen Moment sichtbar sind: mit Recherche, die die Anlässe findet, und Ansprache, die dazu passt.",
        servicesTitle: "Unsere Leistungen",
        servicesTitleAccent: "Leistungen",
        servicesMainBadge: "Hauptprodukt",
        servicesSub: "Zwei Wege zum richtigen Gespräch – unser Hauptprodukt ist der Lead Scout.",
        howTitle: "So funktioniert der Lead Scout",
        howTitleAccent: "Lead Scout",
        howSub: "Vom ersten Gespräch bis zur wöchentlichen Lieferung. Und warum die Treffer mit jeder Ausgabe schärfer werden.",
        howQuote:
          "Der Lead Scout ermöglicht uns, den Akquisitionsaufwand zu verringern und die Neukunden-Akquisition zielgerichtet und effizient zu gestalten. Gleichzeitig erlaubt es uns, in spezifischen Bereichen ein Marktmonitoring zu führen, das ohne Firlefanz auskommt. Das ist ein echter Fortschritt!",
        howQuoteAuthor: "Adrian Kohler",
        howQuoteRole: "Farner Consulting, Basel",
        outreachResults: "Ergebnisse aus Akquise-Projekten",
        caseVideoCaption: "Arlicon AG · 3D-Visualisierung für Luxusuhren und Juweliere",
        caseVideoLabels: { progress: "Video-Fortschritt", unmute: "Ton an", mute: "Stumm schalten", fullscreen: "Vollbild" },
        aboutTag: "Über CrossMatic",
        aboutTitle: "Sie sprechen immer mit mir",
        aboutTitleAccent: "mir",
        aboutParagraphs: [
          "Ich bin Joshua Stöckli und führe CrossMatic aus Basel.",
          "Angefangen hat es damit, dass ich selbst Kunden brauchte. Ich hatte kein Netzwerk, keine Empfehlungen und keinen Namen, auf den jemand reagiert hätte. Also habe ich nicht wahllos angeschrieben, sondern gesucht: Welche Unternehmen passen genau zu meinem Angebot, und bei wem steht gerade etwas an?",
          "So habe ich meinen ersten grossen Kunden gewonnen. Nicht über eine Beziehung, sondern weil er genau dem Profil entsprach, das ich gesucht hatte. Heute recherchiert der Lead Scout jede Woche für ihn, nach demselben Prinzip.",
          "Aus dieser Arbeit sind zwei Systeme entstanden: die Recherche, die zeigt, wo gerade entschieden wird, und die Ansprache, die daraus ein Gespräch macht.",
          "Ich nehme bewusst nur wenige Kunden gleichzeitig an. Sie sprechen mit der Person, die Ihre Suche kalibriert und Ihre Dossiers prüft, nicht mit einem anonymen Team. Wenn etwas nicht funktioniert, erfahren Sie es von mir, bevor Sie danach fragen.",
        ],
        aboutName: "Joshua Stöckli",
        aboutRole: "Gründer, CrossMatic",
        aboutLinkedin: "LinkedIn",
        processTag: "Prozess",
        processTitle: "Vom Beispieldossier zur wöchentlichen Lieferung",
        processTitleAccent: "Lieferung",
        processNoteLabel: "Beim Akquise-System:",
        faqTag: "FAQ",
        faqTitle: "Häufige Fragen",
        faqTitleAccent: "Fragen",
        contactTitle: "Sehen Sie es an einem echten Fall",
        contactTitleAccent: "echten",
        contactSub:
          "Kostenlos und unverbindlich. Sie sehen an einem echten Fall aus Ihrem Markt, was Sie jede Woche erhalten würden.",
        footerTagline: "Akquise-Systeme für Agenturen, Beratungen und Kreativdienstleister in der Schweiz.",
        footerNav: "Navigation",
        footerContact: "Kontakt",
        footerBook: "Termin buchen",
        imprint: "Impressum",
        privacy: "Datenschutz",
        rights: "© 2026 CrossMatic. Alle Rechte vorbehalten.",
        city: "Basel, Schweiz",
      }
    : {
        navServices: "Services",
        navResults: "Results",
        navAbout: "About me",
        navProcess: "Process",
        navFaq: "FAQ",
        heroKicker: "For agencies, consultancies, and creative service providers in Switzerland",
        heroHeadline: "Know where decisions are being made",
        heroSub: "Researched dossiers every week on the organisations where a new mandate is taking shape right now.",
        heroProof: "In use at Farner Consulting.",
        heroHighlight: "decisions",
        heroProofCards: ["In use at Farner Consulting", "Every claim backed by a source", "Several hundred sources per run"],
        heroPreviewOverview: "Overview",
        heroMainCta: "Request a Free Sample Dossier",
        bookCall: "Book an intro call",
        bookCallHint: "Rather talk directly?",
        trustedByTitle: "Trusted by",
        problemTag: "The Problem",
        problemTitle: "Your best customers are deciding right now. Without you.",
        problemTitleAccent: "deciding",
        problemIntro:
          "Concrete triggers are constantly emerging in your market: a change in leadership, an expansion, a new project, a funding round. These are exactly the moments when budgets and partners get decided. Most companies only find out once the decision has already been made.",
        problemPoints: [
          {
            title: "You find out too late",
            accent: "late",
            body: "By the time a tender is public or someone is actively searching, you're one of many. The interesting moment is weeks earlier and stays invisible if no one is looking for it.",
          },
          {
            title: "Without signals, outreach misses the mark",
            accent: "signals",
            body: "If you don't know who has something coming up, you address everyone the same way. The message stays generic, and the ones who actually have a need don't notice it's meant for them.",
          },
          {
            title: "Research eats the wrong kind of time",
            accent: "wrong",
            body: "Anyone who truly wants to watch their market spends hours searching and reading. Time that would be worth more in conversation with customers.",
          },
        ],
        problemClosing:
          "We make sure you're visible at the right moment: with research that finds the triggers, and outreach that fits.",
        servicesTitle: "Our Services",
        servicesTitleAccent: "Services",
        servicesMainBadge: "Core product",
        servicesSub: "Two ways to the right conversation – our core product is the Lead Scout.",
        howTitle: "How Lead Scout works",
        howTitleAccent: "Lead Scout",
        howSub: "From the first conversation to the weekly delivery. And why the hits get sharper with every issue.",
        howQuote:
          "Lead Scout enables us to reduce our acquisition effort and make new client acquisition targeted and efficient. At the same time, it lets us run market monitoring in specific areas without any frills. That's real progress!",
        howQuoteAuthor: "Adrian Kohler",
        howQuoteRole: "Farner Consulting, Basel",
        outreachResults: "Results from outreach projects",
        caseVideoCaption: "Arlicon AG · 3D visualization for luxury watches and jewelers",
        caseVideoLabels: { progress: "Video progress", unmute: "Unmute", mute: "Mute", fullscreen: "Fullscreen" },
        aboutTag: "About CrossMatic",
        aboutTitle: "You always speak with me",
        aboutTitleAccent: "me",
        aboutParagraphs: [
          "I'm Joshua Stöckli, and I run CrossMatic from Basel.",
          "It started because I needed clients myself. I had no network, no referrals, and no name anyone would respond to. So instead of writing to people at random, I searched: which companies fit my offer exactly, and where is something happening right now?",
          "That's how I won my first major client. Not through a connection, but because they matched exactly the profile I was looking for. Today, Lead Scout researches for them every week, on the same principle.",
          "Two systems grew out of this work: the research that shows where decisions are being made right now, and the outreach that turns that into a conversation.",
          "I deliberately take on only a few clients at a time. You talk to the person who calibrates your search and checks your dossiers, not an anonymous team. If something isn't working, you hear it from me before you have to ask.",
        ],
        aboutName: "Joshua Stöckli",
        aboutRole: "Founder, CrossMatic",
        aboutLinkedin: "LinkedIn",
        processTag: "Process",
        processTitle: "From sample dossier to weekly delivery",
        processTitleAccent: "delivery",
        processNoteLabel: "With the outreach system:",
        faqTag: "FAQ",
        faqTitle: "Frequently Asked Questions",
        faqTitleAccent: "Questions",
        contactTitle: "See it in a real case",
        contactTitleAccent: "real",
        contactSub:
          "Free and without obligation. You see in a real case from your market what you would receive every week.",
        footerTagline: "Acquisition systems for agencies, consultancies, and creative service providers in Switzerland.",
        footerNav: "Navigation",
        footerContact: "Contact",
        footerBook: "Book a Call",
        imprint: "Legal Notice",
        privacy: "Privacy Policy",
        rights: "© 2026 CrossMatic. All rights reserved.",
        city: "Basel, Switzerland",
      };

  const localizedServices = isDe
    ? services
    : [
        {
          icon: "scout",
          title: "Lead Scout",
          subtitle: "Your market radar",
          description:
            "Every week you receive up to three dossiers on organisations where a trigger for your services is emerging right now. What counts as a trigger, we define together, tailored to your market. You don't get a contact record, but a fully worked-out starting point: before the first contact, you know what happened, who decides, and why you're relevant right now.",
          benefits: [
            "Concrete trigger with date and disclosed sources",
            "Decision-makers by name, with direct contact details",
            "Company background and context",
            "Why you're relevant right now",
            "Ready-made hook for the first outreach",
            "Every claim sourced, anything uncertain clearly flagged",
            "Weekly delivery, cancel monthly after three months",
          ],
          footer: "Ideal for: consultancies, agencies and creative service providers who want to do targeted outreach and know who is worth the effort right now. Whether you use the dossiers yourself or pass them on to your team.",
        },
        {
          icon: "mail",
          title: "Outreach system",
          subtitle: "We handle the outreach for you.",
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

  const [leadScout, outreach] = localizedServices;
  const leadScoutSteps = isDe ? leadScoutStepsDe : leadScoutStepsEn;

  const renderStepCard = (step: LeadScoutStep, number: number, className = "") => (
    <div key={step.label} className={`${cardClass} space-y-3 p-6 md:p-8 ${className}`}>
      <p className="flex items-baseline gap-3">
        <span className="font-serif text-4xl leading-none text-gold">{String(number).padStart(2, "0")}</span>
        <span className="text-sm font-medium text-stone-400">{step.label}</span>
      </p>
      <h3 className="pt-1 text-xl font-medium text-white md:text-2xl">{accentWords(step.title, [{ word: step.accent }])}</h3>
      {step.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const renderServiceCard = (service: (typeof localizedServices)[number], featured = false) => (
    <div className="relative isolate h-full">
      {featured && (
        <div aria-hidden className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gold/[0.09] blur-3xl" />
      )}
      <article
        className={`surface-glow-hover relative flex h-full flex-col rounded-2xl border p-6 md:p-8 ${
          featured
            ? "border-gold/55 bg-[linear-gradient(180deg,hsl(var(--gold)/0.07),hsl(var(--surface))_45%)] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] hover:border-gold/70"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        {featured && (
          <span className="absolute right-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-stone-100 md:right-7 md:top-7">
            {t.servicesMainBadge}
          </span>
        )}
        <GlowingEffect
          spread={34}
          glow={false}
          disabled
          proximity={80}
          inactiveZone={0.2}
          borderWidth={1}
          variant="white"
        />
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
          {service.icon === "scout" ? <ScanSearch className="h-5 w-5 text-stone-200" /> : <Mail className="h-5 w-5 text-stone-200" />}
        </div>
        <h3 className="text-2xl font-medium">
          <span className={`${serifAccentClass} text-white`}>{service.title}</span>
        </h3>
        <p className="mt-1 text-sm font-medium text-stone-400">{service.subtitle}</p>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">{service.description}</p>
        <ul className="mt-4 flex-1 space-y-1.5">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-slate-100/90">
              <span className="mt-[2px] text-gold">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-white/10 pt-3 text-sm text-muted-foreground">{service.footer}</p>
        {service.icon === "mail" && (
          <div className="mt-6">
            <SecondaryButton href="/termin">{t.bookCall}</SecondaryButton>
          </div>
        )}
      </article>
    </div>
  );

  const localizedProcessSteps = isDe
    ? processSteps
    : [
        {
          ...processSteps[0],
          title: "Sample dossier",
          accent: "dossier",
          text: "Tell us about your company and your ideal clients. We research a real case from your market and send it to you. Free and without obligation.",
          note: "Instead of a dossier, we clarify your target audience and the right channels in a short call.",
        },
        {
          ...processSteps[1],
          title: "Calibration, weeks 1 and 2",
          accent: "Calibration",
          text: "Together we define what counts as a trigger in your market, which regions and company sizes matter, and whom we exclude. Two to three test runs sharpen the search.",
          note: "We build the target list, write the messages for your approval, and warm up the sender addresses so everything is reliably delivered.",
        },
        {
          ...processSteps[2],
          title: "Launch, from week 3",
          accent: "Launch",
          text: "Every week you receive the verified dossiers in your portal, with the trigger, the decision-maker and a hook for the first conversation.",
          note: "The first messages go out, and replies land directly with you.",
        },
        {
          ...processSteps[3],
          title: "Ongoing operation",
          accent: "operation",
          text: "We check existing cases weekly for changes, and your feedback flows into the search. That way it becomes more precise over time.",
          note: "You receive a weekly report, and we keep refining the messaging and target audience.",
        },
      ];

  const localizedFaqs = isDe
    ? faqs
    : [
        {
          question: "What does it cost?",
          answer:
            "The acquisition system starts at CHF 2,000 for setup, depending on target audience size and channels. Lead Scout runs from CHF 500 per month, with an initial term of three months. What it costs in your specific case, we'll tell you in the intro call — without any obligation on your part.",
        },
        {
          question: "Which of the two systems fits me?",
          answer:
            "If you or your team are already having conversations and just don't know who's worth the effort, Lead Scout is the right fit. If you need new conversations but don't have anyone actively doing outreach, it's the acquisition system. Combining both makes sense if you want to grow systematically. We'll figure this out together in a few minutes during the intro call.",
        },
        {
          question: "What if it doesn't work?",
          answer:
            "That can happen. If a target audience doesn't respond, we say so openly and adjust: messaging, segment, or channel. What we don't do is keep a campaign running that isn't delivering results just because it's paid for. And we generally work with an agreement that limits the risk for you - what that looks like depends on the project, and we discuss it before we start working together.\n\nFor Lead Scout, the following also applies: if we don't deliver a single dossier in the first month that matches the search profile we defined together, we refund the first monthly fee.",
        },
        {
          question: "How personal are the messages, really?",
          answer:
            "Every company is researched individually, and every message refers to its specific situation - not to a segment or an industry. You approve every text before the first message goes out, so you see exactly what's being sent in your name.",
        },
        {
          question: "How much time will this take me?",
          answer:
            "Before the start, we need little from you: the intro call, a short alignment on your target audience, and your approval of the texts. Once the campaign is live, replies come straight to you. You continue the conversation and schedule the meetings yourself. That's intentional, because from that point on, people are buying from you, not from a service provider. Expect to spend around an hour a week.\n\nWith Lead Scout, the effort is even lower: you receive the finished dossiers and decide who to reach out to. The research you'd otherwise have to do yourself is no longer necessary.",
        },
        {
          question: "Is it GDPR-compliant?",
          answer:
            "We run email outreach exclusively for Switzerland and the English-speaking world. For Germany and Austria, we work via LinkedIn, because cold email isn't legally clean there. We'd rather tell you upfront what won't work than let you run into a risk. All campaigns run with transparent sender details and a working opt-out.",
        },
        {
          question: "Can I take over the system myself later?",
          answer:
            "For the acquisition systems, yes: they run on your own accounts and access, and we hand over cleanly if you want to take over operations internally. With Lead Scout, all delivered dossiers belong to you. You can export them at any time and keep them even after our collaboration ends.",
        },
      ];

  const localizedCaseStudies = isDe ? caseStudiesDe : caseStudiesEn;
  const caseStudyQuote = localizedCaseStudies.find((caseStudy) => caseStudy.quote);

  useSeo({
    title: isDe
      ? "CrossMatic | Lead Scout – wöchentliche Dossiers für Schweizer Agenturen und Beratungen"
      : "CrossMatic | Lead Scout – Weekly Dossiers for Swiss Agencies and Consultancies",
    description: isDe
      ? "Jede Woche recherchierte Dossiers zu den Organisationen, bei denen gerade ein Auftrag entsteht. Jede Angabe mit Quelle belegt. Im Einsatz bei Farner Consulting."
      : "Researched dossiers every week on the organisations where a new mandate is taking shape right now. Every claim backed by a source. In use at Farner Consulting.",
    ogTitle: isDe
      ? "CrossMatic | Lead Scout – wöchentliche Dossiers für Schweizer Agenturen und Beratungen"
      : "CrossMatic | Lead Scout – Weekly Dossiers for Swiss Agencies and Consultancies",
    ogDescription: isDe
      ? "Jede Woche recherchierte Dossiers zu den Organisationen, bei denen gerade ein Auftrag entsteht. Jede Angabe mit Quelle belegt. Im Einsatz bei Farner Consulting."
      : "Researched dossiers every week on the organisations where a new mandate is taking shape right now. Every claim backed by a source. In use at Farner Consulting.",
    twitterTitle: isDe
      ? "CrossMatic | Lead Scout – wöchentliche Dossiers für Schweizer Agenturen und Beratungen"
      : "CrossMatic | Lead Scout – Weekly Dossiers for Swiss Agencies and Consultancies",
    twitterDescription: isDe
      ? "Jede Woche recherchierte Dossiers zu den Organisationen, bei denen gerade ein Auftrag entsteht. Jede Angabe mit Quelle belegt. Im Einsatz bei Farner Consulting."
      : "Researched dossiers every week on the organisations where a new mandate is taking shape right now. Every claim backed by a source. In use at Farner Consulting.",
  });
  const processTimelineData = localizedProcessSteps.map((item) => {
    return {
    title: (
      <>
        <span className="font-serif font-normal text-gold">{item.step}</span>{" "}
        {accentWords(item.title, [{ word: item.accent, white: true }])}
      </>
    ),
    content: (
      <div className={`${cardClass} relative p-5`}>
        <GlowingEffect
          spread={32}
          glow={false}
          disabled
          proximity={72}
          inactiveZone={0.2}
          borderWidth={1}
          variant="white"
        />
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          {item.icon === "dossier" && <FileSearch className="h-5 w-5 text-stone-200" />}
          {item.icon === "calibrate" && <SlidersHorizontal className="h-5 w-5 text-stone-200" />}
          {item.icon === "delivery" && <Inbox className="h-5 w-5 text-stone-200" />}
          {item.icon === "learn" && <BrainCircuit className="h-5 w-5 text-stone-200" />}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
        <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-muted-foreground md:text-sm">
          <span className="font-medium text-stone-200">{t.processNoteLabel}</span> {item.note}
        </p>
      </div>
    ),
    };
  });

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

    navbarObserver.observe(hero);

    return () => {
      navbarObserver.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-background text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="surface-glow-hover mx-auto mt-4 w-[min(94%,1040px)] rounded-xl border border-white/10 bg-background/80 px-3 py-3 backdrop-blur-md md:w-[min(86%,1040px)] md:px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <a href="#hero" className="inline-flex min-w-max items-center">
              <img src={crossmaticCLogo} alt="CrossMatic C Logo" className="h-10 w-auto object-contain md:h-[3.125rem]" />
            </a>
            <nav className="hidden items-center justify-center gap-5 text-sm text-slate-200/90 md:flex">
              <a href="#leistungen" className="transition-colors hover:text-white">
                {t.navServices}
              </a>
              <a href="#ergebnisse" className="transition-colors hover:text-white">
                {t.navResults}
              </a>
              <a href="#ueber-crossmatic" className="transition-colors hover:text-white">
                {t.navAbout}
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
              <SecondaryButton href="/termin" size="sm">
                {t.bookCall}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </header>

      <section ref={heroRef} id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-28 md:pt-32">
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <AnimatedWords text={t.heroKicker} baseDelay={0} step={110} />
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.03em] text-white md:text-6xl md:leading-[1.1] lg:whitespace-nowrap lg:text-[clamp(3rem,5.2vw,3.75rem)]">
              <AnimatedWords
                text={t.heroHeadline}
                baseDelay={550}
                step={110}
                highlightWord={t.heroHighlight}
                highlightClassName="font-serif text-[1.12em] font-normal italic tracking-normal text-gold"
              />
            </h1>
            <p className="text-lg text-muted-foreground">
              <span className="block">
                <AnimatedWords text={t.heroSub} baseDelay={1300} />
              </span>
              <span className="block">
                <AnimatedWords
                  text={t.heroProof}
                  baseDelay={1300 + t.heroSub.split(" ").length * 70}
                  wordClassName="font-semibold text-white"
                />
              </span>
            </p>
            <div
              className="animate-hero-rise-in flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center"
              style={{ animationDelay: "2200ms" }}
            >
              <AccentButton onClick={() => setIsDossierOpen(true)}>{t.heroMainCta}</AccentButton>
              <SecondaryButton href="/termin">{t.bookCall}</SecondaryButton>
            </div>
          </div>
          <HeroDossierPreview overviewLabel={t.heroPreviewOverview} proofs={t.heroProofCards} />
        </div>
      </section>

      <section className="w-full bg-background px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <SectionPill>{t.trustedByTitle}</SectionPill>
          </div>
          <div className="flex flex-nowrap items-start justify-center gap-x-4 overflow-x-auto sm:gap-x-6 md:gap-x-10">
            {[
              { name: "Farner Consulting AG", logo: farnerLogo },
              { name: "Arlicon AG", logo: arliconLogo },
              { name: "Büro Haeberli", logo: bueroHaeberliLogo },
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

      <section id="problem" className="relative w-full px-4 pb-20 pt-28 md:px-8 md:pt-36 lg:px-16">
        <CornerGlow className="-left-48 -top-48" />
        <div className="relative mx-auto max-w-6xl space-y-16">
          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <SectionPill>{t.problemTag}</SectionPill>
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {accentWords(t.problemTitle, [{ word: t.problemTitleAccent, gold: true }])}
            </h2>
            <LeadParagraph text={t.problemIntro} className="mx-auto max-w-xl text-sm md:text-base" />
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {t.problemPoints.map((point, index) => (
              <div
                key={point.title}
                className={`${cardClass} space-y-3 p-6 text-center md:p-7 md:text-left`}
              >
                <span className="block font-serif text-5xl leading-none text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="pt-2 text-lg font-medium text-white">{accentWords(point.title, [{ word: point.accent }])}</h3>
                <p className="text-sm text-muted-foreground">{point.body}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8 text-center">
            <p className="mx-auto max-w-2xl text-base font-medium text-white md:text-lg">{t.problemClosing}</p>
            <div>
              <AccentButton onClick={() => setIsDossierOpen(true)}>{t.heroMainCta}</AccentButton>
              <p className="mt-4 text-sm text-muted-foreground">
                {t.bookCallHint}{" "}
                <a href="/termin" className="font-medium text-gold transition-colors hover:text-gold/80">
                  {t.bookCall}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="relative w-full px-4 py-20 md:px-8 md:py-24 lg:px-16">
        <GuideLines />
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="whitespace-pre-line text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {accentWords(t.servicesTitle, [{ word: t.servicesTitleAccent, gold: true }])}
            </h2>
            <LeadParagraph text={t.servicesSub} className="mx-auto max-w-3xl text-sm md:text-base" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {renderServiceCard(leadScout, true)}
            {renderServiceCard(outreach)}
          </div>
        </div>
      </section>

      <section id="so-funktionierts" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {accentWords(t.howTitle, [{ word: t.howTitleAccent, gold: true }])}
            </h2>
            <LeadParagraph text={t.howSub} className="mx-auto max-w-2xl text-sm md:text-base" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {leadScoutSteps.slice(0, 2).map((step, index) => renderStepCard(step, index + 1))}
          </div>
          {leadScoutSteps.slice(2).map((step, index) => (
            <div key={step.label} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
              {renderStepCard(step, index + 3, index % 2 === 1 ? "md:order-2" : "")}
              {step.image ? (
                <img
                  src={step.image}
                  alt={step.imageAlt ?? step.title}
                  className="w-full rounded-2xl border border-white/10 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
                  {step.imagePlaceholder}
                </div>
              )}
            </div>
          ))}
          <QuoteFigure
            quote={t.howQuote}
            author={t.howQuoteAuthor}
            authorRole={t.howQuoteRole}
            authorImage={adrianKohlerPortrait}
            initials="AK"
          />
          <div className="text-center">
            <AccentButton onClick={() => setIsDossierOpen(true)}>{t.heroMainCta}</AccentButton>
            <p className="mt-4 text-sm text-muted-foreground">
              {t.bookCallHint}{" "}
              <a href="/termin" className="font-medium text-gold transition-colors hover:text-gold/80">
                {t.bookCall}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="akquise" className="relative w-full px-4 py-16 md:px-8 lg:px-16">
        <CornerGlow className="-right-48 top-0" />
        <div className="relative mx-auto max-w-6xl space-y-8">
          <div id="ergebnisse" className="scroll-mt-28 text-center">
            <SectionPill>{t.outreachResults}</SectionPill>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {localizedCaseStudies.map((caseStudy) => (
              <article
                key={caseStudy.title}
                className={`${cardClass} relative flex h-full flex-col p-6 md:p-8`}
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
                <h3 className="text-2xl font-medium">
                  {caseStudy.title.split(caseStudy.titleAccent).map((part, i) => (
                    <Fragment key={i}>
                      {i > 0 && <span className={`${serifAccentClass} text-gold`}>{caseStudy.titleAccent}</span>}
                      {serifNumbers(part, "text-white")}
                    </Fragment>
                  ))}
                </h3>
                <p className="mt-1 text-sm font-medium text-stone-400">{caseStudy.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{caseStudy.text}</p>
                <p className="mt-4 border-t border-white/10 pt-3 text-sm font-medium text-slate-100/90">
                  {serifNumbers(caseStudy.metrics.join(" · "))}
                </p>
                <div className="mt-auto pt-6">
                  {caseStudy.image ? (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <img src={caseStudy.image} alt={caseStudy.imageAlt} className="block w-full" loading="lazy" />
                    </div>
                  ) : (
                    <div className="flex aspect-[1024/501] w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
                      {caseStudy.imagePlaceholder}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          {caseStudyQuote && (
            <QuoteFigure
              quote={caseStudyQuote.quote}
              author={caseStudyQuote.author}
              authorRole={caseStudyQuote.authorRole}
              authorImage={caseStudyQuote.authorImage}
              initials="GB"
            />
          )}
          <figure className="space-y-3">
            <CaseStudyVideoPlayer src="/case-arlicon.mp4" labels={t.caseVideoLabels} />
            <figcaption className="text-center text-sm font-medium text-stone-400">{t.caseVideoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="ueber-crossmatic" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <SectionPill>{t.aboutTag}</SectionPill>
                <h2 className="pt-2 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
                  {accentWords(t.aboutTitle, [{ word: t.aboutTitleAccent, gold: true }])}
                </h2>
              </div>
              <div className="space-y-4">
                {t.aboutParagraphs.map((paragraph, index) =>
                  index === 0 ? (
                    <LeadParagraph key={index} text={paragraph} className="text-sm leading-relaxed md:text-base" />
                  ) : (
                    <p key={index} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            </div>
            <div
              className={`surface-glow-hover relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
                isDe ? "md:mt-16" : ""
              }`}
            >
              <img
                src={joshuaPortrait}
                alt={t.aboutName}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="prozess" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center">
            <SectionPill>{t.processTag}</SectionPill>
            <h2 className="pt-2 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {accentWords(t.processTitle, [{ word: t.processTitleAccent, gold: true }])}
            </h2>
          </div>
          <Timeline data={processTimelineData} />
        </div>
      </section>

      <section id="faq" className="w-full px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3 text-center">
            <SectionPill>{t.faqTag}</SectionPill>
            <h2 className="pt-2 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              {accentWords(t.faqTitle, [{ word: t.faqTitleAccent, gold: true }])}
            </h2>
          </div>
          <div className="space-y-3">
            {localizedFaqs.map((faq) => (
              <details key={faq.question} className={`group ${cardClass} relative rounded-xl p-5`}>
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
                  <span className="ml-2 inline-block text-stone-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative w-full px-4 pb-8 pt-14 md:px-8 md:pb-10 md:pt-16 lg:px-16">
        <CornerGlow className="-left-48 -top-24" />
        <div className="relative mx-auto max-w-4xl p-8 text-center md:p-12">
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
            {accentWords(t.contactTitle, [{ word: t.contactTitleAccent, gold: true }])}
          </h2>
          <LeadParagraph text={t.contactSub} className="mx-auto mt-4 max-w-xl text-sm md:text-base" />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AccentButton onClick={() => setIsDossierOpen(true)}>{t.heroMainCta}</AccentButton>
            <SecondaryButton href="/termin">{t.bookCall}</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="mt-4 w-full px-4 py-14 md:mt-6 md:px-8 lg:px-16">
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
                <a href="#ergebnisse" className="transition-colors hover:text-white">{t.navResults}</a>
                <a href="#ueber-crossmatic" className="transition-colors hover:text-white">{t.navAbout}</a>
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

      <DossierRequestDialog open={isDossierOpen} onOpenChange={setIsDossierOpen} />
    </main>
  );
};

export default Index;
