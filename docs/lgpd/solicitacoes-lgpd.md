---
title: LGPD — solicitações de dados e anonimização
description: Como o Imobiturbo.OS trata as solicitações LGPD — exportar dados, anonimizar contato ou operação, aprovar com justificativa e acompanhar a trilha de auditoria.
---

# LGPD — solicitações de dados e anonimização

A área **LGPD** do Imobiturbo.OS centraliza as **solicitações de titulares** previstas na Lei Geral de Proteção de Dados: alguém pediu uma cópia dos dados, ou pediu para ter os dados apagados/anonimizados. O sistema organiza cada pedido, permite **revisar e aprovar com justificativa** e mantém a **trilha de auditoria** de tudo.

## Para que serve

- **Solicitação de dados**: alguém pediu uma cópia dos dados que a operação guarda sobre ele.
- **Anonimização de contato**: pedido para apagar/anonimizar os dados de um cliente específico.
- **Anonimização da operação (tenant)**: pedido que atinge os dados do seu negócio como um todo (ex.: encerramento de contrato).
- Manter **rastro completo** (quem aprovou, quando, com qual justificativa) para comprovar conformidade.

## Antes de começar

- Esta área exige **permissão específica** (LGPD) — normalmente restrita a administradores. Se o menu não aparece para você, peça ao admin.
- O menu é **LGPD → Solicitações**.

## Passo a passo

### Parte 1 — Ver as solicitações

1. No menu lateral, abra **LGPD → Solicitações**.
2. A tabela lista os pedidos com **status, tipo e SLA** (prazo de resposta).
3. Use os filtros de **status**, **tipo** e **SLA** para priorizar o que vence primeiro.

![Solicitações LGPD](/img/guias/lgpd/01-solicitacoes-lgpd.png)

![Contatos que podem originar uma solicitação de dados](/img/guias/contatos/01-lista-contatos.png)

> As linhas da lista foram ocultadas nesta imagem de exemplo (a tela real mostra as solicitações da sua conta).

### Parte 2 — Revisar uma solicitação

1. Clique na solicitação para abrir o detalhe.
2. Use o **painel de pré-visualização** para conferir quais dados estão envolvidos antes de aprovar.
3. Acompanhe a **linha do tempo de SLA** e o **histórico de auditoria** daquele pedido.

### Parte 3 — Aprovar (ou recusar) com justificativa

1. No detalhe, escolha **Aprovar**.
2. O sistema pede a **justificativa** (obrigatória) — registre o motivo.
3. Confirme. A ação (exportação ou anonimização) é **executada** e entra na **trilha de auditoria** com data, responsável e motivo.

:::warning[⚠️ Anonimização não é reversível]
Anonimizar apaga/desc caracteriza os dados de forma definitiva: **não é possível desfazer**. Revise a pré-visualização e a identidade do solicitante antes de aprovar.
:::

## Como saber que deu certo

- A solicitação muda de status na lista.
- A **trilha de auditoria** do pedido mostra a aprovação com data, usuário e justificativa.
- No caso de anonimização, os dados do contato deixam de aparecer nas telas do sistema.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| Aprovou por engano | Anonimização não tem volta — por isso a pré-visualização e a justificativa são etapas obrigatórias. Em dúvida, recuse e peça nova instrução. |
| Não vejo o menu LGPD | O acesso é por permissão específica — solicite ao administrador da conta. |
| Prazo apertando | Use o filtro de **SLA** para ver o que vence primeiro e priorize. |

## Próximos passos

- [Equipe — quem tem acesso](/docs/equipe/visao-geral-equipe)
- [Problemas comuns](/docs/problemas-comuns)