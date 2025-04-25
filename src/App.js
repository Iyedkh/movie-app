import React, { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
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
  // add new movie function
  const handleAddMovie = (movie) => {
    const updatedMovies = [...movies, movie];
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
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
