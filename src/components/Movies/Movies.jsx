import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonAddMovies from '../ButtonAddMovies/ButtonAddMovies';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/Api/MoviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isActivePreloader, setIsActivePreloader] = useState(false);

  const handleSubmitForm = async () => {
    setIsActivePreloader(true);
    const res = await moviesApi.getMovies();

    if (res) {
      setMovies(res);
      setIsActivePreloader(false);
    }
  };

  return (
    <section className="movies page__movies">
      <SearchForm onSubmit={handleSubmitForm} />
      <Preloader isActive={isActivePreloader} />
      {movies.length > 0 && (
        <>
          <MoviesCardList isSaved={false} movieList={movies} />
          <ButtonAddMovies isVisible={true} />
        </>
      )}
    </section>
  );
};

export default Movies;
