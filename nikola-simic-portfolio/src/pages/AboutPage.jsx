import PageHero from '../components/PageHero';

const stackGroups = [
  { label: 'Backend', items: ['Python', 'Django', 'Django REST', 'PostgreSQL'] },
  { label: 'Frontend', items: ['JavaScript', 'React', 'React Router', 'Bootstrap'] },
  { label: 'Realtime', items: ['Pusher'] },
  { label: 'Notifications', items: ['Firebase'] },
  { label: 'Tooling', items: ['Vite', 'Git', 'GitHub Pages'] },
];

const contacts = [
  {
    icon: 'bi-envelope',
    label: 'Email',
    value: 'nlekkerman@gmail.com',
    href: 'mailto:nlekkerman@gmail.com',
  },
  {
    icon: 'bi-phone',
    label: 'Phone',
    value: '+353 83 094 5102',
    href: 'tel:+353830945102',
  },
  {
    icon: 'bi-github',
    label: 'GitHub',
    value: 'nlekkerman',
    href: 'https://github.com/nlekkerman',
    external: true,
  },
  {
    icon: 'bi-linkedin',
    label: 'LinkedIn',
    value: 'Nikola Simic',
    href: 'https://www.linkedin.com/in/nikola-simic-674862110',
    external: true,
  },
];

const otherWork = {
  title: 'ShootAR',
  description:
    'Web-based AR system with real-time interaction, spatial tracking, and 3D gameplay. Core mechanics and initial levels are implemented; ongoing expansion focuses on gameplay depth and progression.',
  tags: ['React', 'A-Frame', 'Three.js', 'WebXR'],
  links: [
    { href: 'https://github.com/nlekkerman/shootars', label: 'Frontend' },
    { href: 'https://github.com/nlekkerman/shootars-backend', label: 'Backend' },
  ],
};

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About"
      title="Nikola Simic"
      subtitle="Full-stack developer · Multi-tenant SaaS · Real-time systems"
      description="I build real operational systems with Django, React, PostgreSQL, and modern frontend architecture. My work centers on multi-tenant SaaS, backend authorization, real-time workflows, dashboards, and product-quality UI."
    />

    <section className="cc-section">
      <div className="container">
        <div className="cc-grid cc-grid-2">
          <div className="cc-glass-card">
            <p className="cc-eyebrow">Stack</p>
            <h3 className="cc-card-title">Tools I reach for</h3>
            <div className="cc-stack-groups">
              {stackGroups.map((g) => (
                <div key={g.label} className="cc-stack-group">
                  <span className="cc-stack-label">{g.label}</span>
                  <div className="cc-stack-tags">
                    {g.items.map((s) => (
                      <span key={s} className="cc-tech-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cc-glass-card">
            <p className="cc-eyebrow">Contact</p>
            <h3 className="cc-card-title">Direct lines</h3>
            <div className="cc-contact-grid">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="cc-contact-row"
                >
                  <i className={`bi ${c.icon}`} />
                  <div>
                    <span className="cc-contact-label">{c.label}</span>
                    <span className="cc-contact-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cc-section cc-section-alt">
      <div className="container">
        <div className="cc-section-head">
          <p className="cc-eyebrow">Other Work</p>
          <h2 className="cc-section-title">{otherWork.title}</h2>
        </div>
        <div className="cc-glass-card">
          <p className="cc-prose">{otherWork.description}</p>
          <div className="cc-stack-tags mt-3">
            {otherWork.tags.map((t) => (
              <span key={t} className="cc-tech-tag">
                {t}
              </span>
            ))}
          </div>
          <div className="cc-page-hero-actions mt-4">
            {otherWork.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cc-btn cc-btn-ghost"
              >
                <i className="bi bi-github me-2" />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
