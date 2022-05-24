import { Card, Dialog, LoadingOverlay, Text, Title } from "@mantine/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { LoaderFunction } from "remix";
import { json, useFetcher, useLoaderData } from "remix";
// import invariant from "tiny-invariant";
import * as vis from "vis-network";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const GraphDetailPage = () => {
  const loaderData = useLoaderData<LoaderData>();
  const graphFetcher = useFetcher();
  const [showContext, setShowContext] = useState(false);
  const [context, setContext] = useState<Record<string, any> | null>(null);
  const [dialogPos, setDialogPos] = useState({ x: 0, y: 0 });
  const targetNode = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    graphFetcher.load(
      `/api/loadGraph?endpointUrl=${loaderData.graph?.endpoint}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nodes: vis.Node[] = useMemo(
    () => graphFetcher?.data?.graph?.nodes,
    [graphFetcher?.data]
  );

  const edges: vis.Edge[] = useMemo(
    () => graphFetcher?.data?.graph?.edges,
    [graphFetcher.data]
  );

  useEffect(() => {
    if (networkRef?.current) {
      const network = new vis.Network(
        networkRef.current,
        { edges, nodes },
        {
          height: "300px",
          edges: { arrows: "to" },
          interaction: {},
        }
      );

      // handle right clicks
      network.on("oncontext", (params) => {
        // hide node context by default
        setShowContext(false);
        console.log(params);
        params.event.preventDefault();
        const node = network.getNodeAt({
          x: params.pointer.DOM.x,
          y: params.pointer.DOM.y,
        });

        console.log({ node });

        // set context data
        const nodeData = graphFetcher?.data?.graph?.nodes?.find(
          (n: any) => n.id == node
        );

        setContext(nodeData?.context);

        console.log({ nodeData });

        if (node) {
          // select and focus on node
          network.selectNodes([node]);
          network.focus(node, {
            scale: 1.0,
            animation: { duration: 1000, easingFunction: "easeInOutQuad" },
          });

          setTimeout(() => {
            const newNodePosition = network.canvasToDOM(
              network.getPosition(node)
            );
            console.log({ newNodePosition });

            // set position of popover
            if (targetNode.current) {
              // targetNode.current.style.position = "absolute";
              setDialogPos(newNodePosition);
              // show node context after animation
              setShowContext(true);
            }
          }, 1000);
        }
      });
    }
  }, [networkRef, nodes, edges, targetNode, graphFetcher?.data?.graph?.nodes]);

  const renderContext = context ? (
    Object.keys(context).map((contextKey) => (
      <div key={contextKey}>
        <Text size="xs" weight="bold">
          {contextKey}
        </Text>
        <Text size="xs">
          {Array.isArray(context[contextKey])
            ? context[contextKey].join(", ")
            : context[contextKey]}
        </Text>
      </div>
    ))
  ) : (
    <Text>Empty context</Text>
  );

  return (
    <div>
      <Card shadow="xs" sx={{ width: "100%", height: 300 }}>
        <Title order={3}>View Graph</Title>
        <Dialog
          withCloseButton
          opened={showContext}
          onClose={() => setShowContext(false)}
          position={{ left: dialogPos.x, top: dialogPos.y }}
          ref={targetNode}
          className="targetNode"
        >
          <Text>Context</Text>
          {renderContext}
        </Dialog>
        {graphFetcher?.state === "loading" ? (
          <LoadingOverlay visible={true}></LoadingOverlay>
        ) : (
          <div ref={networkRef}></div>
        )}
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
