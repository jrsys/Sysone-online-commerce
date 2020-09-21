import { Router } from "express";
import { body } from "express-validator";

import { generalMiddleware } from "../utils";
import { UserController } from "./index";

class UserRoutes {
  public readonly routes: Router;

  constructor() {
    this.routes = Router();

    this.simpleRoutes();
  }

  private simpleRoutes() {
    this.routes.post(
      "/user",
      [
        body("name").trim().isLength({ min: 1, max: 200 }),
        body("email").isEmail(),
        body("password").trim().isLength({ min: 5, max: 20 }),
      ],
      generalMiddleware.validatorMiddleware,
      UserController.create
    );
  }
}

export default new UserRoutes().routes;
