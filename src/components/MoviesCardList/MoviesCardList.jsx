import React from 'react';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ isSaved, movies }) => {
  return (
    <ul className="movies-cardlist movies__movies-cardlist saved-movies__movies-cardlist">
      {movies.map((movie, index) => (
        <li className="movies-cardlist__item" key={index}>
          <MoviesCard isSavedCard={isSaved} img={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesCardList;
