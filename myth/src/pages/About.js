import React from 'react';
import './About.css';
import Image from '../assets/img1.avif';

const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${Image})` }}>
      <div className="about-content">
        <h1>📜 About Rhaedraxa</h1>
        <p>
          Rhaedraxa is a realm where ancient myth and legend come alive.
          Explore the divine stories of gods, the valiant deeds of legendary heroes,
          and the terrifying mysteries of monstrous creatures that once roamed the world.
        </p>
        <p>
          Inspired by Greek mythology and infused with fantasy, this project invites you on a journey
          through powerful pantheons, daring quests, and epic battles.
        </p>
        <p>
          Whether you're a seeker of lore or a fan of fantastical worlds, Rhaedraxa welcomes you.
        </p>
      </div>
    </div>
  );
};

export default About;

