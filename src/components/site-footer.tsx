import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import { navLinks } from "@/data/content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { siteConfig, getWhatsappUrl } from "@/lib/site-config";

export function SiteFooter() {
  const whatsapp = getWhatsappUrl();

  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="container-page section-y">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.2em] text-white">ANDRESON COSTA</p>
            <span className="mt-2 gold-rule" />
            <p className="eyebrow mt-3 text-[0.6rem] text-white/60">ADVOCACIA E CONSULTORIA JURÍDICA</p>
            <p className="mt-6 text-sm">
              {siteConfig.lawyer}
              <br />
              Advogado | {siteConfig.oab}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow text-[0.6rem] text-gold">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-[0.6rem] text-gold">Contato</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.city}</li>
              <li>{siteConfig.hours.join(" — ")}</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to="/contato"
                  aria-label="WhatsApp — via página de contato"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-3xl border-t border-white/10 pt-8 text-xs leading-relaxed text-white/50">
          As informações disponibilizadas neste site possuem caráter exclusivamente
          informativo e não substituem orientação jurídica individualizada.
        </p>

        <div className="mt-8 flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.lawyer}. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/politica-de-privacidade" className="transition-colors hover:text-gold">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="transition-colors hover:text-gold">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
