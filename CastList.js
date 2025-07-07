import React from 'react';

function CastList({ casts }) {
  if (!casts || casts.length === 0) return null;
  // Limit to first 15 cast members
  const limitedCasts = casts.slice(0, 15);
  return (
    <div>
      <div className="section-label">Cast</div>
      <div className="cast-list" style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
        {limitedCasts.map((cast) => (
          <div className="cast-member" key={cast.id} style={{ minWidth: 90 }}>
            <img src={cast.profile_path} alt={cast.name} />
            <div>{cast.name}</div>
            <div style={{ color: '#bbb', fontSize: '0.85em' }}>{cast.character}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastList; 