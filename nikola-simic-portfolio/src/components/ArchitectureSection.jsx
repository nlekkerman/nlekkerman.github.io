const principles = [
  'Multi-tenant system with strict hotel-level isolation',
  'Role-based access control across staff and guest contexts',
  'Token-based guest identity tied to booking lifecycle',
  'Event-driven updates via Pusher (staff-side realtime)',
  'Explicit backend ↔ frontend contract design',
  'Configurable operational logic (not hardcoded flows)',
];

const ArchitectureSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-label">Architecture</p>
            <h2 className="section-heading display-5 mb-5">System Design</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ul className="architecture-list">
              {principles.map((item, i) => (
                <li key={i} className="architecture-item">
                  <i className="bi bi-check2 text-accent me-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
