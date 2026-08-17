---
title: Memória da IA — regras da operação e aprendizados
description: Como usar a Memória da IA no Imobiturbo.OS — o documento com as regras gerais da operação, versões publicadas e aprendizados automáticos.
---

# Memória da IA — regras da operação e aprendizados

A **Memória da IA** é o "manual de conduta" da sua operação: um documento com as **regras gerais** que valem para **todos os agentes**, somado aos **aprendizados** que a plataforma acumula com o tempo.

## Para que serve

- **Regras gerais da casa** valem para qualquer atendimento (ex.: "nunca prometa condições sem consultar o corretor", "nunca invente imóveis ou preços", "horário de atendimento é das 9h às 18h").
- Diferente da [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento), que é conteúdo por assunto, a memória vale **para a operação inteira** — todos os agentes respeitam o mesmo documento.
- A plataforma **registra versões** do documento, então dá para voltar atrás se uma edição der errado.

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- A tela fica no menu lateral: **Memória da IA**.

## Passo a passo

### Parte 1 — Editar o documento da organização

1. No menu lateral, abra **Memória da IA**.
2. Edite o texto livremente: escreva as regras da operação em frases claras, como daria instruções a um estagiário novo.
3. Clique em **Publicar versão**.

![Memória da IA — documento da organização](/img/guias/agentes-ia/06-memoria-da-ia.png)

![Histórico usado pela memória da IA](/img/guias/agentes-ia/04-historico-interacoes-ia.png)

:::info[💡 Dicas de redação]
- Use frases diretas: "Você NUNCA faz X", "quando o cliente pedir Y, avise o corretor".
- Faça uma regra por linha/parágrafo.
- O que for específico de um assunto vai melhor na **Base de Conhecimento**; o que é regra da casa vai aqui.
:::

### Parte 2 — Acompanhar versões e voltar atrás

1. Abra o **histórico de versões** (cada publicação cria uma nova versão, ex.: *v1*, *v2* — com data).
2. Se uma edição não ficou boa, **restaure uma versão anterior**: o conteúdo volta para o editor e você confirma com *Publicar versão*.

### Parte 3 — Gerenciar aprendizados

Os **aprendizados** são anotações que a plataforma mantém sobre como a operação funciona (ex.: um atendimento exemplar registrado como prática).

1. Na seção de aprendizados, use **Adicionar aprendizado** (título + texto).
2. Aprenda itens podem ser **arquivados** quando deixarem de valer.

## Como saber que deu certo

- Ao publicar, aparece a confirmação "Versão **vN** publicada — já vale para todos os agentes".
- Em um teste, pergunte algo coberto por uma regra do documento e confira se o agente obedece.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| O agente não respeita uma regra | Revise se a regra está escrita de forma **inequívoca** no documento e se a versão foi **publicada** (rascunho não vale). |
| A memória parece não estar ativa | Confirme que a versão publicada é a mais recente e que o agente está publicado/ativo. |
| Regras conflitantes | Regras específicas (Base de Conhecimento) têm prioridade naquele assunto, mas regras contraditórias confundem a IA — mantenha o documento simples. |

## Próximos passos

- [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento)
- [Skills da IA](/docs/agentes-ia/skills-da-ia)
- [Roteadores de mensagens](/docs/agentes-ia/roteadores)