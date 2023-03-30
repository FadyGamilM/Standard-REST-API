import express, { Application, Request, Response } from "express";

//! import the config file
import config from "config";

//! import the databse connection method 
import { connect } from "./database/connect";

//! instantiate the express app
const app = express();

//! extract the config data from the config file 
const PORT: number = config.get<number>("port");;

(
   async () =>
   {
      //! connect to the database before starting the application to listen to requests
      await connect();

      //! listen to the port
      app.listen(PORT, () =>
      {
         console.log(`server is up on port ${PORT}`);
      });
   }
)();
