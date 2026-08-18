import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5541991979594?text=" +
  encodeURIComponent("Olá, gostaria de falar com um advogado especialista.");

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
