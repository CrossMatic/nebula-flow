import GradientBackground from "@/components/GradientBackground";

const Index = () => {
  return (
    <>
      <GradientBackground />
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-7xl md:text-9xl font-extralight tracking-tight text-foreground">
            Lunivate
          </h1>
          <p className="text-lg text-muted-foreground">
            Enhance Your Business with Custom Automation Solutions.
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-secondary/80"
            >
              Download Our Automations
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
