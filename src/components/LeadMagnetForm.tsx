import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Check, Globe, Video } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GlassButton } from "@/components/ui/glass-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  industry: z.string().min(1, "Bitte wählen Sie eine Option."),
  problem: z.string().min(1, "Bitte wählen Sie eine Option."),
  teamSize: z.string().min(1, "Bitte wählen Sie eine Option."),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenverarbeitung zu." }),
  }),
});

export type LeadMagnetFormValues = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_LEAD_MAGNET_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_LEAD_MAGNET_ID}`
  : null;

const INDUSTRY_OPTIONS = [
  { value: "coaching", label: "Coaching & Beratung", icon: Briefcase },
  { value: "it", label: "IT & Tech", icon: Globe },
  { value: "finance", label: "Finanzen", icon: Briefcase },
  { value: "healthcare", label: "Healthcare", icon: Briefcase },
  { value: "logistics", label: "Logistik", icon: Globe },
  { value: "ecommerce", label: "E-Commerce", icon: Globe },
  { value: "other", label: "Sonstiges", icon: Briefcase },
];

const PROBLEM_OPTIONS = [
  { value: "no-leads", label: "Wenig oder keine Leads" },
  { value: "no-conversion", label: "Viele Leads, aber keine Conversion" },
  { value: "manual", label: "Manuelle Prozesse & CRM-Sync" },
  { value: "disconnected", label: "Disconnected Software-Tools" },
  { value: "communication", label: "Fragmentierte Kommunikation" },
];

const TEAM_OPTIONS = [
  { value: "1-10", label: "1–10 Mitarbeiter" },
  { value: "11-50", label: "11–50 Mitarbeiter" },
  { value: "51+", label: "51+ Mitarbeiter" },
];

const STEPS = [
  {
    key: "industry" as const,
    title: "In welcher Branche sind Sie?",
    type: "options" as const,
    options: INDUSTRY_OPTIONS,
  },
  {
    key: "problem" as const,
    title: "Was ist Ihr grösstes Problem?",
    type: "options" as const,
    options: PROBLEM_OPTIONS,
  },
  {
    key: "teamSize" as const,
    title: "Wie gross ist Ihr Team?",
    type: "options" as const,
    options: TEAM_OPTIONS,
  },
  {
    key: "contact" as const,
    title: "Kontaktdaten",
    type: "contact" as const,
  },
  {
    key: "privacyConsent" as const,
    title: "Einverständnis",
    type: "checkbox" as const,
  },
] as const;

const TOTAL_STEPS = STEPS.length;

export function LeadMagnetForm() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const navigate = useNavigate();

  const form = useForm<LeadMagnetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      problem: "",
      teamSize: "",
      name: "",
      email: "",
      privacyConsent: false,
    },
  });

  const currentStepConfig = STEPS[step];
  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  async function onSubmit(values: LeadMagnetFormValues) {
    setSubmitError(null);
    setIsSubmitting(true);

    if (!FORMSPREE_ENDPOINT) {
      setSubmitError(
        "Formular ist noch nicht konfiguriert. Bitte setzen Sie VITE_FORMSPREE_LEAD_MAGNET_ID in Ihrer .env."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          formData.append(key, String(value));
        }
      });

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Absenden. Bitte versuchen Sie es später erneut.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function goNext() {
    const fieldKey = currentStepConfig.key;
    if (fieldKey === "privacyConsent") {
      form.handleSubmit(onSubmit)();
      return;
    }

    if (fieldKey === "contact") {
      const nameOk = form.trigger("name");
      const emailOk = form.trigger("email");
      Promise.all([nameOk, emailOk]).then(([a, b]) => {
        if (a && b) {
          setDirection("forward");
          setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
        }
      });
      return;
    }

    const isValid = form.trigger(fieldKey);
    isValid.then((ok) => {
      if (ok) {
        setDirection("forward");
        setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
      }
    });
  }

  function goBack() {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }

  if (isSubmitted) {
    return (
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
        <GlowingEffect
          spread={34}
          glow={false}
          disabled={false}
          proximity={84}
          inactiveZone={0.2}
          borderWidth={1}
          variant="white"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 space-y-6 text-center"
        >
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            <Video className="h-7 w-7 text-blue-200" />
          </div>
          <h3 className="text-xl font-semibold text-white md:text-2xl">Analyse wird vorbereitet</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Du erhältst sie innerhalb von 48 Stunden per Email.
          </p>
          <div className="pt-2">
            <GlassButton onClick={() => navigate("/termin")} contentClassName="inline-flex items-center gap-2">
              Gespräch buchen
              <span>→</span>
            </GlassButton>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
      <GlowingEffect
        spread={34}
        glow={false}
        disabled={false}
        proximity={84}
        inactiveZone={0.2}
        borderWidth={1}
        variant="white"
      />

      <div className="relative z-10">
        {/* Progress bar */}
        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-wider text-blue-300/90">
            Schritt {step + 1} von {TOTAL_STEPS}
          </p>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
              initial={false}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="min-h-[220px]">
            {submitError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              >
                {submitError}
              </motion.p>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: direction === "forward" ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "forward" ? -40 : 40 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentStepConfig.type === "options" && (
                  <FormField
                    control={form.control}
                    name={currentStepConfig.key}
                    render={({ field }) => (
                      <FormItem>
                        <h3 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                          {currentStepConfig.title}
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {currentStepConfig.options.map((opt) => {
                            const Icon = "icon" in opt && opt.icon ? opt.icon : null;
                            const isSelected = field.value === opt.value;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => field.onChange(opt.value)}
                                className={cn(
                                  "flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all",
                                  isSelected
                                    ? "border-blue-400/60 bg-blue-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                    : "border-white/10 bg-black/20 text-slate-200 hover:border-white/20 hover:bg-white/5"
                                )}
                              >
                                {Icon && (
                                  <Icon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-300" : "text-muted-foreground")} />
                                )}
                                <span className="flex-1 font-medium">{opt.label}</span>
                                {isSelected && <Check className="h-5 w-5 shrink-0 text-blue-300" />}
                              </button>
                            );
                          })}
                        </div>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                )}

                {currentStepConfig.type === "contact" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {currentStepConfig.title}
                    </h3>
                    <p className="text-muted-foreground">
                      Wohin sollen wir deine Video-Analyse senden?
                    </p>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Dein Name"
                                className="border-white/10 bg-black/20 py-4 text-lg text-white placeholder:text-slate-500 focus-visible:ring-blue-400/50"
                                autoFocus
                              />
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
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="deine@email.de"
                                className="border-white/10 bg-black/20 py-4 text-lg text-white placeholder:text-slate-500 focus-visible:ring-blue-400/50"
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {currentStepConfig.type === "checkbox" && (
                  <FormField
                    control={form.control}
                    name="privacyConsent"
                    render={({ field }) => (
                      <FormItem>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-semibold text-white md:text-3xl">
                            Fast geschafft
                          </h3>
                          <p className="text-muted-foreground">
                            Zum Abschluss benötigen wir noch deine Einwilligung:
                          </p>
                          <div className="flex items-start gap-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-0.5 border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <label className="cursor-pointer text-sm font-normal text-slate-200">
                              Ich stimme der Verarbeitung meiner Daten zum Versand der Video-Analyse zu.{" "}
                              <a
                                href="/datenschutz"
                                className="underline hover:text-blue-300"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Datenschutzerklärung
                              </a>
                            </label>
                          </div>
                          <FormMessage className="text-red-300" />
                        </div>
                      </FormItem>
                    )}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="w-24">
                {step > 0 ? (
                  <GlassButton
                    type="button"
                    onClick={goBack}
                    contentClassName="inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück
                  </GlassButton>
                ) : null}
              </div>
              <div className="flex flex-1 justify-end">
                <GlassButton
                  type="button"
                  onClick={goNext}
                  disabled={isSubmitting}
                  contentClassName="inline-flex items-center gap-2"
                >
                  {currentStepConfig.key === "privacyConsent" ? (
                    <>
                      {isSubmitting ? "Wird gesendet…" : "Absenden"}
                      {!isSubmitting && <Check className="h-4 w-4" />}
                    </>
                  ) : (
                    <>
                      Weiter
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </GlassButton>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
