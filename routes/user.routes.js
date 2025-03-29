import express from "express";
import { getAllUser } from "../controllers/user.controller.js";

export const router = express.Router();

router.get("/", getAllUser );
