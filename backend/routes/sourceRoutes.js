import express from "express";
import { Source } from "../models/sourceModel.js";

const router = express.Router();

// used to get all the personnel from database
router.get("/", async (request, response) => {
  try {
    // request made to get all personnels
    const people = await Source.find({});

    // response returned from request
    return response.status(200).json({
      count: people.length,
      data: people,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
