---
title: Publicar, Desativar e Acompanhar Fluxos
description: Como ativar, desativar, testar e acompanhar os fluxos de follow-up e a fila de retornos no Imobiturbo.OS.
---

# Publicar, Desativar e Acompanhar Fluxos

Depois que um fluxo de follow-up é criado, três ações completam o ciclo: **publicar** (ativar), **desativar** quando não quiser mais e **acompanhar** a fila de retornos.

## Publicar um fluxo

1. No menu lateral, abra **Follow-ups** → aba **Fluxos**.
2. Abra o fluxo em **rascunho** e monte as etapas no editor.
3. Clique em **Publicar**. O fluxo passa a ser executado nas novas conversas que correspondem ao gatilho.

## Desativar um fluxo

1. Na lista de fluxos, localize o fluxo.
2. Use o controle de **status** do fluxo (ou abra o fluxo e desative).
3. Confirme. O fluxo para de disparar — ele não é apagado, então você pode reativar depois.

:::info[💡 Alterar um fluxo publicado]
Ao **editar um fluxo publicado**, o sistema cria uma **nova versão**. A versão atual continua valendo até você **publicar a atualização** — assim uma edição incompleta nunca quebra o follow-up em produção.
:::

## Acompanhar a fila de retornos

1. Abra **Follow-ups** → aba **Fila**.
2. A fila mostra os **retornos agendados e pendentes**: quem será contatado, quando, por qual fluxo/agente e em que estado.
3. Você pode:
   - ver o que está **programado** para acontecer;
   - **intervir** manualmente quando necessário (assumir o contato);
   - confirmar que os **guardrails** (horário, opt-out, duplicidade) estão sendo respeitados.

Os retornos agendados pelo **agente de IA** durante o atendimento (quando ele combina "volto a falar amanhã às 10h" com o cliente) também aparecem aqui — a fila é o ponto único de controle.

## Como saber que deu certo

- Fluxos **Publicados** aparecem com o status correto na lista.
- A **Fila** mostra os retornos esperados para hoje/amanhã.
- Atrasos ou falhas aparecem no histórico do fluxo para diagnóstico.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| Quero parar um fluxo agora | **Desative** o fluxo. Retornos já agendados podem ser cancelados na Fila. |
| Editei mas nada mudou | Publique a **nova versão** — a antiga continua valendo até lá. |
| A fila está gigante | Confira os fluxos ativos: talvez um gatilho esteja amplo demais (ex.: todas as mensagens). Ajuste a condição. |

## Próximos passos

- [Visão geral de Follow-ups e Automações](/docs/follow-ups/visao-geral-automacoes)
- [Criar um fluxo de follow-up](/docs/follow-ups/criar-regra-de-automacao)
- [Radar de risco](/docs/radar/radar-de-risco)