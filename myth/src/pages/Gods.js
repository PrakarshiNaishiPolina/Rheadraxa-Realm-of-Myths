import React, { useState, useEffect } from 'react';
import { fetchGods } from '../api/greekMythAPI';
import EntityCard from '../components/EntityCard';
import './EntityPage.css';

const Gods = () => {
  const [gods, setGods] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchGods().then(res => setGods(res.data.Gods)).catch(err => console.error(err));
  }, []);

  const filtered = gods.filter(g =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <h1>⚡ Greek Gods</h1>
      <input
        type="text"
        placeholder="Search gods..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="entity-grid">
        {filtered.map(god => (
          <EntityCard
            key={god.id}
            name={god.name}
            description={god.description}
            image={god.image}
            onClick={() => setSelected(god)}
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

export default Gods;
