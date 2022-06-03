import type { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

type CreateProjectInput = {
  userId: string;
  title: string;
};

export async function createProject({ userId, title }: CreateProjectInput) {
  const project = await prisma.project.create({
    data: {
      userId,
      title,
    },
  });

  return project;
}

type GetProjectsInput = {
  userId: string;
};

export async function getProjects({ userId }: GetProjectsInput) {
  return prisma.project.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

type GetProjectHomepageInput = {
  projectId: string;
};

export async function getProjectHomepage({
  projectId,
}: GetProjectHomepageInput) {
  const project = await prisma.project.findFirst({
    where: { id: projectId },
    include: { homepage: true },
  });

  return project?.homepage;
}

type DeleteProjectInput = {
  projectId: string;
  userId: string;
};

export async function deleteProject({ projectId, userId }: DeleteProjectInput) {
  return prisma.project.deleteMany({ where: { id: projectId, userId } });
}

export async function getProjectById({ projectId }: { projectId: string }) {
  return prisma.project.findFirst({ where: { id: projectId } });
}

type UpdateProjectInput = Prisma.ProjectUpdateInput;

export async function updateProject({
  projectId,
  userId,
  input,
}: {
  projectId: string;
  userId: string;
  input: UpdateProjectInput;
}) {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId,
    },
  });

  if (!project) throw new Error("Project not found.");

  return prisma.project.update({
    where: { id: projectId },
    data: { ...input },
  });
}
