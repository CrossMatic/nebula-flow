import * as React from "react";

import { cn } from "@/lib/utils";

export interface SecondaryButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "default" | "sm";
}

// Zweitrangiger Button als Link: feiner heller Rahmen, transparenter Hintergrund, nie gold gefüllt.
const SecondaryButton = React.forwardRef<HTMLAnchorElement, SecondaryButtonProps>(
  ({ className, size = "default", ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-white/20 bg-transparent font-medium text-white",
        "transition-all duration-300 hover:-translate-y-px hover:border-white/40 hover:bg-white/[0.04]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "sm" ? "rounded-lg px-3 py-1.5 text-sm" : "px-5 py-3 text-base",
        className,
      )}
      {...props}
    />
  ),
);
SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton };
