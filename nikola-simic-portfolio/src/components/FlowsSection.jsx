const flows = [
  {
    icon: 'bi-houses',
    title: 'Hotel Provisioning',
    desc: 'Owners register a hotel, configure rooms, departments, and policies. The system scaffolds the entire operational structure automatically.',
  },
  {
    icon: 'bi-people',
    title: 'Staff Onboarding',
    desc: 'Invite staff by role, assign departments and permissions. New team members are operational from day one with scoped access.',
  },
  {
    icon: 'bi-calendar2-range',
    title: 'Booking Lifecycle',
    desc: 'Guests search, book, and manage reservations. The system handles availability, conflicts, confirmations, and real-time status updates.',
  },
  {
    icon: 'bi-person-badge',
    title: 'Guest Experience',
    desc: 'From check-in to check-out — service requests, messaging, and live notifications keep the guest connected throughout their stay.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Realtime Operations',
    desc: 'WebSocket events drive task assignments, housekeeping alerts, and dashboard refreshes. No polling, no delays — instant synchronization.',
  },
];

const FlowsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
              System Flows
            </p>
            <h2 className="display-5 fw-bold mb-3">How HotelMate Works</h2>
            <p className="text-muted-custom lead mx-auto" style={{ maxWidth: '600px' }}>
              Every major operational flow is designed, built, and connected.
              These aren't wireframes — they're working systems.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {flows.map((flow, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="flow-card h-100 p-4 rounded-4">
                <div className="flow-icon-wrapper mb-3">
                  <i className={`bi ${flow.icon} fs-3`} />
                </div>
                <h5 className="fw-semibold mb-2">{flow.title}</h5>
                <p className="text-muted-custom small mb-0">{flow.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowsSection;
