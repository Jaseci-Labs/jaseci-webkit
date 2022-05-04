export class BaseService {
  AuthenticationError = { status: 401 };
}

export class GraphService extends BaseService {
  createAccount() {
    return {};
  }
}

export const graphService = new GraphService();
