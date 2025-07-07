import React from 'react';

function Header({ onSearch }) {
  return (
    <header>
      <img src="/images/plex-logo.jpg" alt="Plex Logo" className="logo" />
      <nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            onChange={e => onSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </nav>
    </header>
  );
}

export default Header; 