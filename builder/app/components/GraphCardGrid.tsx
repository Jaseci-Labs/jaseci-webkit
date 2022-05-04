import { Button, Card, Grid, Group, Text } from "@mantine/core";
import type { Graph } from "@prisma/client";
import React from "react";
import { Link } from "remix";

const GraphCardGrid = ({ graphs }: { graphs: Array<Graph> }) => {
  return (
    <Grid>
      {graphs.map((graph) => (
        <Grid.Col key={graph.id} span={4}>
          <Card
            py="md"
            px="lg"
            radius="md"
            shadow="xs"
            sx={{ overflowWrap: "anywhere" }}
          >
            <Group position="apart" align="center">
              <div>
                <Text weight={500}>{graph.name}</Text>
                <Text color="dimmed" size="xs">
                  {graph.jid}
                </Text>
              </div>
              <Button size="xs" component={Link} to={graph.id}>
                View
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default GraphCardGrid;
