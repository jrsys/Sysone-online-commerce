import { Response } from "express";

import { AppError } from "./index";

export default class ErrorHandler {
  static async handleError(res: Response, err: Error) {
    if (err instanceof AppError) {
      if (!err.isOperational) {
        console.log(err);
      }
      return res.status(err.httpCode).json(err.message);
    }
    throw err;
  }
}
