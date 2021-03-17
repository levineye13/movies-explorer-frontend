import { HTTP_ERRORS } from '../utils/constants';

const { updateError } = HTTP_ERRORS;

class UpdateError extends Error {
  constructor(status) {
    super();
    this.status = status;
    this.name = 'UpdateError';
    this.message =
      this.status === 409 ? updateError.conflict : updateError.defaultMessage;
  }
}

export default UpdateError;
