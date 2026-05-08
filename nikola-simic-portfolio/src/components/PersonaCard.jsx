const PersonaCard = ({ persona, isActive, onSelect }) => {
  const {
    name,
    tier,
    role,
    department,
    capabilities,
    proof,
    authority,
  } = persona;

  return (
    <button
      type="button"
      className={`cc-persona-card ${isActive ? 'is-active' : ''}`}
      onClick={onSelect}
    >
      <div className="cc-persona-head">
        <span className="cc-persona-name">{name}</span>
        <span className={`cc-persona-authority cc-persona-authority-${authority}`}>
          {authority.replace('-', ' ')}
        </span>
      </div>
      <dl className="cc-persona-meta">
        <div>
          <dt>Tier</dt>
          <dd>{tier}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>
        {department && (
          <div>
            <dt>Department</dt>
            <dd>{department}</dd>
          </div>
        )}
        <div>
          <dt>Capabilities</dt>
          <dd className="cc-persona-caps">{capabilities}</dd>
        </div>
      </dl>
      <p className="cc-persona-proof">{proof}</p>
    </button>
  );
};

export default PersonaCard;
