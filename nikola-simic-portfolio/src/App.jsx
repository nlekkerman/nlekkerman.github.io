import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HotelMatesPage from './pages/HotelMatesPage';
import RbacPage from './pages/RbacPage';
import ArchitecturePage from './pages/ArchitecturePage';
import AboutPage from './pages/AboutPage';
import DemoAccessPage from './pages/DemoAccessPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/hotelmates" element={<HotelMatesPage />} />
      <Route path="/hotelmates/rbac" element={<RbacPage />} />
      <Route path="/hotelmates/architecture" element={<ArchitecturePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Navigate to="/about" replace />} />
      <Route path="/demo-access" element={<DemoAccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
