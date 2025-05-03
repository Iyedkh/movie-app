import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerURL:'',
  });
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };
  // Function to handle form submission
  const handleAddMovie = (e) => {
    e.preventDefault();

    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating && newMovie.trailerURL) {
      onAddMovie(newMovie);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
        trailerURL:'',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          placeholder="Movie Title"
          required
        />
        <input
          type="text"
          name="description"
          value={newMovie.description}
          onChange={handleInputChange}
          placeholder="Movie Description"
          required
        />
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
          placeholder="Poster URL"
          required
        />
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          onChange={handleInputChange}
          placeholder="Movie Rating (1-10)"
          required
        />
        <input
          type="text"
          name="Trailer URL"
          value={newMovie.trailerURL}
          onChange={handleInputChange}
          placeholder="trailer URL"
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
