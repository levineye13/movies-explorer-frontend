export const patternName = '[A-Za-zА-Яа-яЁё -]{2,30}';

export const MAIN_API_BASE_URL =
  'https://api.movies-explorer.students.nomoreparties.xyz';

export const MOVIES_API_BASE_URL = 'https://api.nomoreparties.co';

export const HTTP_METHODS = {
  HEAD: 'HEAD',
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

const root = '/';
const movies = '/movies';
const saved = '/saved-movies';
const profile = '/profile';
const signin = '/signin';
const signup = '/signup';
const signout = '/signout';
const me = '/users/me';

export const PATHNAME = {
  root,
  movies,
  saved,
  profile,
  signin,
  signup,
  signout,
  me,
};

export const HEADER_TYPE = {
  landing: 'landing',
  dark: 'dark',
};

export const HEADER_DISPLAY = [root, movies, saved, profile];

export const FOOTER_DISPLAY = [root, movies, saved];

export const SOCIAL = {
  facebook: {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100008427819375',
  },
  github: {
    name: 'GitHub',
    link: 'https://github.com/levineye13',
  },
  yandexPraktikum: {
    name: 'Яндекс.Практикум',
    link: 'https://praktikum.yandex.ru',
  },
};

export const LOCAL_STORAGE_KEYS = {
  movies: 'movies',
  savedMovies: 'savedMovies',
  user: 'user',
};

export const DISPLAY_RESOLUTION = {
  smallScreen: 480,
  mediumScreen: 768,
  largeScreen: 1280,
};

export const HTTP_ERRORS = {
  loginError: {
    unauthorized: 'Вы ввели неправильный логин или пароль.',
    defaultMessage: 'При авторизации произошла ошибка.',
  },
  registerError: {
    conflict: 'Пользователь с таким email уже существует.',
    defaultMessage: 'При регистрации пользователя произошла ошибка.',
  },
  updateError: {
    conflict: 'Пользователь с таким email уже существует.',
    defaultMessage: 'При обновлении профиля произошла ошибка.',
  },
  notFoundError: {
    defaultMessage: 'Страница не найдена.',
  },
};

export const TAB_KEY = 'Tab';
