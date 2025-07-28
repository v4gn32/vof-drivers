import { prisma } from "../prisma/client.js";

export async function createEvaluationModel(req, res) {
  const { name, description, objectType } = req.body;
  const userId = req.user.id;

  try {
    const model = await prisma.evaluationModel.create({
      data: {
        name,
        description,
        objectType,
        createdById: userId,
      },
    });
    res.status(201).json(model);
  } catch (error) {
    console.error("Erro ao criar modelo:", error);
    res.status(500).json({ error: "Erro ao criar modelo de avaliação" });
  }
}

export async function listEvaluationModels(req, res) {
  try {
    const models = await prisma.evaluationModel.findMany({
      include: {
        createdBy: {
          select: { id: true, name: true, email: true },
        },
      },
    });
    res.json(models);
  } catch (error) {
    console.error("Erro ao listar modelos:", error);
    res.status(500).json({ error: "Erro ao listar modelos" });
  }
}

export async function updateEvaluationModel(req, res) {
  const { id } = req.params;
  const { name, description, objectType } = req.body;

  try {
    const updated = await prisma.evaluationModel.update({
      where: { id: parseInt(id) },
      data: { name, description, objectType },
    });
    res.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar modelo:", error);
    res.status(500).json({ error: "Erro ao atualizar modelo de avaliação" });
  }
}

export async function deleteEvaluationModel(req, res) {
  const { id } = req.params;

  try {
    await prisma.evaluationModel.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Modelo de avaliação deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar modelo:", error);
    res.status(500).json({ error: "Erro ao deletar modelo de avaliação" });
  }
}
