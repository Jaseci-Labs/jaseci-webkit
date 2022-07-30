import { Card } from "@mantine/core";
import { sections } from "~/data/sections";

const Section = ({ label }: { label: string }) => {
  return (
    <Card
      radius="sm"
      shadow="xs"
      sx={{
        background: `#ffffff url("/sections/${label}.png")`,
        backgroundPosition: "center",
        backgroundSize: "324px",
        minHeight:
          getCategory(label)?.category === "Hero" ? "110px" : undefined,
      }}
    >
      <p></p>
    </Card>
  );
};

function getCategory(id: string) {
  return sections.find((sec) => sec.id === id);
}

export default Section;
