import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealText } from "@/components/reveal-text";
import { Award, BookOpen, Scale, Users } from "lucide-react";
import andresonCostaBioAsset from "@/assets/andreson-costa-bio.jpg.asset.json";

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
            <RevealText
              as="h1"
              text="Excelência, ética e compromisso com o cliente"
              className="mx-auto mt-3 block max-w-3xl font-display text-4xl font-bold text-offwhite sm:text-5xl"
            />
          </div>
        </section>

        <section className="container-page section-y">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-offwhite/80">
            <p>
              O escritório de <strong className="text-offwhite">Andreson Costa</strong>{" "}
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

        <section className="border-y border-border bg-card">
          <div className="container-page section-y">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
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
                  <h3 className="font-display text-lg font-semibold text-offwhite">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-offwhite/75">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page section-y">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
              O Advogado
            </h2>
            <p className="mt-4 text-offwhite/80">
              Conheça o profissional à frente do escritório.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded border border-border bg-card p-6"
              >
                <img
                  src={andresonCostaBioAsset.url}
                  alt={member.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover object-top"
                />
                <h3 className="font-display text-lg font-semibold text-offwhite">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/75">
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
    bio: "Advogado atuante em Direito Civil e Empresarial, com atuação estratégica e técnica em demandas complexas.",
  },
];
