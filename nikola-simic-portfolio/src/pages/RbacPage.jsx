import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import PersonaCard from '../components/PersonaCard';

const personas = [
  {
    id: 'nora',
    name: 'Nora King',
    tier: 'super_staff_admin',
    role: 'front_office_manager',
    department: 'Front Office',
    capabilities: '176',
    proof: 'Top hotel authority by tier.',
    authority: 'full',
    visible: ['All operational modules', 'Staff administration', 'Hotel configuration'],
    restricted: ['Cross-tenant platform controls'],
  },
  {
    id: 'henry',
    name: 'Henry Walsh',
    tier: 'staff_admin',
    role: 'hotel_manager',
    department: 'Management',
    capabilities: '~173–175',
    proof: 'Full hotel authority by role.',
    authority: 'full',
    visible: ['All operational modules', 'Staff oversight', 'Hotel-wide reporting'],
    restricted: ['Platform owner / multi-tenant controls'],
  },
  {
    id: 'fiona',
    name: 'Fiona Brooks',
    tier: 'regular_staff',
    role: 'front_office_manager',
    department: 'Front Office',
    capabilities: '~173–175',
    proof: 'Manager role grants full hotel authority.',
    authority: 'full',
    visible: ['Bookings', 'Housekeeping', 'Maintenance', 'Staff', 'Restaurant'],
    restricted: ['Tenant provisioning'],
  },
  {
    id: 'maya',
    name: 'Maya Reed',
    tier: 'regular_staff',
    role: 'housekeeping_manager',
    department: 'Housekeeping',
    capabilities: '~173–175',
    proof: 'Department manager receives full hotel authority.',
    authority: 'full',
    visible: ['All operational modules with manager scope'],
    restricted: ['Tenant provisioning'],
  },
  {
    id: 'liam',
    name: 'Liam Stone',
    tier: 'regular_staff',
    role: 'front_office_supervisor',
    department: 'Front Office',
    capabilities: '64',
    proof: 'Elevated operational authority below manager.',
    authority: 'supervisor',
    visible: ['Bookings', 'Reception operations', 'Limited staff oversight'],
    restricted: ['Hotel-wide configuration', 'Department admin'],
  },
  {
    id: 'ava',
    name: 'Ava Doyle',
    tier: 'regular_staff',
    role: 'housekeeper',
    department: 'Housekeeping',
    capabilities: '37–60',
    proof: 'Housekeeping operator restrictions.',
    authority: 'operational',
    visible: ['Assigned room tasks', 'Cleaning status updates'],
    restricted: ['Bookings management', 'Staff administration', 'Restaurant'],
  },
  {
    id: 'omar',
    name: 'Omar Price',
    tier: 'regular_staff',
    role: 'waiter',
    department: 'Restaurant',
    capabilities: '37–60',
    proof: 'F&B / restaurant operator restrictions.',
    authority: 'operational',
    visible: ['Restaurant bookings', 'Order tickets'],
    restricted: ['Housekeeping', 'Maintenance', 'Staff management'],
  },
  {
    id: 'kate',
    name: 'Kate Nolan',
    tier: 'regular_staff',
    role: 'maintenance_staff',
    department: 'Maintenance',
    capabilities: '37–60',
    proof: 'Maintenance operator restrictions.',
    authority: 'operational',
    visible: ['Maintenance tickets', 'Assigned tasks'],
    restricted: ['Bookings', 'Restaurant', 'Staff configuration'],
  },
  {
    id: 'zoe',
    name: 'Zoe Hart',
    tier: 'regular_staff',
    role: 'front_desk_agent',
    department: 'Front Office',
    capabilities: '37–60',
    proof: 'Reception / bookings operator restrictions.',
    authority: 'operational',
    visible: ['Bookings desk', 'Guest check-in/out', 'Guest chat'],
    restricted: ['Hotel configuration', 'Staff administration'],
  },
];

const groups = [
  { id: 'full', label: 'Full Hotel Authority' },
  { id: 'supervisor', label: 'Supervisor' },
  { id: 'operational', label: 'Operational Staff' },
];

const RbacPage = () => {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = useMemo(
    () => personas.find((p) => p.id === activeId) || personas[0],
    [activeId]
  );

  return (
    <>
      <PageHero
        eyebrow="HotelMates · Permissions"
        title="Live Permission Matrix"
        subtitle="Nine seeded staff personas demonstrate how the same React frontend changes based on backend authorization."
        description="Each persona is a real Django user linked to a hotel staff profile. The backend resolves effective capabilities from tier, role, and department, then emits an RBAC payload consumed by the React UI."
      >
        <a
          href="https://hotelsmates.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cc-btn cc-btn-primary"
        >
          <i className="bi bi-box-arrow-up-right me-2" /> Test Live RBAC Demo
        </a>
        <span className="cc-coming-soon cc-coming-soon-block">
          <i className="bi bi-camera-video" /> Video walkthrough coming soon
        </span>
      </PageHero>

      <section className="cc-section">
        <div className="container">
          {groups.map((group) => {
            const items = personas.filter((p) => p.authority === group.id);
            return (
              <div key={group.id} className="cc-rbac-group">
                <div className="cc-rbac-group-head">
                  <h3>{group.label}</h3>
                  <span className="cc-rbac-group-count">
                    {items.length} {items.length === 1 ? 'persona' : 'personas'}
                  </span>
                </div>
                <div className="cc-grid cc-grid-2">
                  {items.map((persona) => (
                    <PersonaCard
                      key={persona.id}
                      persona={persona}
                      isActive={persona.id === activeId}
                      onSelect={() => setActiveId(persona.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cc-section cc-section-alt">
        <div className="container">
          <div className="cc-section-head">
            <p className="cc-eyebrow">Permission Console</p>
            <h2 className="cc-section-title">{active.name}</h2>
          </div>

          <div className="cc-console">
            <div className="cc-console-row">
              <span className="cc-console-key">Authority</span>
              <span className="cc-console-val cc-console-pill">
                {active.authority.replace('-', ' ')}
              </span>
            </div>
            <div className="cc-console-row">
              <span className="cc-console-key">Tier</span>
              <span className="cc-console-val">{active.tier}</span>
            </div>
            <div className="cc-console-row">
              <span className="cc-console-key">Role</span>
              <span className="cc-console-val">{active.role}</span>
            </div>
            <div className="cc-console-row">
              <span className="cc-console-key">Department</span>
              <span className="cc-console-val">{active.department}</span>
            </div>
            <div className="cc-console-row">
              <span className="cc-console-key">Capabilities</span>
              <span className="cc-console-val">{active.capabilities}</span>
            </div>
            <div className="cc-console-row">
              <span className="cc-console-key">Proof</span>
              <span className="cc-console-val">{active.proof}</span>
            </div>

            <div className="cc-console-block">
              <h5>
                <i className="bi bi-check2-circle me-2" /> Visible modules
              </h5>
              <ul className="cc-console-list cc-console-list-ok">
                {active.visible.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>

            <div className="cc-console-block">
              <h5>
                <i className="bi bi-slash-circle me-2" /> Restricted areas
              </h5>
              <ul className="cc-console-list cc-console-list-blocked">
                {active.restricted.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="cc-private-note">
            Demo personas are available for guided review. Credentials can be
            shared privately.
          </p>
        </div>
      </section>
    </>
  );
};

export default RbacPage;
