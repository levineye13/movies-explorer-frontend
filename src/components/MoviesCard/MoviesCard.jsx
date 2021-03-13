import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { setTimeFormat } from '../../utils/utils';
import { PATHNAME } from '../../utils/constants';

const { movies, saved } = PATHNAME;

const MoviesCard = ({
  id,
  isSavedCard = false,
  nameRU,
  nameEN,
  duration,
  image,
  trailerLink,
  country,
  director,
  year,
  description,
  thumbnail,
  onDeleteMovie,
  onSaveMovie,
}) => {
  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(isSavedCard);

  const toggleStateCard = async (evt) => {
    evt.preventDefault();
    setIsSaved(!isSaved);
    if (isSaved) {
      await onDeleteMovie({ id });
    } else {
      await onSaveMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer: trailerLink,
        thumbnail,
        movieId: id,
        nameRU,
        nameEN,
      });
    }
  };

  const setButtonModifier = () => {
    if (pathname === movies && isSaved) {
      return 'card__save_type_saved';
    } else if (pathname === saved) {
      return 'card__save_type_delete';
    } else {
      return '';
    }
  };

  return (
    <article className="card">
      <a href={trailerLink} className="card__overlay" target="_blank">
        <figure className="card__info">
          <figcaption className="card__description">
            <h2
              className={`card__title ${
                isSavedCard ? 'card__title_saved' : ''
              }`}
            >
              {nameRU}
            </h2>
            <p
              className={`card__time ${isSavedCard ? 'card__time_saved' : ''}`}
            >
              {setTimeFormat(duration)}
            </p>
          </figcaption>
          <img src={image} alt={`Фильм: "${nameRU}"`} className="card__img" />
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
