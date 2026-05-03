import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Lazy load sections for better performance and modularity
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

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
