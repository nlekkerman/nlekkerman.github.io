const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center mb-5">
            <p className="section-label">Contact</p>
            <h2 className="section-heading display-5">Let&apos;s Connect</h2>
            <p className="section-desc lead mx-auto" style={{ maxWidth: '480px' }}>
              Have a project in mind, a technical question, or want to discuss
              architecture? I&apos;m always open to a good conversation.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="contact-details-grid">
              <a href="mailto:nlekkerman@gmail.com" className="contact-detail-item">
                <i className="bi bi-envelope" />
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">nlekkerman@gmail.com</span>
                </div>
              </a>
              <a href="tel:+353830945102" className="contact-detail-item">
                <i className="bi bi-phone" />
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+353 83 094 5102</span>
                </div>
              </a>
              <a
                href="https://github.com/nlekkerman"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <i className="bi bi-github" />
                <div>
                  <span className="detail-label">GitHub</span>
                  <span className="detail-value">nlekkerman</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/nikola-simic-674862110"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <i className="bi bi-linkedin" />
                <div>
                  <span className="detail-label">LinkedIn</span>
                  <span className="detail-value">Nikola Simic</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer mt-5">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} Nikola Simic
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
