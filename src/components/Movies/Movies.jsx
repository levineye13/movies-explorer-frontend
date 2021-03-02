import React from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import './Movies.css';
import { images } from './../../utils/utils';

const Movies = () => {
  return (
    <section className="movies page__movies">
      <SearchForm />
      <MoviesCardList isSaved={false} movies={images} />
    </section>
  );
};

export default Movies;
