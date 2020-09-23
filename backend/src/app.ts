import express, { Application } from "express";
import { createConnection } from "typeorm";
import cors from "cors";

import { userRoutes } from "./components/user";

class App {
  public readonly express: Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    App.database();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private static async database() {
    await createConnection().catch((err) => {
      console.log("Database connection failed");
      console.log(err);
    });
  }

  private routes() {
    this.express.use(userRoutes);
  }
}

export default new App().express;
