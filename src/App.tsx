import React from "react";
import "./style.scss";
import { Links } from "./components/Links";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <Profile />
      <Work />
      <Projects />
      <Skills />
      <Links />
    </div>
  );
};
