import { createResolver } from "./../lib/server-kit/resolvers";
import type { Prisma } from "@prisma/client";
import { TabFileType } from "@prisma/client";
import { prisma } from "~/db.server";
import {
  date,
  enums,
  nonempty,
  nullable,
  object,
  optional,
  string,
} from "superstruct";
import { message } from "~/lib/server-kit";

export const createTabFile = createResolver({
  schema: object({
    userId: string(),
    projectId: string(),
    name: message(nonempty(string()), "Name cannot be empty"),
    type: enums(Object.values(TabFileType)),
    ext: optional(string()),
    content: optional(string()),
  }),
  async resolve({ name, projectId, type, userId, content, ext }) {
    // check that user owns the projects
    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId,
      },
    });

    if (!project) throw new Error("Cannot find project.");

    return prisma.tabFile.create({
      data: {
        name,
        type,
        ext,
        projectId,
        content,
      },
    });
  },
});

export const getProjectTabFiles = ({
  projectId,
  userId,
}: {
  projectId: string;
  userId: string;
}) => {
  return prisma.tabFile.findMany({
    where: { project: { id: projectId, userId } },
    orderBy: { name: "asc" },
  });
};

export const saveTabContent = createResolver({
  schema: object({ tabId: string(), content: string(), userId: string() }),
  resolve({ content, tabId, userId }) {
    return prisma.tabFile.updateMany({
      where: { id: tabId, project: { userId } },
      data: { content },
    });
  },
});

export const updateTabFile = async ({
  tabFileId,
  userId,
  input,
}: {
  tabFileId: string;
  userId: string;
  input: Prisma.TabFileUpdateInput;
}) => {
  return prisma.tabFile.updateMany({
    where: {
      id: tabFileId,
      project: { userId },
    },
    data: {
      ...input,
    },
  });
};

// get open tabs for the project
export const getProjectOpenedTabs = ({
  projectId,
  userId,
}: {
  projectId: string;
  userId: string;
}) => {
  return prisma.tabFile.findMany({
    where: {
      project: { id: projectId, userId },
      opened_at: { not: null },
    },
    orderBy: { opened_at: "asc" },
  });
};

type GetTabFile = {
  tabFileId: string;
  userId: string;
};

export const getTabFile = ({ tabFileId, userId }: GetTabFile) => {
  return prisma.tabFile.findFirst({
    where: {
      id: tabFileId,
      project: { userId: userId },
    },
  });
};

type GetTabFileByName = {
  tabFileName: string;
  projectId: string;
};

export const getTabFileByName = ({
  tabFileName,
  projectId,
}: GetTabFileByName) => {
  return prisma.tabFile.findFirst({
    where: {
      name: { equals: tabFileName, mode: "insensitive" },
      projectId: projectId,
    },
  });
};

export const deleteTabFile = createResolver({
  schema: object({ tabFileId: string(), userId: string() }),
  resolve({ tabFileId, userId }) {
    return prisma.tabFile.deleteMany({
      where: {
        id: tabFileId,
        project: { userId: userId },
      },
    });
  },
});

export const renameTabFile = createResolver({
  schema: object({
    name: message(nonempty(string()), "Please provide a valid name"),
    tabFileId: nonempty(string()),
    userId: string(),
  }),
  resolve({ name, tabFileId, userId }) {
    return prisma.tabFile.updateMany({
      where: {
        id: tabFileId,
        project: { userId: userId },
      },
      data: { name },
    });
  },
});

export const setTabFileOpenDate = createResolver({
  schema: object({
    tabFileId: string(),
    userId: string(),
    date: nullable(date()),
  }),
  resolve({ userId, date, tabFileId }) {
    return prisma.tabFile.updateMany({
      where: {
        id: tabFileId,
        project: { userId: userId },
      },
      data: { opened_at: date },
    });
  },
});
