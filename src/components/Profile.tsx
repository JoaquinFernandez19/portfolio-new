import React from "react";
import avatar from "../img/avatar.jpeg";
export const Profile: React.FC = () => {
  return (
    <>
      <div className="profile-main">
        <div
          className="img"
          style={{ backgroundImage: `url(${avatar})` }}
          data-alt="avatar made by the sweetheart of my girlfriend"
        ></div>
        <div>
          <h1>Joaquin Fernandez</h1>
          <p>Product-focused Frontend Developer</p>
        </div>
      </div>
      <div className="profile-about">
        <p className="h section-title">About</p>

        <p>
          I'm Joaquin. I build dynamic, creative products and focus on intuitive
          experiences. I deliver high-quality code and constantly explore new
          tools to make it better. I'm passionate about learning and solving
          complex problems with creative solutions. My commitment to delivering
          exceptional products is driven by my passion for coding and eagerness
          to learn. I'm also pretty funny i promise.
        </p>
      </div>
    </>
  );
};
