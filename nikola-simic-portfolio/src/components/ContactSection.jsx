const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-label text-uppercase fw-semibold letter-spacing-wide mb-2">
              Contact
            </p>
            <h2 className="display-5 fw-bold mb-3">Let&apos;s Connect</h2>
            <p className="text-muted-custom lead mb-5 mx-auto" style={{ maxWidth: '520px' }}>
              Interested in working together, have a question about my projects,
              or just want to talk tech? I&apos;m always open to a conversation.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="mailto:nlekkerman@gmail.com"
                className="btn btn-accent btn-lg px-4 py-3"
              >
                <i className="bi bi-envelope me-2" />
                Email Me
              </a>
              <a
                href="https://github.com/nlekkerman"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg px-4 py-3"
              >
                <i className="bi bi-github me-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nikola-simic-ns/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg px-4 py-3"
              >
                <i className="bi bi-linkedin me-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-muted-custom mt-5 pt-5 pb-3 small">
        &copy; {new Date().getFullYear()} Nikola Simic. Built with React &amp; Bootstrap.
      </footer>
    </section>
  );
};

export default ContactSection;
