/*
  Warnings:

  - You are about to drop the `Axis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Criterion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Evaluation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EvaluationAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EvaluationModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LearningObject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModelCriterion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PassportToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Criterion" DROP CONSTRAINT "Criterion_axisId_fkey";

-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_modelId_fkey";

-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_objectId_fkey";

-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_userId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationAnswer" DROP CONSTRAINT "EvaluationAnswer_criterionId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationAnswer" DROP CONSTRAINT "EvaluationAnswer_evaluationId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationModel" DROP CONSTRAINT "EvaluationModel_createdById_fkey";

-- DropForeignKey
ALTER TABLE "LearningObject" DROP CONSTRAINT "LearningObject_createdById_fkey";

-- DropForeignKey
ALTER TABLE "LearningObject" DROP CONSTRAINT "LearningObject_modelId_fkey";

-- DropForeignKey
ALTER TABLE "ModelCriterion" DROP CONSTRAINT "ModelCriterion_criterionId_fkey";

-- DropForeignKey
ALTER TABLE "ModelCriterion" DROP CONSTRAINT "ModelCriterion_evaluationModelId_fkey";

-- DropForeignKey
ALTER TABLE "PassportToken" DROP CONSTRAINT "PassportToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropTable
DROP TABLE "Axis";

-- DropTable
DROP TABLE "Criterion";

-- DropTable
DROP TABLE "Evaluation";

-- DropTable
DROP TABLE "EvaluationAnswer";

-- DropTable
DROP TABLE "EvaluationModel";

-- DropTable
DROP TABLE "LearningObject";

-- DropTable
DROP TABLE "ModelCriterion";

-- DropTable
DROP TABLE "PassportToken";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "axes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "axes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "criteria" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "axisId" INTEGER NOT NULL,

    CONSTRAINT "criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluation_models" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objectType" TEXT,

    CONSTRAINT "evaluation_models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_criteria" (
    "id" SERIAL NOT NULL,
    "evaluationModelId" INTEGER NOT NULL,
    "criterionId" INTEGER NOT NULL,

    CONSTRAINT "model_criteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "learning_objects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "platform" TEXT,
    "ageRange" TEXT,
    "durationMinutes" INTEGER,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "learning_objects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "objectId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "generalComment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluation_answers" (
    "id" SERIAL NOT NULL,
    "evaluationId" INTEGER NOT NULL,
    "criterionId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "evaluation_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passport_tokens" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "passport_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "model_criteria_evaluationModelId_criterionId_key" ON "model_criteria"("evaluationModelId", "criterionId");

-- CreateIndex
CREATE UNIQUE INDEX "evaluation_answers_criterionId_evaluationId_key" ON "evaluation_answers"("criterionId", "evaluationId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "criteria" ADD CONSTRAINT "criteria_axisId_fkey" FOREIGN KEY ("axisId") REFERENCES "axes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_models" ADD CONSTRAINT "evaluation_models_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model_criteria" ADD CONSTRAINT "model_criteria_evaluationModelId_fkey" FOREIGN KEY ("evaluationModelId") REFERENCES "evaluation_models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model_criteria" ADD CONSTRAINT "model_criteria_criterionId_fkey" FOREIGN KEY ("criterionId") REFERENCES "criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_objects" ADD CONSTRAINT "learning_objects_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "learning_objects" ADD CONSTRAINT "learning_objects_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "evaluation_models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "learning_objects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "evaluation_models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_answers" ADD CONSTRAINT "evaluation_answers_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluation_answers" ADD CONSTRAINT "evaluation_answers_criterionId_fkey" FOREIGN KEY ("criterionId") REFERENCES "criteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passport_tokens" ADD CONSTRAINT "passport_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
