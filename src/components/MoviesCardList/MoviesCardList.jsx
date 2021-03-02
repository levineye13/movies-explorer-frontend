import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { PATHNAME } from '../../utils/constants';

const { movies, saved } = PATHNAME;

const MoviesCardList = ({ isSaved, movieList }) => {
  const { pathname } = useLocation();

  return (
    <ul
      className={`movies-cardlist ${
        pathname === movies
          ? 'movies__movies-cardlist'
          : pathname === saved
          ? 'saved-movies__movies-cardlist'
          : ''
      }`}
    >
      {movieList &&
        movieList.map((movie, index) => (
          <li className="movies-cardlist__item" key={index}>
            <MoviesCard isSavedCard={isSaved} img={movie} />
          </li>
        ))}
    </ul>
  );
};

export default MoviesCardList;
