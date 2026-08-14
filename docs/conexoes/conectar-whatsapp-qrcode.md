---
title: Conectar WhatsApp por QR Code
description: Passo a passo detalhado para conectar instâncias de WhatsApp ao Imobiturbo.OS via leitura de QR Code.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conectar WhatsApp por QR Code

A sincronização do WhatsApp com o **Imobiturbo.OS** funciona através de uma conexão segura de multi-dispositivos (semelhante ao WhatsApp Web), permitindo que você continue usando o WhatsApp normalmente no seu smartphone enquanto o sistema opera em paralelo.

:::info[📌 REQUISITO BÁSICO]
Para realizar a conexão inicial, você precisa de um computador ou tablet com o Imobiturbo.OS aberto e o smartphone com o WhatsApp que será conectado em mãos.
:::

---

## Fluxo de Navegação

Acesse o menu: <kbd>Menu Lateral</kbd> ➔ <kbd>Central de Conexões</kbd> ➔ <kbd>+ Conectar Novo WhatsApp</kbd>

---

## Passo a Passo de Conexão

<Tabs>
  <TabItem value="ios" label="📱 iPhone (iOS)" default>

1. No computador, abra a **Central de Conexões** no Imobiturbo.OS.
2. Clique no botão <kbd>+ Conectar Novo WhatsApp</kbd> (ou <kbd>Reconectar</kbd> na instância desejada).
3. A janela com o **QR Code** será carregada na tela:

![Modal de Leitura de QR Code](/img/guias/conexoes/02-qrcode-whatsapp.png)

4. No iPhone, abra o aplicativo **WhatsApp**.
5. Toque em **Configurações** (no canto inferior direito).
6. Toque em **Aparelhos conectados** ➔ **Conectar um aparelho**.
7. Desbloqueie com **Face ID** ou **Touch ID**.
8. Aponte a câmera para o QR Code na tela do computador e aguarde a leitura.

  </TabItem>
  <TabItem value="android" label="🤖 Android">

1. No computador, abra a **Central de Conexões** no Imobiturbo.OS.
2. Clique no botão <kbd>+ Conectar Novo WhatsApp</kbd> (ou <kbd>Reconectar</kbd> na instância desejada).
3. A janela com o **QR Code** será carregada na tela:

![Modal de Leitura de QR Code](/img/guias/conexoes/02-qrcode-whatsapp.png)

4. No Android, abra o aplicativo **WhatsApp**.
5. Toque no **ícone de 3 pontinhos** (no canto superior direito).
6. Selecione **Aparelhos conectados** ➔ **Conectar um aparelho**.
7. Confirme a impressão digital ou código PIN do celular.
8. Aponte a câmera para o QR Code na tela do computador e aguarde a sincronização.

  </TabItem>
</Tabs>

:::tip[💡 DICA DE ESTABILIDADE]
Após a primeira leitura, a sincronização do histórico recente de mensagens leva entre **10 e 30 segundos**. Não feche a página até que a tag verde **🟢 CONECTADO** apareça.
:::

---

## O que acontece depois da conexão

- **Status Ativo**: O canal exibirá a etiqueta **CONECTADO** com indicador verde.
- **Sincronização Contínua**: Mensagens recebidas no celular chegam instantaneamente na [Inbox](/docs/inbox/visao-geral-inbox).
- **IA Operacional**: Se houver um Agente de IA vinculado a este canal, ele começará a responder novos leads automaticamente.

---

## Guia de Resolução de Problemas (Troubleshooting)

| Sintoma | Causa Provável | Ação Recomendada |
|---|---|---|
| **QR Code Expirou** | Timeout de segurança do WhatsApp (20s) | Clique em <kbd>Atualizar QR Code</kbd> no modal e leia imediatamente. |
| **Erro "Limite de Aparelhos"** | O WhatsApp permite até 4 sessões ativas | No celular, vá em *Aparelhos Conectados*, clique em uma sessão antiga e selecione **Desconectar**. |
| **Instância Desconectada** | Celular ficou muito tempo desligado ou sem sinal | Acesse a Central de Conexões e clique em <kbd>Reconectar</kbd> para gerar novo QR Code. |
| **Câmera não foca no QR Code** | Brilho do monitor muito alto ou tela com reflexo | Aumente a distância do celular da tela ou reduza ligeiramente o brilho do monitor. |

:::warning[⚠️ ATENÇÃO COM APPS NÃO OFICIAIS]
O uso de versões modificadas do WhatsApp (ex: WhatsApp GB, WhatsApp Plus) pode causar desconexões repentinas e bloqueios temporários pela Meta. Utilize sempre a versão oficial do WhatsApp ou WhatsApp Business.
:::

---

## Próximos Passos
- Conheça a [Visão Geral da Inbox](/docs/inbox/visao-geral-inbox) para gerenciar conversas em tempo real.
- Saiba como [Pedir Conexão ao Corretor](/docs/conexoes/pedir-conexao-ao-corretor) sem precisar pedir a senha dele.
