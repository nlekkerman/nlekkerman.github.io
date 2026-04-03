import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles.css';

import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import FlowsSection from './components/FlowsSection';
import ArchitectureSection from './components/ArchitectureSection';
import SecondaryProject from './components/SecondaryProject';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App = () => (
  <>
    <Hero />
    <FeaturedProject />
    <hr className="section-divider" />
    <FlowsSection />
    <ArchitectureSection />
    <hr className="section-divider" />
    <SecondaryProject />
    <AboutSection />
    <hr className="section-divider" />
    <ContactSection />
  </>
);

export default App;
