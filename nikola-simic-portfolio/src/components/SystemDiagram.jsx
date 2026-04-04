const layers = [
  {
    icon: 'bi-building-add',
    label: 'Platform',
    desc: 'Creates hotel (tenant) and assigns admin',
    style: 'node-entry',
  },
  {
    icon: 'bi-building',
    label: 'Hotel (Tenant)',
    desc: 'Isolated data, staff, configuration, and workflows',
    style: 'node-entry',
  },
  {
    icon: 'bi-people',
    label: 'Actors',
    desc: 'Guest (token-based) · Staff (role-based) · Admin (config & control)',
    style: 'node-entry',
  },
  {
    icon: 'bi-window',
    label: 'Frontend',
    desc: 'React — hotel-scoped routing, role-aware UI, realtime updates',
    style: 'node-layer',
  },
  {
    icon: 'bi-hdd-rack',
    label: 'Backend',
    desc: 'Django REST API — RBAC, hotel scoping, business logic, lifecycle management',
    style: 'node-core',
  },
  {
    icon: 'bi-database',
    label: 'Data',
    desc: 'PostgreSQL — tenant-isolated data per hotel',
    style: 'node-service',
  },
  {
    icon: 'bi-broadcast',
    label: 'Realtime',
    desc: 'Pusher — event-driven sync across dashboards and chat',
    style: 'node-service',
  },
  {
    icon: 'bi-key',
    label: 'Identity',
    desc: 'Token-based access — guest tokens, staff authentication',
    style: 'node-service',
  },
];

const SystemDiagram = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-7 text-center">
            <p className="section-label">System Overview</p>
            <h2 className="section-heading display-5">How It All Connects</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="diagram-card p-4 p-md-5">
              <div className="diagram-flow">
                {layers.map((layer, i) => (
                  <div key={layer.label}>
                    <div className="diagram-row">
                      <div className={`diagram-node ${layer.style}`}>
                        <i className={`bi ${layer.icon}`} />
                        <span>{layer.label}</span>
                        <small>{layer.desc}</small>
                      </div>
                    </div>
                    {i < layers.length - 1 && (
                      <div className="diagram-connector">
                        <i className="bi bi-arrow-down" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagram;
