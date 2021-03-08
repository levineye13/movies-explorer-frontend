import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { PATHNAME, MOVIES_API_BASE_URL } from '../../utils/constants';
import { createObjectFromKeys } from '../../utils/utils';

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
        movieList.map((movie, index) => {
          const {
            nameRU,
            duration,
            url,
            trailerLink,
          } = createObjectFromKeys(movie, [
            'nameRU',
            'duration',
            'image.url',
            'trailerLink',
          ]);

          return (
            <li className="movies-cardlist__item" key={index}>
              <MoviesCard
                isSavedCard={isSaved}
                title={nameRU || ''}
                time={duration || ''}
                img={`${MOVIES_API_BASE_URL}${url || ''}`}
                trailerLink={trailerLink}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesCardList;
