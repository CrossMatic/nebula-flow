const Impressum = () => {
  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rechtliches</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Impressum</h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/90">
          <p>CrossMatic</p>
          <p>Basel, Schweiz</p>
          <p>
            E-Mail:{" "}
            <a className="text-blue-300 hover:text-blue-200" href="mailto:joshua@getcrossmatic.com">
              joshua@getcrossmatic.com
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a className="text-blue-300 hover:text-blue-200" href="tel:+41787706058">
              +41 78 770 60 58
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
