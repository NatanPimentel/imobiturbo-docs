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
      ],
    },
    {
      type: 'category',
      label: '🔌 Central de Conexões (WhatsApp)',
      collapsed: false,
      items: [
        'conexoes/visao-geral-conexoes',
        'conexoes/conectar-whatsapp-qrcode',
        'conexoes/reconectar-e-gerenciar-sessoes',
        'conexoes/pedir-conexao-ao-corretor',
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
      label: '🤖 Agentes de Inteligência Artificial',
      collapsed: false,
      items: [
        'agentes-ia/o-que-sao-agentes-ia',
        'agentes-ia/configurar-e-ativar-agente',
        'agentes-ia/estados-do-agente',
        'agentes-ia/handoff-humano-e-retomada',
      ],
    },
    {
      type: 'category',
      label: '⚡ Follow-ups e Automações',
      collapsed: false,
      items: [
        'follow-ups/visao-geral-automacoes',
        'follow-ups/criar-regra-de-automacao',
        'follow-ups/ativar-desativar-e-testar-regras',
      ],
    },
    {
      type: 'category',
      label: '📱 Aplicativo Mobile (PWA)',
      collapsed: false,
      items: [
        'aplicativo-mobile/como-instalar-o-pwa',
      ],
    },
  ],
};

export default sidebars;
