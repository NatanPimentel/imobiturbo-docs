---
title: Criar uma regra QUANDO / SE / ENTÃO
description: Passo a passo para criar regras de automação completas no Imobiturbo.OS — gatilho, condições e múltiplas ações.
---

# Criar uma regra QUANDO / SE / ENTÃO

Este tutorial é o **passo a passo genérico** para criar qualquer regra de automação — o caso com frase de anúncio tem o [tutorial específico aqui](/docs/automacoes/automacao-frase-do-anuncio).

![Editor de criação de regra QUANDO, SE e ENTÃO](/img/guias/follow-ups/02-criacao-regra-quando-se-entao.png)

![Fluxo de follow-up como exemplo de automação](/img/guias/follow-ups/02-criar-regra-automacao.png)

## Antes de começar

- Permissão de **automações/webhooks** (gerente/administrador).
- Menu **Webhooks → aba Automações**.

## Como fazer

1. Em **Webhooks → Automações**, clique em **+ Nova automação**.
2. **Nome**: algo claro (ex.: *Boas-vindas a lead novo*).
3. **QUANDO (gatilho)**: escolha o evento — *lead novo*, *mensagem recebida*, *mudança de etapa*, *tag adicionada*, *reunião concluída*, *lead fora do grupo do webinar*.
4. **SE (condições)**: adicione filtros (opcional):
   - Campo *Texto da mensagem* + **contém** + frase;
   - Campo *Formulário* + **é** + o Instant Form do anúncio;
   - Campo *Etapa de destino* + **é** + etapa do funil;
   - Campo *Tags* + **contém** + tag;
   - Número de WhatsApp (bloco QUANDO).
5. **ENTÃO (ações)**: adicione **uma ou mais ações**:
   - *Ativar agente de IA*, *Criar/mover lead no funil*, *Enviar mensagem no WhatsApp*, *Enviar template pela API Oficial*, *Adicionar tag*, *Atribuir a um atendente*, *Avisar outro sistema (webhook)*.
6. Preencha os detalhes de cada ação (mensagem e número para envio; funil/etapa para o lead; tag; atendente; URL para webhook).
7. **Salve**.

:::info[➕ Múltiplas ações]
Uma regra pode executar **várias ações em sequência** — ex.: enviar mensagem + criar lead no funil + adicionar tag. Fica tudo no mesmo ENTÃO.
:::

## Exemplos prontos

**Boas-vindas para lead de formulário**
- QUANDO: entrar um lead novo → SE: formulário é *Formulário site* → ENTÃO: enviar mensagem "Oi `{{nome}}`, recebemos seu contato..." + criar lead em *Novo lead*.

**Alerta para o corretor**
- QUANDO: lead mudou de etapa → SE: etapa de destino é *Visita agendada* → ENTÃO: atribuir a um atendente + enviar mensagem ao corretor.

**Recuperação de webinar**
- QUANDO: lead não entrou no grupo do webinar → ENTÃO: enviar mensagem com novo link + adicionar tag *webinar pendente*.

## Como testar

1. Use um **caso real controlado** (envie a mensagem / crie o lead de teste).
2. Acompanhe a execução na aba **Atividade** (histórico de disparos com o que cada regra fez).
3. Ajuste condições e reenvie até o comportamento ficar o esperado.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| Erro ao salvar "campo obrigatório" | A mensagem do erro diz qual campo falta (nome, gatilho, ação...). Preencha e salve de novo. |
| A ação não roda | Confirme que a condição bate com o caso real e que o gatilho/evento está coberto pela regra. |
| Regra disparando demais | Adicione **condições** mais restritivas (formulário, número, frase específica). |

## Próximos passos

- [Automação pela frase do anúncio](/docs/automacoes/automacao-frase-do-anuncio)
- [Avisar outro sistema (webhooks)](/docs/automacoes/avancado-webhooks)