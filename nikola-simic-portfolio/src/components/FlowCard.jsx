const FlowCard = ({ title, steps, icon }) => (
  <div className="cc-flow-card">
    <div className="cc-flow-header">
      {icon && <i className={`bi ${icon}`} />}
      <h4>{title}</h4>
    </div>
    <ol className="cc-flow-steps">
      {steps.map((step, i) => (
        <li key={i}>
          <span className="cc-flow-step-index">{String(i + 1).padStart(2, '0')}</span>
          <span className="cc-flow-step-text">{step}</span>
        </li>
      ))}
    </ol>
  </div>
);

export default FlowCard;
