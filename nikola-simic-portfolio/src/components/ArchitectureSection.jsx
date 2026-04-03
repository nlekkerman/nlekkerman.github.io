const pillars = [
  {
    icon: 'bi-gear-wide-connected',
    title: 'Real Operational System',
    desc: 'Designed around clear system boundaries, hotel scoping, role-based permissions, and state-driven workflows — not isolated UI features.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Multi-Tenant Architecture',
    desc: 'Each hotel operates in its own scoped environment — isolated data, staff context, and hotel-specific workflows on shared platform infrastructure.',
  },
  {
    icon: 'bi-key',
    title: 'Role-Based Access Control',
    desc: 'Access is separated across platform, hotel staff, and guest contexts, with permissions applied to operational actions and data visibility.',
  },
  {
    icon: 'bi-broadcast-pin',
    title: 'Event-Driven Realtime',
    desc: 'Pusher-based event delivery and frontend routing keep critical staff-side flows synchronized — especially bookings, room activity, and messaging.',
  },
  {
    icon: 'bi-file-earmark-code',
    title: 'Backend / Frontend Contract',
    desc: 'Built around explicit API boundaries, hotel-aware scoping, and controlled flow alignment between backend rules and frontend behavior.',
  },
];

const ArchitectureSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <p className="section-label">Architecture &amp; Thinking</p>
            <h2 className="section-heading display-5">
              Built with System Design in Mind
            </h2>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '560px' }}>
              Not just features — a deliberate architecture built around
              hotel scoping, state-driven workflows, and clear system boundaries.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {pillars.map((pillar, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="arch-card h-100 p-4 text-center">
                <div className="arch-icon-wrapper mx-auto mb-3">
                  <i className={`bi ${pillar.icon} fs-5`} />
                </div>
                <h6 className="card-title-sm">{pillar.title}</h6>
                <p className="card-text-sm">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
