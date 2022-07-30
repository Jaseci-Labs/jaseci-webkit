import { useDroppable } from "@dnd-kit/core";
import { Text, Card, useMantineTheme } from "@mantine/core";
import React from "react";

const DroppableSection = ({ id }: { id: string }) => {
  const theme = useMantineTheme();
  const { setNodeRef, isOver, over } = useDroppable({ id });

  return (
    <div ref={setNodeRef}>
      <Card
        withBorder
        sx={{
          width: "100%",
          padding: "50px 0",
          backgroundColor: isOver ? "#FFFBD1" : theme.colors.gray["1"],
          borderColor: isOver ? theme.colors.yellow["2"] : undefined,
          borderStyle: "dashed",
          borderWidth: 4,
          borderSpacing: 20,
        }}
      >
        <Text
          sx={{
            fontSize: "1.2rem",
            fontWeight: 500,
            color: theme.colors.gray[5],
            textAlign: "center",
          }}
        >
          Drag an item here
        </Text>
      </Card>
    </div>
  );
};

export default DroppableSection;
