import React from 'react';
import './ButtonAddMovies.css';

const ButtonAddMovies = ({ addCards }) => {
  return (
    <button
      className="button-add-movies movies__button-add-movies"
      type="button"
      onClick={addCards}
    >
      Ещё
    </button>
  );
};

export default ButtonAddMovies;
