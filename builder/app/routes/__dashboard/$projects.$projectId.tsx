import { Space, Title } from "@mantine/core";
import React from "react";
import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import GraphList from "~/components/GraphList";
import SiteList from "~/components/SiteList";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const ProjectPage = () => {
  const loaderData = useLoaderData<LoaderData>()

  return (
    <div>
      <Title mb="lg">Sites</Title>
      <SiteList></SiteList>

      <Space h={100}></Space>
      <Title mb="lg">Graphs</Title>
      <GraphList graphs={loaderData.graphs}></GraphList>
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
