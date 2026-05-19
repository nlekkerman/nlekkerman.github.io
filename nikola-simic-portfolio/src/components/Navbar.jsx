import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/hotelmates', label: 'HotelMates' },
  { to: '/hotelmates/rbac', label: 'RBAC Matrix' },
  { to: '/hotelmates/architecture', label: 'Architecture' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="cc-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="cc-brand">
          <img src="/portfolio-profile-image.png" alt="Nikola Simic" className="cc-brand-mark" />
          <span className="cc-brand-text">Nikola Simic</span>
        </Link>

        <button
          type="button"
          className="cc-nav-toggle d-lg-none"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>

        <ul className={`cc-nav-list ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `cc-nav-link ${isActive ? 'is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
