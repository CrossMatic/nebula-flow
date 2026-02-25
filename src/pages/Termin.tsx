const BOOKING_URL = "https://cal.com/crossmatic/call";

const Termin = () => {
  return (
    <main className="min-h-screen bg-[#02040a] px-4 py-8 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Termin</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Erstgespräch buchen</h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Wählen Sie direkt einen passenden Termin. Die Buchung erfolgt auf dieser Seite.
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm transition-colors hover:bg-white/10"
          >
            Zurück zur Startseite
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <iframe
            src={BOOKING_URL}
            title="CrossMatic Terminbuchung"
            className="h-[78vh] w-full min-h-[720px] border-0"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Falls das eingebettete Formular nicht lädt, öffnen Sie die Buchung direkt:
          {" "}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
            {BOOKING_URL}
          </a>
        </p>
      </div>
    </main>
  );
};

export default Termin;
