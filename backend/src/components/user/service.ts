import { getConnection } from "typeorm";

import { UserModel } from "./index";

export default class Service {
  static async create(name: string, email: string, password: string) {
    const user = new UserModel();

    user.name = name;
    user.email = email;
    user.password = password;

    return getConnection().manager.save(user);
  }
}
