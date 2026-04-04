const flows = [
  {
    icon: 'bi-building-add',
    title: 'Platform Provisioning',
    desc: 'Create hotel → initialize tenant → assign admin',
  },
  {
    icon: 'bi-calendar2-range',
    title: 'Booking Lifecycle',
    desc: 'Reservation → Pre-check-in → In-house → Checkout → Post-stay',
  },
  {
    icon: 'bi-qr-code',
    title: 'Staff Onboarding',
    desc: 'QR scan → Registration → Approval → Role assignment',
  },
  {
    icon: 'bi-person-badge',
    title: 'Guest Experience',
    desc: 'Tokenized access → Booking-scoped features → Stay-state adaptation',
  },
  {
    icon: 'bi-sliders',
    title: 'Operational Config',
    desc: 'Booking rules → Guest requirements → Policies → Timing controls',
  },
  {
    icon: 'bi-globe2',
    title: 'Public Hotel Page',
    desc: 'Hotel-controlled content → Layout config → Booking entry points',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Realtime Sync',
    desc: 'Pusher events → Dashboard updates → Chat sync → Room activity',
  },
];

const FlowsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <p className="section-label">System Flows</p>
            <h2 className="section-heading display-5">How It Works</h2>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '460px' }}>
              Every major flow — designed, built, and connected.
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
                <p className="card-text-sm flow-steps">{flow.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowsSection;
