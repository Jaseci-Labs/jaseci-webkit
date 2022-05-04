import type { Prisma } from "@prisma/client";
import { nanoid } from "nanoid";
import randomWords from "random-words";
import { prisma } from "~/db.server";

export async function createProject({ userId }: { userId: string }) {
  const randomWordsString = randomWords({
    exactly: 1,
    wordsPerString: 2,
    separator: "-",
  });

  const friendlySlug = `${randomWordsString}-${nanoid(5)}`;

  const project = await prisma.project.create({
    data: {
      userId,
      content: "{\n\t\n}",
      slug: friendlySlug,
      title: randomWordsString.toString(),
    },
  });

  return project;
}

export async function getProjects({ userId }: { userId: string }) {
  return prisma.project.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

// update the project's site content
export async function saveProject({
  slug,
  userId,
  content,
}: {
  slug: string;
  userId: string;
  content: Prisma.InputJsonValue;
}) {
  const project = await prisma.project.findFirst({ where: { slug } });
  if (!project) throw new Error("Project not found.");
  if (project.userId !== userId)
    throw new Error("You don't have access to this project.");

  return prisma.project.update({
    where: { slug },
    data: { content },
  });
}

export async function getProject({ slug }: { slug: string }) {
  return prisma.project.findFirst({ where: { slug } });
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
