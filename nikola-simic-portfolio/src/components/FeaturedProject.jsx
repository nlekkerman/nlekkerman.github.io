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
          <div className="col-lg-8 text-center">
            <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
              Featured Project
            </p>
            <h2 className="display-5 fw-bold mb-3">HotelMate</h2>
            <p className="text-muted-custom lead mx-auto" style={{ maxWidth: '620px' }}>
              A multi-tenant hotel management platform built for real operations.
              Staff onboarding, room provisioning, booking flows, guest
              communication, and live dashboards — all in one system.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {highlights.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="highlight-card h-100 p-4 rounded-4">
                <div className="icon-wrapper mb-3">
                  <i className={`bi ${item.icon} fs-2`} />
                </div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-muted-custom small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/nlekkerman/HotelMate"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-accent btn-lg px-4"
          >
            <i className="bi bi-github me-2" />
            View Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
