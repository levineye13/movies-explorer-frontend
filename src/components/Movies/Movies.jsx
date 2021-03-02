import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonAddMovies from '../ButtonAddMovies/ButtonAddMovies';
import './Movies.css';
import { images } from '../../utils/utils';

const Movies = () => {
  return (
    <section className="movies page__movies">
      <SearchForm />
      <MoviesCardList isSaved={false} movieList={images} />
      <ButtonAddMovies isVisible={true} />
    </section>
  );
};

export default Movies;
