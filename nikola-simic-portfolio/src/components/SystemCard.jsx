const SystemCard = ({ icon, title, description, accent }) => (
  <div className={`cc-system-card ${accent ? 'cc-system-card-accent' : ''}`}>
    {icon && (
      <div className="cc-system-icon">
        <i className={`bi ${icon}`} />
      </div>
    )}
    <h3 className="cc-system-title">{title}</h3>
    <p className="cc-system-desc">{description}</p>
  </div>
);

export default SystemCard;
