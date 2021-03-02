import React from 'react';
import './ButtonAddMovies.css';

const ButtonAddMovies = ({ isVisible = false }) => {
  return (
    <button
      className={`button-add-movies ${
        isVisible ? 'button-add-movies_visible' : ''
      } movies__button-add-movies `}
      type="button"
    >
      Ещё
    </button>
  );
};

export default ButtonAddMovies;
