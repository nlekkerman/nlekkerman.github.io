const SiteFooter = () => (
  <footer className="cc-footer">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
      <span>&copy; {new Date().getFullYear()} Nikola Simic</span>
      <span className="cc-footer-meta">
        Full-stack systems · Django · React · PostgreSQL
      </span>
    </div>
  </footer>
);

export default SiteFooter;
