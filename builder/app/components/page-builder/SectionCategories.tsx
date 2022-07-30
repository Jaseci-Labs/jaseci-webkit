import { Button, Stack } from "@mantine/core";
import type { Section } from "~/data/sections";

const SectionCategories = ({
  sections,
  onSelectCategory,
}: {
  sections: Section[];
  onSelectCategory: (category: string) => void;
}) => {
  const categories = Array.from(new Set(sections.map((s) => s.category)));

  return (
    <Stack>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onSelectCategory(category)}
          fullWidth
          size="md"
          variant="light"
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default SectionCategories;
