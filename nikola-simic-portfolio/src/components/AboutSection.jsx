const stackGroups = [
  { label: 'Backend', items: ['Python', 'Django', 'REST APIs'] },
  { label: 'Frontend', items: ['JavaScript', 'React', 'Bootstrap'] },
  { label: 'Data', items: ['PostgreSQL'] },
  { label: 'Realtime', items: ['Pusher'] },
  { label: 'Notifications', items: ['Firebase'] },
  { label: 'Tools', items: ['Git'] },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-label">About the Engineer</p>
            <h2 className="section-heading display-5">Nikola Simic</h2>
            <p className="section-desc lead mb-3 mx-auto" style={{ maxWidth: '540px' }}>
              I design and build complete, production-grade systems — from data
              models and APIs to real-time dashboards and deployment.
            </p>
            <p className="section-desc mx-auto mb-4" style={{ maxWidth: '540px' }}>
              My focus is on multi-tenant SaaS platforms, role-based access
              control, and event-driven workflows. I build systems with clear
              boundaries, predictable behavior, and logic that reflects
              real-world operations — not just UI flows.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {stackGroups.map((group) => (
                <div key={group.label} className="text-center">
                  <small className="text-uppercase fw-semibold d-block mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', opacity: 0.6 }}>
                    {group.label}
                  </small>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {group.items.map((skill) => (
                      <span className="tech-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
