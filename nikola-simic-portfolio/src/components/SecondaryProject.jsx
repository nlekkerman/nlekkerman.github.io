const SecondaryProject = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="secondary-card p-4 p-md-5">
              <p className="section-label">Other Work</p>
              <h2 className="section-heading h3">ShootAR</h2>
              <p className="section-desc mb-4" style={{ maxWidth: '520px' }}>
                An augmented reality Android game built with Unity and C#.
                Players interact with real-world environments through their
                camera, engaging targets with physics-based projectile
                mechanics. Combines AR Foundation, spatial mapping, and
                responsive UI for an immersive mobile experience.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Unity', 'C#', 'AR Foundation', 'Android', 'Mobile Game'].map(
                  (tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://github.com/nlekkerman/ShootAR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-accent px-4 py-2"
              >
                <i className="bi bi-github me-2" />
                View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryProject;
