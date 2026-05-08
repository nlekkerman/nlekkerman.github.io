import { Link } from 'react-router-dom';

const CTAButton = ({
  to,
  href,
  children,
  variant = 'primary',
  icon,
  external = false,
}) => {
  const className = `cc-btn cc-btn-${variant}`;
  const content = (
    <>
      {icon && <i className={`bi ${icon} me-2`} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
};

export default CTAButton;
