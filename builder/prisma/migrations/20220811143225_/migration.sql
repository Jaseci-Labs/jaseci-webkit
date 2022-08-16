/*
  Warnings:

  - A unique constraint covering the columns `[projectId,name]` on the table `TabFile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "TabFile_name_key";

-- AlterTable
ALTER TABLE "TabFile" ADD COLUMN     "pageConfig" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "TabFile_projectId_name_key" ON "TabFile"("projectId", "name");
