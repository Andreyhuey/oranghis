import express from "express";
import { Source } from "../models/sourceModel.js";

const router = express.Router();

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const people = await Source.findById(id);

    // response returned from request
    return response.status(200).json(people);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

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

// used to finding personnels by Goverment ID or policy number or name
router.get("/search/:query", async (request, response) => {
  try {
    const { query } = request.params;

    const people = await Source.find({});

    const searchQuery = people.filter(
      (item) =>
        // for searching of the data with Goverment ID, either in lower case or uppercase or just numbers alone
        item["Goverment ID"]
          ?.toLowerCase()
          .replaceAll(" ", "")
          .includes(query?.toLowerCase().replaceAll(" ", "")) ||
        // for searching through the data with surname, surname & firstname
        (item?.Surname?.toLowerCase() + " " + item?.Firstname?.toLowerCase())
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(query?.toLowerCase()?.replaceAll(" ", "")) ||
        // for searching through the data with firstname, firstname & surname
        (item?.Firstname?.toLowerCase() + " " + item?.Surname?.toLowerCase())
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(query?.toLowerCase().replaceAll(" ", "")) ||
        item?.Provider?.toLowerCase().includes(query?.toLowerCase())
    );

    // response returned from request
    return response.status(200).json({
      count: searchQuery.length,
      data: searchQuery,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
