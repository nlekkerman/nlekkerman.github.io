import PageHero from '../components/PageHero';
import ArchitectureNode from '../components/ArchitectureNode';
import SystemCard from '../components/SystemCard';

const chain = [
  {
    icon: 'bi-window',
    label: 'React Staff UI',
    desc: 'Hotel-scoped routing, role-aware components, realtime updates.',
    tone: 'entry',
  },
  {
    icon: 'bi-shield-check',
    label: 'AuthContext + RBAC Payload',
    desc: 'Frontend consumes resolved capabilities and gates UI accordingly.',
    tone: 'layer',
  },
  {
    icon: 'bi-hdd-rack',
    label: 'Django REST API',
    desc: 'Tenant scoping, business logic, lifecycle management.',
    tone: 'core',
  },
  {
    icon: 'bi-diagram-3',
    label: 'Capability Resolver',
    desc: 'Resolves effective capabilities from tier, role, and department.',
    tone: 'core',
  },
  {
    icon: 'bi-database',
    label: 'PostgreSQL Hotel-Scoped Data',
    desc: 'Tenant isolation enforced at the data layer per hotel slug.',
    tone: 'service',
  },
];

const supporting = [
  {
    icon: 'bi-building',
    title: 'Tenant isolation',
    description:
      'Hotel slug scopes staff, rooms, bookings, workflows, and dashboards.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'RBAC resolver',
    description:
      'Capabilities are resolved from tier, role, and department.',
  },
  {
    icon: 'bi-toggles',
    title: 'Module policy',
    description:
      'Backend emits module/action booleans for frontend gates.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Realtime layer',
    description:
      'Pusher channels support guest/staff communication and live operational updates.',
  },
  {
    icon: 'bi-key',
    title: 'Guest access',
    description:
      'Tokenized guest flows allow controlled portal/chat access.',
  },
];

const ArchitecturePage = () => (
  <>
    <PageHero
      eyebrow="HotelMates · Architecture"
      title="System Architecture"
      subtitle="The chain that turns a request into a permission-gated UI."
      description="Navigation controls visibility. Capabilities control actions."
    />

    <section className="cc-section">
      <div className="container">
        <div className="cc-arch-card">
          {chain.map((node, i) => (
            <ArchitectureNode
              key={node.label}
              {...node}
              isLast={i === chain.length - 1}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="cc-section cc-section-alt">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">Architecture Pillars</p>
          <h2 className="cc-section-title">Supporting subsystems</h2>
        </div>
        <div className="cc-grid cc-grid-3">
          {supporting.map((s) => (
            <SystemCard key={s.title} {...s} />
          ))}
        </div>

        <p className="cc-architecture-tagline">
          <i className="bi bi-quote me-2" />
          Navigation controls visibility. Capabilities control actions.
        </p>
      </div>
    </section>
  </>
);

export default ArchitecturePage;
