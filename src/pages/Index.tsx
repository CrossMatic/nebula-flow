import GradientBackground from "@/components/GradientBackground";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import crossmaticLogo from "@/assets/crossmatic-logo.png";

const Index = () => {
  return (
    <>
      <GradientBackground />
      <div className="relative flex min-h-screen flex-col items-center justify-center py-16">
        <section className="text-center space-y-4">
          <img
            src={crossmaticLogo}
            alt="CrossMatic"
            className="h-16 md:h-24 mx-auto"
          />
          <p className="text-lg text-muted-foreground">
            Automatisierte Lead-Generierung für B2B-Unternehmen
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/80"
            >
              Termin vereinbaren
              <span>→</span>
            </a>
          </div>
        </section>
      </div>

      <div className="relative py-24 px-4 md:px-8 lg:px-16">
        <section className="mx-auto max-w-4xl space-y-6">
          <WordFadeIn
            words="Mehr qualifizierte B2B-Leads durch automatisierte Outreach-Sequenzen."
            className="text-white md:text-5xl"
          />
          <p className="text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Wir kombinieren datengetriebene Zielgruppenrecherche mit personalisierten, mehrstufigen E-Mail- und
            LinkedIn-Kampagnen – komplett automatisiert, aber trotzdem individuell.
          </p>
        </section>
      </div>
    </>
  );
};

export default Index;
