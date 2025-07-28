import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/painel", authenticate, (req, res) => {
  res.json({ message: `Bem-vindo, usuário ${req.user.email}` });
});

export default router;
// Este é um exemplo de rota protegida que só pode ser acessada por usuários autenticados
// A autenticação é feita pelo middleware 'authenticate', que verifica o token JWT
