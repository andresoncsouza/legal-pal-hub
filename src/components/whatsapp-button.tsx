import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { getWhatsappUrl } from "@/lib/site-config";

/**
 * Widget de WhatsApp fixo que acompanha todas as páginas.
 * Desktop: botão circular flutuante com tooltip.
 * Mobile: barra fixa inferior "Falar com advogado".
 * O número é configurado em VITE_WHATSAPP_NUMBER; sem número, aponta para /contato.
 */
export function WhatsAppButton() {
  const url = getWhatsappUrl();

  return (
    <>
      {/* Desktop: botão flutuante circular */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Falar pelo WhatsApp"
            className="group relative flex items-center"
          >
            <span className="absolute -inset-1 rounded-full bg-whatsapp/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-xl shadow-whatsapp/25 transition-all duration-300 hover:scale-110 hover:bg-whatsapp-dark">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-graphite px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Falar pelo WhatsApp
            </span>
          </a>
        ) : (
          <Link
            to="/contato"
            aria-label="Agendar atendimento"
            className="group relative flex items-center"
          >
            <span className="absolute -inset-1 rounded-full bg-whatsapp/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-xl shadow-whatsapp/25 transition-all duration-300 hover:scale-110 hover:bg-whatsapp-dark">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-graphite px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
              Agendar atendimento
            </span>
          </Link>
        )}
      </div>

      {/* Mobile: barra fixa inferior */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-whatsapp shadow-[0_-4px_20px_rgba(0,0,0,0.12)] md:hidden">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-14 items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com advogado
          </a>
        ) : (
          <Link
            to="/contato"
            className="flex min-h-14 items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com advogado
          </Link>
        )}
      </div>
    </>
  );
}
