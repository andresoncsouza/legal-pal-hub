import { createFileRoute } from "@tanstack/react-router";
import {
  convertToModelMessages,
  safeValidateUIMessages,
  streamText,
  type UIMessage,
} from "ai";
import { createLegalAssistantProvider } from "@/lib/ai/gateway.server";
import {
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai/run-id.server";

const MODEL = "google/gemini-3.5-flash";
const MAX_MESSAGES = 20;
const MAX_REQUEST_BYTES = 32_000;

const instructions = `Você é o Assistente Jurídico virtual do escritório Andreson Costa — Advocacia e Consultoria Jurídica, em Curitiba, Paraná.

Responda em português do Brasil, com linguagem clara, acolhedora e objetiva. Atenda somente perguntas gerais e educativas relacionadas a Direito Penal, Crimes Econômicos, Direito Tributário e Direito Previdenciário no contexto brasileiro.

Regras obrigatórias:
- Não dê parecer jurídico definitivo, não prometa resultados e não se apresente como advogado.
- Não invente leis, prazos, decisões ou fatos. Quando houver incerteza, diga isso claramente.
- Explique que detalhes do caso podem mudar a orientação e recomende atendimento profissional quando necessário.
- Não peça CPF, RG, senhas, dados bancários, número de processo ou outros dados pessoais sensíveis.
- Se houver prisão em andamento, risco imediato, audiência ou prazo próximo, oriente a procurar um advogado imediatamente. Em emergência, indique os serviços públicos competentes.
- Se a pergunta estiver fora das áreas do escritório, informe brevemente o limite e indique que a pessoa procure um profissional da área adequada.
- Não responda pedidos para burlar a lei, ocultar provas, fraudar tributos ou prejudicar terceiros.
- Prefira respostas curtas, normalmente de 2 a 5 parágrafos, usando listas apenas quando melhorarem a compreensão.
- Ao final de respostas que dependam do caso concreto, inclua: "Esta é uma informação geral e não substitui uma análise jurídica do seu caso."`;

function safeStreamError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  if (message.includes("402")) {
    return "O assistente está temporariamente indisponível por limite de uso. Tente novamente mais tarde.";
  }
  if (message.includes("429")) {
    return "Muitas perguntas foram enviadas em pouco tempo. Aguarde um momento e tente novamente.";
  }
  if (message.includes("403")) {
    return "O assistente está temporariamente indisponível. Tente novamente mais tarde.";
  }
  return "Não consegui responder agora. Tente novamente em instantes ou fale diretamente com o escritório.";
}

export const Route = createFileRoute("/api/legal-assistant")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentLength = Number(request.headers.get("content-length") ?? "0");
        if (contentLength > MAX_REQUEST_BYTES) {
          return new Response("A conversa ficou muito extensa. Recarregue a página para começar novamente.", {
            status: 400,
          });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response("Não foi possível ler a pergunta.", { status: 400 });
        }

        const rawMessages =
          body && typeof body === "object" && "messages" in body
            ? (body as { messages?: unknown }).messages
            : undefined;
        const validated = await safeValidateUIMessages<UIMessage>({ messages: rawMessages });

        if (!validated.success || validated.data.length === 0) {
          return new Response("Envie uma pergunta válida para o assistente.", { status: 400 });
        }
        if (validated.data.length > MAX_MESSAGES) {
          return new Response("A conversa atingiu o limite. Recarregue a página para começar novamente.", {
            status: 400,
          });
        }

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("O assistente ainda não está configurado.", { status: 401 });
        }

        const { provider, runIdFetch } = createLegalAssistantProvider(
          apiKey,
          getLovableAiGatewayRunId(request),
        );
        const result = streamText({
          model: provider(MODEL),
          system: instructions,
          messages: await convertToModelMessages(validated.data),
          abortSignal: request.signal,
        });
        const response = result.toUIMessageStreamResponse({
          originalMessages: validated.data,
          onError: safeStreamError,
        });

        return withLovableAiGatewayRunIdHeader(response, runIdFetch);
      },
    },
  },
});