import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({
  isSavedCard = false,
  title = 'В погоне за Бенкси',
  time = '27 минут',
  img,
}) => {
  const [isSaved, setIsSaved] = useState(isSavedCard);

  const toggleStateCard = () => {
    setIsSaved(!isSaved);
  };

  return (
    <article className="card">
      <figure className="card__info">
        <figcaption className="card__description">
          <h2
            className={`card__title ${isSavedCard ? 'card__title_saved' : ''}`}
          >
            {title}
          </h2>
          <p className={`card__time ${isSavedCard ? 'card__time_saved' : ''}`}>
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
    </article>
  );
};

export default MoviesCard;
