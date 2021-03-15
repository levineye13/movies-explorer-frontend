import { HTTP_ERRORS } from '../utils/constants';

const { registerError } = HTTP_ERRORS;

class RegisterError extends Error {
  constructor(status) {
    super();
    this.status = status;
    this.name = 'RegisterError';
    this.message =
      this.status === 409
        ? registerError.conflict
        : registerError.defaultMessage;
  }
}

export default RegisterError;
