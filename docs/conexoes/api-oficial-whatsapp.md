---
title: WhatsApp API Oficial (Meta)
description: Como criar ou preparar o seu app na Meta e conectar a WhatsApp Cloud API oficial ao Imobiturbo.OS — do primeiro ID à primeira conversa no CRM.
---

# WhatsApp API Oficial (Meta)

A **API Oficial do WhatsApp (Meta)** é a conexão profissional que usa o número oficial da sua empresa direto do servidor da Meta — sem depender de um celular ligado 24h. É a conexão usada por quem quer número fixo da imobiliária, envio em escala e templates aprovados.

## Para que serve

- Recebe e envia mensagens pelo número **oficial** da empresa.
- Funciona **sem celular conectado**: o WhatsApp roda no servidor da Meta.
- Permite **iniciar conversas** com mensagens aprovadas (templates) fora do horário de atendimento.
- Entregabilidade maior para envios em volume (Black Friday, lembretes, follow-ups).

## Quando usar

- Sua imobiliária quer um **número oficial de WhatsApp Business** com nome verificado.
- Você precisa de **templates** para disparos proativos.
- A conexão por QR (celular dedicado) não atende mais o volume.

:::info[❓ O que é cada termo?]
- **App na Meta**: o "aplicativo" que você cria no painel de desenvolvedores da Meta para conectar o WhatsApp.
- **WABA**: a conta do WhatsApp Business (WhatsApp Business Account) da sua empresa na Meta.
- **Token**: uma chave secreta que autoriza o CRM a falar com a sua conta na Meta em seu nome.
- **Webhook**: um "portal" onde a Meta entrega as mensagens que chegam para você. Configurar o webhook é o passo que faz o CRM **receber** as mensagens.
:::

## Antes de começar

- Você **administra** o Meta Business e a conta do WhatsApp Business.
- Você tem (ou vai criar) um **app na Meta** com o produto WhatsApp.
- Seu número já aparece como número do WhatsApp Business (ou está pronto para ser cadastrado).
- Você é **administrador** no Imobiturbo.OS.

:::warning[⚠️ Antes de mexer no seu número]
Se o número ainda é usado no WhatsApp comum ou no app WhatsApp Business, **não apague nada por conta própria**. A migração para a API Oficial envolve decidir o uso do número. Em caso de dúvida, fale com a equipe Imobiturbo antes.
:::

---

## Passo a passo

### Parte 1 — Criar (ou escolher) o seu app na Meta

Este é o app da **sua empresa** — não é o app do Imobiturbo.

1. Acesse [developers.facebook.com/apps](https://developers.facebook.com/apps/) com o perfil que administra o seu Meta Business.
2. Se já existir um app com WhatsApp na lista, abra-o e **pule para o passo 4**.
3. Se não existir, clique em **Criar app** e siga:
   - Escolha o tipo de app voltado para **Business** quando a Meta perguntar;
   - Selecione o caso de uso **Conectar com clientes através do WhatsApp** (ou equivalente em português);
   - Dê um nome identificável (ex.: *CRM da minha imobiliária*) e informe um e-mail que você acompanha;
   - Selecione o **seu** Business portfolio e confirme.

![Fluxo de criação de app no painel da Meta](/img/guias/conexoes/07-meta-criar-app.png)

> Imagem ilustrativa do fluxo de criação de app da Meta.

4. No painel do app, em **Adicionar produto**, escolha **WhatsApp** e clique em **Configurar**.
5. Se o WhatsApp já estiver no menu, abra **WhatsApp → Getting Started** (ou *Configuração da API*) direto.

### Parte 2 — Gerar o token de acesso

O token temporário da tela de teste da Meta **vence rápido**. Para uma conexão que continue funcionando, gere um **token de usuário do sistema**.

1. Abra [business.facebook.com/settings](https://business.facebook.com/settings/) e entre em **Usuários → Usuários do sistema** (ou *System Users*).
2. Clique em **Adicionar / Criar usuário do sistema**:
   - Dê um nome fácil de identificar, ex.: *CRM — minha imobiliária*;
   - Escolha a função administrativa;
   - Em **Ativos atribuídos**, associe o **seu app** e a **sua conta do WhatsApp Business**.
3. Dentro do usuário criado, clique em **Gerar novo token**, selecione o seu app e marque:
   - `whatsapp_business_management` — gerenciar a conta do WhatsApp Business;
   - `whatsapp_business_messaging` — enviar e receber mensagens.
4. **Copie o token** que a Meta mostrar. Ele é secreto.

![Geração de token em Usuários do sistema na Meta](/img/guias/conexoes/08-meta-usuario-sistema-token.png)

> Imagem ilustrativa do painel de Usuários do sistema da Meta.

:::danger[🔒 Nunca compartilhe segredos]
Não envie o token, o App Secret ou senha por WhatsApp, e-mail ou em prints. Eles são colados **somente** na tela do CRM, que os guarda criptografados.
:::

### Parte 3 — Separar os 4 dados da sua conta

Antes de abrir o CRM, deixe estes valores prontos (copie exatamente como aparecem, sem espaços):

| Dado | Onde encontrar na Meta | O que é |
|---|---|---|
| **ID do número de telefone** | *WhatsApp → Configuração da API* | o **Phone Number ID** (não é o número com DDD) |
| **ID da conta do WhatsApp Business** | *WhatsApp → Configuração da API* | o **WABA ID** |
| **Token de acesso** | token do usuário do sistema (Parte 2) | a chave que autoriza o CRM |
| **App Secret** | *Configurações do app → Básico* (só se o app for seu) | a chave que valida as mensagens recebidas |

### Parte 4 — Abrir a tela da API Oficial no CRM

1. Entre no **Imobiturbo.OS** com um perfil **administrador**.
2. No menu lateral, abra **Conexões**.
3. Clique na aba **API Oficial (Meta)** e permaneça na subaba **Conexão**.

![Aba API Oficial (Meta) na Central de Conexões](/img/guias/conexoes/05-aba-api-oficial-meta.png)

> Na imagem, os valores sensíveis estão ocultos. A conexão aparece com os selos "credencial guardada", "App Secret próprio/da plataforma" e o botão **Validar e conectar**.

### Parte 5 — Preencher e conectar

1. Em **ID do número de telefone**, cole o **Phone Number ID**.
2. Em **ID da conta do WhatsApp Business**, cole o **WABA ID**.
3. Em **Token de acesso**, cole o token do usuário do sistema.
4. Em **App Secret**, cole a chave do seu app. **Deixe vazio apenas se o número foi conectado pelo aplicativo do Imobiturbo** — não por um app criado por você.
5. Clique em **Validar e conectar**. O CRM confere a credencial com a Meta antes de salvar.

:::info[💡 Por que o App Secret importa?]
A Meta **assina** cada mensagem com a chave secreta do app que envia. Sem o App Secret (quando o app é seu), o CRM recusa tudo o que chega: o envio funciona, mas **nenhuma resposta do cliente aparece**. Se deixar o campo vazio e não receber mensagens, volte aqui.
:::

**Como saber que deu certo:** o cartão passa a mostrar o nome e o número conectados, com os selos **credencial guardada** e **App Secret próprio** (ou *da plataforma*).

### Parte 6 — Configurar o webhook na Meta

Sem este passo, o canal **envia mas não recebe** — as respostas do cliente não chegam ao CRM.

1. Na tela do CRM, no card **"Cole isto no painel da Meta"**, use os botões **Copiar** ao lado de:
   - **URL de callback** — o endereço do webhook da sua organização;
   - **Token de verificação** — a prova de que o endpoint é seu.
2. Copie também o campo **messages** (e assine `message_template_status_update` para acompanhar templates).
3. Volte ao seu app no [Meta for Developers](https://developers.facebook.com/apps/), em **WhatsApp → Configuração → Webhook**.
4. Cole a **URL de callback** e o **Token de verificação**, e clique em **Verificar e salvar**.
5. Depois de salvar, **assine o campo `messages`** (e o de templates, se quiser).

**Como saber que deu certo:** a Meta aceita a verificação sem erro e o cartão do CRM continua conectado.

### Parte 7 — Fazer o primeiro teste

1. De um **outro telefone** (diferente do número conectado), envie uma mensagem curta para o número oficial.
2. Abra a **Inbox** do CRM: a conversa deve aparecer.
3. **Responda pelo CRM** (dentro da janela de atendimento, a resposta é livre).
4. Confirme que a resposta chegou no WhatsApp do cliente.

Para **iniciar** conversas fora da janela de atendimento, use um **template aprovado pela Meta**: em **Conexões → API Oficial (Meta) → Templates da Meta**, escolha o template e o envio.

---

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| **Token inválido** | Gere um novo token no usuário do sistema, confira as permissões e cole o valor completo. |
| **ID do número não encontrado** | Use o **Phone Number ID** (não o número com DDD) e confira se o número pertence à WABA informada. |
| **Sem permissão na WABA** | Associe a conta do WhatsApp Business ao usuário do sistema e conceda `whatsapp_business_management` e `whatsapp_business_messaging`. |
| **Webhook rejeitado** | Copie novamente a URL e o token da conexão atual; confira HTTPS, espaços extras e o botão de verificação da Meta. |
| **Envia, mas não recebe** | Duas causas, nesta ordem: (1) o campo `messages` não está assinado no webhook; (2) falta o **App Secret** quando o app é seu. |
| **Conexão parou depois de um tempo** | Provavelmente você usou um **token temporário**. Gere um token de usuário do sistema e troque a credencial no CRM. |

## Checklist final

- [ ] O cartão do CRM mostra o número como conectado.
- [ ] A Meta verificou e salvou o webhook.
- [ ] O campo `messages` está assinado.
- [ ] O selo do App Secret bate com a sua situação (próprio / da plataforma).
- [ ] Uma mensagem de outro telefone apareceu no CRM.
- [ ] Você respondeu pelo CRM e recebeu a resposta no WhatsApp.

## Referências oficiais da Meta

- [Coleção oficial WhatsApp Cloud API no Postman](https://www.postman.com/meta/workspace/meta-developers/collection/8871852-3a2f3526-077d-4fd5-8b5a-2e02b2d0bb20)
- [Documentação oficial de recebimento e webhook](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks)

## Próximos passos

- [Visão geral das Conexões](/docs/conexoes/visao-geral-conexoes)
- [Conectar WhatsApp por QR Code](/docs/conexoes/conectar-whatsapp-qrcode)
- [Receber leads dos anúncios com Meta Lead Ads](/docs/conexoes/meta-lead-ads)