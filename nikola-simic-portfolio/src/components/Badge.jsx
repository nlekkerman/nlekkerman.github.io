const Badge = ({ children, tone = 'default' }) => (
  <span className={`cc-badge cc-badge-${tone}`}>{children}</span>
);

export default Badge;
