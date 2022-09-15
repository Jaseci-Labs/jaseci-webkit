import { Card, useMantineTheme } from "@mantine/core";
import type { ReactNode } from "react";
import React from "react";

type BuilderLeftSidebarWrapperProps = {
  children: ReactNode;
};

const BuilderLeftSidebarWrapper = ({
  children,
}: BuilderLeftSidebarWrapperProps) => {
  const theme = useMantineTheme();
  // const { setNodeRef, isOver } = useDroppable({ id: "rightSidebar" });

  return (
    <Card
      sx={{
        background: theme.colors["dark"]["6"],
        height: "100%",
      }}
      py="md"
      px="md"
    >
      {children}
    </Card>
  );
};

export default BuilderLeftSidebarWrapper;
