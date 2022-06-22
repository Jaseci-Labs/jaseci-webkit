import { assign, nonempty, object, size, string } from "superstruct";
import type { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";
import { createResolver, message } from "~/lib/server-kit";
import { json } from "remix";

export const toJson = (output: unknown) => {
  return json(output);
};

export const createProject = createResolver({
  schema: object({
    userId: message(string(), "User id is not a string"),
    title: message(
      nonempty(
        message(
          size(string(), 2, 20),
          "Title must be between 2 and 20 characters."
        )
      ),
      "Title cannot be empty"
    ),
  }),
  async resolve({ userId, title }) {
    const project = await prisma.project.create({
      data: {
        userId,
        title,
      },
    });

    return project;
  },
});

export const getProjects = createResolver({
  schema: object({ userId: string() }),
  async resolve({ userId }) {
    return prisma.project.findMany({
      where: { userId },
      orderBy: { id: "desc" },
    });
  },
});

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

export const setProjectHomepage = createResolver({
  schema: object({
    userId: nonempty(string()),
    projectId: nonempty(string()),
    tabId: nonempty(string()),
  }),
  async resolve({ tabId, projectId, userId }) {
    const project = await updateProject({
      projectId,
      input: { homepage: { connect: { id: tabId } } },
      userId,
    });
    return project;
  },
});
