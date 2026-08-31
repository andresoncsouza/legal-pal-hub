import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Andreson Costa Advocacia — página inicial"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.05rem] font-normal tracking-[0.2em] transition-colors sm:text-lg",
          light ? "text-white" : "text-navy",
        )}
      >
        ANDRESON COSTA
      </span>
      <span className="mt-1.5 flex items-center gap-2">
        <span className="h-px w-6 bg-gold transition-all duration-300 group-hover:w-9" />
        <span
          className={cn(
            "eyebrow text-[0.6rem]",
            light ? "text-white/65" : "text-grey",
          )}
        >
          ADVOCACIA E CONSULTORIA JURÍDICA
        </span>
      </span>
    </Link>
  );
}
