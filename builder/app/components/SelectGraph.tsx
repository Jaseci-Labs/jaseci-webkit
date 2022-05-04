import { Radio, RadioGroup, Text } from "@mantine/core";
import React from "react";

type Graph = { jid: string; name: string };

type SelectGraphListProps = {
  graphs: Array<Graph>;
};

const SelectGraph = ({ graphs }: SelectGraphListProps) => {
  return (
    <div>
      <RadioGroup
        label="Select your graph"
        description="Select the graph you want to use"
        required
        name="selectedGraph"
      >
        {graphs?.length ? (
          graphs.map((graph) => (
            <Radio
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
      </RadioGroup>
    </div>
  );
};

export default SelectGraph;
