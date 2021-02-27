import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({
  title = 'В погоне за Бенкси',
  time = '27 минут',
  img,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleStateCard = () => {
    setIsSaved(!isSaved);
  };

  return (
    <article className="card">
      <figure className="card__info">
        <figcaption className="card__description">
          <h2 className="card__title">{title}</h2>
          <p className="card__time">{time}</p>
        </figcaption>
        <img src={img} alt={`Фильм: "${title}"`} className="card__img" />
      </figure>
      <button
        className={`card__save ${isSaved ? 'card__save_type_saved' : ''}`}
        type="button"
        onClick={toggleStateCard}
      />
    </article>
  );
};

export default MoviesCard;
