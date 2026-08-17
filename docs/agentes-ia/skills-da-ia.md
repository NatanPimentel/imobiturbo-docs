---
title: Skills da IA — habilidades especializadas
description: O que são as Skills dos agentes de IA, como instalar do catálogo, criar a sua, editar e desinstalar no Imobiturbo.OS.
---

# Skills da IA — habilidades especializadas

As **Skills** são como "manuais de bolso" que o agente de IA consulta **só quando o assunto da conversa pede**. Em vez de decorar tudo o tempo todo, ele carrega a skill certa no momento certo — como *triagem de atendimento*, *qualificação de comprador* ou *agendamento de visita*.

## Para que serve

- A IA responde **melhor em cada assunto** sem que você reescreva um prompt gigante.
- Cada skill **só entra em ação quando o cliente toca no tema**: palavras-chave na mensagem ativam a skill.
- Você **instala prontas** do catálogo ou **cria as suas** (ex.: regras específicas da sua região ou empreendimento).

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- A tela fica no menu lateral: **Skills da IA**.

## Passo a passo

### Instalar uma skill do catálogo

1. No menu lateral, abra **Skills da IA**.
2. Na seção **Catálogo**, veja as skills prontas mantidas pela plataforma.
3. Clique em **Instalar** na skill desejada. Ela passa a aparecer em **Skills instaladas**.

![Skills da IA instaladas e catálogo](/img/guias/agentes-ia/05-skills-da-ia.png)

### Criar ou editar uma skill

1. Em **Skills instaladas**, clique em **Abrir e editar** na skill que quiser ajustar.
2. Preencha:
   - **Para que serve**: uma linha descrevendo a função — é por aqui que o agente decide se a skill é a certa;
   - **Quando acionar**: palavras-chave separadas por vírgula (ex.: `financiamento, entrada, parcela`). Se alguma aparecer na mensagem, o agente usa estas instruções;
   - **Sinais fracos (opcional)**: palavras que sugerem o assunto sem cravar — servem para a plataforma descobrir skills que faltam, não acionam sozinhas;
   - **Instruções**: o passo a passo que o agente deve seguir neste assunto (até 200 linhas; acima disso, quebre em skills menores).
3. Clique em **Salvar**. A skill passa a valer para os agentes da sua organização.

:::note[✏️ Skill do catálogo editada]
Ao salvar uma skill do catálogo, ela vira uma **cópia da sua organização**. O catálogo e as outras organizações não mudam.
:::

### Enviar uma skill pronta (arquivo .zip)

1. Clique em **Enviar skill (.zip)** no topo da tela.
2. Selecione o arquivo da skill (formato da plataforma) e confirme o envio. Ela entra na sua lista de **Skills instaladas**.

### Desinstalar uma skill

1. Em **Skills instaladas**, clique em **Desinstalar** na skill desejada.
2. Confirme a remoção. O agente deixa de usar aquela skill.

## Como saber que deu certo

- A skill aparece em **Skills instaladas** com a data de atualização.
- Durante um atendimento de teste no tema da skill, a IA segue o comportamento descrito nas **Instruções** (use a aba **Teste** do agente ou converse pelo WhatsApp).

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A IA não usa a skill | Confira as **palavras-chave** de "Quando acionar" — o agente precisa ver um desses termos na conversa. |
| A skill não aparece na lista | Verifique se você salvou a skill e se está na sua organização (gerentes e administradores veem a área completa). |
| O catálogo está vazio | Isso significa que você já instalou tudo o que a plataforma oferece — crie a sua própria skill. |

## Próximos passos

- [O que são Agentes de IA](/docs/agentes-ia/o-que-sao-agentes-ia)
- [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento)
- [Memória da IA](/docs/agentes-ia/memoria-da-ia)