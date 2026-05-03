import React from 'react';

interface Project {
  label: string;
  title: string;
  link: string;
  desc: string;
  stack: string[];
  colorClass?: 'amber' | 'blue';
}

const otherProjects: Project[] = [
  {
    label: 'Personal · Python',
    title: 'scheduler_bot',
    link: 'https://github.com/sagniKdas53/scheduler_bot',
    desc: 'A Discord bot that scrapes and displays the live streaming schedule for Hololive VTubers. Handles schedule parsing, timezone-aware formatting, and push notifications to Discord channels.',
    stack: ['Python', 'Discord.py', 'Web Scraping', 'Scheduling'],
    colorClass: 'amber',
  },
  {
    label: 'Personal · JavaScript',
    title: 'autoGameOfLife',
    link: 'https://github.com/sagniKdas53/autoGameOfLife',
    desc: "An automated Conway's Game of Life implementation. Explores cellular automata, canvas rendering, and simulation loop optimization in vanilla JavaScript.",
    stack: ['JavaScript', 'Canvas API', 'Simulation'],
    colorClass: 'amber',
  },
  {
    label: 'Professional · TypeScript',
    title: 'mcp-testrail Port',
    link: '#',
    desc: 'Ported an open-source TestRail MCP integration from JavaScript to TypeScript using the Deno runtime — improving type safety and maintainability for QA toolchain integrations at Mphasis.',
    stack: ['TypeScript', 'Deno', 'JavaScript', 'TestRail', 'MCP'],
  },
  {
    label: 'Personal · Python',
    title: 'hololive_harvest_schedule',
    link: 'https://github.com/sagniKdas53/hololive_harvest_schedule',
    desc: "A Python scraper that harvests and structures streaming schedule data from Hololive's website, used as the data source powering the scheduler_bot Discord integration.",
    stack: ['Python', 'BeautifulSoup', 'Data Parsing'],
    colorClass: 'amber',
  },
  {
    label: 'Professional · Java',
    title: 'REST API Automation Suite',
    link: '#',
    desc: 'Built end-to-end REST-Assured + Cucumber BDD test suites for critical backend APIs at Wipro. Complemented by JMeter performance campaigns to surface latency issues under production load.',
    stack: ['Java', 'REST-Assured', 'Cucumber', 'JMeter'],
    colorClass: 'amber',
  },
  {
    label: 'Personal · Python',
    title: 'epic7_lab_eplo',
    link: 'https://github.com/sagniKdas53/epic7_lab_eplo',
    desc: "A Python script for path optimization in Epic Seven's Labyrinth mode — computing optimal routes to minimize moral cost per run. Applied graph search problem.",
    stack: ['Python', 'Pathfinding', 'Optimization'],
    colorClass: 'amber',
  },
];

const OtherProjects: React.FC = () => {
  return (
    <div className="projects-grid">
      {otherProjects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-label">{project.label}</div>
          <div className="project-title">
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-stack">
            {project.stack.map((tech, techIndex) => (
              <span className={`tag ${project.colorClass || ''}`} key={techIndex}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherProjects;
