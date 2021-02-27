import React from 'react';
import MoviesCard from './../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { images } from './../../utils/utils';

const MoviesCardList = () => {
  return (
    <ul className="movies-cardlist movies__movies-cardlist">
      {images.map((image, index) => (
        <li className="movies-cardlist__item" key={index}>
          <MoviesCard img={image} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesCardList;
