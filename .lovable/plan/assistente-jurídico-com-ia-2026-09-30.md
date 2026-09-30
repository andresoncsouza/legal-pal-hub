# Assistente jurídico com IA

## Objetivo
Adicionar um segundo botão flutuante, alinhado à identidade vinho e champagne, para visitantes fazerem perguntas jurídicas simples sem substituir uma consulta profissional.

## Experiência
- Exibir um ícone próprio de assistente ao lado do WhatsApp no desktop e acima da barra do WhatsApp no celular.
- Abrir uma janela de conversa acessível, com apresentação breve, perguntas sugeridas e botão para fechar.
- Mostrar mensagens do visitante e respostas em português, com formatação legível.
- Manter o histórico enquanto a janela estiver aberta e enviar o contexto completo a cada nova pergunta.
- Informar claramente que as respostas são gerais, não constituem parecer jurídico e que casos urgentes ou específicos exigem atendimento humano.

## IA e segurança
- Usar um modelo Gemini disponível pelo Lovable AI Gateway, chamado somente no servidor.
- Limitar o assistente a orientações jurídicas gerais nas áreas do escritório: Direito Penal, Crimes Econômicos, Direito Tributário e Direito Previdenciário.
- Evitar diagnóstico definitivo, promessa de resultado ou solicitação de dados pessoais sensíveis.
- Exibir mensagens claras para indisponibilidade, limite de uso ou falha na resposta, sem reenviar automaticamente solicitações bloqueadas.

## Implementação técnica
- Criar a rota segura de conversa com streaming e validação da entrada.
- Usar os elementos oficiais de interface de chat para conversa, mensagens, campo de pergunta e estado de resposta.
- Integrar o assistente no layout global sem alterar textos, páginas ou estrutura existentes.
- Ajustar o posicionamento para não sobrepor o botão e a barra do WhatsApp.
- Validar a conversa real, a aparência em desktop e celular, os estados de carregamento/erro e a compilação do projeto.
