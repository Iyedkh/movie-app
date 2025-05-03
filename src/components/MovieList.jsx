import React from 'react';
import MovieCard from '../MovieCard'; // make sure this path is correct

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies to display.</p>;
  }

  return (
    <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
