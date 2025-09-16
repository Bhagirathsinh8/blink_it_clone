import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import {server} from './constant.js'

// const {validationResult} = require('express-validator');

export class AppError extends Error {
  constructor(message, statusCode = StatusCodes.INTERNAL_SERVER_ERROR, extras = {}) {
    super(message || getReasonPhrase(statusCode));

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 0 : 'error';
    this.isOperational = true;

    Object.assign(this, extras);

    Error.captureStackTrace(this, this.constructor);
  }
}

export const globalErrorHandler = (error, req, res, _next) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || (String(statusCode).startsWith('4') ? 0 : 'error');


  return res.status(statusCode).json({
    status,
    message: error.message || 'Internal Server Error',
    data: null,
    ...(server.NODE_ENV === 'development' && { stack: error.stack }),
  });
};

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorArray = errors.array();

    const hasParamError = errorArray.some(error => error.location === 'params');
    const statusCode = hasParamError ? StatusCodes.BAD_REQUEST : StatusCodes.UNPROCESSABLE_ENTITY;

    const messages = errorArray.map(error => error.msg).join(', ');
    return next(new AppError(`Validation error: ${messages}`, statusCode));
  }
  // console.log("validateRequest Done");
  next();
};

export const validateRequestID = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  next();
};


