import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonAddMovies from '../ButtonAddMovies/ButtonAddMovies';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import { filterShortMovies } from '../../utils/utils';

const Movies = ({
  movies,
  lastCardIndex,
  addCards,
  onSubmit,
  onDeleteMovie,
  onSaveMovie,
}) => {
  const [shortMovies, setShortMovies] = useState([]);
  const [isShorted, setIsShorted] = useState(false);
  const [isActivePreloader, setIsActivePreloader] = useState(false);

  const handleSubmit = async (keyword) => {
    setIsActivePreloader(true);
    await onSubmit(keyword);
    setIsActivePreloader(false);
  };

  const toggleShortMovies = () => {
    setIsShorted(!isShorted);
  };

  useEffect(() => {
    setShortMovies(filterShortMovies(movies));
  }, [movies]);

  return (
    <section className="movies page__movies">
      <SearchForm onSubmit={handleSubmit} filter={toggleShortMovies} />
      <Preloader isActive={isActivePreloader} />
      {movies.length > 0 && (
        <>
          <MoviesCardList
            isSaved={false}
            movieList={
              !isShorted ? movies.slice(0, lastCardIndex) : shortMovies
            }
            onDeleteMovie={onDeleteMovie}
            onSaveMovie={onSaveMovie}
          />
          {movies.length > 3 && movies[lastCardIndex] && !isShorted && (
            <ButtonAddMovies addCards={addCards} />
          )}
        </>
      )}
    </section>
  );
};

export default Movies;
