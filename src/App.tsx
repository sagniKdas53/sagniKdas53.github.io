import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import './index.css';

// Lazy load sections for better performance and modularity
const Hero = lazy(() => import('./components/Hero.tsx'));
const Skills = lazy(() => import('./components/Skills.tsx'));
const Experience = lazy(() => import('./components/Experience.tsx'));
const Projects = lazy(() => import('./components/Projects.tsx'));
const Certifications = lazy(() => import('./components/Certifications.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-loader" style={{ 
    height: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'var(--muted)',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  }}>
    Loading section...
  </div>
);

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
