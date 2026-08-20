import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { articles } from "@/data/content";

const title = "Conteúdos jurídicos | Andreson Costa Advocacia";
const description =
  "Artigos e orientações de caráter informativo sobre direito civil, família, consumidor e imobiliário.";

export const Route = createFileRoute("/conteudos")({
  component: ConteudosPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conteudos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/conteudos" }],
  }),
});

function ConteudosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <section className="border-b border-border bg-offwhite">
          <div className="container-page section-y">
            <Reveal>
              <p className="eyebrow text-gold">Conteúdos</p>
              <h1 className="display-lg mt-4 max-w-2xl text-navy">
                Informação jurídica clara e responsável
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Textos de caráter informativo, sem promessa de resultado, para
                auxiliar na compreensão de temas jurídicos do dia a dia.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-page section-y">
          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 90} as="article">
                <div className="flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-gold">
                  <p className="eyebrow text-gold">{article.category}</p>
                  <h2 className="mt-4 font-display text-xl leading-snug text-navy">
                    {article.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-grey">
                    {new Date(article.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-t border-border pt-10">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-gold"
            >
              Precisa de orientação sobre um caso específico?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
