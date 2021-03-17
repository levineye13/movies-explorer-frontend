import { HTTP_ERRORS } from '../utils/constants';

const { loginError } = HTTP_ERRORS;

class LoginError extends Error {
  constructor(status) {
    super();
    this.status = status;
    this.name = 'LoginError';
    this.message =
      this.status === 401 ? loginError.unauthorized : loginError.defaultMessage;
  }
}

export default LoginError;
