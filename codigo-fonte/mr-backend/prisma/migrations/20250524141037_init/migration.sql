-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Axis" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Axis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criterion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "axisId" INTEGER NOT NULL,

    CONSTRAINT "Criterion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objectType" TEXT,

    CONSTRAINT "EvaluationModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelCriterion" (
    "id" SERIAL NOT NULL,
    "evaluationModelId" INTEGER NOT NULL,
    "criterionId" INTEGER NOT NULL,

    CONSTRAINT "ModelCriterion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningObject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "platform" TEXT,
    "ageRange" TEXT,
    "durationMinutes" INTEGER,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "LearningObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "objectId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "generalComment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationAnswer" (
    "id" SERIAL NOT NULL,
    "evaluationId" INTEGER NOT NULL,
    "criterionId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "EvaluationAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PassportToken" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "PassportToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ModelCriterion_evaluationModelId_criterionId_key" ON "ModelCriterion"("evaluationModelId", "criterionId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationAnswer_criterionId_evaluationId_key" ON "EvaluationAnswer"("criterionId", "evaluationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Criterion" ADD CONSTRAINT "Criterion_axisId_fkey" FOREIGN KEY ("axisId") REFERENCES "Axis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationModel" ADD CONSTRAINT "EvaluationModel_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelCriterion" ADD CONSTRAINT "ModelCriterion_evaluationModelId_fkey" FOREIGN KEY ("evaluationModelId") REFERENCES "EvaluationModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelCriterion" ADD CONSTRAINT "ModelCriterion_criterionId_fkey" FOREIGN KEY ("criterionId") REFERENCES "Criterion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningObject" ADD CONSTRAINT "LearningObject_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningObject" ADD CONSTRAINT "LearningObject_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "EvaluationModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "LearningObject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "EvaluationModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationAnswer" ADD CONSTRAINT "EvaluationAnswer_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationAnswer" ADD CONSTRAINT "EvaluationAnswer_criterionId_fkey" FOREIGN KEY ("criterionId") REFERENCES "Criterion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassportToken" ADD CONSTRAINT "PassportToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
