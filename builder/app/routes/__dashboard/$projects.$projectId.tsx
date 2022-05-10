import { Button, Group, Space, Title } from "@mantine/core";
import type { LoaderFunction } from "remix";
import { json, Outlet, useLoaderData } from "remix";
import GraphList from "~/components/GraphList";
import SiteList from "~/components/SiteList";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const ProjectPage = () => {
  const loaderData = useLoaderData<LoaderData>()

  return (
    <div>
      <Group align="center" position="apart">
        <Title mb="lg">Sites</Title>
        <Button>Create</Button>
      </Group>
      <SiteList></SiteList>

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
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const graphs = await graphService.getGraphs({ userId });

  return json<LoaderData>({ graphs });
};
