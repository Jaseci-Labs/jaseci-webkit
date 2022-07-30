import { Card, Dialog, LoadingOverlay, Text, Title } from "@mantine/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import GraphRenderer from "~/components/GraphRenderer";
// import invariant from "tiny-invariant";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const GraphDetailPage = () => {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <div>
      <Card shadow="xs" sx={{ width: "100%", height: 500 }} mt="lg">
        <Title order={3}>View Graph</Title>
        {loaderData?.graph?.jid}
        <GraphRenderer
          endpoint={loaderData?.graph?.endpoint as string}
          graphJid={loaderData?.graph?.jid as string}
          token={loaderData?.graph?.token as string}
          height="500px"
        ></GraphRenderer>
      </Card>
    </div>
  );
};

export default GraphDetailPage;

type LoaderData = {
  graph: Awaited<ReturnType<typeof graphService.getGraph>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { graphId } = params;
  const userId = await requireUserId(request);
  // invariant(typeof graphId == "string");
  if (typeof graphId !== "string") throw new Error("graphId must be a string");

  const graph = await graphService.getGraph({ id: graphId, userId });

  return json<LoaderData>({ graph });
};
