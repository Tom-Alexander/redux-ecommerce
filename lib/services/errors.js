

export class ServiceError extends Error {
  constructor(code, text, description, ...args) {
    super(text, ...args);
    this.text = text;
    this.code = code;
    this.description = description;
  }
}

export function errorCreator(responseCode) {
  switch(responseCode) {
    case 400:
      return new ServiceError(
        400,
        'Bad Request',
        'The request was invalid or cannot be otherwise served.');
    case 401:
      return new ServiceError(
        401,
        'Unauthorized',
        'Authentication credentials were missing or incorrect.');
    case 403:
      return new ServiceError(
        403,
        'Forbidden',
        'The request is understood, but it has been refused or ' +
        'access is not allowed.');
   case 404:
    return new ServiceError(
      404,
      'Not Found',
      'The URI requested is invalid or the resource requested ' +
      'does not exists.');
    case 500:
      return new ServiceError(
        500,
        'Internal Server Error',
        'Something is broken.');
    case 'ECONNREFUSED':
      return new ServiceError(
        'ECONNREFUSED',
        'Socket Error',
        'The connection was refused by the server.');
    default:
      return new ServiceError(null, null, null);
  }
}
