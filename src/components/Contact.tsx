import React, { Suspense, lazy } from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from './Icons.tsx';

const ResumeButton = lazy(() => import('./ResumeButton.tsx'));

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="contact-title">Let's <span style={{ color: 'var(--accent)', transition: 'color .35s' }}>build</span><br />something reliable.</h2>
      <p className="contact-sub">Open to new roles in QA Automation, SDET, or full-stack engineering. Let's talk.</p>

      <div id="resume-button-container">
        <Suspense fallback={<div style={{ height: '50px' }}>Loading Resume...</div>}>
          <ResumeButton />
        </Suspense>
      </div>

      <div className="contact-links">
        <a className="contact-chip" href="mailto:mailsagnikdas53@gmail.com">
          <Mail size={13} style={{ marginRight: '4px' }} /> mailsagnikdas53@gmail.com
        </a>
        <a className="contact-chip" href="https://linkedin.com/in/sagnik-das-p53" target="_blank" rel="noopener noreferrer">
          <span style={{ fontWeight: 'bold', marginRight: '4px', fontSize: '12px' }}>in</span> linkedin.com/in/sagnik-das-p53
        </a>
        <a className="contact-chip" href="https://github.com/sagniKdas53" target="_blank" rel="noopener noreferrer">
          <GithubIcon size={13} style={{ marginRight: '4px' }} /> github.com/sagniKdas53
        </a>
        <a className="contact-chip" href="tel:+919831471766">
          <Phone size={13} style={{ marginRight: '4px' }} /> +91 98314 71766
        </a>
      </div>
    </section>
  );
};

export default Contact;
