import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { PATHNAME } from '../../utils/constants';

const { movies, saved } = PATHNAME;

const MoviesCardList = ({ movieList, onClickSaveButton, checkMovieSave }) => {
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
        movieList.map((movie) => {
          const isSavedMovie =
            pathname === saved ? true : checkMovieSave(movie);
          return (
            <li className="movies-cardlist__item" key={movie.id}>
              <MoviesCard
                movie={movie}
                isSavedCard={isSavedMovie}
                onClickSaveButton={onClickSaveButton}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesCardList;
