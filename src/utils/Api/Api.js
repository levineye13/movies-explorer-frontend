export default class Api {
  constructor({ baseUrl, headers, options }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._options = options;
  }

  _handleThrowError = (res, err = undefined) => {
    if (err) {
      throw err;
    }
    throw new Error(`${res.status} - ${res.statusText}`);
  };

  _handleResponceWithBody = async (res, err) => {
    if (res.ok) {
      return res.json();
    }

    this._handleThrowError(res, err);
  };

  _handleResponceWithoutBody = (res, err) => {
    if (res.ok) {
      return true;
    }

    this._handleThrowError(res, err);
  };
}
