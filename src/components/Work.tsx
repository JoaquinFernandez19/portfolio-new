import React from "react";
import { Card } from "./Card";

interface Experience {
  year: string;
  position: string;
  url: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    year: "2020 - present",
    position: "Senior Javascript Developer - SuiteDB",
    url: "http://www.suitedb.com/",
    description:
      "As a Fullstack Developer, I managed multiple ecommerce site projects and contributed to web-based solutions. As a team lead, I successfully delivered creator tools and e-commerce app with a team of five engineers. With 3 years of experience in React and Typescript, I have a strong understanding of frontend development, software engineering, and web application development, all crucial for project success and improving user experience.",
    tech: ["JavaScript", "TS", "React", "Sass", "Backbone"],
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
