---
title: Base de Conhecimento (Conhecimento dos agentes)
description: Como montar a base de conhecimento dos agentes de IA no Imobiturbo.OS — perguntas frequentes, regras da operação e imóveis — e vincular cada base ao agente certo.
---

# Base de Conhecimento (Conhecimento dos agentes)

A **Base de Conhecimento** é o material que seus agentes de IA consultam para responder com informação **da sua empresa** — e não com o que ele "acha". É onde ficam as perguntas frequentes, as regras da operação e os dados dos imóveis.

## Para que serve

- A IA responde **com base no que você gravou**, nunca inventando valores ou imóveis fora da base.
- Você organiza o conhecimento em **bases separadas** (ex.: *Financiamento*, *MCMV*, *Médio padrão*) e decide **qual agente usa qual**.
- Perguntas novas e bem respondidas podem virar **aprendizados** automáticos (veja [Memória da IA](/docs/agentes-ia/memoria-da-ia)).

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- A tela fica no menu lateral: **Agentes IA → Conhecimento** (ou *Conhecimento* direto no menu).

## Passo a passo

### Parte 1 — Ver as bases da sua conta

1. No menu lateral, abra **Conhecimento** (na área de IA).
2. Você vê a **biblioteca de bases** da sua organização: "Perguntas frequentes", "Como vocês trabalham", "Atendimentos anteriores" etc.

![Bases de Conhecimento da conta](/img/guias/agentes-ia/07-bases-de-conhecimento.png)

### Parte 2 — Editar o conteúdo de uma base

1. Clique na base que quiser revisar.
2. Edite as perguntas e respostas, as regras ou os textos de apoio.
3. Salve. O conteúdo passa a valer para os agentes que usam aquela base.

### Parte 3 — Vincular a base ao agente certo

1. No menu lateral, abra **Agentes IA** e clique no agente desejado.
2. Na tela do agente, abra a aba **Conhecimento**.
3. Associe as bases que **este agente** deve consultar.
4. Salve (ou publique, se o agente estiver em rascunho).

:::info[💡 Uma base pode atender vários agentes]
O vínculo é de muitos-para-muitos: a mesma base (ex.: *Perguntas frequentes*) pode ser usada por vários agentes, e cada agente pode usar várias bases.
:::

## Como saber que deu certo

- A base aparece vinculada ao agente na aba **Conhecimento**.
- Em um teste na aba **Teste** do agente, pergunte algo que só a base sabe (ex.: uma regra da sua imobiliária): a resposta deve refletir o conteúdo gravado.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| O agente responde de forma genérica | Confirme se a **base correta está vinculada** ao agente na aba Conhecimento. |
| Não vejo uma base | Bases são da conta; confira se você está no perfil de gerente/administrador. |
| A resposta não bate com o texto gravado | Revise o texto da base — a IA segue o que está escrito; perguntas ambíguas geram respostas ambíguas. |

## Próximos passos

- [Skills da IA](/docs/agentes-ia/skills-da-ia)
- [Memória da IA](/docs/agentes-ia/memoria-da-ia)
- [Configurar e ativar um agente](/docs/agentes-ia/configurar-e-ativar-agente)