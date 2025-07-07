import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './style.css';

function MovieListPage({ movies }) {
  const navigate = useNavigate();
  const bingeWorthy = movies.slice(0, 7);
  const mostPopular = movies.slice(7, 14);
  return (
    <main>
      <MovieList title="Binge-Worthy Shows" movies={bingeWorthy} onMovieClick={movie => navigate(`/movie/${movie.id}`)} />
      <MovieList title="Most Popular in India" movies={mostPopular} onMovieClick={movie => navigate(`/movie/${movie.id}`)} />
    </main>
  );
}

function MovieDetailPage({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  return movie ? <MovieDetail movie={movie} /> : <div style={{ color: '#fff', padding: 40 }}>Movie not found.</div>;
}

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonfakery.com/movies/paginated')
      .then(res => res.json())
      .then(data => {
        setMovies(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: '#fff', padding: 40 }}>Loading movies...</div>;
  }

  return (
    <Router>
      <Header onSearch={() => {}} />
      <Routes>
        <Route path="/" element={<MovieListPage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetailPage movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
