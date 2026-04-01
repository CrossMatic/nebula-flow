import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Sparkles } from "lucide-react";

/**
 * Lokale Demo ohne externe Asset-URLs (keine Drittanbieter-Requests beim Laden).
 * Wird aktuell von keiner Produktionsseite importiert.
 */
function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="h-full w-full" duration={28} durationOnHover={42}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
          aria-hidden
        >
          <Sparkles className="h-7 w-7 text-blue-300/60" />
        </div>
      ))}
    </InfiniteSlider>
  );
}

export default {
  InfiniteSliderBasic,
};
