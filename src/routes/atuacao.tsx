import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Scale, FileText, Users, Shield, BookOpen } from "lucide-react";

export const Route = createFileRoute("/atuacao")({
  component: Atuacao,
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Andreson Costa" },
      {
        name: "description",
        content: "Conheça nossas especialidades jurídicas: Direito Civil, Empresarial, Trabalhista e mais.",
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
              Oferecemos soluções jurídicas completas e estratégicas para nossos clientes.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, direito das obrigações, família e sucessões.",
    icon: FileText,
  },
  {
    title: "Direito Empresarial",
    description: "Sociedades, contratos empresariais, recuperação judicial, compliance e governança.",
    icon: Users,
  },
  {
    title: "Direito Trabalhista",
    description: "Assessoria preventiva e contenciosa para empregados e empregadores.",
    icon: Scale,
  },
  {
    title: "Direito Penal",
    description: "Defesa técnica em todas as instâncias, acompanhamento em delegacias e tribunais.",
    icon: Shield,
  },
  {
    title: "Direito Administrativo",
    description: "Licitações, contratos públicos, improbidade, servidores públicos e regulatório.",
    icon: BookOpen,
  },
  {
    title: "Mediação e Arbitragem",
    description: "Resolução alternativa de conflitos com foco em agilidade e confidencialidade.",
    icon: Scale,
  },
];
