const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-12 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rechtliches</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Datenschutz</h1>
        <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/90">
          <p>
            Der Schutz Ihrer Daten ist uns wichtig. Diese Seite dient aktuell als Platzhalter für die vollständige
            Datenschutzerklärung.
          </p>

          <section>
            <h2 className="mb-2 font-semibold text-white">Video-Analyse (Lead Magnet)</h2>
            <p>
              Wenn Sie unser Formular für die kostenlose Video-Analyse ausfüllen, verarbeiten wir Ihre Angaben (Name,
              E-Mail, Firmenname, Branche, Kanäle, Problembeschreibung und optionale Zusatzinfos) ausschließlich zum
              Erstellen und Versand Ihres persönlichen Analyse-Videos. Die Daten werden über unseren Formular-Dienst
              (Formspree) übertragen und bei uns bzw. in verbundenen Tools (z.B. Airtable) gespeichert. Die
              Speicherdauer beträgt maximal 12 Monate nach letztem Kontakt, sofern Sie nicht vorher der Löschung
              zustimmen. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <p>
            Bei Fragen kontaktieren Sie uns unter{" "}
            <a className="text-blue-300 hover:text-blue-200" href="mailto:joshua@getcrossmatic.com">
              joshua@getcrossmatic.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
