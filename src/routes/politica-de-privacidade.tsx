import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

const title = "Política de Privacidade | Andreson Costa Advocacia";
const description =
  "Como tratamos os dados pessoais informados pelos usuários deste site, em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacidadePage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <div className="container-narrow section-y">
          <p className="eyebrow text-gold">Documento legal</p>
          <h1 className="display-lg mt-4 text-navy">Política de Privacidade</h1>
          <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Este site coleta apenas os dados informados voluntariamente pelo
              usuário no formulário de contato — nome, e-mail, telefone e a
              descrição da demanda.
            </p>
            <h2 className="font-display text-xl text-navy">Finalidade do tratamento</h2>
            <p>
              As informações são utilizadas exclusivamente para responder ao
              contato e avaliar a possibilidade de atendimento, nos termos da Lei
              nº 13.709/2018 (LGPD).
            </p>
            <h2 className="font-display text-xl text-navy">Compartilhamento</h2>
            <p>
              Os dados não são vendidos nem compartilhados com terceiros para
              finalidades comerciais, ressalvadas obrigações legais.
            </p>
            <h2 className="font-display text-xl text-navy">Sigilo profissional</h2>
            <p>
              As informações recebidas são tratadas com sigilo, observados os
              deveres éticos previstos no Estatuto da Advocacia e no Código de
              Ética e Disciplina da OAB.
            </p>
            <h2 className="font-display text-xl text-navy">Direitos do titular</h2>
            <p>
              O titular pode solicitar confirmação, acesso, correção ou exclusão
              dos seus dados pelo e-mail {siteConfig.email}.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
