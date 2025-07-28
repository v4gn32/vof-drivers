import express from "express";
import {
  createEvaluationModel,
  listEvaluationModels,
  updateEvaluationModel,
  deleteEvaluationModel,
} from "../controllers/evaluationModel.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.get("/", listEvaluationModels);
router.post("/", createEvaluationModel);
router.put("/:id", updateEvaluationModel);
router.delete("/:id", deleteEvaluationModel);

export default router;
