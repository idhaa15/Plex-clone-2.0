import React from 'react';
import CastList from './CastList';

function MovieDetail({ movie, onBack }) {
  if (!movie) return null;
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Blurred background image */}
      <div
        id="detail-bg"
        style={{
          backgroundImage: `url(${movie.backdrop_path})`,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(18px) brightness(1.3) saturate(1.2)',
          opacity: 0.6,
          transition: 'background-image 0.3s',
          pointerEvents: 'none',
        }}
      />
      <div id="movie-detail" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 24px 24px', background: 'none', borderRadius: 0, boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className="detail-poster" src={movie.poster_path} alt={movie.original_title} style={{ marginBottom: 24 }} />
        <div className="detail-content" style={{ width: '100%', textAlign: 'left' }}>
          <button className="back-btn" onClick={onBack}>&larr; Back</button>
          <div className="detail-title" style={{ color: '#fff' }}>{movie.original_title}</div>
          <div className="detail-meta" style={{ color: '#ffb300' }}>{movie.release_date?.slice(0,4)} &bull; Rating: {movie.vote_average}</div>
          <button className="watchlist-btn">Add to Watchlist</button>
          <div className="detail-overview">{movie.overview}</div>
        </div>
        <div className="where-to-watch-section" style={{ width: '100%' }}>
          <div className="where-to-watch-title">Where to Watch</div>
          <div className="where-to-watch-unavailable">There are no locations currently available for this title</div>
        </div>
        <div className="section-label" style={{ width: '100%' }}>Cast of {movie.original_title}</div>
        <div style={{ width: '100%' }}>
          <CastList casts={movie.casts} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail; 