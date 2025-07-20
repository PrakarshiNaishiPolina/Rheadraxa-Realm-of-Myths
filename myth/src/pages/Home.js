import React from 'react';
import './Home.css';
import bgImage from '../assets/img2.avif';

const Home = () => (
  <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="home-content">
      <h1>⚔️ Welcome to the Realm of Myths</h1>
      <p>Unveil the ancient legends of gods, brave heroes, and fearsome monsters.</p>
      <a href="/gods" className="btn">Begin Your Quest</a>
    </div>
  </div>
);

export default Home;
