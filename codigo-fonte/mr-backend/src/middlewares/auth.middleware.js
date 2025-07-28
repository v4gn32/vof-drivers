import { verifyToken } from "../utils/jwt.js";
import { prisma } from "../prisma/client.js";

export async function getMe(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId }, // ou req.user.id dependendo do seu token
      select: {
        id: true,
        name: true,
        email: true,
        roleId: true,
        // adicione mais campos se necessário
      },
    });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    res.json({ user });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: "Erro ao buscar usuário autenticado" });
  }
}

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1];
  const payload = verifyToken(token);

  if (!payload)
    return res.status(401).json({ error: "Token inválido ou expirado" });

  req.user = payload; // agora você pode usar req.user.id ou req.user.email nas rotas
  next();
}
