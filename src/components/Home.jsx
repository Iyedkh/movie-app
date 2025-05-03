import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';
import Filter from './Filter';
const Home = ({ movies, setMovies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleAddMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(newFilters.title.toLowerCase());
      const ratingMatch = newFilters.rating ? movie.rating >= newFilters.rating : true;
      return titleMatch && ratingMatch;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter onFilterChange={handleFilterChange} />
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};



export default Home;
