import { prisma } from "../prisma/client.js";

// Criar avaliação completa
export async function createEvaluation(req, res) {
  const { learningObjectId, modelId, generalComment, answers } = req.body;
  const userId = req.user.id;

  try {
    const evaluation = await prisma.evaluation.create({
      data: {
        userId,
        objectId: learningObjectId,
        modelId,
        generalComment,
        answers: {
          create: answers.map((answer) => ({
            criterionId: answer.criterionId,
            score: answer.score,
          })),
        },
      },
    });

    res
      .status(201)
      .json({ message: "Avaliação registrada com sucesso", evaluation });
  } catch (error) {
    console.error("Erro ao registrar avaliação:", error);
    res
      .status(500)
      .json({ error: "Erro ao registrar avaliação", detail: error.message });
  }
}

// Listar avaliações por objeto
export async function listEvaluationsByObject(req, res) {
  const { objectId } = req.params;

  try {
    const evaluations = await prisma.evaluation.findMany({
      where: { objectId: parseInt(objectId) },
      include: {
        user: { select: { name: true, email: true } },
        answers: {
          include: { criterion: true },
        },
      },
    });

    res.json(evaluations);
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    res.status(500).json({ error: "Erro ao buscar avaliações do objeto" });
  }
}
