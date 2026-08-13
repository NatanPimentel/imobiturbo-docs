# Relatório de Bugs e Observações Encontrados Durante a Documentação

Este relatório lista as inconsistências e pontos de atenção observados no Imobiturbo.OS durante o processo de mapeamento e documentação da Central de Ajuda. Nenhuma alteração foi realizada no código do CRM, respeitando a diretriz de isolamento da missão de documentação.

---

## 1. Falha de registro em chamadas assíncronas de sentimento sem agente ativo

**Tela**: Painel de Consumo / Inteligência Artificial  
**Fluxo**: Recepção de mensagem em organização sem agente de IA explicitamente vinculado ao canal.  
**Esperado**: O sistema deve classificar o sentimento ou ignorar silenciosamente sem gerar falha de chave estrangeira no registro de métricas.  
**Observado**: Em versões anteriores, o registro de invocação assíncrona tentava gravar `ai_invocations` com `agent_id` nulo em campo com restrição não-nula, omitindo o custo do relatório mensal.  
**Impacto**: Médio — métricas de consumo de IA ficavam subestimadas em organizações que utilizam apenas classificação passiva.  
**Evidência**: Documentado no histórico recente do CRM (`CHANGELOG.md`, migração 0108).

---

## 2. Visibilidade de fontes de captura sem regras associadas na aba Atividade

**Tela**: Webhooks / Fontes de Captação (`/app/webhooks`)  
**Fluxo**: Entrada de lead por formulário externo integrado direto via webhook sem passagem por regra de automação QUANDO/SE/ENTÃO.  
**Esperado**: Todo lead recebido deve aparecer na linha do tempo de eventos da fonte, independentemente de ter disparado automação.  
**Observado**: A aba Atividade filtrava apenas execuções de regras de automação, dando a impressão visual de que a fonte estava inativa mesmo quando o lead era criado com sucesso.  
**Impacto**: Baixo a Médio — causava dúvidas operacionais no usuário sobre o funcionamento do webhook.  
**Evidência**: Ajustado na release recente com unificação da timeline de eventos.

---

## 3. Barra de rolagem horizontal em quadros Kanban com alta densidade de cards

**Tela**: Quadro Kanban (`/app/kanban`)  
**Fluxo**: Navegação em telas de menor resolução com colunas contendo múltiplos cards carregados via scroll infinito.  
**Esperado**: A barra de rolagem horizontal deve permanecer sempre visível na base da janela visível (`100dvh`), sem exigir rolagem vertical até o fim de todas as colunas.  
**Observado**: O container pai anteriormente usava `min-h-[100dvh]`, fazendo o shell crescer e empurrando a barra horizontal para fora do viewport.  
**Impacto**: Alto para usabilidade — resolvido no `AppShell.tsx` com container de rolagem fixo.  
**Evidência**: Registro arquitetural em `AppShell.tsx`.
