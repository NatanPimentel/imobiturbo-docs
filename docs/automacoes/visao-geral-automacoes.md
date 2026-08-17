---
title: Regras de Automação — visão geral (QUANDO / SE / ENTÃO)
description: Como funcionam as regras de automação do Imobiturbo.OS — o padrão QUANDO/SE/ENTÃO que responde automaticamente a eventos do WhatsApp, do funil e dos contatos.
---

# Regras de Automação — visão geral (QUANDO / SE / ENTÃO)

As **regras de automação** são o "se isso acontecer, faça aquilo" do Imobiturbo.OS — sem programação. É com elas que você responde sozinho a mensagens dos anúncios, distribui leads, avisa outro sistema e muito mais.

## Para que serve

- **Responder automaticamente** quando chega uma mensagem com uma frase específica (ex.: a frase do seu anúncio de WhatsApp).
- **Criar ou mover um lead no funil** quando algo acontece (lead novo, mudou de etapa, ganhou tag).
- **Ativar um agente de IA**, **enviar mensagem**, **adicionar tag**, **atribuir atendente** ou **avisar outro sistema (webhook)**.
- Padronizar a operação: todo lead de um formulário recebe o mesmo tratamento.

## Como funciona

Cada regra segue o padrão **QUANDO / SE / ENTÃO**:

1. **QUANDO (gatilho)**: o evento que dispara — ex.: *quando entrar um lead novo*, *quando chegar mensagem no WhatsApp*, *quando um lead mudar de etapa*, *quando ganhar uma tag*.
2. **SE (condições)**: filtros opcionais — ex.: *texto da mensagem contém a frase "Quero uma visita"*, *formulário é o do anúncio X*, *número é o da equipe*.
3. **ENTÃO (ações)**: o que executar — ex.: *enviar mensagem no WhatsApp*, *ativar agente de IA*, *criar/mover lead*, *adicionar tag*, *atribuir a um atendente*, *avisar outro sistema*.

## Onde ficam as regras

1. No menu lateral, abra **Webhooks** (é o nome técnico do menu — por aqui você também configura "como o sistema recebe dados").
2. Na tela, abra a aba **Automações**.

![Regras de Automação (aba Automações)](/img/guias/webhooks/01-automacoes-regras.png)

![Fluxos de follow-up relacionados](/img/guias/follow-ups/01-lista-regras-followup.png)

## O que cada gatilho cobre

| Gatilho (QUANDO) | Exemplo de uso |
|---|---|
| Quando entrar um lead novo | Boas-vindas automática para leads de formulário/landing page |
| Quando chegar mensagem no WhatsApp | Resposta por **frase do anúncio** (veja o [tutorial específico](/docs/automacoes/automacao-frase-do-anuncio)) |
| Quando um lead mudar de etapa | Aviso/notificação da equipe |
| Quando um lead/contato ganhar uma tag | Seguimento automático por segmento |
| Quando uma reunião for realizada | Follow-up pós-reunião |
| Quando o lead não entrar no grupo do webinar | Recuperação de webinar |

## Como saber que uma regra está valendo

- A regra aparece na lista de **Automações** com o status correto (ativa).
- Em **Atividade** (ao lado de Automações) você vê o **histórico de disparos** de cada regra — reprodutível e auditável.
- Faça um **teste real controlado** (ex.: envie a mensagem com a frase) e confira o que a regra executou.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A regra não dispara | Confira se ela está **ativa** e se o gatilho/condição corresponde ao caso real (frasse exata? formulário certo?). |
| Resposta duplicada | Revise se **duas regras** cobrem o mesmo evento — a mesma situação não deve ter dois donos. |
| Não vejo o menu | Regras e webhooks exigem **permissão específica** — peça ao administrador. |

## Próximos passos

- [Automação pela frase do anúncio (passo a passo)](/docs/automacoes/automacao-frase-do-anuncio)
- [Criar uma regra QUANDO/SE/ENTÃO](/docs/automacoes/criar-regra-quando-se-entao)
- [Avisar outro sistema (webhooks)](/docs/automacoes/avancado-webhooks)