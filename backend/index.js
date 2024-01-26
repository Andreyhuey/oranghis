import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import csRoutes from "./routes/csRoutes.js";

// app expressing itself
const app = express();

// Middleware for parsing request body, The request.body values won't work without it
app.use(express.json());

// // use to make all the book routes active
app.use("/cs", csRoutes);

// used to connect to database
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDBURL);
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// used to get a resource from our running {PORT} server
app.get("/", (request, response) => {
  console.log(request);
  return response
    .status(234)
    .send(
      "Welcome to oranghis, The Objective here is to modify the app to perform Create, Read, Update and Delete Operations for vast data with the hospital management "
    );
});

// used to get a resource from our running {PORT} server
app.get("/cs", (request, response) => {
  console.log(cs);
  return response.status(234).send("cs");
});
