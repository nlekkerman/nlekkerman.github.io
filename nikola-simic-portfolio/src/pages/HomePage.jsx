import { Link } from 'react-router-dom';
import SystemCard from '../components/SystemCard';
import CTAButton from '../components/CTAButton';

const systems = [
  {
    icon: 'bi-building',
    title: 'Multi-Tenant SaaS',
    description:
      'Hotel-scoped data, staff, rooms, bookings, and workflows isolated per tenant.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Capability-Based RBAC',
    description:
      'Backend resolves permissions from tier, role, and department. React consumes a live RBAC payload.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Real-Time Operations',
    description:
      'Guest/staff chat and operational workflows updated through realtime channels.',
  },
  {
    icon: 'bi-grid-1x2',
    title: 'Operational Dashboards',
    description:
      'Bookings, housekeeping, maintenance, staff, room service, and restaurant flows.',
  },
];

const HomePage = () => (
  <>
    <section className="cc-hero">
      <div className="cc-hero-grid" aria-hidden="true" />
      <div className="cc-hero-glow" aria-hidden="true" />

      <div className="container position-relative">
        <p className="cc-eyebrow">Command Center · Full-Stack Engineer</p>
        <h1 className="cc-hero-title">
          I build full-stack systems that
          <span className="cc-text-gradient"> behave like real products.</span>
        </h1>
        <p className="cc-hero-subtitle">
          Django + React developer focused on multi-tenant SaaS, backend-driven
          permissions, real-time workflows, and operational dashboards.
        </p>

        <div className="cc-hero-actions">
          <CTAButton
            href="https://hotelsmates.com"
            external
            variant="primary"
            icon="bi-box-arrow-up-right"
          >
            Open HotelMates Demo
          </CTAButton>
          <CTAButton to="/hotelmates" variant="outline" icon="bi-arrow-right-circle">
            View HotelMates Case Study
          </CTAButton>
          <CTAButton to="/hotelmates/rbac" variant="ghost" icon="bi-grid-3x3-gap">
            Explore RBAC Matrix
          </CTAButton>
          <span className="cc-coming-soon cc-coming-soon-block">
            <i className="bi bi-camera-video" /> Video walkthrough coming soon
          </span>
        </div>

        <div className="cc-hero-secondary">
          <a
            href="https://github.com/nlekkerman"
            target="_blank"
            rel="noopener noreferrer"
            className="cc-link-icon"
          >
            <i className="bi bi-github" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nikola-simic-674862110"
            target="_blank"
            rel="noopener noreferrer"
            className="cc-link-icon"
          >
            <i className="bi bi-linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </section>

    <section className="cc-section">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">System Capabilities</p>
          <h2 className="cc-section-title">Engineered for operational reality</h2>
          <p className="cc-section-desc">
            Every layer is designed to support a real hotel tenant — from
            isolation to permissions, from dashboards to live updates.
          </p>
        </div>

        <div className="cc-grid cc-grid-4">
          {systems.map((s) => (
            <SystemCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>

    <section className="cc-section cc-section-alt">
      <div className="container">
        <div className="cc-cta-panel">
          <div>
            <p className="cc-eyebrow">Featured Case Study</p>
            <h2 className="cc-section-title">HotelMates</h2>
            <p className="cc-section-desc">
              A multi-tenant hotel operations platform with backend-driven RBAC,
              real-time workflows, bookings, housekeeping, maintenance, staff
              management, room service, restaurant bookings, and guest
              communication.
            </p>
          </div>
          <div className="cc-cta-panel-actions">
            <a
              href="https://hotelsmates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn cc-btn-primary"
            >
              <i className="bi bi-box-arrow-up-right me-2" /> Open HotelMates Demo
            </a>
            <Link to="/hotelmates" className="cc-btn cc-btn-outline">
              Open Case Study <i className="bi bi-arrow-right ms-2" />
            </Link>
            <Link to="/hotelmates/architecture" className="cc-btn cc-btn-ghost">
              See Architecture
            </Link>
            <span className="cc-coming-soon cc-coming-soon-block">
              <i className="bi bi-camera-video" /> Video walkthrough coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
