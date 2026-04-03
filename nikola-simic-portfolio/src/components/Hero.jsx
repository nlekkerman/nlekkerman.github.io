const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center min-vh-100 position-relative overflow-hidden">
      <div className="hero-bg-gradient" />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <p className="hero-label text-uppercase fw-semibold letter-spacing-wide mb-3">
              Full-Stack Developer &middot; System Architect
            </p>
            <h1 className="hero-title display-2 fw-bold mb-4">
              I build real-time,
              <br />
              <span className="text-gradient">multi-tenant platforms</span>
            </h1>
            <p className="hero-subtitle lead mx-auto mb-5" style={{ maxWidth: '640px' }}>
              Designing and shipping complete SaaS systems from database schema
              to live dashboard. Backend logic, real-time communication,
              role-based access — end to end.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#featured-project" className="btn btn-accent btn-lg px-4 py-3">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <i className="bi bi-chevron-double-down" />
      </div>
    </section>
  );
};

export default Hero;
