import type { Prisma, TabFileType } from "@prisma/client";
import { prisma } from "~/db.server";

export const createTabFile = async ({
  name,
  type,
  userId,
  projectId,
  ext,
}: {
  userId: string;
  projectId: string;
  name: string;
  type: TabFileType;
  ext?: string;
}) => {
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
    },
  });
};

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

type DeleteTabFile = { tabFileId: string; userId: string };

export const deleteTabFile = ({ tabFileId, userId }: DeleteTabFile) => {
  return prisma.tabFile.deleteMany({
    where: {
      id: tabFileId,
      project: { userId: userId },
    },
  });
};
