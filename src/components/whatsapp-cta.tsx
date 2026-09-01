import { Phone } from "lucide-react";
import { ActionAnchor } from "@/components/actions";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";
import { getWhatsappUrl, siteConfig } from "@/lib/site-config";

export function WhatsAppCta({ className }: { className?: string }) {
  const url = getWhatsappUrl();

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 sm:flex-row", className)}>
      <ActionAnchor
        variant="whatsapp"
        href={url ?? "/contato"}
        target="_blank"
        rel="noreferrer noopener"
        className="w-full sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Falar com advogado
      </ActionAnchor>
      <ActionAnchor
        variant="phone"
        href={`tel:+55${siteConfig.whatsappNumber}`}
        className="w-full sm:w-auto"
      >
        <Phone className="h-4 w-4" />
        {siteConfig.phoneLabel}
      </ActionAnchor>
    </div>
  );
}
