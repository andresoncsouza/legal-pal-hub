import { Link } from "@tanstack/react-router";
import { Scale, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink-light">
      <div className="container-tight section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-gold/40 bg-ink text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-none tracking-tight text-gold-light">
                  Costa & Associados
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Excelência jurídica com tradição e compromisso. Atuamos com
              ética, estratégia e dedicação para proteger seus interesses.
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
                  to="/conteudo"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Conteúdo Jurídico
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-light"
                >
                  Perguntas Frequentes
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
                <span>contato@costaeadvogados.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Costa & Associados Advocacia. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
