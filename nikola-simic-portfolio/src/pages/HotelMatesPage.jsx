import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SystemCard from '../components/SystemCard';
import FlowCard from '../components/FlowCard';

const builtModules = [
  { icon: 'bi-building-add', title: 'Hotel provisioning', description: 'Tenant creation, slug-scoped configuration, admin assignment.' },
  { icon: 'bi-people', title: 'Staff dashboard', description: 'Role-aware operational console with capability-driven UI gates.' },
  { icon: 'bi-calendar2-range', title: 'Booking lifecycle', description: 'Reservation, room assignment, check-in, in-house, checkout.' },
  { icon: 'bi-bucket', title: 'Housekeeping operations', description: 'Room status, task assignment, cleaning progress, inspection.' },
  { icon: 'bi-tools', title: 'Maintenance workflows', description: 'Issue intake, prioritisation, assignment, resolution tracking.' },
  { icon: 'bi-cup-hot', title: 'Room service & restaurant', description: 'In-room ordering and restaurant booking flows.' },
  { icon: 'bi-chat-dots', title: 'Guest & staff communication', description: 'Tokenized guest portal with realtime chat to staff.' },
  { icon: 'bi-shield-lock', title: 'Capability-based permissions', description: 'Backend-resolved RBAC payload powers the UI.' },
];

const flows = [
  {
    icon: 'bi-calendar-check',
    title: 'Booking lifecycle',
    steps: ['Reservation', 'Room assignment', 'Check-in', 'Checkout'],
  },
  {
    icon: 'bi-bucket',
    title: 'Housekeeping lifecycle',
    steps: ['Room status', 'Task assignment', 'Cleaning progress', 'Inspection'],
  },
  {
    icon: 'bi-diagram-3',
    title: 'Staff management',
    steps: [
      'Department',
      'Role',
      'Access level',
      'Capability payload',
      'UI gates',
    ],
  },
  {
    icon: 'bi-chat-square-text',
    title: 'Guest communication',
    steps: ['Guest token', 'Guest portal', 'Staff chat', 'Realtime updates'],
  },
];

const HotelMatesPage = () => (
  <>
    <PageHero
      eyebrow="Case Study"
      title="HotelMates"
      subtitle="A multi-tenant hotel operations platform built with Django REST and React."
      description="HotelMates connects staff management, bookings, housekeeping, maintenance, room service, restaurant bookings, guest communication, and role-aware dashboards inside one hotel-scoped SaaS system."
      badges={['Django REST', 'React', 'PostgreSQL', 'Pusher', 'RBAC', 'Multi-Tenant']}
    >
      <a
        href="https://hotelsmates.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cc-btn cc-btn-primary"
      >
        <i className="bi bi-box-arrow-up-right me-2" /> Launch Live Demo
      </a>
      <Link to="/hotelmates/rbac" className="cc-btn cc-btn-outline">
        View RBAC Matrix <i className="bi bi-arrow-right ms-2" />
      </Link>
      <Link to="/hotelmates/architecture" className="cc-btn cc-btn-ghost">
        System Architecture
      </Link>
      <a
        href="https://github.com/nlekkerman/HotelMateBackend"
        target="_blank"
        rel="noopener noreferrer"
        className="cc-btn cc-btn-ghost"
      >
        <i className="bi bi-github me-2" /> Backend
      </a>
      <a
        href="https://github.com/nlekkerman/HotelMateFrontend"
        target="_blank"
        rel="noopener noreferrer"
        className="cc-btn cc-btn-ghost"
      >
        <i className="bi bi-github me-2" /> Frontend
      </a>
    </PageHero>

    <section className="cc-section">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">Problem</p>
          <h2 className="cc-section-title">Different staff need different controls</h2>
        </div>
        <p className="cc-prose">
          Hotels need different staff members to access different operational
          tools without exposing sensitive controls. A receptionist,
          housekeeper, manager, and platform owner should not see or control the
          same things. HotelMates solves this with backend-resolved capabilities
          and a frontend that renders only what each persona is allowed to do.
        </p>
      </div>
    </section>

    <section className="cc-section cc-section-alt">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">What I Built</p>
          <h2 className="cc-section-title">Modules &amp; subsystems</h2>
        </div>
        <div className="cc-grid cc-grid-4">
          {builtModules.map((m) => (
            <SystemCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>

    <section className="cc-section">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">Operational Flows</p>
          <h2 className="cc-section-title">How the system moves</h2>
        </div>
        <div className="cc-grid cc-grid-2">
          {flows.map((f) => (
            <FlowCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>

    <section className="cc-section cc-section-alt">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">Proof &amp; Validation</p>
          <h2 className="cc-section-title">Backend integrity is enforced</h2>
        </div>
        <div className="cc-grid cc-grid-2">
          <div className="cc-proof-card">
            <h4>Backend validators</h4>
            <pre className="cc-code-block">
              <code>
{`validate_preset_maps()       → []
validate_module_policy()     → []
python manage.py check       → no issues`}
              </code>
            </pre>
            <p className="cc-card-foot">
              Validators ensure module policy and preset maps are internally
              consistent before deployment.
            </p>
          </div>
          <div className="cc-proof-card">
            <h4>Seeded persona matrix</h4>
            <p>
              Nine seeded staff personas verify live role-aware frontend
              behavior against the resolved RBAC payload.
            </p>
            <Link to="/hotelmates/rbac" className="cc-btn cc-btn-outline mt-3">
              Open Live Permission Matrix
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HotelMatesPage;
