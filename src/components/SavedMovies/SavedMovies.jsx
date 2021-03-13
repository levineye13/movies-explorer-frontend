import React, { useState, useEffect } from 'react';
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
import { filterShortMovies } from '../../utils/utils';

const SavedMovies = ({ savedMovies, onSubmit, onDeleteMovie }) => {
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
    setShortMovies(filterShortMovies(shortMovies));
  }, [shortMovies]);

  return (
    <section className="saved-movies page__saved-movies">
      <Preloader isActive={isActivePreloader} />
      <SearchForm onSubmit={handleSubmit} filter={toggleShortMovies} />
      <MoviesCardList
        isSaved={true}
        movieList={!isShorted ? savedMovies : savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </section>
  );
};

export default SavedMovies;
