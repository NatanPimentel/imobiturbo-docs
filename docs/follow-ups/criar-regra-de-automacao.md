---
title: Criar uma Regra de Automação
description: Passo a passo para configurar novos gatilhos, condições e ações de automação no CRM.
---

# Criar uma Regra de Automação

Criar regras de acompanhamento no Imobiturbo.OS é um processo visual e direto.

## Para que serve

Configura um fluxo automatizado para padronizar o processo comercial e economizar o tempo dos corretores em tarefas manuais.

## Como fazer

1. Acesse o menu **Follow-ups** na barra lateral.
2. Clique no botão **+ Nova Regra**.
3. A janela do criador de regras será exibida:

![Criador de Regra de Automação](/img/guias/follow-ups/02-criar-regra-automacao.png)

4. Preencha os campos da regra:
   - **Nome da Regra**: Um nome claro e descritivo (ex: *Lembrete de Visita - 2h antes*).
   - **Gatilho (Quando)**: Selecione o evento disparador (ex: *Oportunidade movida para a etapa "Visita Agendada"*).
   - **Tempo de Espera (Delay)**: Defina se a ação é imediata ou após um período (ex: *Aguardar 24 horas*).
   - **Condições (Se)**: Adicione filtros opcionais (ex: *Se tag contém "Alto Padrão"*).
   - **Ação (Então)**: Escolha o que deve acontecer (ex: *Enviar mensagem via WhatsApp*, *Adicionar Tag*, *Notificar Corretor Responsável*).
   - **Texto da Mensagem**: Escreva o conteúdo utilizando variáveis dinâmicas como `{{nome}}` ou `{{imovel}}`.
5. Clique em **Salvar Regra**.

## O que acontece depois

- A regra é registrada na lista de automações ativas.
- Sempre que o evento configurado ocorrer em qualquer lead da sua base, o sistema executará as ações de acordo com as condições definidas.
