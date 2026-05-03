import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section id="certs">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Certifications & Education</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '16px', transition: 'color .35s' }}>Certification</p>
          <div className="cert-card">
            <div className="cert-badge">☁️</div>
            <div>
              <div className="cert-name">AWS Certified AI Practitioner</div>
              <div className="cert-issuer">Amazon Web Services · Verified Credential</div>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '16px', transition: 'color .35s' }}>Education</p>
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-degree">B.Tech — Electrical Engineering</div>
              <div style={{ color: 'var(--accent)', fontSize: '12px', marginBottom: '4px', transition: 'color .35s' }}>Honours in Machine Learning & AI</div>
              <div className="edu-school">Maulana Abul Kalam Azad University of Technology</div>
              <div className="edu-meta">Mar 2018 – Apr 2022 · GPA 3.09 / 4.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
