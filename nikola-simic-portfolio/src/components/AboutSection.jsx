const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
              About
            </p>
            <h2 className="display-5 fw-bold mb-4">Nikola Simic</h2>
            <p className="text-muted-custom lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              Full-stack developer focused on building complete, production-grade
              systems. I design and ship independently — from data models and
              API contracts to real-time frontends and deployment pipelines.
            </p>
            <p className="text-muted-custom mx-auto" style={{ maxWidth: '600px' }}>
              My work is centered on multi-tenant SaaS, role-based access
              systems, and real-time communication layers. I care about clean
              architecture, clear boundaries between services, and software that
              works under real conditions — not just in demos.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
              {[
                'Python',
                'Django',
                'JavaScript',
                'React',
                'WebSockets',
                'PostgreSQL',
                'REST APIs',
                'Bootstrap',
                'Git',
                'C#',
                'Unity',
              ].map((skill) => (
                <span className="tech-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
