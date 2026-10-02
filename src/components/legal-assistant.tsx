import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { BotMessageSquare, ShieldCheck } from "lucide-react";
import assistantAvatar from "@/assets/legal-assistant-avatar.png";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const suggestions = [
  "O que acontece em uma audiência de custódia?",
  "Quem pode pedir aposentadoria por idade?",
  "O que é um inquérito policial?",
];

function getVisibleError(message: string) {
  if (message.includes("429")) return "Muitas perguntas foram enviadas. Aguarde um momento.";
  if (message.includes("402")) return "O limite de uso do assistente foi atingido no momento.";
  return message || "Não consegui responder agora. Tente novamente em instantes.";
}

export function LegalAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/legal-assistant" }), []);
  const { messages, sendMessage, status, error, stop, clearError } = useChat({
    id: "legal-assistant-session",
    transport,
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open && status === "ready") {
      textareaRef.current?.focus();
    }
  }, [open, status]);

  const submitQuestion = (question: string) => {
    const text = question.trim();
    if (!text || busy) return;
    clearError();
    void sendMessage({ text });
    setInput("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="icon"
          aria-label="Abrir assistente jurídico virtual"
          className="fixed bottom-20 right-5 z-40 h-14 w-14 rounded-full border border-gold bg-navy p-2 text-primary-foreground shadow-xl transition-transform hover:scale-105 hover:bg-wine md:bottom-24 md:right-6"
        >
          <img
            src={assistantAvatar}
            alt=""
            width={816}
            height={816}
            className="h-10 w-10 object-contain"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="!inset-x-0 !top-0 !bottom-14 z-[70] flex !h-auto !w-auto !max-w-none !translate-x-0 !translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-gold/40 !bg-card p-0 shadow-2xl data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 sm:!left-auto sm:!right-6 sm:!top-auto sm:!bottom-40 sm:!h-[min(72dvh,42rem)] sm:!w-[26rem] sm:rounded-md">
        <header className="flex shrink-0 items-center gap-3 border-b border-border bg-navy px-4 py-3 pr-12 text-primary-foreground">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-background p-1.5">
            <img
              src={assistantAvatar}
              alt="Símbolo do assistente jurídico"
              width={816}
              height={816}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <DialogTitle className="font-display text-base text-primary-foreground">
              Assistente Jurídico
            </DialogTitle>
            <DialogDescription className="mt-1 flex items-center gap-1.5 text-[0.7rem] text-primary-foreground/75">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              Informações jurídicas gerais
            </DialogDescription>
          </div>
        </header>

        <Conversation className="min-h-0 bg-background">
          <ConversationContent className="gap-5 p-4">
            <Message from="assistant">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-navy">
                <BotMessageSquare className="h-4 w-4 text-gold" />
                Assistente virtual
              </div>
              <MessageContent>
                <MessageResponse>
                  Olá! Posso explicar temas gerais de **Direito Penal, Crimes Econômicos, Direito
                  Tributário e Direito Previdenciário**. Como posso ajudar?
                </MessageResponse>
              </MessageContent>
            </Message>

            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                {message.parts.map((part, index) =>
                  part.type === "text" ? (
                    <MessageContent
                      key={`${message.id}-${index}`}
                      className={
                        message.role === "user" ? "bg-navy text-primary-foreground" : undefined
                      }
                    >
                      <MessageResponse>{part.text}</MessageResponse>
                    </MessageContent>
                  ) : null,
                )}
              </Message>
            ))}

            {messages.length === 0 && (
              <div className="grid gap-2" aria-label="Perguntas sugeridas">
                {suggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    type="button"
                    variant="outline"
                    className="h-auto justify-start whitespace-normal border-border px-3 py-2 text-left text-xs font-normal leading-relaxed text-foreground"
                    onClick={() => submitQuestion(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}

            {status === "submitted" && (
              <Message from="assistant">
                <MessageContent>
                  <Shimmer className="text-sm">Analisando sua pergunta...</Shimmer>
                </MessageContent>
              </Message>
            )}

            {error && (
              <div
                role="alert"
                className="rounded border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive"
              >
                {getVisibleError(error.message)}
              </div>
            )}
          </ConversationContent>
          <ConversationScrollButton aria-label="Ir para a mensagem mais recente" />
        </Conversation>

        <div className="shrink-0 border-t border-border bg-card p-3">
          <PromptInput onSubmit={({ text }) => submitQuestion(text)}>
            <PromptInputTextarea
              ref={textareaRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Digite sua dúvida jurídica..."
              disabled={busy}
              className="min-h-20 text-sm"
              aria-label="Sua dúvida jurídica"
            />
            <PromptInputFooter className="justify-between">
              <span className="text-[0.65rem] text-muted-foreground">
                Não envie dados pessoais.
              </span>
              <PromptInputSubmit
                status={status}
                onStop={() => void stop()}
                disabled={!busy && !input.trim()}
                aria-label={busy ? "Parar resposta" : "Enviar pergunta"}
              />
            </PromptInputFooter>
          </PromptInput>
          <p className="mt-2 text-center text-[0.62rem] leading-relaxed text-muted-foreground">
            Respostas gerais por IA. Não substituem consulta ou parecer jurídico.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
