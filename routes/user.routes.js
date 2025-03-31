import express from "express";
import { getAllUser, signup } from "../controllers/user.controller.js";

export const router = express.Router();

router.get("/", getAllUser );
router.post("/signup", signup)
