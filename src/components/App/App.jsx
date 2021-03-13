import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from './../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import './App.css';
import mainApi from '../../utils/Api/MainApi';
import moviesApi from '../../utils/Api/MoviesApi';
import {
  PATHNAME,
  HEADER_TYPE,
  HEADER_DISPLAY,
  FOOTER_DISPLAY,
  LOCAL_STORAGE_KEYS,
} from './../../utils/constants';
import {
  checkDisplayComponent,
  getScreenWidth,
  filterByKeyword,
  determineNumberOfCards,
} from '../../utils/utils';

const { root, movies: moviesPath, saved, profile, signin, signup } = PATHNAME;
const { landing, dark } = HEADER_TYPE;
const { movies: moviesKey, savedMovies: savedMoviesKey } = LOCAL_STORAGE_KEYS;

const App = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [user, setUser] = useState({
    name: 'Никнейм',
    email: 'Почта',
  });
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [lastCardIndex, setLastCardIndex] = useState(0);
  const [numberAddMovies, setNumberAddMovies] = useState(0);

  const authorizeUser = () => {
    setLoggedIn(true);
    history.push(moviesPath);
  };

  const unauthorizeUser = () => {
    setLoggedIn(false);
    history.push(root);
  };

  const handleRegistration = async ({ name, email, password }) => {
    try {
      const res = await mainApi.register({ email, password, name });
      if (res) {
        authorizeUser();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAuthorization = async ({ email, password }) => {
    try {
      const res = await mainApi.login({ email, password });
      if (res) {
        authorizeUser();
        setUser(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnauthorization = async () => {
    try {
      const res = await mainApi.logout();
      if (res) {
        unauthorizeUser();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateUser = async ({ name, email }) => {
    try {
      const res = await mainApi.updateUser({ email, name });
      if (res) {
        setUser(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetMoviesByKeyword = async (keyword) => {
    try {
      const res = await moviesApi.getMovies();
      if (res) {
        localStorage.removeItem(moviesKey);
        const filtered = filterByKeyword(res, ['nameRU', 'nameEN'], keyword);
        setMovies(filtered);
        localStorage.setItem(moviesKey, JSON.stringify(filtered));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSavedMoviesByKeyword = async (keyword) => {
    try {
      const res = JSON.parse(localStorage.getItem(savedMoviesKey));
      if (res && res.length > 0) {
        const filtered = filterByKeyword(res, ['nameRU', 'nameEN'], keyword);
        setSavedMovies(filtered);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveMovie = async ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) => {
    try {
      const newMovie = await mainApi.createMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      });
      if (newMovie) {
        setSavedMovies([...savedMovies, newMovie]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async ({ id }) => {
    try {
      const res = await mainApi.deleteMovie({ id });
      if (res) {
        const newMovies = movies.filter((movie) => movie.id !== id);
        setMovies(newMovies);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickAddButton = () =>
    setLastCardIndex(lastCardIndex + numberAddMovies);

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
    let timerId = null;

    const updateWindowWidth = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => setDeviceWidth(getScreenWidth()), 1000);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    const width = getScreenWidth();
    setLastCardIndex(determineNumberOfCards(width).base);
    setNumberAddMovies(determineNumberOfCards(width).add);
  }, [deviceWidth]);

  return (
    <UserContext.Provider value={user}>
      <div className="page">
        {checkDisplayComponent(
          HEADER_DISPLAY,
          pathname,
          <Header headerType={pathname === root ? landing : dark} />
        )}
        <Switch>
          <Route exact path={root} component={Main} />
          <ProtectedRoute
            component={Movies}
            path={moviesPath}
            loggedIn={loggedIn}
            movies={movies}
            lastCardIndex={lastCardIndex}
            addCards={handleClickAddButton}
            onSubmit={handleGetMoviesByKeyword}
            onDeleteMovie={handleDeleteMovie}
            onSaveMovie={handleSaveMovie}
          />
          <ProtectedRoute
            component={SavedMovies}
            path={saved}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onSubmit={handleGetSavedMoviesByKeyword}
            onDeleteMovie={handleDeleteMovie}
          />
          <ProtectedRoute
            component={Profile}
            path={profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onUnauthorization={handleUnauthorization}
          />
          <Route path={signin}>
            <Login onAuthorization={handleAuthorization} />
          </Route>
          <Route path={signup}>
            <Register onRegistration={handleRegistration} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        {checkDisplayComponent(FOOTER_DISPLAY, pathname, <Footer />)}
      </div>
    </UserContext.Provider>
  );
};

export default App;
