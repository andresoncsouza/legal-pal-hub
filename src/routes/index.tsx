import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, Scale, Shield, FileText, Users, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Costa & Associados | Advocacia de Excelência" },
      {
        name: "description",
        content:
          "Escritório de advocacia com tradição e excelência jurídica. Atuação estratégica em direito civil, empresarial, trabalhista e penal.",
      },
      { property: "og:title", content: "Costa & Associados | Advocacia de Excelência" },
      {
        property: "og:description",
        content:
          "Escritório de advocacia com tradição e excelência jurídica. Atuação estratégica em direito civil, empresarial, trabalhista e penal.",
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
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="container-tight section-padding text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  Tradição jurídica desde 1998
                </span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight text-gold-light sm:text-5xl md:text-6xl">
                Defesa de seus direitos com estratégia e excelência
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Atuamos com ética, compromisso e conhecimento técnico para oferecer
                soluções jurídicas personalizadas a pessoas e empresas.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contato">
                  <Button size="lg" className="w-full sm:w-auto">
                    Agendar consulta
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Conheça o escritório
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section className="container-tight section-padding">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Áreas de atuação
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-gold-light sm:text-4xl">
              Soluções jurídicas completas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Oferecemos assessoria e representação em diversas áreas do Direito,
              sempre com foco na melhor estratégia para cada cliente.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.title}
                className="group rounded border border-border bg-card p-6 transition-colors hover:border-gold/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gold-light">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="border-y border-border bg-ink-light">
          <div className="container-tight section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Por que nos escolher
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-gold-light sm:text-4xl">
                Compromisso com resultados
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {differentials.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gold-light">
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

        {/* CTA */}
        <section className="container-tight section-padding">
          <div className="mx-auto max-w-3xl rounded border border-gold/30 bg-gold/5 p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-gold-light sm:text-3xl">
              Precisa de orientação jurídica?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Entre em contato e agende uma consulta. Nossa equipe está pronta para
              analisar seu caso e apresentar a melhor solução.
            </p>
            <div className="mt-8">
              <Link to="/contato">
                <Button size="lg">
                  Fale com um advogado
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
    description:
      "Contratos, responsabilidade civil, direito das obrigações, família e sucessões.",
    icon: FileText,
  },
  {
    title: "Direito Empresarial",
    description:
      "Sociedades, contratos empresariais, recuperação judicial, compliance e governança.",
    icon: Users,
  },
  {
    title: "Direito Trabalhista",
    description:
      "Assessoria preventiva e contenciosa para empregados e empregadores.",
    icon: Scale,
  },
  {
    title: "Direito Penal",
    description:
      "Defesa técnica em todas as instâncias, acompanhamento em delegacias e tribunais.",
    icon: Shield,
  },
  {
    title: "Direito Administrativo",
    description:
      "Licitações, contratos públicos, improbidade, servidores públicos e regulatório.",
    icon: BookOpen,
  },
  {
    title: "Mediação e Arbitragem",
    description:
      "Resolução alternativa de conflitos com foco em agilidade e confidencialidade.",
    icon: Scale,
  },
];

const differentials = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada caso é analisado com atenção individualizada para construir a melhor estratégia.",
    icon: Users,
  },
  {
    title: "Transparência",
    description:
      "Comunicação clara e direta sobre prazos, custos e possibilidades de sucesso.",
    icon: Shield,
  },
  {
    title: "Excelência técnica",
    description:
      "Equipe atualizada e alinhada às constantes mudanças da legislação e jurisprudência.",
    icon: Scale,
  },
];
