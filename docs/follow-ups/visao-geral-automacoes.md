---
title: Visão Geral de Follow-ups e Automações
description: Como funcionam os fluxos automáticos de reengajamento do Imobiturbo.OS — conversas que seguem sozinhas até fechar.
---

# Visão Geral de Follow-ups e Automações

A área de **Follow-ups** cuida dos **fluxos automáticos de reengajamento**: regras do tipo *"se o cliente ficou em silêncio, mande uma mensagem"* que rodam sozinhas, sem corretor na frente.

## Para que serve

Automatiza os cuidados de rotina que evitam perder venda:
- Cliente **novo que não respondeu** → mensagem automática depois de X horas;
- **Silêncio após proposta** → lembrete ou passagem para humano;
- **Mudança de etapa no funil** → acompanhamento na nova etapa;
- **Fim de conversa** → follow-up programado.

## Como funciona

1. **Fluxos**: você monta o passo a passo automático (gatilho → espera → condição → ação → fim) em um editor visual. Cada fluxo nasce como **rascunho** e precisa ser **publicado** para valer.
2. **Fila**: mostra os retornos **agendados/pendentes** — o que já está programado para acontecer (inclusive retornos combinados pelo agente de IA durante o atendimento).

![Fluxos de follow-up](/img/guias/follow-ups/04-fluxos-followup.png)

## O que cada fluxo pode fazer

- **Gatilho**: o evento que inicia o fluxo (ex.: *mensagem recebida*, *cliente em silêncio*, *mudança de etapa*).
- **Espera**: aguardar um tempo (horas/dias) antes de seguir.
- **Condição**: decidir o caminho (ex.: *cliente respondeu* → segue por um lado; *continuou em silêncio* → outro).
- **Ação**: enviar mensagem, aplicar etiqueta, chamar um humano, mover no funil.
- **IA**: alguns fluxos usam o **agente de IA** para classificar a conversa e decidir o próximo passo.

:::info[✅ Guardrails automáticos]
Os fluxos respeitam sempre os horários de atendimento, o **opt-out** (cliente que pediu para não receber mensagem) e a **proteção contra duplicidade** — o mesmo cliente não recebe a mesma mensagem duas vezes por engano.
:::

## O que acontece depois

- O agente de IA já pode agendar retornos durante a conversa — eles aparecem na **Fila**.
- Você acompanha a **Fila** e intervém quando necessário.
- Fluxos bem configurados reduzem drasticamente os itens do [Radar](/docs/radar/radar-de-risco).

## Próximos passos

- [Criar um fluxo de follow-up](/docs/follow-ups/criar-regra-de-automacao)
- [Publicar, desativar e testar fluxos](/docs/follow-ups/ativar-desativar-e-testar-regras)
- [Configurar e ativar um agente de IA](/docs/agentes-ia/configurar-e-ativar-agente)