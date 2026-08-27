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
            question: "Was kostet das?",
            answer:
              "Das Akquise-System startet bei CHF 2'000 für den Aufbau, abhängig von Zielgruppengrösse und Kanälen. Der AI Lead Scout läuft ab CHF 1'000 pro Monat. Was es in Ihrem Fall konkret kostet, sagen wir Ihnen im Erstgespräch — ohne dass Sie sich zu etwas verpflichten.",
          },
          {
            question: "Welches der beiden Systeme passt zu mir?",
            answer:
              "Wenn Sie oder Ihr Team bereits Gespräche führen und nur nicht wissen, bei wem sich der Aufwand lohnt, ist der AI Lead Scout richtig. Wenn Sie neue Gespräche brauchen, aber niemanden haben, der aktiv akquiriert, ist es das Akquise-System. Beides zusammen ergibt Sinn, wenn Sie systematisch wachsen wollen. Im Erstgespräch klären wir das in wenigen Minuten.",
          },
          {
            question: "Was, wenn es nicht funktioniert?",
            answer:
              "Das kann vorkommen. Wenn eine Zielgruppe nicht reagiert, sagen wir das offen und passen an: Ansprache, Segment oder Kanal. Was wir nicht machen, ist eine Kampagne weiterlaufen zu lassen, die keine Ergebnisse liefert, nur weil sie bezahlt ist. Und wir arbeiten grundsätzlich mit einer Vereinbarung, die das Risiko für Sie begrenzt — wie die aussieht, hängt vom Projekt ab und besprechen wir vor der Zusammenarbeit.",
          },
          {
            question: "Wie persönlich sind die Nachrichten wirklich?",
            answer:
              "Jedes Unternehmen wird einzeln recherchiert, und jede Nachricht bezieht sich auf dessen konkrete Situation — nicht auf ein Segment oder eine Branche. Sie geben alle Texte frei, bevor die erste Nachricht rausgeht, und sehen damit genau, was in Ihrem Namen verschickt wird.",
          },
          {
            question: "Wie viel Zeit kostet mich das?",
            answer:
              "Vor dem Start brauchen wir wenig von Ihnen: das Erstgespräch, einen kurzen Abgleich zur Zielgruppe und Ihre Freigabe der Texte. Sobald die Kampagne läuft, kommen die Antworten direkt bei Ihnen an. Sie führen die Konversation weiter und vereinbaren die Termine selbst. Das ist Absicht, denn ab diesem Punkt kauft man von Ihnen und nicht von einem Dienstleister. Rechnen Sie mit etwa einer Stunde pro Woche.\n\nBeim AI Lead Scout ist der Aufwand noch geringer: Sie erhalten die fertigen Dossiers und entscheiden, wen Sie ansprechen. Die Recherche, die Sie sonst selbst machen müssten, entfällt.",
          },
          {
            question: "Ist das DSGVO-konform?",
            answer:
              "E-Mail-Akquise führen wir ausschliesslich für die Schweiz und den englischsprachigen Raum durch. Für Deutschland und Österreich arbeiten wir über LinkedIn, weil Cold E-Mail dort rechtlich nicht sauber umsetzbar ist. Wir sagen Ihnen lieber vorher, was nicht geht, als Sie in ein Risiko laufen zu lassen. Alle Kampagnen laufen mit transparenten Absenderangaben und funktionierender Abmeldemöglichkeit.",
          },
          {
            question: "Kann ich das System später selbst übernehmen?",
            answer:
              "Ja. Alle Systeme laufen auf Ihren eigenen Konten und Zugängen, Sie sind zu keinem Zeitpunkt bei uns eingesperrt. Wenn Sie den Betrieb später intern übernehmen wollen, übergeben wir sauber und erklären Ihrem Team, wie es funktioniert.",
          },
        ]
      : [
          {
            question: "What does it cost?",
            answer:
              "The acquisition system starts at CHF 2,000 for setup, depending on target audience size and channels. AI Lead Scout runs from CHF 1,000 per month. What it costs in your specific case, we'll tell you in the intro call — without any obligation on your part.",
          },
          {
            question: "Which of the two systems fits me?",
            answer:
              "If you or your team are already having conversations and just don't know who's worth the effort, AI Lead Scout is the right fit. If you need new conversations but don't have anyone actively doing outreach, it's the acquisition system. Combining both makes sense if you want to grow systematically. We'll figure this out together in a few minutes during the intro call.",
          },
          {
            question: "What if it doesn't work?",
            answer:
              "That can happen. If a target audience doesn't respond, we say so openly and adjust: messaging, segment, or channel. What we don't do is keep a campaign running that isn't delivering results just because it's paid for. And we generally work with an agreement that limits the risk for you - what that looks like depends on the project, and we discuss it before we start working together.",
          },
          {
            question: "How personal are the messages, really?",
            answer:
              "Every company is researched individually, and every message refers to its specific situation - not to a segment or an industry. You approve every text before the first message goes out, so you see exactly what's being sent in your name.",
          },
          {
            question: "How much time will this take me?",
            answer:
              "Before the start, we need little from you: the intro call, a short alignment on your target audience, and your approval of the texts. Once the campaign is live, replies come straight to you. You continue the conversation and schedule the meetings yourself. That's intentional, because from that point on, people are buying from you, not from a service provider. Expect to spend around an hour a week.\n\nWith AI Lead Scout, the effort is even lower: you receive the finished dossiers and decide who to reach out to. The research you'd otherwise have to do yourself is no longer necessary.",
          },
          {
            question: "Is it GDPR-compliant?",
            answer:
              "We run email outreach exclusively for Switzerland and the English-speaking world. For Germany and Austria, we work via LinkedIn, because cold email isn't legally clean there. We'd rather tell you upfront what won't work than let you run into a risk. All campaigns run with transparent sender details and a working opt-out.",
          },
          {
            question: "Can I take over the system myself later?",
            answer:
              "Yes. All systems run on your own accounts and access, so you're never locked in with us. If you want to take over operations internally later, we hand it over cleanly and walk your team through how it works.",
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
