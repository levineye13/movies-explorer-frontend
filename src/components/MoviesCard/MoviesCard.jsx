import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({
  isSavedCard = false,
  title = '',
  time = '',
  img = '',
  trailerLink = '',
}) => {
  const [isSaved, setIsSaved] = useState(isSavedCard);

  const toggleStateCard = () => {
    setIsSaved(!isSaved);
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
              {title}
            </h2>
            <p
              className={`card__time ${isSavedCard ? 'card__time_saved' : ''}`}
            >
              {time}
            </p>
          </figcaption>
          <img src={img} alt={`Фильм: "${title}"`} className="card__img" />
        </figure>
        <button
          className={`card__save ${
            isSavedCard
              ? 'card__save_type_delete'
              : isSaved
              ? 'card__save_type_saved'
              : ''
          }`}
          type="button"
          onClick={toggleStateCard}
        />
      </a>
    </article>
  );
};

export default MoviesCard;
