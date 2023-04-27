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
          <p>Fullstack Developer</p>
        </div>
      </div>
      <div className="profile-about">
        <p className="h section-title">About</p>

        <p>
          Hi, I'm Joaquin. I enjoy creating innovative and user-friendly
          products using high-quality code. I'm always exploring new tools to
          improve my work and I love to learn and solve complex problems in
          unique ways. I'm very committed to delivering exceptional products and
          I also have a good sense of humor.
        </p>
      </div>
    </>
  );
};
