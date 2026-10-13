import * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AccentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Pfeilfeld rechts ausblenden, z. B. während eines Ladezustands. */
  hideArrow?: boolean;
}

// Haupt-Button in der Akzentfarbe: dezentes Leuchten, Pfeil in einem eigenen Feld rechts.
const AccentButton = React.forwardRef<HTMLButtonElement, AccentButtonProps>(
  ({ className, children, hideArrow = false, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl py-1.5 pl-5 text-left text-base font-medium text-[#1c1812]",
        "bg-[linear-gradient(180deg,hsl(39_46%_68%),hsl(39_38%_56%))]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_0_1px_rgba(201,169,110,0.45),0_10px_32px_-8px_rgba(201,169,110,0.45)]",
        "transition-all duration-300 hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_0_1px_rgba(201,169,110,0.6),0_14px_40px_-8px_rgba(201,169,110,0.6)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-70",
        hideArrow ? "pr-5 py-3" : "pr-1.5",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
      {!hideArrow && (
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </button>
  ),
);
AccentButton.displayName = "AccentButton";

export { AccentButton };
