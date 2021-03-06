import { Request, Response } from "express";
import { ErrorHandler } from "../utils";

import { UserService } from "./index";

export default class Controller {
  static async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    return UserService.create(name, email, password)
      .then((result) => res.status(201).json(result))
      .catch((err: Error) => {
        return ErrorHandler.handleError(res, err);
      });
  }
}
