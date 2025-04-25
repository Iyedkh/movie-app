import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  //function to handle title change
  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    onFilterChange('title', value);
  };
  //function to handle rating change
  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRating(value);
    onFilterChange('rating', value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
