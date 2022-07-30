import { Box, Button, Group, Space, Title } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { VectorTriangle } from "tabler-icons-react";
import GraphList from "~/components/GraphList";
import type { graphService } from "~/services/graph.server";
import { getProjectGraphs } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const StudioGraphsPage = () => {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <Box my="lg" mx="lg" sx={{ width: "100%" }}>
      <Group align="center" position="apart">
        <Title>Graphs</Title>
        <Button
          component={Link}
          to="add-graph"
          leftIcon={<VectorTriangle></VectorTriangle>}
          color="teal"
        >
          Add Graph
        </Button>
      </Group>

      <Space h="md"></Space>
      <GraphList graphs={loaderData.graphs}></GraphList>

      <Outlet></Outlet>
    </Box>
  );
};

type LoaderData = {
  graphs: Awaited<ReturnType<typeof getProjectGraphs>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);

  const graphs = await getProjectGraphs(
    { projectId: params.projectId, userId },
    { name: "hello" }
  );

  return json<LoaderData>({ graphs });
};

export default StudioGraphsPage;
