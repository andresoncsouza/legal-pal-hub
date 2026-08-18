import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes | Costa & Associados" },
      {
        name: "description",
        content:
          "Respostas para as dúvidas mais comuns sobre nossos serviços de advocacia, consultoria e honorários.",
      },
      { property: "og:title", content: "Perguntas Frequentes | Costa & Associados" },
      {
        property: "og:description",
        content:
          "Respostas para as dúvidas mais comuns sobre nossos serviços de advocacia, consultoria e honorários.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="container-tight section-padding text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Perguntas frequentes
            </span>
            <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-gold-light sm:text-5xl">
              Tire suas dúvidas
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Reunimos as principais perguntas sobre nossos serviços advocatícios. Se não
              encontrar sua resposta, entre em contato.
            </p>
          </div>
        </section>

        <section className="container-tight section-padding">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded border border-border bg-card px-6 data-[state=open]:border-gold/40"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-gold-light hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Na primeira consulta, ouvimos atentamente seu caso, identificamos os pontos jurídicos envolvidos e apresentamos as possíveis estratégias. Você recebe uma análise inicial clara e transparente sobre prazos, custos e probabilidades de sucesso.",
  },
  {
    question: "Quais são as formas de pagamento dos honorários?",
    answer:
      "Trabalhamos com honorários compatíveis com a complexidade de cada caso. Aceitamos pagamentos fixos, mensalidades ou honorários de êxito, conforme a natureza da demanda. Todas as condições são formalizadas em contrato.",
  },
  {
    question: "Atendem clientes de outras cidades ou estados?",
    answer:
      "Sim. Atuamos em todo o território nacional e utilizamos ferramentas digitais para manter uma comunicação próxima e eficiente, independentemente da localidade do cliente.",
  },
  {
    question: "Qual o prazo médio para resolução de um processo?",
    answer:
      "O prazo varia conforme a área do Direito, a instância e a complexidade do caso. Durante o atendimento, apresentamos uma estimativa realista e mantemos o cliente informado sobre cada etapa.",
  },
  {
    question: "É possível resolver conflitos sem ir à Justiça?",
    answer:
      "Sim. Sempre que possível, buscamos soluções extrajudiciais, como negociação, mediação e arbitragem, que são geralmente mais rápidas, econômicas e preservam relacionamentos.",
  },
  {
    question: "Como acompanho meu processo?",
    answer:
      "Oferecemos atualizações periódicas e estamos disponíveis para esclarecer dúvidas. Você também recebe informações sobre movimentações processuais relevantes e próximas etapas.",
  },
];
