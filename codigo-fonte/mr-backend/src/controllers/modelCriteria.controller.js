import { prisma } from "../prisma/client.js";

// Associar critérios a um modelo
export async function addCriteriaToModel(req, res) {
  const { modelId, criteriaIds } = req.body;

  try {
    const associations = await Promise.all(
      criteriaIds.map((criterionId) =>
        prisma.modelCriterion.upsert({
          where: {
            evaluationModelId_criterionId: {
              evaluationModelId: modelId,
              criterionId,
            },
          },
          update: {},
          create: {
            evaluationModelId: modelId,
            criterionId,
          },
        })
      )
    );

    res
      .status(201)
      .json({ message: "Critérios associados com sucesso", associations });
  } catch (error) {
    console.error("Erro ao associar critérios:", error); // <--- Aqui mostra o erro real no terminal
    res
      .status(500)
      .json({
        error: "Erro ao associar critérios ao modelo",
        detail: error.message,
      });
  }
}

// Listar critérios de um modelo
export async function listModelCriteria(req, res) {
  const { modelId } = req.params;

  try {
    const criteria = await prisma.modelCriterion.findMany({
      where: { evaluationModelId: parseInt(modelId) },
      include: { criterion: true },
    });
    res.json(criteria.map((item) => item.criterion));
  } catch (error) {
    console.error("Erro ao listar critérios do modelo:", error);
    res.status(500).json({ error: "Erro ao listar critérios do modelo" });
  }
}

// Remover um critério do modelo
export async function removeCriterionFromModel(req, res) {
  const { modelId, criterionId } = req.params;

  try {
    await prisma.modelCriterion.delete({
      where: {
        evaluationModelId_criterionId: {
          evaluationModelId: parseInt(modelId),
          criterionId: parseInt(criterionId),
        },
      },
    });

    res.json({ message: "Critério desvinculado com sucesso" });
  } catch (error) {
    console.error("Erro ao remover critério:", error);
    res.status(500).json({ error: "Erro ao remover critério do modelo" });
  }
}
