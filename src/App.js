// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css'
const App = () => {
  // Initial movie data
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL:'https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg',
      rating: 8.8,
    },
    {
      title: 'Titanic',
      description: 'A tragic love story',
      posterURL: 'https://m.media-amazon.com/images/I/71V3V0FE1gS._AC_SL1200_.jpg',
      rating: 7.8,
    },
    {
      title: 'Berserk',
      description: 'The Golden age Arc',
      posterURL: 'https://m.media-amazon.com/images/I/71mI9XFyERL._AC_UF894,1000_QL80_.jpg',
      rating: 10,
    },
  ]);
  // State to manage movies and filters
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleAddMovie = () => {
    // Example of adding a new movie
    const newMovie = {
      title: 'The Dark Knight',
      description: 'A superhero crime drama',
      posterURL: 'https://rukminim3.flixcart.com/image/850/1000/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8evqxuvfvg.jpeg?q=90&crop=false',
      rating: 9.0,
    };
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };
  //filter function
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
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add "The Dark Knight"</button>
    </div>
  );
};

export default App;
