const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100 position-relative overflow-hidden">
      <div className="hero-bg-gradient" />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-7 text-center">
            <p className="hero-label text-uppercase mb-3">
              Full-Stack Engineer
            </p>
            <h1 className="hero-title mb-2">Nikola Simic</h1>
            <p className="hero-headline mb-4">
              Building{' '}
              <span className="text-gradient">multi-tenant SaaS systems</span>
            </p>
            <p className="hero-subtitle mx-auto mb-5" style={{ maxWidth: '560px' }}>
              From database design to real-time dashboards — I build
              system-driven applications with RBAC, event-driven workflows,
              and clean backend/frontend contracts.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#featured-project" className="btn btn-accent btn-lg px-4 py-2">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-2">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <i className="bi bi-chevron-down" />
      </div>
    </section>
  );
};

export default Hero;
