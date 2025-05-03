import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </div>

      {movie.trailer && (
        <div className="movie-trailer">
          <iframe
            width="100%"
            height="400"
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default MovieDetails;
