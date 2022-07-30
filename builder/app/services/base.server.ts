import { json, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";

type ServiceError = "NOT_FOUND" | "INTERNAL_SERVER_ERROR";

export class BaseService {
  readonly db = prisma;

  private NotFoundError = { status: 401, statusText: "Cannot find resource" };
  private InternalServerError = {
    status: 500,
    statusText: "Internal server error",
  };

  throwError(error: ServiceError) {
    if (error === "NOT_FOUND") throw json({}, this.getError(error));
  }

  getServiceError(error: ServiceError) {
    if (error === "NOT_FOUND") return json({}, this.getError(error));
  }

  redirectWithError(url: string, error: ServiceError) {
    if (error === "NOT_FOUND") throw redirect(url, this.getError(error));
  }

  private getError(error: ServiceError) {
    switch (error) {
      case "NOT_FOUND":
        return this.NotFoundError;
      case "INTERNAL_SERVER_ERROR":
        return this.InternalServerError;
      default:
        return {};
    }
  }
}
