import React from 'react';
import { Card } from './Card';

interface Experience {
  year: string;
  position: string;
  url: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    year: '2023 - Present',
    position: 'Fullstack Developer - Fintech Startup (Stealth)',
    url: '#',
    description:
      'Currently working as a fullstack developer in an fast paced environment with an small team and direct implementation of ideas.',
    tech: ['Fastify', 'TS', 'Node', 'Next.js', 'AWS', 'MySQL', 'Prisma'],
  },
  {
    year: '2020 - 2023',
    position: 'Senior Javascript Developer - SuiteDB',
    url: 'http://www.suitedb.com/',
    description:
      'As a Fullstack Developer, I managed multiple ecommerce site projects and contributed to web-based solutions. As a team lead, I successfully delivered creator tools and e-commerce apps.',
    tech: ['JavaScript', 'TS', 'React', 'Sass', 'Backbone'],
  },
];

export const Work: React.FC = () => {
  return (
    <div className="w-exp">
      <p className="h section-title">Work Experience</p>

      {experiences.map(({ year, description, position, tech, url }) => {
        return (
          <Card
            date={year}
            description={description}
            header={position}
            tech={tech}
            url={url}
          />
        );
      })}
    </div>
  );
};
