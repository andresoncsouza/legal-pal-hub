import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/atuacao", label: "Áreas de atuação" },
  { to: "/conteudo", label: "Conteúdos" },
  { to: "/faq", label: "Dúvidas" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded border border-gold/40 bg-primary/20 text-gold">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col border-b border-gold/40 pb-0.5">
            <span className="font-display text-lg font-bold leading-none tracking-tight text-white group-hover:text-gold transition-colors">
              ANDRESON COSTA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold mt-0.5">
              ADVOCACIA
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80"
          >
            AGENDAR ATENDIMENTO
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border bg-transparent text-foreground md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="container-tight flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/80"
            >
              AGENDAR ATENDIMENTO
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
