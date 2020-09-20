import express, { Application } from "express";
import { createConnection, getConnection } from "typeorm";
import cors from "cors";

import UserModel from "./components/user/model";

class App {
  public express: Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    App.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private static async database(): Promise<void> {
    await createConnection().catch(() =>
      console.log("Database connection failed")
    );
  }

  private routes(): void {
    this.express.get("/test", async (req, res) => {
      const teste = new UserModel();

      teste.name = "Testêncio da Silva";
      teste.email = "testencio@gmail.com";
      teste.password = "12345";

      return getConnection()
        .manager.save(teste)
        .then((result) => res.status(201).json(result))
        .catch((err) => res.status(500).json(err));
    });
  }
}

export default new App().express;
