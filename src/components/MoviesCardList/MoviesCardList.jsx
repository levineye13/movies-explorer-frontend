import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { PATHNAME, MOVIES_API_BASE_URL } from '../../utils/constants';

const { movies, saved } = PATHNAME;

const MoviesCardList = ({ isSaved, movieList, onDeleteMovie, onSaveMovie }) => {
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
          const {
            id,
            nameRU,
            nameEN,
            duration,
            image,
            trailerLink,
            country,
            director,
            year,
            description,
          } = movie;

          return (
            <li className="movies-cardlist__item" key={id}>
              <MoviesCard
                id={id}
                isSavedCard={isSaved}
                nameRU={nameRU || ''}
                nameEN={nameEN || ''}
                duration={duration || ''}
                image={`${MOVIES_API_BASE_URL}${image.url || ''}`}
                trailerLink={trailerLink || ''}
                country={country || ''}
                director={director || ''}
                description={description || ''}
                year={year || ''}
                thumbnail={`${MOVIES_API_BASE_URL}${
                  image.formats.thumbnail.url || ''
                }`}
                onDeleteMovie={onDeleteMovie}
                onSaveMovie={onSaveMovie}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesCardList;
