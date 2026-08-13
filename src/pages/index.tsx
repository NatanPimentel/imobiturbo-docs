import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const CATEGORIES: CategoryCardProps[] = [
  {
    title: 'Primeiros Passos',
    description: 'Aprenda a acessar o sistema sem senha, conheça a interface e configure seus primeiros dados.',
    icon: '🚀',
    link: '/docs/primeiros-passos/o-que-e-o-imobiturbo-os',
  },
  {
    title: 'Inbox e Atendimento',
    description: 'Responda clientes em tempo real, ouça áudios com transcrição e assuma conversas da IA.',
    icon: '💬',
    link: '/docs/inbox/visao-geral-inbox',
  },
  {
    title: 'Conexões (WhatsApp)',
    description: 'Conecte instâncias de WhatsApp por QR Code e permita que cada corretor conecte seu número.',
    icon: '🔌',
    link: '/docs/conexoes/visao-geral-conexoes',
  },
  {
    title: 'CRM e Kanban',
    description: 'Organize seu funil de vendas, mova oportunidades entre etapas e gerencie o histórico dos leads.',
    icon: '📊',
    link: '/docs/kanban/entendendo-o-funil',
  },
  {
    title: 'Contatos e Leads',
    description: 'Cadastre clientes, organize por tags de interesse e importe listas em massa via planilha CSV.',
    icon: '👥',
    link: '/docs/contatos/visao-geral-contatos',
  },
  {
    title: 'Agentes de IA',
    description: 'Configure assistentes inteligentes para triagem imediata de leads e transbordo para corretores.',
    icon: '🤖',
    link: '/docs/agentes-ia/o-que-sao-agentes-ia',
  },
  {
    title: 'Follow-ups e Automações',
    description: 'Crie regras automáticas QUANDO/SE/ENTÃO para disparar mensagens e organizar a operação.',
    icon: '⚡',
    link: '/docs/follow-ups/visao-geral-automacoes',
  },
  {
    title: 'Aplicativo Mobile',
    description: 'Instale o Imobiturbo.OS no seu smartphone (iOS e Android) para atender clientes de onde estiver.',
    icon: '📱',
    link: '/docs/aplicativo-mobile/como-instalar-o-pwa',
  },
  {
    title: 'Novidades e Versões',
    description: 'Confira as últimas melhorias, lançamentos e atualizações do sistema em linguagem simples.',
    icon: '✨',
    link: '/novidades',
  },
];

function CategoryCard({ title, description, icon, link }: CategoryCardProps) {
  return (
    <Link to={link} className="category-card">
      <div className="category-card-icon">{icon}</div>
      <div className="category-card-title">{title}</div>
      <div className="category-card-desc">{description}</div>
      <div className="category-card-link">
        Acessar guias <span>→</span>
      </div>
    </Link>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Central de Ajuda"
      description="Central de Ajuda e Tutoriais do Imobiturbo.OS — Aprenda a configurar e usar sua operação comercial."
    >
      <header className="hero-banner">
        <div className="container">
          <h1>Central de Ajuda Imobiturbo.OS</h1>
          <p>{siteConfig.tagline}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link className="button button--primary button--lg" to="/docs/primeiros-passos/o-que-e-o-imobiturbo-os">
              Começar pelo Início 🚀
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/conexoes/conectar-whatsapp-qrcode">
              Conectar WhatsApp 📱
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <div className="category-grid">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
