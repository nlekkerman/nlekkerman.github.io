const highlights = [
  {
    icon: 'bi-building',
    title: 'Multi-Tenant Isolation',
    desc: 'Each hotel operates in its own scoped environment — data, staff, config, and workflows fully isolated.',
  },
  {
    icon: 'bi-broadcast',
    title: 'Live Operational State',
    desc: 'Bookings, rooms, and staff activity update instantly across dashboards using event-driven architecture.',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Role-Based Access',
    desc: 'Granular permissions per role — owner, manager, receptionist, housekeeper. Every action scoped and secured.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Full Booking Lifecycle',
    desc: 'Reservation → Pre-check-in → In-house → Checkout → Post-stay. Every state tracked and validated.',
  },
];

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="featured-project-section section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p className="section-label">Featured Project</p>
            <h2 className="featured-title display-4 fw-bold mb-3">HotelsMates</h2>
            <p className="featured-tagline mb-2">
              Multi-tenant hospitality platform designed for real operations.
            </p>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '540px' }}>
              Staff onboarding. Booking lifecycle. Guest communication. Live dashboards.
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
