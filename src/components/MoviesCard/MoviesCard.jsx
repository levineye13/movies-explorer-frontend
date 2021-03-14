import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { setTimeFormat, checkObjectProperty } from '../../utils/utils';
import { MOVIES_API_BASE_URL, PATHNAME } from '../../utils/constants';

const { saved, movies } = PATHNAME;

const MoviesCard = ({ movie, isSavedCard, onClickSaveButton }) => {
  const [isSaved, setIsSaved] = useState(isSavedCard);
  const { pathname } = useLocation();

  const toggleStateCard = async (evt) => {
    evt.preventDefault();
    setIsSaved(!isSaved);
    await onClickSaveButton(movie, isSavedCard);
  };

  const setButtonModifier = () => {
    if (isSavedCard && pathname === saved) {
      return 'card__save_type_delete';
    } else if (isSavedCard && pathname === movies) {
      return 'card__save_type_saved';
    }
  };

  return (
    <article className="card">
      <a
        href={pathname === movies ? movie.trailerLink : movie.trailer}
        className="card__overlay"
        target="_blank"
      >
        <figure className="card__info">
          <figcaption className="card__description">
            <h2
              className={`card__title ${
                isSavedCard ? 'card__title_saved' : ''
              }`}
            >
              {movie.nameRU}
            </h2>
            <p
              className={`card__time ${isSavedCard ? 'card__time_saved' : ''}`}
            >
              {setTimeFormat(movie.duration)}
            </p>
          </figcaption>
          <img
            src={
              pathname === movies
                ? `${MOVIES_API_BASE_URL}${checkObjectProperty(
                    movie,
                    'image.url'
                  )}`
                : movie.image
            }
            alt={`Фильм: "${movie.nameRU}"`}
            className="card__img"
          />
        </figure>
        <button
          className={`card__save ${setButtonModifier()}`}
          type="button"
          onClick={toggleStateCard}
        />
      </a>
    </article>
  );
};

export default MoviesCard;
