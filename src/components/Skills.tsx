import React from 'react';

const skills: string[] = [
  'TypeScript',
  'React',
  'Redux',
  'JavaScript',
  'Next.js',
  'Docker',
  'Node',
  'Express.js',
  'Sass',
  'Backbone',
  'styled components',
  'Tailwind',
  'SQL',
  'MongoDB',
  'Firebase',
  'Fastify',
  'Prisma',
  'AWS',
];

export const Skills: React.FC = () => {
  return (
    <div className="skills">
      <p className="h section-title">Skills</p>
      <div>
        {skills.map((skill, i) => {
          if (i > 0) return <p>• {skill}</p>;
          return <p>{skill}</p>;
        })}
      </div>
    </div>
  );
};
