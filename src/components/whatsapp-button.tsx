import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { getWhatsappUrl } from "@/lib/site-config";

/**
 * Desktop: botão circular discreto.
 * Mobile: barra fixa inferior "Falar com advogado".
 * O número é configurado em VITE_WHATSAPP_NUMBER; sem número, aponta para /contato.
 */
export function WhatsAppButton() {
  const url = getWhatsappUrl();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Falar pelo WhatsApp"
            className="flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-lg transition-all duration-300 hover:bg-whatsapp-dark hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        ) : (
          <Link
            to="/contato"
            aria-label="Agendar atendimento"
            className="flex items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-lg transition-all duration-300 hover:bg-whatsapp-dark hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </Link>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 md:hidden">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-14 items-center justify-center gap-2 bg-whatsapp text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com advogado
          </a>
        ) : (
          <Link
            to="/contato"
            className="flex min-h-14 items-center justify-center gap-2 bg-whatsapp text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com advogado
          </Link>
        )}
      </div>
    </>
  );
}
