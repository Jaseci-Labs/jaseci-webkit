/*
  Warnings:

  - Added the required column `endpoint` to the `Graph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Graph" ADD COLUMN     "endpoint" TEXT NOT NULL;
