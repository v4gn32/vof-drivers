/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `axes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `criteria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `evaluation_models` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `learning_objects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "axes_name_key" ON "axes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "criteria_name_key" ON "criteria"("name");

-- CreateIndex
CREATE UNIQUE INDEX "evaluation_models_name_key" ON "evaluation_models"("name");

-- CreateIndex
CREATE UNIQUE INDEX "learning_objects_name_key" ON "learning_objects"("name");
