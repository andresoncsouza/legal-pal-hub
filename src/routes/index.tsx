import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { RevealText } from "@/components/reveal-text";
import { Shield, Gavel, Landmark, Wallet, ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Andreson Costa | Advocacia e Consultoria Jurídica" },
      {
        name: "description",
        content:
          "Escritório de advocacia de Andreson Costa. Atuação estratégica em direito penal, crimes econômicos, tributário e previdenciário.",
      },
      { property: "og:title", content: "Andreson Costa | Advocacia e Consultoria Jurídica" },
      {
        property: "og:description",
        content:
          "Escritório de advocacia de Andreson Costa. Atuação estratégica em direito penal, crimes econômicos, tributário e previdenciário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="container-page section-y text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  Excelência jurídica e estratégica
                </span>
              </div>
              <RevealText
                as="h1"
                text="Defesa de seus direitos com estratégia e excelência"
                className="block font-display text-4xl font-bold leading-tight text-navy sm:text-5xl md:text-6xl"
              />
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Atuamos com ética, compromisso e conhecimento técnico para oferecer
                soluções jurídicas personalizadas em direito penal, crimes econômicos,
                tributário e previdenciário.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppCta />
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section className="container-page section-y">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Áreas de atuação
            </span>
            <RevealText
              as="h2"
              text="Soluções jurídicas especializadas"
              className="mt-3 block font-display text-3xl font-bold text-navy sm:text-4xl"
            />
            <p className="mt-4 text-muted-foreground">
              Oferecemos assessoria e representação nas áreas em que atuamos,
              sempre com foco na melhor estratégia para cada cliente.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area.title}
                className="group rounded border border-border bg-card p-6 transition-colors hover:border-gold/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
                {area.title === "Direito Penal" && (
                  <Link
                    to="/atuacao/direito-penal"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="border-y border-border bg-offwhite">
          <div className="container-page section-y">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Por que nos escolher
              </span>
              <RevealText
                as="h2"
                text="Compromisso com resultados"
                className="mt-3 block font-display text-3xl font-bold text-navy sm:text-4xl"
              />
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {differentials.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato + mapa */}
        <section className="container-page section-y">
          <div className="mx-auto max-w-3xl rounded border border-gold/30 bg-gold/5 p-8 text-center md:p-12">
            <RevealText
              as="h2"
              text="Precisa de orientação jurídica?"
              className="block font-display text-2xl font-bold text-navy sm:text-3xl"
            />
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Entre em contato e agende uma consulta. Nossa equipe está pronta para
              analisar seu caso e apresentar a melhor solução.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCta />
            </div>
          </div>
        </section>

        {/* Mapa em largura total */}
        <section className="w-full border-y border-border bg-card">
          <iframe
            title="Mapa — Curitiba, Paraná"
            src="https://maps.google.com/maps?q=Curitiba,+Paran%C3%A1,+Brasil&z=12&output=embed"
            className="h-72 w-full border-0 sm:h-80 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Curitiba%2C+Paran%C3%A1"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-2 border-t border-border px-4 py-3 text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold"
          >
            <MapPin className="h-3.5 w-3.5" />
            Ver no Google Maps
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const areas = [
  {
    title: "Direito Penal",
    description:
      "Defesa técnica em todas as instâncias, acompanhamento em delegacias e tribunais.",
    icon: Shield,
  },
  {
    title: "Crimes Econômicos",
    description:
      "Fraudes, lavagem de capitais, crimes contra a ordem econômica e o mercado financeiro.",
    icon: Gavel,
  },
  {
    title: "Direito Tributário",
    description:
      "Assessoria em questões fiscais, contencioso tributário e defesa de direitos patrimoniais.",
    icon: Landmark,
  },
  {
    title: "Direito Previdenciário",
    description:
      "Benefícios, aposentadorias, revisões e recursos junto ao INSS e à Justiça Federal.",
    icon: Wallet,
  },
];

const differentials = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada caso é analisado com atenção individualizada para construir a melhor estratégia.",
    icon: Shield,
  },
  {
    title: "Transparência",
    description:
      "Comunicação clara e direta sobre prazos, custos e possibilidades de sucesso.",
    icon: Gavel,
  },
  {
    title: "Excelência técnica",
    description:
      "Equipe atualizada e alinhada às constantes mudanças da legislação e jurisprudência.",
    icon: Landmark,
  },
];
