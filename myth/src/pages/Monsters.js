
import React, { useState, useEffect } from 'react';
import { fetchMonsters } from '../api/greekMythAPI';
import EntityCard from '../components/EntityCard';
import './EntityPage.css';

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchMonsters()
      .then(res => setMonsters(res.data.Monsters))
      .catch(err => console.error('Error fetching monsters:', err));
  }, []);

  const filtered = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <h1>🐉 Greek Monsters</h1>
      <input
        type="text"
        placeholder="Search monsters..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="entity-grid">
        {filtered.map(monster => (
          <EntityCard
            key={monster.id}
            name={monster.name}
            description={monster.description}
            image={monster.image}
            onClick={() => setSelected(monster)}
          />
        ))}
      </div>

      {selected && (
        <div className="details-glass">
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>

          {selected.attributes && (
            <div className="attributes">
              <h4>Origin: {selected.attributes.origin}</h4>
              <p><strong>Abode:</strong> {selected.attributes.abode}</p>
              <p><strong>Symbols:</strong> {selected.attributes.symbols?.join(', ')}</p>
              <p><strong>Powers:</strong> {selected.attributes.powers?.join(', ')}</p>
              <p><strong>Stories:</strong> {selected.attributes.stories?.join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Monsters;
