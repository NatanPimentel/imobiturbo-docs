---
title: Roteadores de mensagens (IA)
description: Como criar um roteador de IA no Imobiturbo.OS para que a primeira mensagem do cliente caia no agente certo — compra, aluguel, captação e outros assuntos.
---

# Roteadores de mensagens (IA)

O **Roteador** é o "porteiro inteligente" do WhatsApp da sua imobiliária: ele lê a **primeira mensagem** do cliente, entende a intenção (comprar, alugar, anunciar imóvel...) e encaminha a conversa para o **agente certo**.

## Para que serve

- Cada assunto é atendido por um **agente especialista**: compra, aluguel, captação (quem quer vender/annunciar), lançamento...
- Quem não encaixa em nenhuma rota cai no **agente padrão (fallback)**.
- Você define como testar a leitura de intenção com uma mensagem de exemplo.

## Quando usar

- Sua imobiliária atende **mais de um tipo de demanda** no mesmo número (ex.: venda e locação).
- Você quer que cada agente use instruções e base de conhecimento específicas para o assunto.

## Antes de começar

- Você é **gerente ou administrador** no Imobiturbo.OS.
- Os **agentes** que vão receber as rotas já existem (veja [Configurar e ativar um agente](/docs/agentes-ia/configurar-e-ativar-agente)).
- A tela fica no menu lateral: **Roteadores**.

## Passo a passo

### Parte 1 — Criar o roteador

1. No menu lateral, abra **Roteadores**.
2. Clique em **Criar meu primeiro roteador** (ou **+ Novo**).
3. Dê um **nome** fácil (ex.: *Roteador de vendas*).
4. Selecione o **número de WhatsApp** no qual o roteador atua.

![Criação de roteador](/img/guias/agentes-ia/08-roteadores.png)

### Parte 2 — Definir as rotas (intenção → agente)

Para cada assunto que você quer separar, adicione uma rota:

1. Clique em **Adicionar rota**.
2. Preencha:
   - **Intenção**: o nome do assunto (ex.: *Quero comprar um imóvel*);
   - **Descrição**: quando a mensagem deve ser considerada essa intenção;
   - **Exemplos**: frases típicas de clientes (ex.: "tem apartamento de 2 quartos?", "quanto custa um imóvel na Barra?"). Quanto mais exemplos, melhor a leitura;
   - **Agente**: qual agente da IA deve atender essa intenção.
3. Repita para as outras intenções (ex.: *Quero alugar*, *Quero anunciar meu imóvel*).

### Parte 3 — Escolher o agente padrão (fallback)

1. Em **Agente padrão**, selecione o agente que atende **quem não encaixou** em nenhuma rota.
2. Ative o roteador (chave **Ativo**).
3. **Salve** o roteador e as rotas.

### Parte 4 — Testar

1. Na tela do roteador, use o campo **teste de mensagem**, digitando algo como "quero alugar um studio".
2. Confira se a conversa de teste foi para o **agente da intenção certa**.
3. Teste também uma mensagem fora dos exemplos para confirmar o **agente padrão**.

## Como saber que deu certo

- Um cliente novo manda "quero comprar um apartamento na zona sul" e a conversa é atendida pelo **agente de vendas** (você vê na Inbox qual agente respondeu).
- Mensagens fora dos temas caem no **agente padrão** sem travar.

## Problemas comuns

| O que aconteceu | O que fazer |
|---|---|
| A conversa vai para o agente errado | Reforce a **descrição** e os **exemplos** da intenção; teste novamente. |
| Tudo cai no agente padrão | Confira se o roteador está **Ativo** e se as rotas têm exemplos suficientes. |
| Muitas intenções similares se confundem | Junte intenções parecidas em uma rota só, ou deixe apenas as que realmente importam. |

## Próximos passos

- [Configurar e ativar um agente](/docs/agentes-ia/configurar-e-ativar-agente)
- [Base de Conhecimento](/docs/agentes-ia/base-de-conhecimento)
- [Memória da IA](/docs/agentes-ia/memoria-da-ia)