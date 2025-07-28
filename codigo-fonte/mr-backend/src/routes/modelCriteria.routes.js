import express from "express";
import {
  addCriteriaToModel,
  listModelCriteria,
  removeCriterionFromModel,
} from "../controllers/modelCriteria.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", addCriteriaToModel);
router.get("/:modelId", listModelCriteria);
router.delete("/:modelId/:criterionId", removeCriterionFromModel);

export default router;
