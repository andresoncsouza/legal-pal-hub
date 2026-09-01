import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig, getWhatsappUrl } from "@/lib/site-config";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato | Andreson Costa Advocacia" },
      {
        name: "description",
        content:
          "Entre em contato com Andreson Costa. Agende seu atendimento e fale com um especialista.",
      },
      { property: "og:title", content: "Contato | Andreson Costa Advocacia" },
      {
        property: "og:description",
        content:
          "Entre em contato com Andreson Costa. Agende seu atendimento e fale com um especialista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContatoPage() {
  const whatsapp = getWhatsappUrl();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <section className="border-b border-border">
          <div className="container-page section-y text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Contato
            </span>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-navy sm:text-5xl">
              Fale com nossa equipe
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Preencha o formulário ou utilize um de nossos canais de atendimento. Retornaremos
              o mais breve possível.
            </p>
          </div>
        </section>

        <section className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      Endereço
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Av. Paulista, 1000, 18º andar
                      <br />
                      Bela Vista, São Paulo — SP, 01310-100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      Telefone
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {whatsapp ? (
                        <a
                          href={whatsapp}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="transition-colors hover:text-gold"
                        >
                          {siteConfig.phoneLabel}
                        </a>
                      ) : (
                        siteConfig.phoneLabel
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      E-mail
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      Horário de atendimento
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Segunda a sexta, das 9h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 rounded border border-border bg-card p-6 md:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-navy">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-navy">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-navy">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-navy">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full rounded border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecione uma área</option>
                  <option value="penal">Direito Penal</option>
                  <option value="crimes-economicos">Crimes Econômicos</option>
                  <option value="tributario">Direito Tributário</option>
                  <option value="previdenciario">Direito Previdenciário</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Descreva brevemente sua demanda"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
