import express from "express";
import {
  createCriterion,
  listCriteria,
  updateCriterion,
  deleteCriterion,
} from "../controllers/criteria.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate); // Protege todas as rotas

router.get("/", listCriteria);
router.post("/", createCriterion);
router.put("/:id", updateCriterion);
router.delete("/:id", deleteCriterion);

export default router;
