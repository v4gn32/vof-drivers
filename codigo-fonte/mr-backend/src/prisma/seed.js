// src/prisma/seed.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  const adminRole = await prisma.role.upsert({
    where: { name: "ADMIN" },
    update: {},
    create: { name: "ADMIN" },
  });

  const userRole = await prisma.role.upsert({
    where: { name: "USER" },
    update: {},
    create: { name: "USER" },
  });

  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@example.com" },
  });

  let adminUser;

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    adminUser = await prisma.user.create({
      data: {
        name: "Administrador",
        email: "admin@example.com",
        password: hashedPassword,
        roleId: adminRole.id,
      },
    });
  } else {
    adminUser = existingAdmin;
  }

  // Continue a partir daqui só se o adminUser foi inserido novo
  const eixo1 = await prisma.axis.upsert({
    where: { name: "Interatividade" },
    update: {},
    create: {
      name: "Interatividade",
      description: "Avalia o nível de interatividade da ferramenta.",
    },
  });

  const eixo2 = await prisma.axis.upsert({
    where: { name: "Design" },
    update: {},
    create: {
      name: "Design",
      description: "Analisa o aspecto visual e layout da aplicação.",
    },
  });

  const criterio1 = await prisma.criterion.upsert({
    where: { name: "Feedback Imediato" },
    update: {},
    create: {
      name: "Feedback Imediato",
      description: "O sistema responde imediatamente às ações do usuário.",
      axisId: eixo1.id,
    },
  });

  const criterio2 = await prisma.criterion.upsert({
    where: { name: "Atratividade Visual" },
    update: {},
    create: {
      name: "Atratividade Visual",
      description: "A interface é visualmente atrativa.",
      axisId: eixo2.id,
    },
  });

  const modeloBasico = await prisma.evaluationModel.upsert({
    where: { name: "Modelo Padrão" },
    update: {},
    create: {
      name: "Modelo Padrão",
      description: "Modelo básico de avaliação para objetos educacionais.",
      createdById: adminUser.id,
      objectType: "Jogo Educativo",
      criteria: {
        create: [
          { criterionId: criterio1.id },
          { criterionId: criterio2.id },
        ],
      },
    },
  });

  await prisma.learningObject.upsert({
    where: { name: "Jogo da Memória" },
    update: {},
    create: {
      name: "Jogo da Memória",
      description: "Estimula a memória visual e concentração.",
      platform: "Web",
      ageRange: "6-10",
      durationMinutes: 15,
      createdById: adminUser.id,
      modelId: modeloBasico.id,
    },
  });

  console.log("✅ Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro durante seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
