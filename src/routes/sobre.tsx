import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Award, BookOpen, Scale, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre | Andreson Costa Advocacia" },
      {
        name: "description",
        content:
          "Conheça a história e os valores de Andreson Costa. Excelência e ética no exercício da advocacia e consultoria jurídica.",
      },
      { property: "og:title", content: "Sobre | Andreson Costa Advocacia" },
      {
        property: "og:description",
        content:
          "Conheça a história e os valores de Andreson Costa. Excelência e ética no exercício da advocacia e consultoria jurídica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <section className="border-b border-border">
          <div className="container-page section-y text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Sobre o escritório
            </span>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-navy sm:text-5xl">
              Excelência, ética e compromisso com o cliente
            </h1>
          </div>
        </section>

        <section className="container-page section-y">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              O escritório de <strong className="text-navy">Andreson Costa</strong>{" "}
              nasceu com o propósito de oferecer advocacia e consultoria jurídica de alta performance, pautada em
              valores sólidos: ética, transparência e excelência técnica.
            </p>
            <p>
              Construímos uma trajetória reconhecida pelo mercado e pela sociedade, atuando em
              casos complexos nas mais diversas áreas do Direito com formação acadêmica de
              excelência e visão estratégica.
            </p>
            <p>
              Atendemos pessoas físicas, empresas e instituições, sempre buscando soluções
              jurídicas sob medida que aliem segurança jurídica, eficiência e resultados
              concretos.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-offwhite">
          <div className="container-page section-y">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
                Nossos valores
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded border border-gold/30 bg-gold/5 text-gold">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page section-y">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              O Advogado
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conheça o profissional à frente do escritório.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded border border-border bg-card p-6"
              >
                <div className="mb-4 h-24 w-24 rounded-full bg-muted" />
                <h3 className="font-display text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
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

const values = [
  {
    title: "Ética",
    description: "Conduta irrepreensível em todas as relações profissionais.",
    icon: Scale,
  },
  {
    title: "Excelência",
    description: "Padrão elevado de qualidade técnica e atendimento.",
    icon: Award,
  },
  {
    title: "Compromisso",
    description: "Dedicamos nossa atenção integral aos interesses do cliente.",
    icon: Users,
  },
  {
    title: "Atualização",
    description: "Acompanhamento constante da legislação e jurisprudência.",
    icon: BookOpen,
  },
];

const team = [
  {
    name: "Dr. Andreson Costa",
    role: "Sócio fundador",
    bio: "Advogado com 30 anos de experiência em Direito Civil e Empresarial. Mestre em Direito pela USP.",
  },
  {
    name: "Dra. Marina Oliveira",
    role: "Sócia",
    bio: "Especialista em Direito Trabalhista e Previdenciário. Atua em causas de alta complexidade.",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Advogado",
    bio: "Focado em Direito Penal e compliance corporativo. Experiência em tribunais superiores.",
  },
];
