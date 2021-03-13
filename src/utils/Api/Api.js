export default class Api {
  constructor({ baseUrl, headers, options }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._options = options;
  }

  _handleResponceWithBody = async (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Ошибка: ${res.status} - ${res.statusText}`);
  };

  _handleResponceWithoutBody = (res) => {
    return res.ok ? true : false;
  };
}
