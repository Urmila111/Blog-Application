import express from "express";
import { getAllUser, signup, login } from "../controllers/user.controller.js";

export const router = express.Router();

router.get("/", getAllUser );
router.post("/signup", signup);
router.post("/login", login);
