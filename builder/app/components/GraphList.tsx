import { Grid } from "@mantine/core";
import type { Graph } from "@prisma/client";
import React from "react";
import { GraphCard } from "./GraphCard";

const GraphList = ({ graphs }: { graphs: Array<Graph> }) => {
  return (
    <Grid>
      {graphs.map((graph) => (
        <Grid.Col key={graph.id} span={4}>
          <GraphCard graph={graph} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default GraphList;
