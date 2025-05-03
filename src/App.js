import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import './App.css'
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg',
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'Titanic',
      description: 'A tragic love story',
      posterURL: 'https://m.media-amazon.com/images/I/71V3V0FE1gS._AC_SL1200_.jpg',
      rating: 7.8,
      trailer: 'https://www.youtube.com/embed/kVrqfYjkTdQ',
    },
    {
      id: 3,
      title: 'Berserk',
      description: 'The Golden age Arc',
      posterURL: 'https://m.media-amazon.com/images/I/71mI9XFyERL._AC_UF894,1000_QL80_.jpg',
      rating: 10,
      trailer: 'https://www.youtube.com/embed/IXL5r3n862U',
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
