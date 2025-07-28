import { prisma } from "../prisma/client.js";

export async function createLearningObject(req, res) {
  const { name, description, platform, ageRange, durationMinutes, modelId } =
    req.body;
  const userId = req.user.id;

  try {
    const learningObject = await prisma.learningObject.create({
      data: {
        name,
        description,
        platform,
        ageRange,
        durationMinutes,
        modelId,
        createdById: userId,
      },
    });
    res.status(201).json(learningObject);
  } catch (error) {
    console.error("Erro ao criar objeto:", error);
    res.status(500).json({ error: "Erro ao criar objeto de aprendizagem" });
  }
}

export async function listLearningObjects(req, res) {
  try {
    const objects = await prisma.learningObject.findMany({
      include: {
        model: { select: { name: true } },
        createdBy: { select: { name: true, email: true } },
      },
    });
    res.json(objects);
  } catch (error) {
    console.error("Erro ao listar objetos:", error);
    res.status(500).json({ error: "Erro ao listar objetos" });
  }
}

export async function updateLearningObject(req, res) {
  const { id } = req.params;
  const { name, description, platform, ageRange, durationMinutes, modelId } =
    req.body;

  try {
    const updated = await prisma.learningObject.update({
      where: { id: parseInt(id) },
      data: { name, description, platform, ageRange, durationMinutes, modelId },
    });
    res.json(updated);
  } catch (error) {
    console.error("Erro ao atualizar objeto:", error);
    res.status(500).json({ error: "Erro ao atualizar objeto" });
  }
}

export async function deleteLearningObject(req, res) {
  const { id } = req.params;

  try {
    await prisma.learningObject.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Objeto deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar objeto:", error);
    res.status(500).json({ error: "Erro ao deletar objeto" });
  }
}
