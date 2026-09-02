import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, Scale, Shield, Handcuffs, FileSearch, Gavel, Lock, BookOpen } from "lucide-react";

export const Route = createFileRoute("/atuacao/direito-penal")({
  component: DireitoPenalPage,
  head: () => ({
    meta: [
      { title: "Direito Penal | Andreson Costa" },
      {
        name: "description",
        content:
          "Atuação em Direito Penal: defesa em flagrante, audiência de custódia, inquérito, processo criminal, habeas corpus, recursos e execução penal.",
      },
      { property: "og:title", content: "Direito Penal | Andreson Costa" },
      {
        property: "og:description",
        content:
          "Atuação em Direito Penal: defesa em flagrante, audiência de custódia, inquérito, processo criminal, habeas corpus, recursos e execução penal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function DireitoPenalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        {/* Hero interno */}
        <section className="relative overflow-hidden border-b border-border bg-navy-dark">
          <div className="container-page section-y text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
                <Scale className="h-4 w-4 text-gold" />
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  Área de atuação
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Direito Penal
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Defesa técnica em todas as etapas do caso criminal, com atuação
                estratégica desde os primeiros atos até os incidentes executórios.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Etapas da atuação */}
        <section className="container-page section-y">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Como atuamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Defesa jurídica em diferentes etapas do caso criminal
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="group h-full rounded border border-border bg-card p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold transition-colors group-hover:bg-gold/10">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-page section-y">
          <div className="mx-auto max-w-3xl rounded border border-gold/30 bg-gold/5 p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Precisa de defesa criminal?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Entre em contato para uma conversa inicial. Cada caso é analisado
              com discrição e estratégia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppCta />
            </div>
          </div>
        </section>

        {/* Voltar */}
        <section className="container-page pb-16">
          <Link
            to="/atuacao"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para áreas de atuação
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const steps = [
  {
    title: "Prisão em flagrante",
    description:
      "Acompanhamento jurídico desde os primeiros atos, análise da legalidade da prisão e preparação para as medidas cabíveis.",
    icon: Handcuffs,
  },
  {
    title: "Audiência de custódia",
    description:
      "Preparação e atuação na audiência destinada à análise da prisão e da necessidade de manutenção ou substituição das medidas cautelares.",
    icon: Gavel,
  },
  {
    title: "Inquérito e investigação",
    description:
      "Orientação para depoimentos, acompanhamento em delegacia e análise dos elementos reunidos durante a investigação.",
    icon: FileSearch,
  },
  {
    title: "Processo criminal",
    description:
      "Construção da defesa, análise de provas, participação em audiências e acompanhamento das fases processuais.",
    icon: Scale,
  },
  {
    title: "Habeas corpus e cautelares",
    description:
      "Avaliação das medidas juridicamente adequadas diante de prisão, restrições de liberdade ou outras cautelares impostas.",
    icon: Shield,
  },
  {
    title: "Recursos e execução penal",
    description:
      "Atuação na revisão de decisões, recursos criminais, cumprimento de pena, progressão de regime e demais incidentes executórios.",
    icon: BookOpen,
  },
];
