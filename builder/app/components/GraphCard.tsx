import { Button, Card, Group, Text } from "@mantine/core";
import type { Graph } from "@prisma/client";
import React from "react";
import { Link } from "remix";

type GraphCardProps = {
  graph: Graph;
};

export function GraphCard({ graph }: GraphCardProps) {
  return (
    <Card
      py="md"
      px="lg"
      radius="md"
      shadow="xs"
      sx={{
        overflowWrap: "anywhere",
      }}
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
  );
}
