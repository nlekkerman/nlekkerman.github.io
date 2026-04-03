const SecondaryProject = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="secondary-card rounded-4 p-5">
              <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
                Other Work
              </p>
              <h2 className="display-6 fw-bold mb-3">ShootAR</h2>
              <p className="text-muted-custom lead mb-4">
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
                className="btn btn-outline-accent px-4"
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
