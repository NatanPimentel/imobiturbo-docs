---
title: Configurar e Ativar um Agente de IA
description: Como criar a personalidade, as instruções de atendimento, o número de WhatsApp e as regras de passagem para um humano no seu agente de IA.
---

# Configurar e Ativar um Agente de IA

Configurar um agente de IA no Imobiturbo.OS leva poucos minutos e **não requer conhecimentos técnicos**.

## Para que serve

Define como a IA deve se comportar na conversa: nome, tom de voz, regras de negócio, instruções do atendimento, o número de WhatsApp em que atua e quando deve **passar para um humano**.

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- Já existe um **número de WhatsApp conectado** ([Conectar por QR Code](/docs/conexoes/conectar-whatsapp-qrcode) ou [API Oficial](/docs/conexoes/api-oficial-whatsapp)).

## Passo a passo

### Parte 1 — Criar o agente

1. No menu lateral, abra **Agentes IA**.
2. Clique em **+ Criar novo agente** (ou edite um agente existente).
3. A tela do agente abre na aba **Configuração**:

![Configuração de Agente de IA](/img/guias/agentes-ia/02-configurar-agente.png)

### Parte 2 — Preencher a configuração

- **Identificação**
  - **Nome**: como a IA se apresenta (ex.: *Sofia — Consultora Imobiliária*);
  - **Descrição**: uma linha sobre o papel do agente;
  - **Prioridade**: usada quando mais de um agente pode assumir.
- **Número de WhatsApp**: selecione a **sessão/número** em que este agente atende.
- **Quando este agente responde**: condições de acionamento (ex.: em qual situação ele assume a conversa).
- **Instruções gerais**: o que a IA deve e não deve fazer — aqui você pode **vincular as [Skills](/docs/agentes-ia/skills-da-ia)** da sua organização.
- **Mensagem de abertura**: como o agente começa o atendimento.
- **Estilo de resposta**: tamanho das mensagens, uso de listas, etc.
- **Handoff humano**: ativar a **passagem para corretor** quando o cliente pedir ou atingir o perfil (veja [Handoff humano e retomada](/docs/agentes-ia/handoff-humano-e-retomada)).
- **Casos humanos e Follow-up**: opcionais, ligam o agente aos fluxos de [Follow-ups](/docs/follow-ups/visao-geral-automacoes).

:::info[🔎 Limites técnicos (avançado)]
As opções de **max steps**, **token budget**, **custo máximo** e **janela de histórico** controlam recursos da IA. Para a maioria das imobiliárias, os valores padrão funcionam bem — mude apenas se a equipe Imobiturbo orientar.
:::

### Parte 3 — Publicar e ativar

1. Revise as instruções e a mensagem de abertura.
2. Clique em **Publicar** (ou **Salvar e publicar**). Um agente só atende depois de publicado.
3. Confira o **estado do agente** (veja [Estados do agente](/docs/agentes-ia/estados-do-agente)): ele deve estar **Ativo** e **Publicado**.

:::tip[🆕 Teste antes de ligar no número real]
Use a aba **Teste** do agente para conversar com ele antes de liberar no WhatsApp. Assim você ajusta o tom sem atender cliente de verdade.
:::

## Como saber que deu certo

- O agente aparece na lista de **Agentes IA** com o estado correto.
- Uma mensagem enviada para o número conectado recebe a resposta da IA em poucos segundos, identificada com o selo de IA na [Inbox](/docs/inbox/visao-geral-inbox).
- Na aba **Execuções** do agente você acompanha cada atendimento e o custo/uso.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| O agente não responde | Confira se o **número de WhatsApp** está conectado e se o agente está **publicado e ativo**. |
| O agente erra o tom | Ajuste as **Instruções gerais**, use as **Skills** e teste na aba **Teste**. |
| Não consigo salvar | Verifique se todos os campos obrigatórios estão preenchidos (nome, sessão, instruções). |
| O agente não usa o conhecimento | Vincule as bases na aba **Conhecimento** do agente (veja [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento)). |

## Próximos passos

- [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento)
- [Skills da IA](/docs/agentes-ia/skills-da-ia)
- [Roteadores de mensagens](/docs/agentes-ia/roteadores)
- [Memória da IA](/docs/agentes-ia/memoria-da-ia)