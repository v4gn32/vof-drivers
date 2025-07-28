import { prisma } from "../prisma/client.js";

export async function createCriterion(req, res) {
  const { name, description, axisId } = req.body;

  try {
    const criterion = await prisma.criterion.create({
      data: { name, description, axisId },
    });
    res.status(201).json(criterion);
  } catch (error) {
    console.error("Erro ao criar critério:", error);
    res.status(500).json({ error: "Erro ao criar critério" });
  }
}

export async function listCriteria(req, res) {
  try {
    const criteria = await prisma.criterion.findMany({
      include: { axis: true },
    });
    res.json(criteria);
  } catch (error) {
    console.error("Erro ao listar critérios:", error);
    res.status(500).json({ error: "Erro ao listar critérios" });
  }
}

export async function updateCriterion(req, res) {
  const { id } = req.params;
  const { name, description, axisId } = req.body;

  try {
    const updated = await prisma.criterion.update({
      where: { id: parseInt(id) },
      data: { name, description, axisId },
    });
    res.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar critério:", error);
    res.status(500).json({ error: "Erro ao atualizar critério" });
  }
}

export async function deleteCriterion(req, res) {
  const { id } = req.params;

  try {
    await prisma.criterion.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Critério deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar critério:", error);
    res.status(500).json({ error: "Erro ao deletar critério" });
  }
}
