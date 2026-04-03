const highlights = [
  {
    icon: 'bi-building',
    title: 'Multi-Tenant SaaS',
    desc: 'Each hotel operates in complete isolation — own data, own staff, own config. One platform, infinite tenants.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Real-Time Operations',
    desc: 'WebSocket-driven updates across dashboards. Staff, managers, and guests see changes the moment they happen.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Role-Based Access',
    desc: 'Granular permissions per role — owner, manager, receptionist, housekeeper. Every action is scoped and secured.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Full Booking Lifecycle',
    desc: 'From reservation to check-out, every step is tracked, validated, and reflected in real-time dashboards.',
  },
];

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <p className="section-label">Featured Project</p>
            <h2 className="section-heading display-5">HotelsMates</h2>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '580px' }}>
              A multi-tenant hotel management platform built for real operations.
              Staff onboarding, room provisioning, booking flows, guest
              communication, and live dashboards — all in one system.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {highlights.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="highlight-card h-100 p-4">
                <div className="icon-wrapper mb-3">
                  <i className={`bi ${item.icon} fs-5`} />
                </div>
                <h6 className="card-title-sm">{item.title}</h6>
                <p className="card-text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a
            href="#"
            className="btn btn-accent px-4 py-2"
          >
            <i className="bi bi-box-arrow-up-right me-2" />
            Live Demo
          </a>
          <a
            href="https://github.com/nlekkerman/HotelMateFrontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-accent px-4 py-2"
          >
            <i className="bi bi-github me-2" />
            Frontend Code
          </a>
          <a
            href="https://github.com/nlekkerman/HotelMateBackend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-accent px-4 py-2"
          >
            <i className="bi bi-github me-2" />
            Backend Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
