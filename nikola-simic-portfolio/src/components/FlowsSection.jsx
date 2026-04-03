const flows = [
  {
    icon: 'bi-globe2',
    title: 'Public Hotel Experience',
    desc: 'Guests interact with a configurable hotel page where each hotel controls its own content, layout, and booking entry points.',
  },
  {
    icon: 'bi-journal-check',
    title: 'Booking Entry',
    desc: 'Guests create reservations directly through the hotel interface, with availability checks and validation handled by backend workflows.',
  },
  {
    icon: 'bi-calendar2-range',
    title: 'Booking Lifecycle',
    desc: 'Track bookings from reservation through pre-check-in, in-house stay, checkout, and follow-up — with state changes reflected across the system.',
  },
  {
    icon: 'bi-sliders',
    title: 'Operational Configuration',
    desc: 'Hotel administrators configure booking rules, guest requirements, policies, and operational timing — controlling how the system behaves across all workflows.',
  },
  {
    icon: 'bi-people',
    title: 'Staff Onboarding',
    desc: 'Staff join through hotel-linked onboarding flows with role-based access and hotel scoping, entering the correct operational context from the start.',
  },
  {
    icon: 'bi-person-badge',
    title: 'Guest Experience',
    desc: 'Guests access hotel-specific flows through tokenized links, with features and access adapting to booking and stay state within real booking context.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Pusher-Powered Ops',
    desc: 'Key staff-side flows use Pusher-driven event updates for bookings, room activity, and chat synchronization — keeping dashboards aligned.',
  },
];

const FlowsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <p className="section-label">System Flows</p>
            <h2 className="section-heading display-5">How HotelsMates Works</h2>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '540px' }}>
              Every major operational flow is designed, built, and connected.
              These aren&apos;t wireframes — they&apos;re working systems.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {flows.map((flow, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="flow-card h-100 p-4">
                <div className="flow-icon-wrapper mb-3">
                  <i className={`bi ${flow.icon} fs-5`} />
                </div>
                <h6 className="card-title-sm">{flow.title}</h6>
                <p className="card-text-sm">{flow.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowsSection;
