import express from "express";
// import { User } from "../models/UserModel.js";
import {
  registerUser,
  loginUser,
  getUser,
} from "../Controllers/userController.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUser);

export default router;
