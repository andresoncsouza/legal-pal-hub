import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { RevealText } from "@/components/reveal-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/content";

const title = "Dúvidas frequentes | Andreson Costa Advocacia";
const description =
  "Respostas sobre atendimento, prazos processuais e funcionamento do trabalho jurídico.";

export const Route = createFileRoute("/duvidas")({
  component: DuvidasPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/duvidas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/duvidas" }],
  }),
});

function DuvidasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20 pb-16 md:pb-0">
        <section className="border-b border-border bg-offwhite">
          <div className="container-page section-y">
            <Reveal>
              <p className="eyebrow text-gold">Dúvidas frequentes</p>
              <RevealText
                as="h1"
                text="Perguntas comuns sobre o atendimento"
                className="display-lg mt-4 block max-w-2xl text-navy"
              />
            </Reveal>
          </div>
        </section>

        <section className="container-narrow section-y">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={item.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg text-navy">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
