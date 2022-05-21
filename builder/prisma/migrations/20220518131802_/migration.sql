-- AlterTable
ALTER TABLE "TabFile" ADD COLUMN     "projectId" TEXT;

-- AddForeignKey
ALTER TABLE "TabFile" ADD CONSTRAINT "TabFile_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
