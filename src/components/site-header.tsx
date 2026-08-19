import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/content";
import { Logo } from "@/components/logo";
import { buttonStyles } from "@/components/actions";

/** overlay: header transparente sobre o hero, ganhando fundo sólido ao rolar. */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overlay && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "border-b border-border/70 bg-white/95 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo light={transparent} />

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "!text-gold" }}
              className={cn(
                "eyebrow text-[0.65rem] transition-colors",
                transparent ? "text-white/80 hover:text-gold" : "text-grey hover:text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className={transparent ? buttonStyles.outlineLight : buttonStyles.solid}
          >
            Agendar atendimento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden",
            transparent ? "border-white/30 text-white" : "border-border text-navy",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav aria-label="Navegação mobile" className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "!text-gold" }}
                className="eyebrow border-b border-border/60 py-4 text-[0.7rem] text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className={cn(buttonStyles.solid, "mt-6 mb-2 w-full")}
            >
              Agendar atendimento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
