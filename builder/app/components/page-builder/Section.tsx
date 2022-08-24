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
        backgroundRepeat: "no-repeat",
        minHeight:
          getCategory(label)?.category === "Hero"
            ? "110px"
            : getCategory(label)?.category === "Cards"
            ? "140px"
            : undefined,
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
