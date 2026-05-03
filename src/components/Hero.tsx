import React from 'react';
import { GithubIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <p className="hero-tag"><span>{"//"}</span> QA Automation · Full-Stack · Bangalore, India</p>
      <h1 className="hero-name">Sagnik<br />Das<span>.</span></h1>
      <p className="hero-title">SDET · Builder · Linux Enthusiast</p>
      <p className="hero-summary">
        Over 4 years of experience designing scalable test frameworks and shipping production software.
        I build things end-to-end — from automated testing suites and CI/CD pipelines to full-stack
        web apps with React, TypeScript, and Docker. AWS Certified AI Practitioner. Linux daily driver.
      </p>
      <div className="hero-cta">
        <a href="#skills" className="btn btn-primary">View My Work</a>
        <a 
          href="https://github.com/sagniKdas53" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline"
        >
          <GithubIcon size={14} />
          sagniKdas53
        </a>
      </div>
      <div className="hero-stats">
        <div><div className="stat-num">4+</div><div className="stat-label">Years Experience</div></div>
        <div><div className="stat-num">62</div><div className="stat-label">Public Repos</div></div>
        <div><div className="stat-num">752</div><div className="stat-label">Commits on yt-diff</div></div>
        <div><div className="stat-num">AWS</div><div className="stat-label">AI Practitioner</div></div>
      </div>
    </section>
  );
};

export default Hero;
