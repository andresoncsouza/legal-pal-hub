import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300";

export const buttonStyles = {
  solid: cn(base, "bg-navy text-white hover:bg-navy-dark"),
  gold: cn(base, "bg-gold text-navy-dark hover:brightness-95"),
  outline: cn(base, "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white"),
  outlineLight: cn(base, "border border-white/30 text-white hover:border-gold hover:text-gold"),
};

export function ActionAnchor({
  variant = "solid",
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { variant?: keyof typeof buttonStyles }) {
  return (
    <a className={cn(buttonStyles[variant], className)} {...rest}>
      {children}
    </a>
  );
}
