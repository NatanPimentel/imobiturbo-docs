---
title: Equipe — membros, papéis e atendimento
description: Como gerenciar a equipe no Imobiturbo.OS — convidar membros, definir papéis, acompanhar SLA de resposta e configurar o rodízio de atendimento.
---

# Equipe — membros, papéis e atendimento

A tela **Equipe** é onde você gerencia quem trabalha no Imobiturbo.OS: quem entra, com qual papel, e como o atendimento é distribuído.

## Para que serve

- **Convidar membros** para a conta (corretores, gerentes etc.).
- Definir o **papel (permissão)** de cada pessoa.
- Acompanhar o **SLA de resposta** de cada corretor nos últimos 30 dias.
- Configurar o **rodízio de atendimento** (quem recebe a conversa nova).

## Antes de começar

- Você é **administrador** da conta para convidar e mudar papéis.
- O menu é **Equipe** na barra lateral, com as abas **Membros** e **Atendimento**.

## Papéis (permissões)

| Papel | O que pode fazer |
|---|---|
| **Visualizador** | Vê as telas, não atende nem altera. |
| **Corretor** | Atende conversas, conecta o próprio WhatsApp, trabalha no funil e nos contatos. |
| **Gestor (manager)** | Tudo do corretor + gerencia agentes de IA, follow-ups, automações e relatórios. |
| **Administrador** | Tudo do gestor + convida membros, muda papéis, configurações da conta. |

## Passo a passo

### Parte 1 — Convidar um membro

1. No menu lateral, abra **Equipe**.
2. Clique em **Convidar membros** (apenas administradores).
3. Informe o **e-mail** da pessoa.
4. Escolha o **papel** (Corretor, Gestor, Administrador...).
5. Envie o convite. A pessoa recebe um e-mail com o link para entrar (o link de convite tem validade — se expirar, reenvie).

### Parte 2 — Ajustar papéis

1. Na aba **Membros**, localize a pessoa na lista.
2. Use o seletor de **papel** ao lado do nome e confirme.
3. Para remover alguém, use a opção de remoção da lista (pode ser desfeita reconvidando).

![Membros da equipe](/img/guias/equipe/01-membros-equipe.png)

> As linhas da lista foram ocultadas nesta imagem de exemplo (a tela real mostra os membros da sua conta).

### Parte 3 — Atendimento: rodízio e SLA

1. Abra a aba **Atendimento**.

**Rodízio da equipe**

- Com o **rodízio ativo**, cada conversa nova entra na fila e é atribuída ao **próximo corretor disponível** — ninguém é sobrecarregado e nenhum lead fica sem dono.
- Pausado, a distribuição é **manual** (o time decide quem assume).
- A tela mostra o **próximo da fila** a receber o próximo contato.

**Desempenho de resposta (SLA)**

- Mostra, por corretor, quem está **respondendo dentro do prazo** nos últimos 30 dias.
- O limite padrão é **5 minutos sem resposta** — passou disso, o lead **transborda para o próximo da fila** (o tempo pode ser ajustado pela equipe).
- "Perdidos" = contatos que transbordaram enquanto o corretor era o responsável.

![Atendimento: rodízio e SLA](/img/guias/equipe/02-atendimento-sla.png)

## Como saber que deu certo

- O convidado aparece em **Membros** com o papel certo.
- Com o rodízio ativo, uma conversa nova cai com o próximo corretor da fila automaticamente.
- O painel de SLA mostra o tempo médio de resposta do seu time.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A pessoa não recebeu o convite | Confira Spam/Promoções e o e-mail digitado; o link vale por tempo limitado — reenvie. |
| A pessoa não vê as telas de IA/relatórios | O papel dela é **Corretor** ou **Visualizador** — suba para **Gestor** ou **Administrador**. |
| O rodízio não distribui | Confira se o **rodízio está ativo** e se há membros **ativos** na lista de atendentes. |

## Próximos passos

- [Desempenho (funil e atendentes)](/docs/desempenho/visao-geral-desempenho)
- [Visão geral da Inbox](/docs/inbox/visao-geral-inbox)