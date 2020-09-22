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
        body("name")
          .trim()
          .isLength({ min: 1, max: 200 })
          .withMessage("must be between 1 and 200 characters"),
        body("email").isEmail().withMessage("must be a valid email"),
        body("password")
          .trim()
          .isLength({ min: 5, max: 20 })
          .withMessage("must be between 1 and 20 characters"),
      ],
      generalMiddleware.validatorMiddleware,
      UserController.create
    );
  }
}

export default new UserRoutes().routes;
