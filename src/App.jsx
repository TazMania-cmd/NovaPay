import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CreditCard,
  Fingerprint,
  Gauge,
  Globe2,
  Landmark,
  LockKeyhole,
  Mail,
  Menu,
  Radar,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const navLinks = ['Início', 'Recursos', 'Segurança', 'Planos', 'Contato'];

const revenueData = [
  { month: 'Jan', value: 72 },
  { month: 'Fev', value: 88 },
  { month: 'Mar', value: 81 },
  { month: 'Abr', value: 112 },
  { month: 'Mai', value: 138 },
  { month: 'Jun', value: 164 },
];

const cashflowData = [
  { day: 'S', entrada: 42, saida: 18 },
  { day: 'T', entrada: 55, saida: 22 },
  { day: 'Q', entrada: 48, saida: 19 },
  { day: 'Q', entrada: 72, saida: 28 },
  { day: 'S', entrada: 68, saida: 24 },
  { day: 'S', entrada: 89, saida: 31 },
  { day: 'D', entrada: 76, saida: 26 },
];

const features = [
  {
    icon: Zap,
    title: 'Pagamentos instantâneos',
    description: 'Pix, links de pagamento e liquidação em tempo real para manter o caixa sempre fluindo.',
    className: 'lg:col-span-2',
  },
  {
    icon: WalletCards,
    title: 'Cartões virtuais',
    description: 'Emita cartões por time, limite ou projeto com regras inteligentes de uso.',
  },
  {
    icon: Landmark,
    title: 'Gestão de caixa',
    description: 'Previsão de saldo, conciliação automática e visão consolidada das contas.',
  },
  {
    icon: ReceiptText,
    title: 'Automação de cobranças',
    description: 'Recorrência, lembretes e régua de cobrança integrada ao financeiro.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios inteligentes',
    description: 'Dashboards executivos com indicadores para decisões rápidas e precisas.',
    className: 'lg:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança bancária',
    description: 'Camadas antifraude, criptografia e trilhas de auditoria para cada operação.',
  },
];

const transactions = [
  { label: 'Assinatura Enterprise', value: '+R$ 18.420', status: 'Liquidado' },
  { label: 'Cartão marketing', value: '-R$ 2.180', status: 'Aprovado' },
  { label: 'Cobrança recorrente', value: '+R$ 7.940', status: 'Pendente' },
];

const securityItems = [
  {
    icon: LockKeyhole,
    title: 'Criptografia ponta a ponta',
    description: 'Dados sensíveis protegidos em trânsito e em repouso com padrões modernos de segurança.',
  },
  {
    icon: Fingerprint,
    title: 'Autenticação em duas etapas',
    description: 'Acesso reforçado por biometria, códigos temporários e políticas por perfil.',
  },
  {
    icon: Radar,
    title: 'Monitoramento antifraude',
    description: 'Análise contínua de comportamento para bloquear riscos antes do impacto financeiro.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 'R$ 49',
    description: 'Para times que estão organizando o financeiro digital.',
    features: ['Até 3 usuários', 'Links de pagamento', 'Cartões virtuais básicos', 'Relatórios mensais'],
  },
  {
    name: 'Business',
    price: 'R$ 149',
    description: 'Para empresas em crescimento que precisam automatizar pagamentos.',
    features: ['Usuários ilimitados', 'Cobranças recorrentes', 'Regras por centro de custo', 'Suporte prioritário'],
    recommended: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'Para operações com alto volume, integrações e governança avançada.',
    features: ['API dedicada', 'SLA empresarial', 'Antifraude avançado', 'Onboarding assistido'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10 ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        variants={fadeUp}
      >
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>}
            {title && (
              <h2 className="max-w-4xl text-balance text-3xl font-black leading-[1.05] text-white sm:text-5xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      className={`glass-panel group ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function GlowButton({ children, variant = 'primary', className = '' }) {
  const styles = variant === 'primary'
    ? 'bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.34)] hover:bg-emerald-300'
    : 'border border-white/15 bg-white/7 text-white hover:border-cyan-200/60 hover:bg-white/12';

  return (
    <a
      href="#contato"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-emerald-300 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)]">
            <Sparkles size={19} />
          </span>
          <span className="text-lg font-black text-white">NovaPay</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace('í', 'i').replace('ç', 'c')}`} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#planos" className="header-cta hidden sm:inline-flex">
            <span>Criar conta grátis</span>
            <ArrowRight size={16} />
          </a>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7 text-white lg:hidden" aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}

function DashboardMockup({ compact = false }) {
  return (
    <div className={`glass-panel relative overflow-hidden ${compact ? 'p-4' : 'p-4 sm:p-6'}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.16),transparent_26%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">Saldo disponível</p>
          <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">R$ 428.940</h3>
        </div>
        <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-200">
          +18,4%
        </div>
      </div>
      <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="h-56 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ left: -20, right: 10, top: 12, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#06111f', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, color: '#fff' }} />
              <Area type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} fill="url(#revenueGlow)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.label} className="rounded-2xl border border-white/10 bg-white/7 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-white">{transaction.label}</p>
                <span className="text-sm font-bold text-cyan-100">{transaction.value}</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{transaction.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl">
            <BadgeCheck size={16} />
            Fintech SaaS para operações digitais
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.01] text-white sm:text-6xl xl:text-7xl">
            Pagamentos digitais com{' '}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              velocidade, controle e inteligência
            </span>{' '}
            para empresas modernas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A NovaPay unifica pagamentos, cartões virtuais, gestão de caixa e cobranças automáticas em uma plataforma precisa, segura e preparada para escala.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlowButton>
              Começar agora <ArrowRight size={18} />
            </GlowButton>
            <GlowButton variant="secondary">
              Ver demonstração <Gauge size={18} />
            </GlowButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_120deg,rgba(34,211,238,0.2),rgba(168,85,247,0.18),rgba(52,211,153,0.16),rgba(34,211,238,0.2))] blur-3xl" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <Section
      id="recursos"
      eyebrow="Recursos"
      title={<>Controle financeiro com módulos que trabalham <span className="bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">em sincronia.</span></>}
      description="Cada recurso reduz etapas manuais, melhora a previsibilidade do caixa e entrega contexto para decisões financeiras com mais confiança."
    >
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <GlassCard key={feature.title} className={`min-h-64 p-6 ${feature.className || ''}`}>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-balance text-xl font-black leading-tight text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

function DashboardSection() {
  return (
    <Section
      id="dashboard"
      eyebrow="Dashboard"
      title={<>Da operação diária à visão executiva, tudo em um <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">painel fluido.</span></>}
      description="Acompanhe receita, saldo, transações e métricas operacionais com uma hierarquia visual pensada para leitura rápida e ação imediata."
      className="pt-8"
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.42fr]">
        <DashboardMockup compact />
        <div className="grid gap-4">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Receita processada</p>
                <strong className="mt-2 block text-3xl text-white">R$ 2,8M</strong>
              </div>
              <TrendingUp className="text-emerald-300" />
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashflowData} margin={{ left: -28, right: 0, top: 8, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: '#06111f', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, color: '#fff' }} />
                  <Bar dataKey="entrada" fill="#34d399" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="saida" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}

function SecuritySection() {
  return (
    <Section
      id="seguranca"
      eyebrow="Segurança"
      title={<>Confiança incorporada ao produto, <span className="bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">não adicionada no final.</span></>}
      description="A NovaPay combina governança, autenticação forte e monitoramento contínuo para proteger dados, acessos e fluxos financeiros sem atrito para o usuário."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {securityItems.map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} className="p-7">
              <Icon className="text-emerald-300" size={30} />
              <h3 className="mt-8 text-balance text-xl font-black leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

function PricingSection() {
  return (
    <Section
      id="planos"
      eyebrow="Planos"
      title={<>Planos simples para começar, <span className="bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">robustos para escalar.</span></>}
      description="Evolua de uma operação financeira enxuta para automações, governança e integrações avançadas conforme o volume cresce."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.name} className={`p-7 ${plan.recommended ? 'border-cyan-200/45 shadow-[0_0_50px_rgba(34,211,238,0.16)]' : ''}`}>
            {plan.recommended && (
              <span className="mb-5 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-950">
                Recomendado
              </span>
            )}
            <h3 className="text-2xl font-black text-white">{plan.name}</h3>
            <p className="mt-3 min-h-14 text-sm leading-7 text-slate-300">{plan.description}</p>
            <div className="mt-7 flex items-end gap-2">
              <strong className="text-4xl text-white">{plan.price}</strong>
              {plan.price !== 'Custom' && <span className="pb-1 text-slate-400">/mês</span>}
            </div>
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-slate-200">
                  <Check className="mt-0.5 shrink-0 text-emerald-300" size={17} />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contato" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold transition ${plan.recommended ? 'bg-cyan-300 text-slate-950 hover:bg-emerald-300' : 'border border-white/15 bg-white/7 text-white hover:bg-white/12'}`}>
              Começar com {plan.name}
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section id="contato" className="py-20">
      <div className="glass-panel relative overflow-hidden p-8 text-center sm:p-12 lg:p-16">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.14),transparent_36%,rgba(52,211,153,0.12)),radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.16),transparent_40%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Pronto para escalar</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-black leading-[1.05] text-white sm:text-5xl">
            Transforme o financeiro em uma{' '}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              vantagem operacional clara.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Abra sua conta NovaPay e controle cobranças, cartões, transações e relatórios em um só lugar.
          </p>
          <div className="mt-8">
            <GlowButton className="min-w-56">
              Abrir minha conta <ArrowRight size={18} />
            </GlowButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-300 text-slate-950">
              <CreditCard size={18} />
            </span>
            <strong>NovaPay</strong>
          </div>
          <p className="mt-3 text-sm text-slate-400">© 2026 NovaPay. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <a href="#recursos" className="hover:text-white">Recursos</a>
          <a href="#seguranca" className="hover:text-white">Segurança</a>
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href="mailto:contato@novapay.com" className="hover:text-white">Contato</a>
        </div>
        <div className="flex gap-3 text-slate-300">
          {[Globe2, Mail, Building2, Landmark].map((Icon, index) => (
            <a key={index} href="#contato" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/7 transition hover:border-cyan-200/50 hover:text-white" aria-label="Rede social">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="ambient-background" />
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <DashboardSection />
        <SecuritySection />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
