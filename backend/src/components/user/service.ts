import { getConnection } from "typeorm";

import { AppError } from "../utils";
import { UserModel } from "./index";

export default class Service {
  static async create(name: string, email: string, password: string) {
    const user = new UserModel();

    user.name = name;
    user.email = email;
    user.password = password;

    return getConnection()
      .manager.save(user)
      .catch((err: Error) => {
        if (err.name === "EntityMetadataNotFound") {
          throw new AppError(
            err.name,
            500,
            "Database connection failed",
            false
          );
        } else if (err.name === "QueryFailedError") {
          if (
            err.message.match(/^duplicate key value violates unique constraint/)
          ) {
            throw new AppError(
              "duplicate key",
              400,
              "this email is already registered",
              true
            );
          }
        }
        throw err;
      });
  }
}
