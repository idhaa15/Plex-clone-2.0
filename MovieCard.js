import React from 'react';

function MovieCard({ movie, onClick }) {
  return (
    <div className="card" onClick={() => onClick(movie)} style={{ cursor: 'pointer' }}>
      <img src={movie.poster_path} alt={movie.original_title} />
      <div className="card-title">{movie.original_title}</div>
      <div className="card-meta">{movie.release_date?.slice(0,4)} &bull; {movie.vote_average}</div>
    </div>
  );
}

export default MovieCard; 