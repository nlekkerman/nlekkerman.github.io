const ArchitectureNode = ({ icon, label, desc, tone = 'default', isLast }) => (
  <>
    <div className={`cc-arch-node cc-arch-node-${tone}`}>
      <div className="cc-arch-node-icon">
        <i className={`bi ${icon}`} />
      </div>
      <div className="cc-arch-node-body">
        <span className="cc-arch-node-label">{label}</span>
        <span className="cc-arch-node-desc">{desc}</span>
      </div>
    </div>
    {!isLast && (
      <div className="cc-arch-connector" aria-hidden="true">
        <i className="bi bi-arrow-down" />
      </div>
    )}
  </>
);

export default ArchitectureNode;
