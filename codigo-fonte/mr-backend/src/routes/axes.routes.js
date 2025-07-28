import express from "express";
import {
  createAxis,
  listAxes,
  updateAxis,
  deleteAxis,
} from "../controllers/axes.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.get("/", listAxes);
router.post("/", createAxis);
router.put("/:id", updateAxis);
router.delete("/:id", deleteAxis);

export default router;
