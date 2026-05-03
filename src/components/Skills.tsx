import React from 'react';

interface Skill {
  icon: string;
  category: string;
  tags: string[];
  colorClass?: 'amber' | 'blue';
}

const skillsData: Skill[] = [
  {
    icon: '🧪',
    category: 'Automation Testing',
    tags: ['Cucumber BDD', 'JUnit', 'REST-Assured', 'Selenium WebDriver'],
  },
  {
    icon: '⚡',
    category: 'API & Performance',
    tags: ['Postman', 'JMeter', 'REST APIs', 'WebSockets'],
  },
  {
    icon: '💻',
    category: 'Languages',
    tags: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Groovy'],
    colorClass: 'amber',
  },
  {
    icon: '🌐',
    category: 'Full-Stack & Web',
    tags: ['React', 'Node.js', 'Deno', 'Spring Boot', 'PostgreSQL'],
    colorClass: 'blue',
  },
  {
    icon: '🚀',
    category: 'DevOps & Infrastructure',
    tags: ['Docker', 'GitHub Actions', 'Jenkins', 'AWS', 'Maven', 'Linux'],
  },
  {
    icon: '🤖',
    category: 'AI & Tooling',
    tags: ['GitHub Copilot', 'Claude Code', 'Prompt Engineering', 'LLM Test Gen'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-cat">{skill.category}</div>
            <div className="skill-tags">
              {skill.tags.map((tag, tagIndex) => (
                <span 
                  className={`tag ${skill.colorClass || ''}`} 
                  key={tagIndex}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
