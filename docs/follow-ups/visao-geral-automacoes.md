---
title: Visão Geral de Automações e Follow-ups
description: Como funcionam as regras automáticas de acompanhamento, disparos de mensagens e organização de rotinas no Imobiturbo.OS.
---

# Visão Geral de Automações e Follow-ups

A central de **Follow-ups e Automações** permite criar regras automáticas baseadas em eventos para que sua imobiliária nunca deixe um cliente sem contato ou perca prazos importantes.

## Para que serve

Automatiza tarefas repetitivas como:
- Enviar mensagem de boas-vindas para leads que entram fora do horário comercial.
- Enviar lembrete automático de visita 2 horas antes do horário marcado.
- Fazer follow-up com clientes que pararam de responder após o envio de uma proposta.
- Aplicar tags automaticamente de acordo com as respostas do cliente.

![Lista de Regras de Automação](/img/guias/follow-ups/01-lista-automacoes.png)

## Como funcionam as regras

Cada automação é estruturada no padrão lógico **QUANDO / SE / ENTÃO**:

1. **QUANDO (Gatilho)**: O evento que dispara a automação (ex: *Novo lead cadastrado*, *Lead movido para Visita Agendada*, *Cliente sem resposta há 48h*).
2. **SE (Condições)**: Filtros opcionais para segmentar a regra (ex: *Apenas leads da tag "Lançamento"*, *Apenas no canal de WhatsApp X*).
3. **ENTÃO (Ações)**: As ações executadas automaticamente pelo sistema (ex: *Enviar mensagem de texto*, *Adicionar tag*, *Atribuir corretor*, *Mover no Kanban*).
