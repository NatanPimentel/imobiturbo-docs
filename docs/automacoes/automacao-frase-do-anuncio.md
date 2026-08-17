---
title: Automação pela frase do anúncio (WhatsApp)
description: Como configurar, no Imobiturbo.OS, uma automação que responde sozinha quando o cliente envia a frase escolhida no anúncio — passo a passo completo.
---

# Automação pela frase do anúncio (WhatsApp)

Muitos anúncios de WhatsApp funcionam assim: o cliente **clica no anúncio, o WhatsApp abre com uma mensagem pronta** (a "frase") e ele só aperta enviar. Este tutorial ensina o Imobiturbo.OS a **reconhecer essa frase e responder automaticamente** — sem ninguém na frente do computador.

:::info[❓ Qual é a frase?]
É o texto que aparece pronto no campo de mensagem quando o cliente toca no anúncio — ex.: *"Olá! Posso saber mais informações sobre isto?"*. Quando a pessoa envia, essa frase chega como a **primeira mensagem** do WhatsApp. A automação usa exatamente esse texto.
:::

## Para que serve

- O cliente **não fica esperando**: a resposta sai em segundos, mesmo fora do horário.
- Cada anúncio pode ter **sua própria frase e sua própria resposta** (ex.: anúncio de lançamento → responde com tabela; anúncio de captação → responde com proposta de avaliação).
- É o mesmo mecanismo para leads que **escolhem uma opção no formulário do anúncio** (Meta Lead Ads).

## Antes de começar

- Você tem permissão de **automações/webhooks** (gerente/administrador).
- O anúncio já está rodando com a **mensagem pronta** configurada (em anúncios de *mensagem no WhatsApp* ou *formulário*).
- Confirme a **frase exata** que o anúncio envia (com espaços e pontuação do jeito que o cliente vê).

## Passo a passo

### Parte 1 — Abrir as regras de automação

1. No menu lateral, abra **Webhooks**.
2. Clique na aba **Automações**.
3. Clique em **+ Nova automação** (ou "Criar regra").

### Parte 2 — QUANDO: escolher o gatilho

1. Dê um **nome** fácil (ex.: *Resposta anúncio - Quero saber mais*).
2. Em **Quando a automação dispara**, escolha:
   - **Quando chegar mensagem no WhatsApp** — para anúncios de *mensagem (click-to-WhatsApp)*;
   - **Quando entrar um lead novo** — para leads de **formulário** (abaixo você filtra pelo formulário do anúncio).

### Parte 3 — SE: adicionar a condição da frase

1. Em **condições (SE)**, adicione uma condição:
   - **Campo**: *Texto da mensagem*;
   - **Operador**: *contém*;
   - **Valor**: a **frase do anúncio**, ex.: `Olá! Posso saber mais informações sobre isto?` (uma frase por linha; várias linhas = aceita qualquer uma delas).
2. Se o anúncio usa **formulário**: adicione a condição **Formulário = (nome do Instant Form do anúncio)** — assim a regra só atende o formulário certo.
3. (Opcional) Restrinja o **número de WhatsApp** (se a regra deve valer só para um número).

:::note[💡 Frases com vírgula ou pontuação]
Escreva a frase **exatamente como o anúncio envia**. Pode copiar a mensagem pronta do anúncio direto para o campo — sem vírgulas "arrumadas" nem espaços a mais caso o anúncio não tenha.
:::

### Parte 4 — ENTÃO: escolher a ação

Escolha o que acontece quando a frase chegar:

| Ação | Quando usar |
|---|---|
| **Enviar mensagem no WhatsApp** | Responder imediatamente (ex.: tabela de valores, horários) |
| **Enviar template pela API Oficial** | Usar um template aprovado da Meta |
| **Ativar agente de IA** | Deixar o agente conduzir a conversa a partir daí |
| **Criar/mover lead no funil** | Garantir que a oportunidade entre na etapa certa |
| **Adicionar tag** | Marcar o lead (ex.: *interesse lançamento*) |
| **Atribuir a um atendente** | Entregar a um corretor específico |
| **Avisar outro sistema (webhook)** | Notificar outro software |

Para mensagem, escolha o **número** que vai enviar e escreva o texto (com variáveis como `{{nome}}`, se quiser).

### Parte 5 — Salvar e testar

1. **Salve** a regra (ela já fica ativa).
2. **Teste real**: envie o anúncio → toque → WhatsApp abre com a frase → envie. A resposta deve chegar em segundos.
3. Confira o **histórico** na aba **Atividade** para ver quando a regra disparou e o que ela fez.

## Como saber que deu certo

- O cliente que enviou a frase recebeu a **resposta automática** imediatamente.
- O lead (se configurado) apareceu no **funil**, ganhou a **tag** ou foi **atribuído** ao atendente.
- A execução aparece na aba **Atividade** com os detalhes.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A regra não respondeu | Confira a **frase exata** no anúncio vs. na regra (espaços/pontuação) e se a regra está **ativa**. |
| Respondeu para qualquer mensagem | A condição **contém** aceita a frase em qualquer ponto — se o anúncio manda sempre a mesma frase, ok; senão, use uma frase mais específica. |
| Duas respostas na mesma conversa | Você criou **duas regras** cobrindo a mesma frase/evento — mantenha só uma. |
| Uso formulário, e não dispara | Confirme a condição **Formulário = (o nome exato do Instant Form)** e se o formulário está [ativo no CRM](/docs/conexoes/meta-lead-ads). |

## Próximos passos

- [Visão geral das Regras de Automação](/docs/automacoes/visao-geral-automacoes)
- [Criar uma regra QUANDO/SE/ENTÃO](/docs/automacoes/criar-regra-quando-se-entao)
- [Meta Lead Ads (Formulários de anúncios)](/docs/conexoes/meta-lead-ads)