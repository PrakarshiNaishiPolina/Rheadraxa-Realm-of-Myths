import React from 'react';
import './EntityCard.css';

const EntityCard = ({ name, description, onClick }) => (
  <div className="entity-card" onClick={onClick}>
    <h2>{name}</h2>
    <p>{description?.slice(0, 100)}...</p>
  </div>
);

export default EntityCard;
