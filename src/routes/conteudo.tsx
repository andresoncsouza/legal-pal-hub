import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/conteudo")({
  component: ConteudoPage,
  head: () => ({
    meta: [
      { title: "Conteúdo Jurídico | Costa & Associados" },
      {
        name: "description",
        content:
          "Artigos, análises e orientações jurídicas para manter você informado sobre seus direitos e obrigações.",
      },
      { property: "og:title", content: "Conteúdo Jurídico | Costa & Associados" },
      {
        property: "og:description",
        content:
          "Artigos, análises e orientações jurídicas para manter você informado sobre seus direitos e obrigações.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ConteudoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container-tight section-padding text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Conteúdo jurídico
            </span>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-gold-light sm:text-5xl">
              Conhecimento que protege seus direitos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Artigos e análises preparados por nossos advogados para ajudar você a entender
              melhor o Direito e tomar decisões informadas.
            </p>
          </div>
        </section>

        <section className="container-tight section-padding">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col rounded border border-border bg-card transition-colors hover:border-gold/40"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-t bg-muted" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.date}</span>
                    <span className="text-border">|</span>
                    <span className="text-gold">{article.category}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-gold-light group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <Link
                    to="/conteudo"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                  >
                    Ler artigo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-ink-light">
          <div className="container-tight section-padding text-center">
            <h2 className="font-display text-2xl font-bold text-gold-light">
              Receba atualizações jurídicas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Cadastre-se para receber nossos artigos e informativos sobre mudanças na
              legislação e jurisprudência.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 rounded border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded bg-gold px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const articles = [
  {
    title: "Como funciona a prescrição de dívidas trabalhistas?",
    excerpt:
      "Entenda os prazos de prescrição para reclamações trabalhistas e quando é possível ainda buscar seus direitos.",
    date: "12 Ago 2026",
    category: "Trabalhista",
  },
  {
    title: "Guia básico de compliance para pequenas empresas",
    excerpt:
      "Práticas simples de compliance que podem proteger sua empresa contra riscos jurídicos e operacionais.",
    date: "05 Ago 2026",
    category: "Empresarial",
  },
  {
    title: "Direitos do consumidor: quando contratar um advogado?",
    excerpt:
      "Cobranças indevidas, produtos com defeito e serviços não prestados: saiba como agir e quando buscar ajuda.",
    date: "28 Jul 2026",
    category: "Civil",
  },
  {
    title: "Inventário extrajudicial: vantagens e requisitos",
    excerpt:
      "Conheça a forma mais rápida e econômica de partilha de bens entre herdeiros.",
    date: "21 Jul 2026",
    category: "Civil",
  },
  {
    title: "LGPD na prática: o que muda para sua empresa",
    excerpt:
      "Principais obrigações da Lei Geral de Proteção de Dados e como se adequar com segurança.",
    date: "14 Jul 2026",
    category: "Digital",
  },
  {
    title: "Defesa criminal em flagrante: primeiros passos",
    excerpt:
      "O que fazer e como agir em caso de prisão em flagrante para garantir os direitos do acusado.",
    date: "07 Jul 2026",
    category: "Penal",
  },
];
