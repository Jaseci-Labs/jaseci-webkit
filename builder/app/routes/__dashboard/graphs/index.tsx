import { Button, Group, Space, Title } from "@mantine/core";
import React from "react";
import type { LoaderFunction } from "remix";
import { json, Link, useLoaderData } from "remix";
import { Affiliate } from "tabler-icons-react";
import GraphCardGrid from "~/components/GraphCardGrid";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const GraphsIndexPage = () => {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <div>
      <Group position="apart">
        <Title order={1}>Graphs</Title>
        <Button
          leftIcon={<Affiliate></Affiliate>}
          variant="light"
          component={Link}
          to="add-graph"
        >
          Add Graph
        </Button>
      </Group>

      <Space h="xl"></Space>

      <GraphCardGrid graphs={loaderData.graphs}></GraphCardGrid>
    </div>
  );
};

export default GraphsIndexPage;

type LoaderData = {
  graphs: Awaited<ReturnType<typeof graphService.getGraphs>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const graphs = await graphService.getGraphs({ userId });

  return json<LoaderData>({ graphs });
};
