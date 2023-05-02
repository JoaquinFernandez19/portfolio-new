import React from "react";
import alliedLogo from "../img/allied.png";
import uskglogo from "../img/uskg.png";
import venezianoLogo from "../img/veneziano.png";
import tomsLogo from "../img/toms.png";
import pokecollect from "../img/pokecollect.png";
import { Card, CardProps } from "./Card";
const projects: CardProps[] = [
  {
    date: "2021",
    header: "Allied Maker ",
    url: "https://www.alliedmaker.com/",
    icon: alliedLogo,
    description: "Handcrafted lighting fixtures based in New York.",
  },

  {
    date: "2021",
    header: "U.S. Kids Golf ",
    url: "https://www.uskidsgolf.com/",
    icon: uskglogo,
    description:
      "U.S. Kids Golf is a United States-based company specializing in serving young players in the sport of golf.",
  },
  {
    date: "2022",
    header: "Veneziano ",
    url: "https://venezianocoffee.com.au/",
    icon: venezianoLogo,
    description:
      "Veneziano Coffee Roasters from Melbourne provide specialty coffee beans to cafes across Australia.",
  },
  {
    date: "2023",
    header: "TOMSWear",
    url: "https://shop.tomswear.com/front/app/common/login/",
    icon: tomsLogo,
    description:
      "Japanese company that produces and import t-shirts and other clothing.",
  },
];
const sideProjects: CardProps[] = [
  {
    date: "2023",
    header: "Pokecollect WIP",
    url: "https://pokecollect.vercel.app/",
    icon: pokecollect,
    description: "Browser gachapon game to collect random pokemons.",
  },
];
projects.reverse();
export const Projects: React.FC = () => {
  return (
    <>
      <div className="projects">
        <p className="h section-title">Side Projects</p>
        {sideProjects.map(({ date, header, url, icon, description }) => {
          return (
            <Card
              date={date}
              header={header}
              url={url}
              icon={icon}
              description={description}
            />
          );
        })}
      </div>
      <div className="projects ">
        <p className="h section-title">Developed</p>

        {projects.map(({ date, header, url, icon, description }) => {
          return (
            <Card
              date={date}
              header={header}
              url={url}
              icon={icon}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
};
