import express from "express";
// import { User } from "../models/UserModel.js";
import {
  registerUser,
  loginUser,
  getUser,
} from "../Controllers/userController.js";
const router = express.Router();
import { protect } from "../Middlewares/authMiddleware.js";

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUser);

export default router;
