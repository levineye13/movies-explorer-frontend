import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonAddMovies from '../ButtonAddMovies/ButtonAddMovies';
import './Movies.css';
import { images } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  return (
    <section className="movies page__movies">
      <SearchForm />
      {images && images.length > 0 ? (
        <>
          <MoviesCardList isSaved={false} movieList={images} />
          <ButtonAddMovies isVisible={true} />
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
};

export default Movies;
