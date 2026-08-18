import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/whatsapp-float";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Star,
  UserCheck,
  Users,
  Zap,
  Award,
  Search,
  Handshake,
  FileSignature,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import areaBloqueio from "@/assets/area-bloqueio.jpg";
import areaRural from "@/assets/area-rural.jpg";
import areaFraude from "@/assets/area-fraude.jpg";
import areaContrato from "@/assets/area-contrato.jpg";
import advogadoImg from "@/assets/advogado.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Advogado Bancário em Curitiba | Andreson Costa & Associados",
      },
      {
        name: "description",
        content:
          "Problemas com bancos? Atuamos em desbloqueio de contas, juros abusivos, fraudes bancárias, execuções e dívidas rurais. Atendimento em Curitiba e em todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Advogado Bancário em Curitiba | Andreson Costa & Associados",
      },
      {
        property: "og:description",
        content:
          "Defendemos seu patrimônio contra práticas abusivas de instituições financeiras. Diagnóstico do seu caso com advogado especialista.",
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
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-border">
          <img
            src={heroImg}
            alt="Fachada de edifício corporativo ao anoitecer"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
          <div className="container-tight relative py-24 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Direito Bancário
              </span>
              <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.06em] text-gold-light sm:text-4xl md:text-5xl">
                Problemas com instituições financeiras? Protegemos seus direitos
                e patrimônio
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Atuação estratégica contra cobranças abusivas, bloqueios
                judiciais e fraudes bancárias — presencial em Curitiba ou online
                em todo o Brasil.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Fale com um advogado especialista
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#solucoes">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Como podemos ajudar
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes" className="container-tight section-padding">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Como podemos te ajudar
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gold-light sm:text-4xl">
              Identifique se você está sendo lesado pelo banco e saiba como agir
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded border border-border bg-card transition-colors hover:border-gold/40"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="space-y-3 p-6">
                  <h3 className="font-display text-xl font-semibold text-gold-light">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  {s.bullets.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-gold">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Por que nos escolher */}
        <section className="border-y border-border bg-ink-light">
          <div className="container-tight section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Por que nos escolher?
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-gold-light sm:text-4xl">
                Especialistas em direito bancário. Defendemos seu patrimônio com
                agilidade, estratégia e compromisso.
              </h2>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r) => (
                <div key={r.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Fale com nossa equipe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="container-tight section-padding">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Depoimentos
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gold-light sm:text-4xl">
              Veja o que nossos clientes têm a dizer
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                Excelente — com base em 27 avaliações
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded border border-border bg-card p-6"
              >
                <Quote className="mb-4 h-6 w-6 text-gold" />
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm font-medium text-gold-light">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Processo */}
        <section className="border-y border-border bg-ink-light">
          <div className="container-tight section-padding">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Nosso processo
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-gold-light sm:text-4xl">
                Como funciona o atendimento
              </h2>
              <p className="mt-4 text-muted-foreground">
                Um caminho simples, transparente e estruturado, do primeiro
                contato até a defesa completa dos seus direitos.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="relative rounded border border-border bg-card p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/5 font-display text-lg text-gold">
                      {i + 1}
                    </span>
                    <step.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gold-light">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg">Solucionar meu caso</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="container-tight section-padding">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img
              src={advogadoImg}
              alt="Andreson Costa, advogado especialista em direito bancário"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded border border-border object-cover"
            />
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Sobre nós
              </span>
              <h2 className="font-display text-3xl font-bold text-gold-light sm:text-4xl">
                Experiência dedicada ao seu patrimônio
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                À frente da nossa equipe está o sócio Andreson Costa,
                especialista em Direito Empresarial e Bancário, que traz ampla
                experiência na área para conduzir cada caso com excelência e
                compromisso.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-gold-light">
                  Competência, transparência e respeito
                </strong>{" "}
                para atender nossos clientes com dedicação e alcançar os
                melhores resultados em cada demanda. Conte conosco para defender
                seus direitos.
              </p>
              <Link to="/sobre">
                <Button variant="outline">Conheça o escritório</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-y border-border bg-ink-light">
          <div className="container-tight section-padding text-center">
            <h2 className="mx-auto max-w-3xl font-display text-2xl font-bold text-gold-light sm:text-3xl">
              Não aceite propostas do banco sem antes consultar um advogado
              especialista!
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada dia sem agir pode te custar mais dinheiro.
            </p>
            <div className="mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Garanta seus direitos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-narrow section-padding">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Dúvidas frequentes
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gold-light sm:text-4xl">
              O que nossos clientes mais perguntam
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base text-gold-light">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Link to="/faq">
              <Button variant="outline">Ver todas as perguntas</Button>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

const solutions = [
  {
    title: "Bloqueio de Contas Bancárias",
    description:
      "Atuamos com agilidade na identificação da origem do bloqueio, contestando valores que não podem ser penhorados.",
    bullets: [
      "Defesa de verbas impenhoráveis (salário, aposentadoria, poupança).",
      "Análise do processo e impugnação da ordem judicial.",
    ],
    image: areaBloqueio,
  },
  {
    title: "Dívidas Rurais",
    description:
      "Defendemos produtores rurais em renegociações e revisões de dívidas agrícolas, combatendo juros e cobranças abusivas e evitando penhoras indevidas.",
    bullets: [],
    image: areaRural,
  },
  {
    title: "Fraudes Bancárias",
    description:
      "Atuamos nas esferas judicial e extrajudicial para recuperar o patrimônio de clientes vítimas de golpes envolvendo PIX, boletos falsos e fraudes em geral.",
    bullets: [],
    image: areaFraude,
  },
  {
    title: "Execuções Bancárias",
    description:
      "Garantimos que os bancos respeitem seus direitos, com estratégia personalizada para o seu caso.",
    bullets: [
      "Redução da dívida e defesa estratégica.",
      "Cobranças indevidas de seguros, taxas e tarifas.",
    ],
    image: areaContrato,
  },
  {
    title: "Juros Abusivos",
    description:
      "Se os juros cobrados estão acima da taxa de mercado, é possível revisar o contrato, reduzir a dívida e recuperar o que foi pago a mais.",
    bullets: [
      "Revisão de contratos bancários.",
      "Devolução de valores cobrados indevidamente.",
    ],
    image: areaBloqueio,
  },
  {
    title: "Orientação Financeira Inadequada",
    description:
      "Quando bancos oferecem aconselhamento inadequado e causam prejuízos, atuamos para responsabilizá-los e buscar a reparação dos danos.",
    bullets: [
      "Análise dos produtos financeiros oferecidos.",
      "Ação de reparação por perdas e danos.",
    ],
    image: areaContrato,
  },
];

const reasons = [
  {
    title: "Atendimento Personalizado",
    description:
      "Atendimento 100% dedicado, presencial em Curitiba ou online em todo o Brasil.",
    icon: UserCheck,
  },
  {
    title: "Carteira Limitada de Clientes",
    description:
      "Limitamos nossa carteira para garantir dedicação total e estratégias personalizadas.",
    icon: Users,
  },
  {
    title: "Agilidade e Estratégia",
    description:
      "Agimos com rapidez para desbloquear contas, reverter cobranças e recuperar valores.",
    icon: Zap,
  },
  {
    title: "Experiência Comprovada",
    description:
      "Anos de atuação em direito bancário protegendo patrimônios contra práticas abusivas.",
    icon: Award,
  },
];

const testimonials = [
  {
    name: "Ivonei",
    text: "Excelente profissional, deu atenção do início ao fim do processo. Amplo conhecimento na área e conseguiu reverter um processo difícil. Indico com certeza: preço justo, honestidade e profissionalismo.",
  },
  {
    name: "Thiago S.",
    text: "Atendimento muito transparente e acolhedor. Foi prestativo em todas as minhas dúvidas, inclusive fora do horário comercial. Só tenho a agradecer por todo o suporte. Recomendo muito.",
  },
  {
    name: "Thainá Santos",
    text: "Excelente atendimento! Conduziu com maestria a minha causa e no final deu tudo certo, problema solucionado. Super recomendo!",
  },
];

const steps = [
  {
    title: "Diagnóstico Inicial",
    description:
      "Fazemos um raio-x completo da sua situação: análise da dívida ou do processo, verificação de juros e encargos abusivos e de eventual execução judicial.",
    icon: Search,
  },
  {
    title: "Reunião de Alinhamento",
    description:
      "Apresentamos o diagnóstico e a estratégia de atuação, tirando todas as suas dúvidas — presencial agendado ou online em todo o Brasil.",
    icon: Handshake,
  },
  {
    title: "Procuração & Contrato",
    description:
      "Assinatura da procuração e do contrato de honorários. A partir daqui, cuidamos de tudo por você.",
    icon: FileSignature,
  },
];

const faqs = [
  {
    q: "Minha conta foi bloqueada judicialmente. O banco pode fazer isso sem me avisar?",
    a: "O bloqueio judicial pode ocorrer por ordem da Justiça, especialmente em processos de cobrança. No entanto, é possível apresentar defesa e requerer o desbloqueio de valores impenhoráveis, como salário, aposentadoria ou poupança até 40 salários mínimos.",
  },
  {
    q: "É possível se defender mesmo devendo ao banco?",
    a: "Sim. Mesmo que a dívida exista, é possível discutir abusos, juros excessivos, cláusulas ilegais e prescrição. A análise do contrato e do processo aponta irregularidades e alternativas de negociação ou redução do valor cobrado.",
  },
  {
    q: "Quais os riscos de uma execução bancária?",
    a: "Sem defesa técnica, a execução pode levar a bloqueio de contas, penhora de bens, veículos e imóveis, além de restrições de crédito. Agir rápido amplia as chances de reduzir a dívida e proteger seu patrimônio.",
  },
  {
    q: "Vocês atendem clientes de outras cidades e estados?",
    a: "Sim. O atendimento é presencial em Curitiba, com agendamento prévio, e online para clientes de todo o Brasil.",
  },
];
