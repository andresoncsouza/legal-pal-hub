/**
 * Configurações centrais do site.
 * Para ativar o WhatsApp, defina VITE_WHATSAPP_NUMBER (formato: 5541999999999).
 * Enquanto estiver vazio, todos os CTAs direcionam para a página de contato.
 */
const rawWhatsapp = (import.meta.env["VITE_WHATSAPP_NUMBER"] as string | undefined) ?? "";

export const siteConfig = {
  name: "Andreson Costa Advocacia",
  lawyer: "Andreson Souza Costa",
  oab: "OAB/PR XXXXX",
  email: "contato@seudominio.com.br",
  city: "Curitiba – Paraná",
  hours: ["Segunda a sexta-feira", "08h às 18h"],
  phoneLabel: "(XX) XXXXX-XXXX",
  whatsappNumber: rawWhatsapp.replace(/\D/g, ""),
  whatsappMessage: "Olá! Gostaria de informações sobre atendimento jurídico.",
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export function getWhatsappUrl(): string | null {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;
}
