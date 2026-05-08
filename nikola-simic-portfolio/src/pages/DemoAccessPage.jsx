import { useState } from 'react';
import PageHero from '../components/PageHero';

const groups = [
  {
    label: 'Full Hotel Authority',
    tone: 'full',
    emails: [
      'nora.king.demo@noway.test',
      'henry.walsh.demo@noway.test',
      'fiona.brooks.demo@noway.test',
      'maya.reed.demo@noway.test',
    ],
  },
  {
    label: 'Supervisor',
    tone: 'supervisor',
    emails: ['liam.stone.demo@noway.test'],
  },
  {
    label: 'Operational Staff',
    tone: 'operational',
    emails: [
      'ava.doyle.demo@noway.test',
      'omar.price.demo@noway.test',
      'kate.nolan.demo@noway.test',
      'zoe.hart.demo@noway.test',
    ],
  },
];

const HOTEL_SLUG = 'no-way-hotel';
const DEMO_PASSWORD = 'PortfolioTest123!';
const LIVE_URL = 'https://hotelsmates.com';

const Copyable = ({ value, label }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="cc-copy-row"
      aria-label={`Copy ${label}`}
    >
      <span className="cc-copy-label">{label}</span>
      <span className="cc-copy-value">{value}</span>
      <span className="cc-copy-action">
        <i className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'}`} />
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  );
};

const DemoAccessPage = () => (
  <>
    <PageHero
      eyebrow="Private · For Reviewers"
      title="HotelMates Demo Access"
      subtitle="Shareable credentials for guided portfolio review."
      description="Use the staff login page for the HotelMates demo environment. Each persona shows how the React UI changes based on the backend-resolved RBAC payload."
    />

    <section className="cc-section">
      <div className="container">
        <div className="cc-warning-banner">
          <i className="bi bi-exclamation-triangle" />
          <div>
            <strong>Portfolio demo / testing only.</strong>
            <span>
              These accounts are seeded into an isolated demo tenant. They are
              not real users and do not contain real data. Do not share this
              page publicly.
            </span>
          </div>
        </div>

        <div className="cc-grid cc-grid-2 mt-4">
          <div className="cc-glass-card">
            <p className="cc-eyebrow">Tenant</p>
            <h3 className="cc-card-title">Workspace</h3>
            <Copyable label="Live demo" value={LIVE_URL} />
            <Copyable label="Hotel slug" value={HOTEL_SLUG} />
            <Copyable label="Shared demo password" value={DEMO_PASSWORD} />
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn cc-btn-primary mt-3"
            >
              <i className="bi bi-box-arrow-up-right me-2" /> Launch Live Demo
            </a>
            <p className="cc-card-foot">
              The same password is used across all demo personas to keep
              walkthroughs simple. It grants no production access.
            </p>
          </div>

          <div className="cc-glass-card">
            <p className="cc-eyebrow">How to test</p>
            <h3 className="cc-card-title">Walkthrough</h3>
            <ol className="cc-howto-list">
              <li>
                Open <code>{LIVE_URL}</code> and go to the staff login page.
              </li>
              <li>
                Enter the hotel slug <code>{HOTEL_SLUG}</code>.
              </li>
              <li>Pick any persona email below.</li>
              <li>
                Use the shared demo password <code>{DEMO_PASSWORD}</code>.
              </li>
              <li>Compare the UI between authority levels.</li>
            </ol>
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.label} className="cc-rbac-group">
            <div className="cc-rbac-group-head">
              <h3>{group.label}</h3>
              <span className="cc-rbac-group-count">
                {group.emails.length}{' '}
                {group.emails.length === 1 ? 'persona' : 'personas'}
              </span>
            </div>
            <div className="cc-grid cc-grid-2">
              {group.emails.map((email) => (
                <Copyable key={email} label="Email" value={email} />
              ))}
            </div>
          </div>
        ))}

        <div className="cc-warning-banner cc-warning-banner-muted mt-4">
          <i className="bi bi-shield-check" />
          <div>
            <strong>Security:</strong>
            <span>
              No real secrets, API keys, tokens, or admin credentials are
              published here. Demo data is isolated to the demo tenant.
            </span>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DemoAccessPage;
