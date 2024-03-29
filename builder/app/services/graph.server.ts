import { object, string } from "superstruct";
import { prisma } from "~/db.server";
import { createResolver } from "remix-server-kit";
import { BaseService } from "./base.server";

type CreateGraphInput = {
  jid: string;
  endpoint: string;
  userId: string;
  name: string;
  token: string;
  projectId: string;
};

type GetGraphsInput = {
  userId: string;
};

type GetGraphInput = {
  id: string;
  userId: string;
};

export const getProjectGraphs = createResolver({
  schema: object({
    userId: string(),
    projectId: string(),
  }),
  resolve({ projectId, userId }) {
    return prisma.graph.findMany({ where: { projectId, userId } });
  },
});

export class GraphService extends BaseService {
  async createGraph({
    jid,
    endpoint,
    userId,
    name,
    token,
    projectId,
  }: CreateGraphInput) {
    try {
      const graph = await this.db.graph.create({
        data: { jid, userId, endpoint, name, token, projectId },
      });

      return graph;
    } catch (err) {
      this.redirectWithError("/graphs", "INTERNAL_SERVER_ERROR");
    }
  }

  async getGraphs({ userId }: GetGraphsInput) {
    return this.db.graph.findMany({ where: { userId } });
  }

  async getGraph({ id, userId }: GetGraphInput) {
    return this.db.graph.findFirst({ where: { id, userId } });
  }
}

export const graphService = new GraphService();
