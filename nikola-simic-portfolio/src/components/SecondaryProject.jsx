const SecondaryProject = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="secondary-card p-4 p-md-5">
              <p className="section-label">Other Work</p>
              <h2 className="section-heading h3">ShootAR</h2>
              <p className="section-desc mb-2" style={{ maxWidth: '520px' }}>
                Web-based AR system with real-time interaction, spatial
                tracking, and 3D gameplay.
              </p>
              <p className="section-desc mb-4" style={{ maxWidth: '520px' }}>
                Core mechanics and interaction systems are implemented, with
                initial levels developed and ongoing expansion focused on
                gameplay depth and progression.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['React', 'A-Frame', 'Three.js', 'WebXR'].map(
                  (tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#"
                  className="btn btn-accent px-4 py-2"
                >
                  <i className="bi bi-box-arrow-up-right me-2" />
                  View Project
                </a>
                <a
                  href="https://github.com/nlekkerman/shootars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-accent px-4 py-2"
                >
                  <i className="bi bi-github me-2" />
                  Frontend Code
                </a>
                <a
                  href="https://github.com/nlekkerman/shootars-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-accent px-4 py-2"
                >
                  <i className="bi bi-github me-2" />
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryProject;
