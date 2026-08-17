---
title: Unificar o número para a API Oficial (migração)
description: Como colocar o número de WhatsApp que você já usa no celular (WhatsApp Business App ou WhatsApp comum) na API Oficial da Meta, conectando tudo no Imobiturbo.OS.
---

# Unificar o número para a API Oficial (migração)

Essa é uma das dúvidas mais comuns: *"quero usar meu número de WhatsApp que já existe, na API Oficial do Imobiturbo — como faço?"*

**Resposta curta:** dá para migrar. Quando o número é colocado na **API Oficial (Cloud API da Meta)**, ele **deixa de funcionar no WhatsApp do celular** e passa a funcionar 100% pelo Imobiturbo.OS. Este guia mostra o caminho inteiro, sem quebrar nada por engano.

:::warning[⚠️ Importante]
A migração **não é reversível no dia a dia**: depois de registrar o número na API Oficial, o WhatsApp do celular **não atende mais** aquele número (nem WhatsApp comum, nem WhatsApp Business App). O atendimento passa a ser pelo Imobiturbo.OS. Planeje o aviso à equipe antes.
:::

## Antes de começar

- Você **administra** o Meta Business e a conta do WhatsApp Business (WABA).
- Você já tem um **app na Meta com WhatsApp** e a **WABA** (veja [WhatsApp API Oficial](/docs/conexoes/api-oficial-whatsapp), Parte 1).
- O número que será migrado está **com você** (pode receber SMS/ligação com o código).
- Decida o **nome de exibição** que o número vai mostrar (ex.: o nome da imobiliária).

## O passo a passo

### Parte 1 — Entender o que está migrando

| Situação do número hoje | O que acontece na migração |
|---|---|
| Usado no **WhatsApp Messenger** (app comum) | Deixa de funcionar no app; passa a ser atendido pelo OS. |
| Usado no **WhatsApp Business App** (app da Meta) | Deixa de funcionar no app; passa a ser atendido pelo OS. |
| Já é número da sua **WABA** (verificado) | Você pula para a [Parte 3](#parte-3--conectar-a-waba-no-imobiturboos) — só falta ligar no OS. |

:::info[❓ WABA]
A **WABA (WhatsApp Business Account)** é a "conta de negócio" do WhatsApp dentro do Meta Business. **Cada número de WhatsApp pertence a uma WABA.** É a WABA que o Imobiturbo.OS usa para puxar o seu número.
:::

### Parte 2 — Trazer o número para a WABA (migração na Meta)

1. Acesse o **WhatsApp Manager**: [business.facebook.com/wa-manager](https://business.facebook.com/wa-manager) e abra a sua conta do WhatsApp Business.
2. Em **Números de telefone → Adicionar número**.
3. Confirme o **nome de exibição** e a **categoria** do negócio.
4. Escolha a verificação do número:
   - **SMS ou ligação**: a Meta envia um **código de 6 dígitos** para o número;
   - **Verificação do negócio (gratuita)**: se sua empresa já está verificada na Meta, o número pode ser verificado pelo negócio em vez do SMS.
5. Confirme o código. O número agora pertence à WABA.

:::danger[⚠️ Código não chega? Saia do app primeiro]
Se o número ainda estiver **logado no WhatsApp do celular**, o aplicativo pode **"consumir" o código** antes do SMS — a migração trava. Nesse caso:
1. No celular, abra o WhatsApp do número → **Configurações → Conta → Apagar conta** (ou deslogar) *somente do número que está migrando*;
2. Peça um **novo código** na Meta e confirme.
Depois disso, o número não volta para o app — ele já é da API Oficial.
:::

6. **Verificação em duas etapas (PIN)**: se o número já tinha um PIN de duas etapas no WhatsApp Business, a Meta pode pedir esse PIN. Confirme para liberar o número.

**Como saber que deu certo:** o número aparece em **Números de telefone** da WABA com status **verificado** e o celular do número **não atende mais** (o app do WhatsApp saiu).

### Parte 3 — Conectar a WABA no Imobiturbo.OS

1. No Imobiturbo.OS, abra **Conexões → API Oficial (Meta) → Conexão**.
2. Preencha os 4 dados (veja onde encontrar cada um em [WhatsApp API Oficial](/docs/conexoes/api-oficial-whatsapp#parte-3--separar-os-4-dados-da-sua-conta)):
   - **ID do número de telefone** (Phone Number ID do seu número migrado);
   - **ID da conta** (WABA ID);
   - **Token de acesso** (do usuário do sistema);
   - **App Secret** (se o app for seu).
3. Clique em **Validar e conectar**. O cartão mostra o **nome e o número** conectados.
4. Configure o **webhook** na Meta (parte 6 do [guia da API Oficial](/docs/conexoes/api-oficial-whatsapp#parte-6--configurar-o-webhook-na-meta)).
5. **Teste**: de outro telefone, envie mensagem para o número migrado — ela deve chegar na **Inbox** do OS.

## Mapa de decisão rápido

| Sua situação | Caminho |
|---|---|
| Número já está na WABA e conectado no OS | Nada a fazer ✅ |
| Número está no WhatsApp do celular | Parte 2 (migrar) → Parte 3 (conectar) |
| Número está em outra WABA (outra conta Meta) | Migre entre WABAs no WhatsApp Manager (mesma lógica: sair do app, código SMS, PIN) antes da Parte 3 |
| Número deu "ID não encontrado" no OS | Confirme que ele pertence à **WABA** que você informou (o Phone Number ID deve ser daquela WABA) |

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| O código de verificação não chega | Verifique se o WhatsApp do celular ainda está logado (o app consome o código — deslogue/apague o número) e peça novo código. |
| "Two-step verification" bloqueou | Informe o **PIN** antigo do número; se não souber, o gerenciamento de PIN é feito no WhatsApp Manager. |
| O número conecta, mas não recebe mensagens no OS | Verifique o **webhook**: assinou o campo `messages`? Colocou o **App Secret**? (veja o [checklist](/docs/conexoes/api-oficial-whatsapp#checklist-final)) |
| A equipe perdeu acesso ao WhatsApp do celular | Era esperado: na API Oficial o atendimento é **100% pelo OS** (Inbox/Canvas). Aproveite para comunicar o fluxo novo. |
| Mantiver os dois (app + OS) | Não é possível com o mesmo número — a API Oficial remove o número do app. Se precisa do app, mantenha a conexão por **QR** em vez da API Oficial. |

## Próximos passos

- [WhatsApp API Oficial (Meta) — guia completo](/docs/conexoes/api-oficial-whatsapp)
- [Criar templates de mensagem na Meta](/docs/conexoes/criar-templates-na-meta)
- [All andar do atendimento na Inbox](/docs/inbox/visao-geral-inbox)