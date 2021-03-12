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
  user: 'user',
};

export const DISPLAY_RESOLUTION = {
  smallScreen: 480,
  mediumScreen: 768,
  largeScreen: 1280,
};

export const HTTP_ERRORS = {
  serverError: {
    status: 500,
    message: 'На сервере произошла ошибка.',
  },
  badRequestError: {
    status: 400,
    message:
      'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  },
  notFoundError: {
    status: 404,
    message: 'Страница не найдена.',
  },
  conflictError: {
    status: 409,
    message: 'Пользователь с таким email уже существует.',
  },
};
