export default class Api {
  constructor({ baseUrl, headers, options }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._options = options;
  }

  _handleResponceWithBody = async (res, err) => {
    if (res.ok) {
      return res.json();
    }

    if (err) {
      throw err;
    }
    throw new Error(`${res.status} - ${res.statusText}`);
  };

  _handleResponceWithoutBody = (res, err) => {
    if (res.ok) {
      return true;
    }
    if (err) {
      throw err;
    }
    throw new Error(`${res.status} - ${res.statusText}`);
  };
}
