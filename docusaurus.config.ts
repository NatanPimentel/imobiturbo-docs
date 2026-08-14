import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Central de Ajuda · Imobiturbo.OS',
  tagline: 'Aprenda a configurar e usar sua operação comercial.',
  favicon: 'img/favicon.ico',

  // Production domain
  url: 'https://docs.imobiturbo.com.br',
  baseUrl: '/',

  organizationName: 'NatanPimentel',
  projectName: 'imobiturbo-docs',

  onBrokenLinks: 'throw',

  future: {
    v4: true,
    faster: true,
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt', 'en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/novidades',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'novidades',
          blogTitle: 'Novidades · Imobiturbo.OS',
          blogDescription: 'Acompanhe as melhorias, novidades e atualizações do Imobiturbo.OS.',
          postsPerPage: 10,
          showReadingTime: false,
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Imobiturbo Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Tutoriais e Guias',
        },
        {
          to: '/novidades',
          label: 'Novidades',
          position: 'left',
        },
        {
          href: 'https://os.imobiturbo.com.br',
          label: 'Acessar o OS ↗',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Primeiros Passos',
          items: [
            { label: 'O que é o Imobiturbo.OS', to: '/docs/primeiros-passos/o-que-e-o-imobiturbo-os' },
            { label: 'Primeiro Acesso e Login', to: '/docs/primeiros-passos/primeiro-acesso' },
            { label: 'Conectando o WhatsApp', to: '/docs/conexoes/conectar-whatsapp-qrcode' },
            { label: 'Visão Geral da Inbox', to: '/docs/inbox/visao-geral-inbox' },
          ],
        },
        {
          title: 'Módulos Principais',
          items: [
            { label: 'Inbox e Atendimento', to: '/docs/inbox/visao-geral-inbox' },
            { label: 'Funil e Kanban', to: '/docs/kanban/entendendo-o-funil' },
            { label: 'Gestão de Contatos', to: '/docs/contatos/visao-geral-contatos' },
            { label: 'Agentes de IA', to: '/docs/agentes-ia/o-que-sao-agentes-ia' },
            { label: 'Follow-ups e Automações', to: '/docs/follow-ups/visao-geral-automacoes' },
          ],
        },
        {
          title: 'Plataforma',
          items: [
            { label: 'Acessar o Imobiturbo.OS', href: 'https://os.imobiturbo.com.br' },
            { label: 'Novidades e Atualizações', to: '/novidades' },
            { label: 'Instalação do App (PWA)', to: '/docs/aplicativo-mobile/como-instalar-o-pwa' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Imobiturbo.OS. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
