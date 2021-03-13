import Api from './Api.js';

import {
  MAIN_API_BASE_URL,
  HTTP_METHODS,
  PATHNAME,
} from '../../utils/constants.js';

const { HEAD, GET, POST, DELETE, PATCH } = HTTP_METHODS;
const { signin, signup, signout, me, movies } = PATHNAME;

class MainApi extends Api {
  constructor({ baseUrl, headers, options }) {
    super({ baseUrl, headers, options });
  }

  login = async ({ email, password }) => {
    const res = await fetch(`${this._baseUrl}${signin}`, {
      method: POST,
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  register = async ({ email, password, name }) => {
    const res = await fetch(`${this._baseUrl}${signup}`, {
      method: POST,
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  logout = async () => {
    const res = await fetch(`${this._baseUrl}${signout}`, {
      method: HEAD,
      headers: this._headers,
      ...this._options,
    });
    return this._handleResponceWithoutBody(res);
  };

  getUser = async () => {
    const res = fetch(`${this._baseUrl}${me}`, {
      method: GET,
      headers: this._headers,
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  updateUser = async ({ email, name }) => {
    const res = fetch(`${this._baseUrl}${me}`, {
      method: PATCH,
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
      }),
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  getMovies = async () => {
    const res = await fetch(`${this._baseUrl}${movies}`, {
      method: GET,
      headers: this._headers,
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  deleteMovie = async ({ id }) => {
    const res = await fetch(`${this._baseUrl}${movies}/${id}`, {
      method: DELETE,
      headers: this._headers,
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };

  createMovie = async ({
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
    const res = await fetch(`${this._baseUrl}${movies}`, {
      method: POST,
      headers: this._headers,
      body: JSON.stringify({
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
      }),
      ...this._options,
    });
    return this._handleResponceWithBody(res);
  };
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  options: {
    credentials: 'include',
  },
});

export default mainApi;
