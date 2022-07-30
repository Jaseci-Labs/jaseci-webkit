import { Radio, Text } from "@mantine/core";
import React from "react";

type Graph = { jid: string; name: string };

type SelectGraphListProps = {
  graphs: Array<Graph>;
};

const SelectGraph = ({ graphs }: SelectGraphListProps) => {
  return (
    <div>
      <Radio.Group
        label="Select your graph"
        description="Select the graph you want to use"
        required
      >
        {graphs?.length ? (
          graphs.map((graph) => (
            <Radio name="selectedGraph"
              label={
                <>
                  <Text component="span">{graph.name}</Text>
                  <Text
                    component="span"
                    size="xs"
                    color="dimmed"
                    sx={{ marginLeft: "4px" }}
                  >
                    {graph.jid}
                  </Text>
                </>
              }
              value={graph.jid}
              key={graph.jid}
            ></Radio>
          ))
        ) : (
          <Text>No graph found.</Text>
        )}
      </Radio.Group>
    </div>
  );
};

export default SelectGraph;
