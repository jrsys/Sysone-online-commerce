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

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private static async database(): Promise<void> {
    await createConnection().catch(() => {
      console.log("Database connection failed");
    });
  }

  private routes(): void {
    this.express.use(userRoutes);
  }
}

export default new App().express;
