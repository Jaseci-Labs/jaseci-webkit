import { nanoid } from "nanoid";
import randomWords from "random-words";
import { prisma } from "~/db.server";

type CreateProjectSiteInput = {
  title: string;
  projectId: string;
  userId: string;
};

export const createProjectSite = async ({
  title,
  projectId,
  userId,
}: CreateProjectSiteInput) => {
  const randomWordsString = randomWords({
    exactly: 1,
    wordsPerString: 2,
    separator: "-",
  });

  const project = await prisma.project.findFirst({ where: { userId } });

  if (!project) throw new Error("Project not found.");

  const friendlySlug = `${randomWordsString}-${nanoid(5)}`;

  return prisma.projectSite.create({
    data: {
      title,
      slug: friendlySlug,
      content: "{\n\t\n}",
      projectId,
    },
  });
};

type GetProjectSitesInput = {
  userId: string;
  projectId: string;
};

export const getProjectSites = async ({
  projectId,
  userId,
}: GetProjectSitesInput) => {
  return prisma.projectSite.findMany({
    where: { project: { userId }, projectId },
  });
};

type DeleteProjectSite = {
  siteId: string;
  userId: string;
};

export const deleteProjectSite = async ({
  siteId,
  userId,
}: DeleteProjectSite) => {
  return prisma.projectSite.deleteMany({
    where: { id: siteId, project: { userId } },
  });
};
