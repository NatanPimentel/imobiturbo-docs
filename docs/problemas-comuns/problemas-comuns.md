---
title: Problemas Comuns — guia rápido
description: Guia rápido de solução de problemas no Imobiturbo.OS — conexões, WhatsApp, agente de IA, leads dos anúncios e atendimento.
---

# Problemas Comuns — guia rápido

Antes de chamar o suporte, confira aqui os problemas mais frequentes e o que fazer em cada um.

## WhatsApp não conecta ou desconecta

1. Confirme que o **celular está ligado e conectado à internet** (a conexão por QR depende do aparelho).
2. Em **Conexões**, verifique o **status** do número: 🟢 conectado, 🟡 conectando ou 🔴 desconectado.
3. Se desconectou, use **Reconectar** — veja o passo a passo em [Reconectar e gerenciar sessões](/docs/conexoes/reconectar-e-gerenciar-sessoes).
4. Se o erro persistir, reinicie o WhatsApp no celular e reconecte.

## Mensagens não chegam na Inbox

1. Cheque se o número está **conectado** em **Conexões**.
2. Na **API Oficial**, confirme os três pontos do [checklist](/docs/conexoes/api-oficial-whatsapp#checklist-final): webhook **verificado**, campo `messages` **assinado** e **App Secret** preenchido (quando o app for seu).
3. Envie uma mensagem de **outro telefone** e veja se ela aparece.

## O agente de IA não responde

1. O agente está **Publicado** e **Ativo**? Veja [Estados do agente](/docs/agentes-ia/estados-do-agente).
2. O **número de WhatsApp** do agente está conectado e selecionado na configuração?
3. O agente usa a **base de conhecimento** certa? Veja [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento).
4. Teste na aba **Teste** do agente antes de mexer no atendimento real.

## Leads dos anúncios não entram no funil

1. A **Página está conectada** na tela Formulários Meta?
2. O **Instant Form está ativo no CRM** (selo *Ativo no CRM*)? Veja [Meta Lead Ads](/docs/conexoes/meta-lead-ads).
3. O **teste de lead** do CRM funciona? Se sim, o problema pode estar na entrega da Meta (formulário não publicado, permissões pendentes).
4. O lead pode ter entrado em outra etapa/funil — confira os **filtros** do Kanban.

## Não consigo entrar no sistema

1. Peça um novo **convite/e-mail de acesso** à equipe Imobiturbo (o link de convite vale por tempo limitado).
2. Confirme o **e-mail correto** e verifique as pastas Spam/Promoções.
3. Use o login por **código de 6 dígitos** — o código chega no e-mail e nunca deve ser compartilhado.

## Atraso ou lentidão no sistema

1. Atualize a página (F5) e aguarde alguns segundos.
2. Verifique sua **conexão de internet**.
3. No **celular**, use o modo tela cheia do aplicativo (veja [Instalar o app (PWA)](/docs/aplicativo-mobile/como-instalar-o-pwa)).
4. Se continuar lento, avise o suporte informando a tela e o horário.

---

## Ainda não resolveu?

Quando for falar com o suporte, tenha em mãos:

- A **tela** onde o problema aparece;
- O **perfil** que está logado e a **etapa** do passo a passo;
- Um **print** do erro — **sem tokens, senhas, códigos ou IDs**;
- O **nome da Página/formulário** quando o assunto for Meta.

:::danger[🔒 Segurança]
A equipe Imobiturbo **nunca** pede senha, token, App Secret ou código de login. Compartilhe esses valores **somente** nas telas oficiais do sistema, nunca por chat, e-mail ou print.
:::

## Guias mais procurados

- [Conectar WhatsApp por QR Code](/docs/conexoes/conectar-whatsapp-qrcode)
- [WhatsApp API Oficial (Meta)](/docs/conexoes/api-oficial-whatsapp)
- [Meta Lead Ads (Formulários de anúncios)](/docs/conexoes/meta-lead-ads)
- [Configurar e ativar um agente de IA](/docs/agentes-ia/configurar-e-ativar-agente)
- [Criar um fluxo de follow-up](/docs/follow-ups/criar-regra-de-automacao)