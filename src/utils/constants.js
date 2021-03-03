const root = '/';
const movies = '/movies';
const saved = '/saved-movies';
const profile = '/profile';
const signin = '/signin';
const signup = '/signup';

export const PATHNAME = {
  root,
  movies,
  saved,
  profile,
  signin,
  signup,
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
