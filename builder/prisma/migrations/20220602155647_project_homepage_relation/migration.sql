/*
  Warnings:

  - You are about to drop the column `homepage` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[homepage_tabFileId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "homepage",
ADD COLUMN     "homepage_tabFileId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Project_homepage_tabFileId_key" ON "Project"("homepage_tabFileId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_homepage_tabFileId_fkey" FOREIGN KEY ("homepage_tabFileId") REFERENCES "TabFile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
