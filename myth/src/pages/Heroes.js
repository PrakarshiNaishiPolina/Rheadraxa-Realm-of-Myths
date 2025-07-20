import React, { useState, useEffect } from 'react';
import { fetchHeroes } from '../api/greekMythAPI';
import EntityCard from '../components/EntityCard';
import './EntityPage.css';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchHeroes().then(res => setHeroes(res.data.Heroes)).catch(err => console.error(err));
  }, []);

  const filtered = heroes.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <h1>🛡️ Greek Heroes</h1>
      <input
        type="text"
        placeholder="Search heroes..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="entity-grid">
        {filtered.map(hero=> (
          <EntityCard
            key={hero.id}
            name={hero.name}
            description={hero.description}
            image={hero.image}
            onClick={() => setSelected(hero)}
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
              <p><strong>Symbols:</strong> {selected.attributes.symbols.join(', ')}</p>
              <p><strong>Powers:</strong> {selected.attributes.powers.join(', ')}</p>
              <p><strong>Stories:</strong> {selected.attributes.stories.join(', ')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Heroes;
