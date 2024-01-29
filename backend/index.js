import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// routes
import authRoute from "./routes/AuthRoute.js";
import csRoutes from "./routes/csRoutes.js";
import sourceRoutes from "./routes/sourceRoutes.js";
import simlonRoutes from "./routes/simlonRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// app expressing itself
const app = express();

//
app.use(cookieParser());

// Middleware for parsing request body, The request.body values won't work without it
app.use(express.json());

// For importing env details
dotenv.config();

// CORS policy
app.use(cors());

// For user authentication and verification
app.use("/", authRoute);

// // use to make all the book routes active
app.use("/cs", csRoutes);

app.use("/source", sourceRoutes);

app.use("/simlon", simlonRoutes);

app.use("/user", userRoutes);

// used to connect to database
async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.MONGODBURL}`);
    app.listen(`${process.env.PORT}` || 5000, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
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

app.get("/source", (request, response) => {
  console.log(source);
  return response.status(234).send("source");
});

app.get("/simlon", (request, response) => {
  console.log(simlon);
  return response.status(234).send("simlon");
});
