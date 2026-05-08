const PageHero = ({ eyebrow, title, subtitle, description, badges, children }) => (
  <section className="cc-page-hero">
    <div className="cc-page-hero-glow" aria-hidden="true" />
    <div className="container position-relative">
      {eyebrow && <p className="cc-eyebrow">{eyebrow}</p>}
      <h1 className="cc-page-title">{title}</h1>
      {subtitle && <p className="cc-page-subtitle">{subtitle}</p>}
      {description && <p className="cc-page-description">{description}</p>}
      {badges && badges.length > 0 && (
        <div className="cc-badge-row">
          {badges.map((b) => (
            <span key={b} className="cc-badge cc-badge-default">
              {b}
            </span>
          ))}
        </div>
      )}
      {children && <div className="cc-page-hero-actions">{children}</div>}
    </div>
  </section>
);

export default PageHero;
