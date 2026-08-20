import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Termos de Uso | Andreson Costa Advocacia";
const description =
  "Condições de uso do site e caráter informativo do conteúdo publicado.";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
});

function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <div className="container-narrow section-y">
          <p className="eyebrow text-gold">Documento legal</p>
          <h1 className="display-lg mt-4 text-navy">Termos de Uso</h1>
          <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
            <p>
              O conteúdo deste site possui caráter exclusivamente informativo e
              não constitui consulta, parecer ou orientação jurídica
              individualizada.
            </p>
            <h2 className="font-display text-xl text-navy">Ausência de captação de clientela</h2>
            <p>
              Este site observa o Código de Ética e Disciplina da OAB e o
              Provimento nº 205/2021, não havendo qualquer forma de mercantilização
              da advocacia, promessa de resultado ou captação de clientela.
            </p>
            <h2 className="font-display text-xl text-navy">Relação profissional</h2>
            <p>
              O envio de mensagem pelo formulário de contato não cria, por si,
              relação de cliente e advogado, a qual depende de análise prévia e
              formalização.
            </p>
            <h2 className="font-display text-xl text-navy">Propriedade intelectual</h2>
            <p>
              Textos, marca e elementos visuais deste site são de titularidade do
              escritório, sendo vedada a reprodução sem autorização.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
