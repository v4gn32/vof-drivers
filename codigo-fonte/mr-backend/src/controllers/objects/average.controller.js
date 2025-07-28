import { prisma } from "../../lib/prisma.js"; // ajuste o caminho se necessário

export const getAverageScores = async (req, res) => {
  try {
    const results = await prisma.$queryRawUnsafe(`
      SELECT
        lo.id AS "objectId",
        lo.name AS "objectName",
        ROUND(AVG(ea.score), 2) AS "averageScore"
      FROM learning_objects lo
      JOIN evaluations e ON lo.id = e."objectId"
      JOIN evaluation_answers ea ON e.id = ea."evaluationId"
      GROUP BY lo.id, lo.name
      ORDER BY "averageScore" DESC;
    `);

    res.status(200).json(results);
  } catch (error) {
    console.error("Erro ao calcular nota média:", error);
    res.status(500).json({ error: "Erro ao calcular nota média" });
  }
};
