import { prisma } from "../prisma/client.js";

export async function createAxis(req, res) {
  const { name, description } = req.body;

  try {
    const axis = await prisma.axis.create({
      data: { name, description },
    });
    res.status(201).json(axis);
  } catch (error) {
    console.error("Erro ao criar eixo:", error);
    res.status(500).json({ error: "Erro ao criar eixo" });
  }
}

export async function listAxes(req, res) {
  try {
    const axes = await prisma.axis.findMany({
      include: { criteria: true }, // opcional
    });
    res.json(axes);
  } catch (error) {
    console.error("Erro ao listar eixos:", error);
    res.status(500).json({ error: "Erro ao listar eixos" });
  }
}

export async function updateAxis(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updated = await prisma.axis.update({
      where: { id: parseInt(id) },
      data: { name, description },
    });
    res.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar eixo:", error);
    res.status(500).json({ error: "Erro ao atualizar eixo" });
  }
}

export async function deleteAxis(req, res) {
  const { id } = req.params;

  try {
    await prisma.axis.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Eixo deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar eixo:", error);
    res.status(500).json({ error: "Erro ao deletar eixo" });
  }
}
