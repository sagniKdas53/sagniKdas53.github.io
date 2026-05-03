import React from 'react';

interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  location: string;
  bullets: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: 'Mphasis Limited',
    period: 'Feb 2026 – Jun 2026',
    role: 'QA Automation Engineer',
    location: 'Bangalore, KA',
    bullets: [
      'Served as a domain expert on the automation team, building and scaling complex test solutions alongside senior engineers in an Agile environment.',
      'Spearheaded a pilot to adopt MCP-based test management tooling (mcp-testrail), migrating the codebase from JavaScript to typed TypeScript on Deno for improved reliability and developer ergonomics.',
    ],
  },
  {
    company: 'Wipro Technologies',
    period: 'May 2022 – Feb 2026',
    role: 'Project Engineer',
    location: 'Bangalore, KA',
    bullets: [
      'Redesigned the legacy automation framework end-to-end, introducing BDD-first Cucumber suites that expanded regression and smoke test coverage across critical user journeys.',
      'Moved to a critical infrastructure team, collaborating with senior QAs to build and maintain high-reliability automated test suites.',
      'Built REST-Assured API test suites and ran JMeter performance campaigns, identifying and helping resolve latency bottlenecks in production services.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="exp-item" key={index}>
            <div className="exp-meta">
              <div className="exp-company">{item.company}</div>
              <div className="exp-period">{item.period}</div>
            </div>
            <div className="exp-role">{item.role} · {item.location}</div>
            <ul className="exp-bullets">
              {item.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
