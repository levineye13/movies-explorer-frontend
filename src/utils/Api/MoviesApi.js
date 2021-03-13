import Api from './Api.js';

import { MOVIES_API_BASE_URL, HTTP_METHODS } from '../../utils/constants.js';

const { GET } = HTTP_METHODS;

class MoviesApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers });
  }

  getMovies = async () => {
    try {
      const res = await fetch(this._baseUrl, {
        method: GET,
        headers: this._headers,
      });

      return this._handleResponceWithBody(res);
    } catch (err) {
      console.error(err);
    }
  };
}

const moviesApi = new MoviesApi({
  baseUrl: `${MOVIES_API_BASE_URL}/beatfilm-movies`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
