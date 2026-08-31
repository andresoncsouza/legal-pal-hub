export const practiceAreas = [
  {
    number: "01",
    slug: "direito-penal",
    title: "Direito Penal",
    description:
      "Defesa técnica em todas as instâncias, acompanhamento em delegacias e tribunais.",
  },
  {
    number: "02",
    slug: "crimes-economicos",
    title: "Crimes Econômicos",
    description:
      "Atuação em fraudes, lavagem de capitais, crimes contra a ordem econômica e o mercado financeiro.",
  },
  {
    number: "03",
    slug: "direito-tributario",
    title: "Direito Tributário",
    description:
      "Assessoria em questões fiscais, contencioso tributário e defesa de direitos patrimoniais.",
  },
  {
    number: "04",
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    description:
      "Orientação em benefícios, aposentadorias, revisões e recursos junto ao INSS e à Justiça Federal.",
  },
];

export const pillars = [
  {
    number: "01",
    title: "Escuta",
    description: "Compreender o problema antes de buscar a solução.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Avaliar cenários e construir o caminho jurídico adequado.",
  },
  {
    number: "03",
    title: "Transparência",
    description: "Explicar possibilidades, riscos e etapas de forma clara.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "Você apresenta inicialmente a situação que necessita de orientação.",
  },
  {
    number: "02",
    title: "Consulta",
    description:
      "Conversamos sobre os fatos e identificamos as principais questões jurídicas.",
  },
  {
    number: "03",
    title: "Análise",
    description:
      "São avaliados documentos, legislação e demais elementos relevantes.",
  },
  {
    number: "04",
    title: "Estratégia",
    description:
      "São apresentados os caminhos jurídicos possíveis para o caso.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    description:
      "O cliente recebe informações sobre as etapas e o desenvolvimento da demanda.",
  },
];

/** Estrutura preparada para futura gestão de conteúdos (blog). */
export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export const articles: Article[] = [
  {
    slug: "justica-gratuita",
    category: "Justiça Gratuita",
    title: "Quem pode solicitar o benefício e como funciona sua análise?",
    excerpt:
      "A gratuidade da justiça é analisada a partir da comprovação da insuficiência de recursos para arcar com custas e despesas processuais.",
    date: "2026-05-12",
  },
  {
    slug: "aspectos-do-divorcio",
    category: "Direito de Família",
    title: "Quais aspectos devem ser considerados em um divórcio?",
    excerpt:
      "Guarda, convivência, alimentos e partilha de bens são temas que costumam exigir análise cuidadosa e individualizada.",
    date: "2026-04-28",
  },
  {
    slug: "cobranca-indevida",
    category: "Direito do Consumidor",
    title: "O que fazer diante de uma cobrança indevida?",
    excerpt:
      "Reunir documentos, registrar o contato com o fornecedor e compreender os prazos aplicáveis são passos relevantes.",
    date: "2026-04-09",
  },
];

export const faqItems = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro atendimento é destinado à compreensão da situação apresentada e à identificação das questões jurídicas relevantes.",
  },
  {
    question: "O atendimento pode ser realizado on-line?",
    answer:
      "Sim. Conforme a natureza da demanda e disponibilidade, o atendimento poderá ocorrer de forma presencial ou virtual.",
  },
  {
    question: "É possível garantir o resultado de um processo?",
    answer:
      "Não. A atuação jurídica envolve análise técnica e estratégica, mas nenhum resultado pode ser previamente garantido.",
  },
  {
    question: "Quanto tempo dura um processo?",
    answer:
      "A duração depende de diversos fatores e não pode ser determinada antecipadamente com precisão.",
  },
];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/atuacao", label: "Atuação" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/duvidas", label: "Dúvidas" },
  { to: "/contato", label: "Contato" },
] as const;
