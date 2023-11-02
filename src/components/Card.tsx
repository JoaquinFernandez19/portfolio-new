import React from 'react';
import arrow from '../img/arrow-link.svg';

export interface CardProps {
  date: string;
  icon?: string;
  description?: string;
  url?: string;
  tech?: string[];
  header: string;
}

export const Card: React.FC<CardProps> = ({
  date,
  icon,
  description,
  tech,
  url,
  header,
}) => {
  return (
    <div className={icon ? 'card card-w-icon' : 'card'}>
      <p className="year grey">{date}</p>
      {icon ? (
        <div className="header-and-icon">
          <div style={{ backgroundImage: `url(${icon}` }} />
          <a className="position" href={url} target="_blank" rel="noreferrer">
            {header} {url && <img src={arrow} alt="arrow" />}
          </a>
        </div>
      ) : (
        <a className="position" href={url} target="_blank" rel="noreferrer">
          {header} <img src={arrow} alt="arrow" />
        </a>
      )}

      <p className="description">{description}</p>

      <div className="tech-list grey">
        {tech?.map((tec, i) => {
          if (i > 0) return <p>• {tec}</p>;
          return <p>{tec}</p>;
        })}
      </div>
    </div>
  );
};
