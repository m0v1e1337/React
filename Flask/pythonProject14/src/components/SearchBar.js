import React, { useState } from 'react';
import axios from 'axios';
import SongCard from './SongCard';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`/search?query=${query}`);
    setResults(response.data.tracks.items);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {results.map(track => (
        <SongCard key={track.id} track={track} />
      ))}
    </div>
  );
};

export default SearchBar;
