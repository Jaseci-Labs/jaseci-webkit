/*
  Warnings:

  - You are about to drop the column `opened` on the `TabFile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TabFile" DROP COLUMN "opened",
ADD COLUMN     "opened_at" TIMESTAMP(3);
