import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/language";
import { useSeo } from "@/seo/useSeo";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const t =
    language === "de"
      ? { subtitle: "Ups! Seite nicht gefunden", back: "Zurück zur Startseite" }
      : { subtitle: "Oops! Page not found", back: "Return to Home" };

  useSeo({
    title: language === "de" ? "Seite nicht gefunden | CrossMatic" : "Page Not Found | CrossMatic",
    description:
      language === "de"
        ? "Die angeforderte Seite wurde nicht gefunden."
        : "The requested page could not be found.",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#02040a] px-4">
      <div className="surface-glow-hover w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.subtitle}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
