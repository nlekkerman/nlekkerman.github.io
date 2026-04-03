const pillars = [
  {
    icon: 'bi-diagram-3',
    title: 'Multi-Tenant Architecture',
    desc: 'Isolated data per tenant with shared infrastructure. Secure, scalable, and built for real SaaS deployment.',
  },
  {
    icon: 'bi-key',
    title: 'Role-Based Access Control',
    desc: 'Every endpoint and UI element is gated by role. Owners, managers, and staff each see only what they should.',
  },
  {
    icon: 'bi-broadcast-pin',
    title: 'Real-Time Communication',
    desc: 'WebSockets and event-driven patterns keep every connected client in sync — dashboards, alerts, and notifications.',
  },
  {
    icon: 'bi-file-earmark-code',
    title: 'Backend / Frontend Contract',
    desc: 'Clean API boundaries. The backend serves structured data, the frontend consumes it — no ambiguity, no tight coupling.',
  },
];

const ArchitectureSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
              Architecture &amp; Thinking
            </p>
            <h2 className="display-5 fw-bold mb-3">
              Built with System Design in Mind
            </h2>
            <p className="text-muted-custom lead mx-auto" style={{ maxWidth: '620px' }}>
              Not just features — a deliberate architecture. Every layer is
              designed for clarity, security, and real-time performance.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {pillars.map((pillar, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="arch-card h-100 p-4 rounded-4 text-center">
                <div className="arch-icon-wrapper mx-auto mb-3">
                  <i className={`bi ${pillar.icon} fs-2`} />
                </div>
                <h5 className="fw-semibold mb-2">{pillar.title}</h5>
                <p className="text-muted-custom small mb-0">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
