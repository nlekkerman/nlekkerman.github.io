import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="cc-shell">
      <Navbar />
      <main className="cc-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
