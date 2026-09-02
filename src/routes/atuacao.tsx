import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Shield, Gavel, Landmark, Wallet, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/atuacao")({
  component: Atuacao,
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Andreson Costa" },
      {
        name: "description",
        content: "Conheça nossas especialidades jurídicas: Direito Penal, Crimes Econômicos, Direito Tributário e Previdenciário.",
      },
    ],
  }),
});

function Atuacao() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <section className="container-page section-y">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Nossas Especialidades
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
              Áreas de atuação
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Atuamos de forma estratégica e técnica nas principais áreas de interesse do cliente.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.title}
                className="group rounded border border-border bg-card p-8 transition-colors hover:border-gold/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                  <area.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
                {area.title === "Direito Penal" && (
                  <Link
                    to="/atuacao/direito-penal"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const areas = [
  {
    title: "Direito Penal",
    description: "Defesa técnica em todas as instâncias, acompanhamento em delegacias e tribunais.",
    icon: Shield,
  },
  {
    title: "Crimes Econômicos",
    description: "Atuação em fraudes, lavagem de capitais, crimes contra a ordem econômica e o mercado financeiro.",
    icon: Gavel,
  },
  {
    title: "Direito Tributário",
    description: "Assessoria em questões fiscais, contencioso tributário, planejamento e defesa de direitos patrimoniais.",
    icon: Landmark,
  },
  {
    title: "Direito Previdenciário",
    description: "Orientação em benefícios, aposentadorias, revisões e recursos junto ao INSS e à Justiça Federal.",
    icon: Wallet,
  },
];
