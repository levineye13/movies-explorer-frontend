import React from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { images } from './../../utils/utils';

const SavedMovies = () => {
  return (
    <section className="saved-movies page__saved-movies">
      <SearchForm />
      <MoviesCardList isSaved={true} movies={images.slice(0, 3)} />
    </section>
  );
};

export default SavedMovies;
