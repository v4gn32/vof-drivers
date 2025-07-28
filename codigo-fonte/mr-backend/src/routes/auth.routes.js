import express from "express";
import { login, register, getMe } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// ✅ Nova rota protegida
router.get("/me", authenticate, getMe);

export default router;
