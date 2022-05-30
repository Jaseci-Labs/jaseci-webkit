import { Box, Button, Group, Title } from "@mantine/core";
import React from "react";
import { Settings } from "tabler-icons-react";

const StudioOverviewPage = () => {
  return (
    <Box my="lg" mx="lg" sx={{ width: "100%" }}>
      <Group align="center" position="apart">
        <Title>Overview</Title>
        <Button leftIcon={<Settings></Settings>} color="teal">
          Settings
        </Button>
      </Group>
    </Box>
  );
};

export default StudioOverviewPage;
