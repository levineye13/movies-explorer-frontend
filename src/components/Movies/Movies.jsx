import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonAddMovies from '../ButtonAddMovies/ButtonAddMovies';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/Api/MoviesApi';
import './Movies.css';

import { getScreenWidth, determineNumberOfCards } from '../../utils/utils';
import { LOCAL_STORAGE_KEYS } from '../../utils/constants';
const { movies: moviesKey } = LOCAL_STORAGE_KEYS;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isActivePreloader, setIsActivePreloader] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [lastCardIndex, setLastCardIndex] = useState(0);

  const addCards = () => {
    setLastCardIndex(lastCardIndex + determineNumberOfCards(deviceWidth).add);
  };

  const handleSubmit = async () => {
    setIsActivePreloader(true);
    try {
      const res = await moviesApi.getMovies();

      if (res) {
        localStorage.removeItem(moviesKey);
        setLastCardIndex(determineNumberOfCards(deviceWidth).base);
        setMovies(res);
        localStorage.setItem(moviesKey, JSON.stringify(res));
        setIsActivePreloader(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const dataMovies = localStorage.getItem(moviesKey);
    try {
      if (dataMovies) {
        setMovies(JSON.parse(dataMovies));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setDeviceWidth(getScreenWidth());
    };

    window.addEventListener('resize', () => {
      setTimeout(() => {
        updateWindowWidth();
      }, 1000);
    });

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    const width = getScreenWidth();
    setDeviceWidth(width);
    setLastCardIndex(determineNumberOfCards(width).base);
  }, [deviceWidth]);

  return (
    <section className="movies page__movies">
      <SearchForm onSubmit={handleSubmit} />
      <Preloader isActive={isActivePreloader} />
      {movies.length > 0 && (
        <>
          <MoviesCardList
            isSaved={false}
            movieList={movies.slice(0, lastCardIndex)}
          />
          {movies.length > 3 && movies[lastCardIndex] && (
            <ButtonAddMovies addCards={addCards} />
          )}
        </>
      )}
    </section>
  );
};

export default Movies;
