import React, { useState } from 'react';
import './search.css';

const Search = ({ isMenuOpen }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here (e.g., make an API call)
    console.log('Search query:', query);
  };

  return (
    <div className={`search-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
