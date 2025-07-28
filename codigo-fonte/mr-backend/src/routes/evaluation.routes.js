import express from "express";
import {
  createEvaluation,
  listEvaluationsByObject,
} from "../controllers/evaluation.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", createEvaluation);
router.get("/:objectId", listEvaluationsByObject);

export default router;
