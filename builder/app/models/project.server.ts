import { any, Describe } from "superstruct";
import { array, enums, nonempty, object, size, string } from "superstruct";
import type { Prisma } from "@prisma/client";

import { prisma } from "~/db.server";
import { createResolver, message } from "remix-server-kit";
import { json } from "@remix-run/node";
import type { Section } from "~/data/sections";

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

export const savePageBuilderProject = createResolver({
  schema: object({
    projectId: string(),
    config: object(),
    pages: array(
      object({
        name: string(),
        pageId: string(),
        pageSections: any(),
      })
    ),
  }),
  async resolve({ projectId, pages, config }) {
    const project = await prisma.project.findFirst({
      where: { id: projectId },
      include: { tab: true },
    });
    const tabIds = project?.tab.map((tab) => tab.id) || [];

    const newTabs = pages.filter((page) => !tabIds.includes(page.pageId));
    const oldTabs = pages.filter((page) => tabIds.includes(page.pageId));

    const newTabsData = newTabs.map<Prisma.TabFileCreateManyInput>((tab) => ({
      projectId,
      name: tab.name,
      content: "",
      type: "View",
      ext: "json",
      pageSections: tab?.pageSections,
    }));

    // update old pages
    const oldTabUpdatePromises = oldTabs
      .map<Prisma.TabFileUpdateArgs>((tab) => ({
        where: { id: tab.pageId },
        data: {
          name: tab.name,
          pageSections: tab.pageSections || [],
          pageConfig: (config as any) || [],
        },
      }))
      .map((oldTabData) => prisma.tabFile.update(oldTabData));

    await Promise.all(oldTabUpdatePromises);

    return await prisma.tabFile.createMany({ data: newTabsData });
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

export const deleteProject = createResolver({
  schema: object({ projectId: string(), userId: string() }),
  resolve({ projectId, userId }) {
    return prisma.project.deleteMany({ where: { id: projectId, userId } });
  },
});

export const getProjectById = createResolver({
  schema: object({ projectId: string() }),
  resolve({ projectId }) {
    return prisma.project.findFirst({ where: { id: projectId } });
  },
});

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
