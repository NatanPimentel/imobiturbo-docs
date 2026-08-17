---
title: Criar um Fluxo de Follow-up
description: Passo a passo para criar um fluxo automático de follow-up no Imobiturbo.OS — gatilho, espera, condições, ações e publicação.
---

# Criar um Fluxo de Follow-up

Criar um follow-up automático no Imobiturbo.OS é montar um **fluxo visual**: o que dispara, quanto tempo esperar, em qual condição seguir, e **o que fazer** ao final.

![Editor visual de criação de um fluxo de follow-up](/img/guias/follow-ups/02-criar-regra-automacao.png)

![Lista de fluxos antes de abrir o editor](/img/guias/follow-ups/01-lista-regras-followup-destaque.png)

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- O menu é **Follow-ups** na barra lateral → aba **Fluxos**.

## Passo a passo

### Parte 1 — Criar o fluxo

1. No menu lateral, abra **Follow-ups** → aba **Fluxos**.
2. Clique em **+ Novo fluxo**.
3. Dê um **nome** claro (ex.: *Lead novo sem resposta*).
4. O fluxo nasce como **rascunho** e abre o **editor visual**.

### Parte 2 — Montar as etapas

No editor, o fluxo é uma sequência de **etapas** ligadas por setas (arestas). Monte o caminho que a conversa deve seguir:

1. **Gatilho (início)**: escolha o evento que ativa o fluxo (ex.: *mensagem recebida*, *cliente em silêncio há X horas*, *mudança de etapa no funil*).
2. **Espera (opcional)**: defina o tempo de espera antes da próxima etapa (ex.: *aguardar 24 horas*).
3. **Condição**: para cada seta entre etapas, defina *"quando seguir por aqui"* (ex.: *cliente respondeu* / *continuou em silêncio*). Você pode usar o **agente de IA** para classificar a conversa quando a decisão for por assunto.
4. **Ação**: o que acontece ao final do caminho — **enviar mensagem**, **aplicar etiqueta**, **passar para humano**, **mover no funil**.
5. **Fim**: encerre o fluxo (ou ligue a outro fluxo para continuar o acompanhamento).

### Parte 3 — Escrever a mensagem

Ao configurar uma ação de mensagem, escreva o texto com **variáveis** do contato quando fizer sentido (ex.: `{{nome}}`, `{{imóvel}}`). O sistema preenche automaticamente com os dados do cliente.

### Parte 4 — Publicar

1. Revise o fluxo no editor.
2. Clique em **Publicar**. O fluxo passa a **valer de verdade** — antes disso, é só rascunho.

:::info[💡 Dica de começo]
Comece simples: *gatilho (mensagem recebida) → espera 24h → condição (cliente não respondeu) → ação (enviar mensagem) → fim*. Depois que funcionar, adicione novos caminhos.
:::

## Como saber que deu certo

- O fluxo aparece na lista com status **Publicado**.
- Ao reproduzir a situação (cliente em silêncio), a mensagem automática é disparada — confira no histórico do fluxo e na **Fila**.
- O disparo aparece no histórico/registro do fluxo com a conversa e a ação executada.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| O fluxo não dispara | Confira se ele está **Publicado** (rascunho não roda) e se o *gatilho* corresponde à situação real. |
| A mensagem não chega | Verifique horário de atendimento, **opt-out** do cliente e se o número/canal do fluxo está conectado. |
| Não consigo publicar | O editor valida o fluxo: preencha todas as etapas obrigatórias e ligue as setas corretamente. |
| Mensagem duplicada | Os guardrails evitam duplicidade; se acontecer, revise se há dois fluxos cobrindo o mesmo caso. |

## Próximos passos

- [Publicar, desativar e testar fluxos](/docs/follow-ups/ativar-desativar-e-testar-regras)
- [Visão geral de Follow-ups e Automações](/docs/follow-ups/visao-geral-automacoes)