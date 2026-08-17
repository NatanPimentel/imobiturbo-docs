---
title: Importar Contatos via Planilha CSV
description: Passo a passo para importar listas em massa de clientes e leads usando o modelo de planilha padrão do Imobiturbo.OS.
---

# Importar Contatos via Planilha CSV

Se você já possui uma lista de clientes em outra ferramenta de CRM, planilha do Excel ou base de eventos, pode importá-los em massa para o Imobiturbo.OS em poucos cliques.

## Para que serve

Economiza horas de trabalho manual cadastrando dezenas ou centenas de contatos simultaneamente, já atribuindo tags e corretores responsáveis.

## Como fazer

1. Acesse o menu **Contatos** na barra lateral.
2. Clique no botão **Importar CSV** no topo da tela.
3. A janela de importação será exibida:

![Modal de Importação de Contatos CSV](/img/guias/contatos/04-importar-csv.png)

![Lista de contatos após a importação](/img/guias/contatos/01-lista-contatos.png)

4. Clique em **Baixar Planilha Modelo** para obter o arquivo no formato correto (`.csv`).
5. Abra a planilha em seu programa de preferência (Excel, Google Planilhas ou Calc) e preencha as colunas:
   - `nome`: Nome completo do contato.
   - `telefone`: Telefone com DDD (apenas números).
   - `email`: E-mail do contato (opcional).
   - `tags`: Etiquetas separadas por vírgula (ex: *Investidor, Zona Sul*).
6. Salve o arquivo no formato **CSV (separado por vírgulas)**.
7. De volta ao Imobiturbo.OS, arraste seu arquivo CSV para a área de envio ou clique em **Selecionar Arquivo**.
8. Clique em **Iniciar Importação**.

## O que acontece depois

- O sistema processará as linhas da planilha em segundo plano.
- Contatos válidos serão adicionados à base imediatamente.
- Caso um contato com o mesmo número ou e-mail já exista, o sistema atualizará os dados existentes sem duplicar o registro.

## Problemas comuns

- **Formato do arquivo inválido**: Certifique-se de salvar a planilha como `.csv` (e não `.xlsx` ou `.xls`).
- **Telefone sem DDD**: Números sem o código de área (DDD) não poderão receber mensagens pelo WhatsApp. Certifique-se de incluir 2 dígitos de DDD antes do número de 9 dígitos.
