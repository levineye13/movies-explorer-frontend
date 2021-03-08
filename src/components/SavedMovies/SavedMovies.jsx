import React from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <section className="saved-movies page__saved-movies">
      <SearchForm />
      <MoviesCardList isSaved={true} movieList={[]} />
    </section>
  );
};

export default SavedMovies;
