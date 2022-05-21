-- CreateEnum
CREATE TYPE "TabFileType" AS ENUM ('View');

-- CreateTable
CREATE TABLE "TabFile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TabFileType" NOT NULL,
    "ext" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TabFile_pkey" PRIMARY KEY ("id")
);
