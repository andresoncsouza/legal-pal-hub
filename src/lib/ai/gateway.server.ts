import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { createLovableAiGatewayRunIdFetch } from "./run-id.server";

export function createLegalAssistantProvider(apiKey: string, initialRunId?: string) {
  const runIdFetch = createLovableAiGatewayRunIdFetch(initialRunId);
  const provider = createOpenAICompatible({
    name: "lovable",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: runIdFetch.fetch,
  });

  return { provider, runIdFetch };
}