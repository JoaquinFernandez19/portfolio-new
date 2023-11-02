import React from 'react';
import { Card } from './Card';

const links: { page: string; url: string; urlText: string }[] = [
  {
    page: 'Linkedin',
    url: 'https://www.linkedin.com/in/joaquin-fernandez-rosso/',
    urlText: 'My linkedin :)',
  },
  {
    page: 'Github',
    url: 'https://github.com/JoaquinFernandez19',
    urlText: 'JoaquinFernandez19',
  },
  {
    page: 'Gmail',
    url: 'mailto:joaquinfdev@gmail.com',
    urlText: 'joaquinfdev@gmail.com',
  },
];

export const Links: React.FC = () => {
  return (
    <div className="links">
      <p className="h section-title">Links</p>
      <div className="card-links">
        {links.map((link) => {
          return <Card header={link.urlText} date={link.page} url={link.url} />;
        })}
      </div>
    </div>
  );
};
