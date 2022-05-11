import { Button, Group, Space, Title } from "@mantine/core";
import type { LoaderFunction } from "remix";
import { json, Link, Outlet, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import GraphList from "~/components/GraphList";
import SiteList from "~/components/SiteList";
import { getProjectSites } from "~/models/projectSite.server";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const ProjectPage = () => {
  const loaderData = useLoaderData<LoaderData>()

  return (
    <div>
      <Group align="center" position="apart">
        <Title mb="lg">Sites</Title>
        <Button component={Link} to="new-site">New Site</Button>
      </Group>
      <SiteList sites={loaderData.sites}></SiteList>

      <Space h={100}></Space>
      <Title mb="lg">Graphs</Title>
      <GraphList graphs={loaderData.graphs}></GraphList>

      <Outlet></Outlet>
    </div>
  );
};

export default ProjectPage;

type LoaderData = {
  graphs: Awaited<ReturnType<typeof graphService.getGraphs>>;
  sites: Awaited<ReturnType<typeof getProjectSites>>
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { projectId } = params
  const userId = await requireUserId(request);

  invariant(typeof projectId === 'string', "projectId must be a string")

  const sites = await getProjectSites({ projectId, userId })

  const graphs = await graphService.getGraphs({ userId });

  return json<LoaderData>({ graphs, sites });
};
