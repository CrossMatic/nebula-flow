import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Check,
  CircleDot,
  ClipboardList,
  Code,
  Heart,
  Megaphone,
  Plug,
  ShoppingCart,
  Target,
  Users,
  UserPlus,
  UsersRound,
  CheckCircle,
} from "lucide-react";
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
import { cn } from "@/lib/utils";

const formSchema = z.object({
  industry: z.string().min(1, "Bitte wählen Sie eine Option."),
  problem: z.string().min(1, "Bitte wählen Sie eine Option."),
  company: z.string().min(2, "Bitte geben Sie Ihren Firmennamen ein."),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenverarbeitung zu." }),
  }),
});

export type LeadMagnetFormValues = z.infer<typeof formSchema>;

const N8N_WEBHOOK_URL = "https://joshuaaa18.app.n8n.cloud/webhook-test/c9bfade9-5edc-4f21-9a41-482addad2ed9";

const INDUSTRY_OPTIONS = [
  { value: "it-software", label: "IT & Software", icon: Code },
  { value: "beratung-coaching", label: "Beratung & Coaching", icon: Users },
  { value: "gesundheit", label: "Gesundheit", icon: Heart },
  { value: "immobilien-bau", label: "Immobilien & Bau", icon: Building },
  { value: "marketing-agentur", label: "Marketing & Agentur", icon: Megaphone },
  { value: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { value: "sonstiges", label: "Sonstiges", icon: CircleDot },
];

const PROBLEM_OPTIONS = [
  { value: "zu-wenig-neukunden", label: "Zu wenig Neukunden", icon: UserPlus },
  { value: "schlechte-conversion", label: "Genug Traffic, aber schlechte Conversion", icon: Target },
  { value: "repetitive-aufgaben", label: "Repetitive Aufgaben fressen zu viel Zeit", icon: ClipboardList },
  { value: "team-ueberlastet", label: "Team überlastet, zu wenig Kapazität", icon: UsersRound },
  { value: "prozesse-tools-kosten", label: "Prozesse oder Tools kosten zu viel", icon: Plug },
  { value: "sonstiges", label: "Sonstiges", icon: CircleDot },
];

const STEPS = [
  {
    key: "industry" as const,
    title: "In welcher Branche sind Sie?",
    type: "options" as const,
    options: INDUSTRY_OPTIONS,
    autoAdvance: true,
  },
  {
    key: "problem" as const,
    title: "Was ist Ihr grösstes Problem?",
    type: "options" as const,
    options: PROBLEM_OPTIONS,
    autoAdvance: true,
  },
  {
    key: "company" as const,
    title: "Wie heisst Ihr Unternehmen?",
    type: "text" as const,
    placeholder: "Firmenname",
    autoAdvance: false,
  },
  {
    key: "contact" as const,
    title: "Kontaktdaten",
    type: "contact" as const,
    autoAdvance: false,
  },
] as const;

const TOTAL_STEPS = STEPS.length;

export function LeadMagnetForm() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const form = useForm<LeadMagnetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      problem: "",
      company: "",
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

    try {
      const payload = {
        industry: values.industry,
        problem: values.problem,
        company: values.company,
        name: values.name,
        email: values.email,
        privacyConsent: values.privacyConsent,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Absenden. Bitte versuchen Sie es später erneut.");
      }

      setSubmittedName(values.name);
      setSubmittedEmail(values.email);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function goNext() {
    const fieldKey = currentStepConfig.key;
    if (fieldKey === "contact") {
      form.handleSubmit(onSubmit)();
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
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
        <GlowingEffect
          spread={34}
          glow={false}
          disabled
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
            <CheckCircle className="h-7 w-7 text-blue-200" />
          </div>
          <h3 className="text-xl font-semibold text-white md:text-2xl">Vielen Dank, {submittedName}!</h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Wir senden dir das Video in den nächsten 48 Stunden an{" "}
            <span className="font-medium text-white">{submittedEmail}</span>.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
      <GlowingEffect
        spread={34}
        glow={false}
        disabled
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
                            const autoAdvance = currentStepConfig.autoAdvance === true;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  field.onChange(opt.value);
                                  if (autoAdvance) {
                                    setDirection("forward");
                                    setTimeout(() => {
                                      setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
                                    }, 0);
                                  }
                                }}
                                className={cn(
                                  "group flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all",
                                  isSelected
                                    ? "border-blue-400/60 bg-blue-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                    : "border-white/10 bg-black/20 text-slate-200 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                                )}
                              >
                                {Icon && (
                                  <Icon className={cn("h-5 w-5 shrink-0", isSelected ? "text-blue-300" : "text-muted-foreground group-hover:text-blue-300")} />
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

                {currentStepConfig.type === "text" && (
                  <FormField
                    control={form.control}
                    name={currentStepConfig.key}
                    render={({ field }) => (
                      <FormItem>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-semibold text-white md:text-3xl">
                            {currentStepConfig.title}
                          </h3>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={currentStepConfig.placeholder}
                              className="border-white/10 bg-black/20 py-4 text-lg text-white placeholder:text-slate-500 focus-visible:ring-blue-400/50"
                              autoFocus
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </div>
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
                    <FormField
                      control={form.control}
                      name="privacyConsent"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-start gap-2.5 pt-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-0.5 shrink-0 border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                              />
                            </FormControl>
                            <label className="cursor-pointer text-xs leading-relaxed text-muted-foreground">
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
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons - hidden for auto-advance steps (Branche, Problem) */}
            {(step > 0 || !currentStepConfig.autoAdvance) && (
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
                {!currentStepConfig.autoAdvance && (
                  <div className="flex flex-1 justify-end">
                    <GlassButton
                      type="button"
                      onClick={goNext}
                      disabled={isSubmitting}
                      contentClassName="inline-flex items-center gap-2"
                    >
                      {currentStepConfig.key === "contact" ? (
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
                )}
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
