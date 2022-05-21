import { Box, Button, Group, Title } from "@mantine/core";
import React from "react";
import { Settings, VectorTriangle } from "tabler-icons-react";

const StudioOverviewPage = () => {
  return (
    <Box my="lg" mx="lg" sx={{ width: "100%" }}>
      <Group align="center" position="apart">
        <Title>Graphs</Title>
        <Button leftIcon={<VectorTriangle></VectorTriangle>} color="teal">
          Add Graph
        </Button>
      </Group>
    </Box>
  );
};

export default StudioOverviewPage;
