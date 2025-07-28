import express from "express";
import {
  createLearningObject,
  listLearningObjects,
  updateLearningObject,
  deleteLearningObject,
} from "../controllers/learningObject.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", createLearningObject);
router.get("/", listLearningObjects);
router.put("/:id", updateLearningObject);
router.delete("/:id", deleteLearningObject);

export default router;
