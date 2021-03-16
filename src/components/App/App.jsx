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
  MOVIES_API_BASE_URL,
} from './../../utils/constants';
import {
  checkDisplayComponent,
  getScreenWidth,
  filterByKeyword,
  determineNumberOfCards,
  checkObjectProperty,
} from '../../utils/utils';
import { LoginError, RegisterError, UpdateError } from '../../errors/index';

const { root, movies: moviesPath, saved, profile, signin, signup } = PATHNAME;
const { landing, dark } = HEADER_TYPE;
const { movies: moviesKey, savedMovies: savedMoviesKey } = LOCAL_STORAGE_KEYS;

const App = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: 'Никнейм',
    email: 'Почта',
  });
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [lastCardIndex, setLastCardIndex] = useState(0);
  const [numberAddMovies, setNumberAddMovies] = useState(0);
  const [networkErrors, setNetworkErrors] = useState({
    loginError: '',
    registerError: '',
    updateError: '',
  });

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
        setCurrentUser(res);
        authorizeUser();
      }
    } catch (err) {
      if (err instanceof RegisterError) {
        setNetworkErrors({ ...networkErrors, registerError: err.message });
      }
      console.error(err);
    }
  };

  const handleAuthorization = async ({ email, password }) => {
    try {
      const res = await mainApi.login({ email, password });
      if (res) {
        const dataUser = await mainApi.getUser();
        if (dataUser) {
          setCurrentUser(dataUser);
          authorizeUser();
        }
      }
    } catch (err) {
      if (err instanceof LoginError) {
        setNetworkErrors({ ...networkErrors, loginError: err.message });
      }
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
        setCurrentUser(res);
      }
    } catch (err) {
      if (err instanceof UpdateError) {
        setNetworkErrors({ ...networkErrors, updateError: err.message });
      }
      console.error(err);
    }
  };

  const handleGetMoviesByKeyword = (keyword) => {
    try {
      const res = JSON.parse(localStorage.getItem(moviesKey));
      if (res && res.length > 0) {
        const filtered = filterByKeyword(res, ['nameRU', 'nameEN'], keyword);
        setMovies(filtered);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSavedMoviesByKeyword = (keyword) => {
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

  const handleSaveMovie = async (card) => {
    const index = movies.findIndex((movie) => movie.id === card.id);
    try {
      const newMovie = await mainApi.createMovie({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${MOVIES_API_BASE_URL}${checkObjectProperty(
          card,
          'image.url'
        )}`,
        trailer: card.trailerLink,
        thumbnail: `${MOVIES_API_BASE_URL}${checkObjectProperty(
          card,
          'image.formats.thumbnail.url'
        )}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      });
      setSavedMovies([...savedMovies, newMovie]);
      const _id = newMovie._id;
      const newMovies = [
        ...movies.slice(0, index),
        { ...movies[index], _id },
        ...movies.slice(index + 1),
      ];
      localStorage.setItem(moviesKey, JSON.stringify(newMovies));
      setMovies(newMovies);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async (card) => {
    try {
      const res = await mainApi.deleteMovie({ id: card._id });
      if (res) {
        const newMovies = savedMovies.filter((movie) => movie._id !== card._id);
        localStorage.removeItem(savedMoviesKey);
        localStorage.setItem(savedMoviesKey, JSON.stringify(newMovies));
        setSavedMovies(newMovies);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickAddButton = () =>
    setLastCardIndex(lastCardIndex + numberAddMovies);

  const handleClickSaveButton = async (card, isLiked) => {
    try {
      if (isLiked) {
        await handleDeleteMovie(card);
      } else {
        await handleSaveMovie(card);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkCardSave = (card) =>
    savedMovies.some((movie) => movie.movieId === card.id);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await mainApi.getUser();
        if (userData) {
          setCurrentUser(userData);
          authorizeUser();
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  //Если данные имеются в LS, берем их, иначе делаем запрос.
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const dataMovies = JSON.parse(localStorage.getItem(moviesKey));
        if (dataMovies && dataMovies.length > 0) {
          setMovies(dataMovies);
        } else {
          const res = await moviesApi.getMovies();
          if (res) {
            localStorage.setItem(moviesKey, JSON.stringify(res));
            setMovies(res);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    getAllMovies();
  }, []);

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        const res = await mainApi.getMovies();
        if (res && res.length > 0) {
          localStorage.setItem(savedMoviesKey, JSON.stringify(res));
          setSavedMovies(res);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getSavedMovies();
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
    const cards = determineNumberOfCards(getScreenWidth());
    setLastCardIndex(cards.base);
    setNumberAddMovies(cards.add);
  }, [deviceWidth]);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="page">
        {checkDisplayComponent(
          HEADER_DISPLAY,
          pathname,
          <Header
            isLoggedIn={loggedIn}
            theme={pathname === root ? landing : dark}
          />
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
            onClickSaveButton={handleClickSaveButton}
            checkMovieSave={checkCardSave}
          />
          <ProtectedRoute
            component={SavedMovies}
            path={saved}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onSubmit={handleGetSavedMoviesByKeyword}
            onDeleteMovie={handleDeleteMovie}
            checkMovieSave={checkCardSave}
          />
          <ProtectedRoute
            component={Profile}
            path={profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onUnauthorization={handleUnauthorization}
            networkError={networkErrors.updateError}
          />
          <Route path={signin}>
            <Login
              onAuthorization={handleAuthorization}
              networkError={networkErrors.loginError}
            />
          </Route>
          <Route path={signup}>
            <Register
              onRegistration={handleRegistration}
              networkError={networkErrors.registerError}
            />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        {checkDisplayComponent(FOOTER_DISPLAY, pathname, <Footer />)}
      </div>
    </UserContext.Provider>
  );
};

export default App;
