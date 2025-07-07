import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies, onMovieClick }) {
  return (
    <section>
      <div className="section-label">{title}</div>
      <div className="carousel">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </section>
  );
}

export default MovieList; 