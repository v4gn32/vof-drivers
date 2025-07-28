import bcrypt from "bcryptjs";
import { prisma } from "../prisma/client.js";
import { generateToken } from "../utils/jwt.js";

// ... login e register já existentes
export async function getMe(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }, // ou req.user.id — veja abaixo
      select: {
        id: true,
        name: true,
        email: true,
        roleId: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
}

// Rota de registro de usuário
export async function register(req, res) {
  const { name, email, password } = req.body;
  const DEFAULT_ROLE_ID = 4;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: DEFAULT_ROLE_ID,
      },
    });

    const token = generateToken({ id: user.id, email: user.email });

    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

// Rota de login de usuário
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Senha incorreta" });

    const token = generateToken({ id: user.id, email: user.email });
    res.json({ message: "Login realizado", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
}
