import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authenticate, (req, res) => {
  res.json({
    message: `Bem-vindo à dashboard, ${req.user.email}!`,
    user: req.user,
    // Aqui retornar dados iniciais, estatísticas, etc.
  });
});

export default router;
