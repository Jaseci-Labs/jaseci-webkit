-- AlterTable
ALTER TABLE "Graph" ADD COLUMN     "projectId" TEXT,
ADD COLUMN     "token" TEXT NOT NULL DEFAULT E'';

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
