import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="cc-section" style={{ minHeight: '60vh' }}>
    <div className="container text-center">
      <p className="cc-eyebrow">404</p>
      <h1 className="cc-page-title">Route not found</h1>
      <p className="cc-page-description">
        The page you tried to reach is not part of this portfolio.
      </p>
      <Link to="/" className="cc-btn cc-btn-primary mt-3">
        Back to Command Center
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
