---
title: Criar templates de mensagem na Meta (API Oficial)
description: Como criar um template de mensagem no WhatsApp Manager da Meta, aprovar e usar no Imobiturbo.OS — para iniciar conversas fora do horário ou disparar em escala.
---

# Criar templates de mensagem na Meta (API Oficial)

Os **templates de mensagem** são mensagens **pré-aprovadas pela Meta** que o seu número oficial pode enviar **por iniciativa própria** — fora da janela de atendimento de 24 horas. É o que permite avisos, lembretes, cobranças de documentos e disparos em escala.

:::info[❓ Por que os templates existem?]
No WhatsApp oficial, você só pode conversar livremente com um cliente **dentro de 24 horas** após ele te procurar. Depois disso, para iniciar uma conversa, a mensagem precisa ser um **template aprovado**: é a garantia da Meta de que você não vai mandar spam. A criação do template acontece na **Meta**; o uso dele acontece no **Imobiturbo.OS**.
:::

## Antes de começar

- Seu número já está conectado na [API Oficial](/docs/conexoes/api-oficial-whatsapp).
- Você administra a **WABA** no WhatsApp Manager ([business.facebook.com/wa-manager](https://business.facebook.com/wa-manager)).
- Você sabe **qual mensagem** quer padronizar (ex.: lembrete de visita, solicitação de documentos, aviso de tabela).

## Passo a passo

### Parte 1 — Criar o template na Meta

1. Acesse o **WhatsApp Manager** → sua conta do WhatsApp Business.
2. Abra **Ferramentas da conta → Templates de mensagens** (ou *Message templates*).
3. Clique em **Criar template**.
4. Preencha:
   - **Categoria**: escolha com cuidado (afeta aprovação e tarifa):
     - *Marketing*: divulgação, ofertas, novidades;
     - *Utilitário* (Utility): informação que o cliente pediu ou espera (lembrete de visita, baixa de fatura, código);
     - *Autenticação*: códigos de acesso/login.
   - **Nome**: com letras minúsculas e _ (ex.: `lembrete_de_visita`);
   - **Idioma** (ex.: português do Brasil).
5. Monte o **conteúdo**:
   - **Cabeçalho (opcional)**: texto, imagem, vídeo, documento ou localização;
   - **Corpo**: o texto principal. Para personalizar, use **variáveis** entre chaves — `{{1}}`, `{{2}}`... (ex.: *"Olá `{{1}}`, sua visita na `{{2}}` está agendada para amanhã às `{{3}}`."*);
   - **Rodapé (opcional)**: texto pequeno (ex.: *"Imobiturbo Imóveis"*);
   - **Botões (opcional)**: resposta rápida, link, telefone ou código.
6. Em **Valores de exemplo**, escreva exemplos reais para cada variável (ex.: `Maria`, `Av. Atlântica 1000`, `10h`).
7. Clique em **Enviar** (ou *Submit*). O template entra em revisão.

### Parte 2 — Acompanhar a aprovação

- O template fica **PENDENTE** por um tempo (de minutos a algumas horas).
- Aprovado → status **APROVADO (APPROVED)** e pode ser usado.
- Recusado → a Meta informa o motivo (ex.: categoria errada, promessa não comprovada, variável sem exemplo). **Edite e reenvie** corrigindo o motivo.

:::note[💡 Regras que facilitam a aprovação]
- Categoria correta (lembrete/serviço = *Utilitário*, não *Marketing*);
- **Exemplos preenchidos** em todas as variáveis;
- Sem pedidos financeiros não comprovados (ex.: "pague agora" exige comprovante);
- Texto em português correto, sem linguagem de spam (!!!!, CAPS LOCK).
:::

### Parte 3 — Usar o template no Imobiturbo.OS

1. No Imobiturbo.OS, abra **Conexões → API Oficial (Meta) → Templates da Meta**.
2. Clique em **Atualizar** (sincronizar): os templates da sua WABA aparecem com o **status**, o **número de parâmetros** e a **prévia** do texto.

![Templates da Meta no Imobiturbo.OS](/img/guias/conexoes/09-templates-da-meta.png)

![Aba API Oficial na Central de Conexões](/img/guias/conexoes/05-aba-api-oficial-meta.png)

3. **Só templates APROVADOS podem ser enviados** — os demais ficam como informação.
4. Formas de usar:
   - **Automação**: na [regra de automação](/docs/automacoes/criar-regra-quando-se-entao), a ação *Enviar template pela API Oficial* dispara o template aprovado;
   - **Disparo em escala**: em **Conexões → API Oficial → Campanhas**, envie um template aprovado para uma **lista CSV** com intervalo controlado (15 s a 1 h).

## Como saber que deu certo

- O template aparece **APROVADO** na subaba Templates da Meta no OS.
- Uma automação/campanha usando o template **entregou a mensagem** (visível na conversa na Inbox e na aba Atividade).

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| Template pendente há horas | Normal na primeira aprovação. Se demorar demais, confira se está tudo preenchido e aguarde. |
| Template recusado | Leia o **motivo** da Meta, corrija (categoria, exemplos, texto) e **reenvie**. |
| Não aparece no OS | Clique em **Atualizar** na subaba Templates da Meta; confirme que é a **mesma WABA** conectada no OS. |
| Erro ao enviar | Só **APROVADO** envia; confira também que todas as **variáveis** foram preenchidas. |
| Tarifa diferente entre categorias | *Utilitário* e *Marketing* têm tarifas diferentes — escolha a categoria certa desde o início. |

## Próximos passos

- [WhatsApp API Oficial (Meta)](/docs/conexoes/api-oficial-whatsapp)
- [Automação pela frase do anúncio](/docs/automacoes/automacao-frase-do-anuncio)
- [Unificar o número para a API Oficial](/docs/conexoes/migrar-numero-para-api-oficial)