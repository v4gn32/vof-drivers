import express from "express";
import { getAverageScores } from "../controllers/objects/average.controller.js";

const router = express.Router();

router.get("/average", getAverageScores);

export default router;
