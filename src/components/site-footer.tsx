import { Link } from "@tanstack/react-router";
import { Scale, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink-light">
      <div className="container-tight section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-gold/40 bg-primary/20 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col border-b border-gold/40 pb-0.5">
                <span className="font-display text-lg font-bold leading-none tracking-tight text-white">
                  ANDRESON COSTA
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold mt-0.5">
                  ADVOCACIA
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Excelência jurídica e consultoria estratégica. Atuamos com
              ética, transparência e dedicação para proteger seus interesses.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/atuacao"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Áreas de atuação
                </Link>
              </li>
              <li>
                <Link
                  to="/conteudo"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Dúvidas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Av. Paulista, 1000, 18º andar
                  <br />
                  Bela Vista, São Paulo — SP
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>contato@andresoncorta.adv.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Andreson Costa Advocacia. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
