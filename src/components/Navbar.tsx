import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { GithubIcon } from './Icons.tsx';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('sd-theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sd-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav>
      <a href="#" className="nav-logo">SD_</a>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certs">Education</a>
          <a href="#contact">Contact</a>
          <a 
            href="https://github.com/sagniKdas53" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-gh"
          >
            <GithubIcon size={13} />
            GitHub
          </a>
        </div>
        <button 
          type="button"
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle light/dark mode"
        >
          {theme === 'dark' ? (
            <Sun size={15} />
          ) : (
            <Moon size={15} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
