import mongoose from "mongoose";
import config from "config";

export const connect = async () =>
{
   //! get the config vars 
   const database_url = config.get<string>("database_url");

   //! try to connect to the databse
   try {
      await mongoose.connect(database_url);
      console.log("connection is established to the database");
      return;
   }
   catch (err) {
      console.log("error while connecting to the datbase");
      console.log(err);
      // exit from the program
      process.exit(1); // -> terminate with error
   }
};