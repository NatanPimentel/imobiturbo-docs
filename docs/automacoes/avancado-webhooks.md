---
title: Avisar outro sistema (Webhooks) — para operações com integrações
description: Como o Imobiturbo.OS recebe dados de outros sistemas e avisa outros softwares (webhooks) — conceito, configuração e segurança.
---

# Avisar outro sistema (Webhooks) — para operações com integrações

Se a sua operação usa **outros sistemas** (planilhas online, plataformas de anúncio, automações de marketing, sites), o Webhooks é a "ponte" entre eles e o Imobiturbo.OS.

![Aba Automações da área de Webhooks](/img/guias/webhooks/01-automacoes-regras.png)

![Histórico de atividade para conferir os disparos](/img/guias/follow-ups/03-logs-disparos-automaticos.png)

:::info[❓ O que é um webhook?]
Um **webhook** é uma forma de dois sistemas se avisarem sozinhos: quando algo acontece em um, ele "bate na porta" do outro com a informação. Ex.: quando um lead entra no Imobiturbo.OS, o sistema pode avisar o seu site ou a sua planilha automaticamente.
:::

## Para que serve

- **Receber dados**: um formulário do site ou outra plataforma **entrega leads** direto no Imobiturbo.OS (nas regras, o gatilho *quando entrar um lead novo* cobre essas fontes).
- **Avisar outros sistemas**: na ação *Avisar outro sistema (webhook)* de uma [regra de automação](/docs/automacoes/visao-geral-automacoes), o Imobiturbo.OS envia a informação adiante (ex.: notificar seu CRM externo ou o painel da loja).

## Onde fica

1. No menu lateral, abra **Webhooks**.
2. Abas da tela:
   - **Receber dados**: as fontes que entregam dados para o sistema;
   - **Automações**: as regras QUANDO/SE/ENTÃO (veja [visão geral](/docs/automacoes/visao-geral-automacoes));
   - **Atividade**: o histórico de tudo que entrou e saiu.

## Receber dados de uma fonte

1. Na aba **Receber dados**, veja as fontes já configuradas (formulários, landing pages, integrações).
2. Para uma fonte nova, copie a **URL de recebimento** que o Imobiturbo.OS disponibiliza e configure no sistema que envia os dados (site, formulário, plataforma).
3. Faça um **teste** entrando com um lead pela fonte e confira se ele aparece no funil.

## Avisar outro sistema

1. Crie a [regra de automação](/docs/automacoes/criar-regra-quando-se-entao) com a ação **Avisar outro sistema (webhook)**.
2. Informe a **URL** do sistema que deve receber o aviso.
3. A cada disparo, o sistema envia os dados do evento para essa URL (a execução fica registrada na aba **Atividade**).

## Segurança

- A **URL** do webhook é como uma porta de entrada: compartilhe apenas com sistemas que você controla.
- Para fontes que recebem dados, use apenas endpoints oficiais do Imobiturbo.OS — nunca cole URLs de outros clientes ou de treinamentos.
- Se um sistema não usa mais, **remova a fonte** para não receber dados por engano.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A fonte não entrega o lead | Conferir na aba **Atividade** se a entrega chegou; valide a URL e o formato na fonte. |
| Outro sistema não recebeu o aviso | Confira a **URL** na ação da regra e veja o disparo na **Atividade**. |
| Não sei se preciso disso | Webhooks são **opcionais** — para a maioria das operações, formulários Meta e WhatsApp já cobrem 100% da captura. Use só se tiver outra integração real. |

## Próximos passos

- [Regras de Automação — visão geral](/docs/automacoes/visao-geral-automacoes)
- [Automação pela frase do anúncio](/docs/automacoes/automacao-frase-do-anuncio)