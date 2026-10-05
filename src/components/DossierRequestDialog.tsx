import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GlassButton } from "@/components/ui/glass-button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/language";

const DOSSIER_WEBHOOK_URL = "https://joshuaaa18.app.n8n.cloud/webhook-test/c2d8db23-eec7-4471-8d82-15b1a2dc1d11";

type DossierFormValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  targetCustomers: string;
  // Honeypot: hidden from people, bots tend to fill it in.
  fax: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-blue-400/50";

export function DossierRequestDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { language } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  const t = language === "de"
    ? {
        title: "Ihr Beispieldossier",
        intro:
          "Wir recherchieren einen echten Fall aus Ihrem Markt: eine Organisation, bei der gerade ein Anlass für Ihre Leistung entsteht. Kostenlos und unverbindlich.",
        name: "Name",
        email: "E-Mail",
        company: "Firma",
        website: "Website",
        targetCustomers: "Welche Kunden möchten Sie gewinnen?",
        targetCustomersPlaceholder: "z. B. Industriebetriebe in der Ostschweiz",
        optional: "optional",
        submit: "Dossier anfordern",
        sending: "Wird gesendet…",
        thanks: "Danke",
        success: "Sie erhalten Ihr Beispieldossier innerhalb von drei Arbeitstagen per E-Mail.",
        error: "Das hat leider nicht geklappt. Schreiben Sie mir direkt an",
        enterName: "Bitte geben Sie Ihren Namen ein.",
        enterEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        enterCompany: "Bitte geben Sie Ihre Firma ein.",
      }
    : {
        title: "Your sample dossier",
        intro:
          "We research a real case from your market: an organisation where a trigger for your service is emerging right now. Free and without obligation.",
        name: "Name",
        email: "Email",
        company: "Company",
        website: "Website",
        targetCustomers: "Which clients would you like to win?",
        targetCustomersPlaceholder: "e.g. industrial companies in Eastern Switzerland",
        optional: "optional",
        submit: "Request dossier",
        sending: "Sending…",
        thanks: "Thank you",
        success: "You will receive your sample dossier by email within three business days.",
        error: "Unfortunately that didn't work. Please write to me directly at",
        enterName: "Please enter your name.",
        enterEmail: "Please enter a valid email address.",
        enterCompany: "Please enter your company.",
      };

  const formSchema = z.object({
    name: z.string().trim().min(1, t.enterName),
    email: z.string().trim().email(t.enterEmail),
    company: z.string().trim().min(1, t.enterCompany),
    website: z.string(),
    targetCustomers: z.string(),
    fax: z.string(),
  });

  const form = useForm<DossierFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", website: "", targetCustomers: "", fax: "" },
  });

  function handleOpenChange(nextOpen: boolean) {
    if (status === "submitting") return;
    onOpenChange(nextOpen);
    if (!nextOpen) {
      setStatus("idle");
      form.reset();
    }
  }

  async function onSubmit(values: DossierFormValues) {
    if (status === "submitting") return;
    setFirstName(values.name.trim().split(/\s+/)[0]);

    // Honeypot filled: send nothing, but behave as if it worked.
    if (values.fax) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(DOSSIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          website: values.website.trim(),
          target_customers: values.targetCustomers.trim(),
          source: "website",
          submitted_at: new Date().toISOString(),
        }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 focus:outline-none bg-[#05070d] p-6 text-white sm:rounded-2xl md:p-8">
        <div className={status === "success" ? "sr-only" : "space-y-2 pr-6"}>
          <DialogTitle className="text-2xl font-semibold text-white">{t.title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">{t.intro}</DialogDescription>
        </div>

        {status === "success" ? (
          <div className="space-y-4 py-6 text-center">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              <CheckCircle className="h-6 w-6 text-blue-200" />
            </div>
            <p className="text-xl font-semibold text-white">
              {t.thanks}
              {firstName ? `, ${firstName}` : ""}.
            </p>
            <p className="mx-auto max-w-sm text-base leading-relaxed text-muted-foreground">{t.success}</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">{t.name}</FormLabel>
                    <FormControl>
                      <Input {...field} autoComplete="name" className={inputClassName} />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">{t.email}</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" autoComplete="email" className={inputClassName} />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">{t.company}</FormLabel>
                    <FormControl>
                      <Input {...field} autoComplete="organization" className={inputClassName} />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">
                      {t.website} <span className="font-normal text-muted-foreground">({t.optional})</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="url" autoComplete="url" placeholder="https://" className={inputClassName} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetCustomers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">
                      {t.targetCustomers} <span className="font-normal text-muted-foreground">({t.optional})</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} placeholder={t.targetCustomersPlaceholder} className={inputClassName} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="dossier-fax">Fax</label>
                <input id="dossier-fax" type="text" tabIndex={-1} autoComplete="off" {...form.register("fax")} />
              </div>

              {status === "error" && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {t.error}{" "}
                  <a href="mailto:joshua@getcrossmatic.com" className="underline hover:text-white">
                    joshua@getcrossmatic.com
                  </a>
                  .
                </p>
              )}

              <div className="pt-2">
                <GlassButton type="submit" disabled={isSubmitting} contentClassName="inline-flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      {t.submit}
                      <span>→</span>
                    </>
                  )}
                </GlassButton>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
