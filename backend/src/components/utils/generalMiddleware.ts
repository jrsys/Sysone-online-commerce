import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export default class Middleware {
  static validatorMiddleware(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    const message =
      errors.array().length === 1
        ? `${errors.array()[0].param} ${errors.array()[0].msg}`
        : errors.array().map((error) => `${error.param} ${error.msg}`);

    if (!errors.isEmpty()) {
      return res.status(400).json(message);
    }

    return next();
  }
}
