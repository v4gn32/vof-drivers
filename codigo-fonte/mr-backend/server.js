// server.js
import objectsRoutes from "./src/routes/objects.routes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./src/routes/auth.routes.js";
import protectedRoutes from "./src/routes/protected.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";
import criteriaRoutes from "./src/routes/criteria.routes.js";
import axesRoutes from "./src/routes/axes.routes.js";
import evaluationModelRoutes from "./src/routes/evaluationModel.routes.js";
import modelCriteriaRoutes from "./src/routes/modelCriteria.routes.js";
import learningObjectRoutes from "./src/routes/learningObject.routes.js";
import evaluationRoutes from "./src/routes/evaluation.routes.js";

dotenv.config(); // Carrega variáveis do .env

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Log de requisições HTTP no console

// Rota de teste para saber se a API está no ar
app.get("/", (req, res) => res.send("API MRecursiva no ar 🚀"));

// Rotas da aplicação
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/criteria", criteriaRoutes);
app.use("/api/axes", axesRoutes);
app.use("/api/models", evaluationModelRoutes);
app.use("/api/model-criteria", modelCriteriaRoutes);
app.use("/api/learning-objects", learningObjectRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/objects", objectsRoutes);

// Middleware de tratamento de erros globais
app.use((err, req, res, next) => {
  console.error("Erro no servidor:", err.stack);
  res.status(500).json({ message: "Erro interno do servidor." });
});

// Definição da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
