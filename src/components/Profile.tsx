import React from 'react';
import avatar from '../img/avatar.jpeg';
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
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className="profile-about">
        <p className="h section-title">About</p>

        <p>
          I like to create stuff and solve problems. Videogames and systems :)
        </p>
      </div>
    </>
  );
};
