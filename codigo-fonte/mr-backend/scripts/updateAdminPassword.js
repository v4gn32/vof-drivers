// scripts/updateAdminPassword.js
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash("admin123", 10);

  await prisma.user.update({
    where: { email: "admin@example.com" },
    data: { password: hashed },
  });

  console.log("✅ Senha do admin atualizada com bcrypt.");
}

main()
  .catch((e) => {
    console.error("❌ Erro ao atualizar senha:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
