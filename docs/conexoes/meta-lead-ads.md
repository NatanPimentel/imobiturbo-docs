---
title: Meta Lead Ads (Formulários de anúncios)
description: Como conectar sua Página do Facebook e ativar os Instant Forms dos seus anúncios para receber cada lead direto no funil do Imobiturbo.OS.
---

# Meta Lead Ads (Formulários de anúncios)

A integração **Meta Lead Ads** conecta os *Instant Forms* da sua Página do Facebook/Instagram ao funil do Imobiturbo.OS. Quando alguém preenche o formulário de um anúncio, o contato **entra sozinho no CRM** — sem planilha e sem copiar telefone.

## Para que serve

- Cada **preenchimento de formulário** vira uma oportunidade na etapa certa do seu funil.
- As respostas do formulário ficam **preservadas** no contato.
- Você pode combinar a entrada do lead com uma **automação** (mensagem imediata, etiqueta, distribuição para corretor).

## Quando usar

- Você roda anúncios com **geração de leads (Instant Forms)** no Facebook/Instagram.
- Quer que os leads dos anúncios caiam direto no CRM, sem digitação manual.

:::info[❓ O que é cada termo?]
- **Instant Form**: o formulário que aparece dentro do anúncio do Facebook/Instagram quando a pessoa clica em "Saiba mais" ou o botão de lead.
- **Página do Facebook**: a página da sua empresa (a que administra os anúncios).
- **Access token**: uma chave que autoriza o CRM a ler os formulários da sua Página. Para este caminho, ele é colado na tela do Imobiturbo.
:::

## Antes de começar

- Você **administra** a Página do Facebook que roda os anúncios.
- A Página já tem pelo menos um **Instant Form criado** no Gerenciador de Anúncios da Meta.
- Você é **gerente ou administrador** no Imobiturbo.OS.

---

## Passo a passo

### Parte 1 — Abrir a tela Formulários Meta

1. Entre no **Imobiturbo.OS**.
2. No menu lateral, abra **Conexões**.
3. Localize o card **Formulários Meta (Facebook/Instagram)** e clique nele.

![Tela Formulários Meta (Facebook/Instagram)](/img/guias/conexoes/06-formularios-meta.png)

A tela oferece **duas formas** de conectar sua Página. Escolha uma:

### Parte 2 — Conectar a Página

**Caminho A — Conectar com o Facebook (recomendado)**

1. Na seção **"Ou conecte com o Facebook"**, clique em **Conectar Facebook**.
2. O CRM abre a janela oficial do Facebook. **Não feche a janela nem troque de perfil** no meio do caminho.
3. Se a Meta perguntar, selecione o **Business Manager/perfil** correto e depois a **Página** que receberá os leads.
4. Finalize em **Permitir / Continuar** (ou botão equivalente).

**Caminho B — Colar um token de acesso**

1. Na seção **"Conectar com access token"**, cole o token da Meta (do *Graph API Explorer*, de um usuário do sistema no Business Manager ou um token de Página — começa com `EAAB…`).
2. Clique em **Validar token**.

:::note[🔐 Sobre o token]
O CRM guarda o token **cifrado** e ele **nunca volta a aparecer** na tela. Não compartilhe o token em prints, e-mails ou chamados.
:::

**Como saber que deu certo:** depois de autorizar, a **Página aparece conectada** na tela. Se a lista ainda estiver carregando, clique em **Atualizar**.

### Parte 3 — Ativar o Instant Form no funil

Conectar a Página **não ativa os formulários automaticamente**. Você escolhe quais Instant Forms devem criar oportunidades no CRM.

1. Na Página conectada, abra a lista de formulários (**"Ver formulários"**).
2. Encontre o formulário usado nas suas campanhas. Se nenhum aparecer, confira se ele foi criado na Página correta e clique em **Atualizar**.
3. Clique em **Ativar** no formulário desejado e preencha:
   - um **nome** fácil de reconhecer;
   - o **funil de destino**;
   - a **etapa inicial**, normalmente *Novo lead*;
   - o **mapeamento das perguntas**, se o CRM solicitar.
4. **Salve** e confira o selo **Ativo no CRM**.

**Como saber que deu certo:** o formulário aparece na seção **"Formulários ativos no CRM"** com o status Ativo. A partir daí, novos leads desse formulário entram no funil.

### Parte 4 — Fazer o primeiro teste

1. **Teste do CRM**: no card do formulário ativo, clique em **Enviar lead de teste**. Um contato sintético deve aparecer no funil escolhido, com o telefone reconhecido e as respostas do formulário visíveis.
2. **Teste real**: use a ferramenta *Lead Ads Testing Tool* da Meta **ou preencha o próprio Instant Form** com um número de teste (nunca use dados de lead real para testar). Aguarde alguns instantes e atualize o CRM: o contato deve entrar em *Novo lead* ou na etapa escolhida, com a origem identificada como o formulário Meta.

:::info[💡 O teste do CRM não prova a Meta]
O botão **Enviar lead de teste** valida funil, etapa e automações. Ele não prova a entrega de um anúncio real. O teste com o formulário de verdade é o que confirma a integração completa.
:::

### Parte 5 — Automação (opcional)

Depois que o lead chega, você pode criar uma automação para **responder imediatamente**, aplicar uma **etiqueta**, **distribuir para um corretor** ou disparar um **webhook** quando o lead entrar. Veja [Follow-ups e Automações](/docs/follow-ups/visao-geral-automacoes).

---

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| **A Página não aparece no CRM** | Confirme o acesso à Página no Meta Business Suite e se escolheu o Business Manager certo durante a autorização. |
| **Não aparecem formulários** | Confirme se o Instant Form foi criado na Página correta, clique em **Atualizar** e verifique as permissões pendentes na Meta. |
| **A Página fica "Conectando"** | Atualize uma vez. Se persistir, envie um print da tela para a equipe — nunca envie token. |
| **O teste cria lead, mas o lead real não chega** | O teste sintético só valida o CRM. Revise a autorização da Página, o formulário ativo e a entrega do anúncio na Meta. |
| **Erro: Página já conectada** | Uma Página não pode ficar vinculada a duas organizações do CRM ao mesmo tempo. Avise a equipe Imobiturbo. |
| **Usei o Facebook errado** | Saia do perfil, entre com o perfil que administra a Página e repita a conexão. |

**Dados que ajudam o suporte:** nome da Página, nome do formulário, perfil do Facebook usado na conexão, etapa em que o erro apareceu e print da mensagem — sem tokens, códigos ou senhas.

## Resumo

1. Página conectada ao Imobiturbo.
2. Instant Form **ativo no CRM**.
3. Lead de teste confirmou funil, etapa e campos.
4. Um lead real entrou no funil com a origem do formulário.

## Próximos passos

- [Visão geral das Conexões](/docs/conexoes/visao-geral-conexoes)
- [Conectar WhatsApp por QR Code](/docs/conexoes/conectar-whatsapp-qrcode)
- [WhatsApp API Oficial (Meta)](/docs/conexoes/api-oficial-whatsapp)