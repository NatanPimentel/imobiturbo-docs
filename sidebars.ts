import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Primeiros Passos',
      collapsed: false,
      items: [
        'primeiros-passos/o-que-e-o-imobiturbo-os',
        'primeiros-passos/primeiro-acesso',
        'primeiros-passos/conhecendo-a-interface',
        'primeiros-passos/navegacao-principal',
      ],
    },
    {
      type: 'category',
      label: '💬 Inbox e Atendimento',
      collapsed: false,
      items: [
        'inbox/visao-geral-inbox',
        'inbox/abrir-e-responder-conversa',
        'inbox/assumir-conversa-da-ia',
        'inbox/status-e-filtros-de-conversa',
        'inbox/templates-de-resposta',
      ],
    },
    {
      type: 'category',
      label: '📡 Radar — leads que esfriaram',
      collapsed: false,
      items: ['radar/radar-de-risco'],
    },
    {
      type: 'category',
      label: '🔌 Conexões',
      collapsed: false,
      items: [
        'conexoes/visao-geral-conexoes',
        'conexoes/conectar-whatsapp-qrcode',
        'conexoes/reconectar-e-gerenciar-sessoes',
        'conexoes/pedir-conexao-ao-corretor',
        'conexoes/api-oficial-whatsapp',
        'conexoes/migrar-numero-para-api-oficial',
        'conexoes/criar-templates-na-meta',
        'conexoes/meta-lead-ads',
      ],
    },
    {
      type: 'category',
      label: '📊 CRM e Kanban de Vendas',
      collapsed: false,
      items: [
        'kanban/entendendo-o-funil',
        'kanban/mover-leads-e-oportunidades',
        'kanban/filtros-e-busca-no-kanban',
        'kanban/descartar-e-acoes-do-lead',
      ],
    },
    {
      type: 'category',
      label: '👥 Gestão de Contatos',
      collapsed: false,
      items: [
        'contatos/visao-geral-contatos',
        'contatos/criar-e-editar-contato',
        'contatos/tags-e-segmentacao',
        'contatos/importar-contatos-csv',
      ],
    },
    {
      type: 'category',
      label: '🧑‍🤝‍🧑 Equipe e Desempenho',
      collapsed: false,
      items: [
        'equipe/visao-geral-equipe',
        'desempenho/visao-geral-desempenho',
      ],
    },
    {
      type: 'category',
      label: '🤖 Agentes de Inteligência Artificial',
      collapsed: false,
      items: [
        'agentes-ia/o-que-sao-agentes-ia',
        'agentes-ia/configurar-e-ativar-agente',
        'agentes-ia/base-de-conhecimento',
        'agentes-ia/skills-da-ia',
        'agentes-ia/memoria-da-ia',
        'agentes-ia/roteadores',
        'agentes-ia/estados-do-agente',
        'agentes-ia/handoff-humano-e-retomada',
        'agentes-ia/evolucao-da-ia',
      ],
    },
    {
      type: 'category',
      label: '⚡ Follow-ups (retornos agendados)',
      collapsed: false,
      items: [
        'follow-ups/visao-geral-automacoes',
        'follow-ups/criar-regra-de-automacao',
        'follow-ups/ativar-desativar-e-testar-regras',
      ],
    },
    {
      type: 'category',
      label: '🔁 Regras de Automação (QUANDO/SE/ENTÃO)',
      collapsed: false,
      items: [
        'automacoes/visao-geral-automacoes',
        'automacoes/automacao-frase-do-anuncio',
        'automacoes/criar-regra-quando-se-entao',
        'automacoes/avancado-webhooks',
      ],
    },
    {
      type: 'category',
      label: '🔐 LGPD',
      collapsed: false,
      items: ['lgpd/solicitacoes-lgpd'],
    },
    {
      type: 'category',
      label: '📱 Aplicativo Mobile (PWA)',
      collapsed: false,
      items: ['aplicativo-mobile/como-instalar-o-pwa'],
    },
    {
      type: 'category',
      label: '🆘 Problemas Comuns',
      collapsed: false,
      items: ['problemas-comuns/problemas-comuns'],
    },
  ],
};

export default sidebars;