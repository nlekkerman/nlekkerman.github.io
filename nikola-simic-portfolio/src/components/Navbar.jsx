import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <a className="navbar-brand text-uppercase fw-bold" href="#">
        <p className="name">Nikola Simic</p>
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
