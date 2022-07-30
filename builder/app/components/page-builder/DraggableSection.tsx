import { useDraggable } from "@dnd-kit/core";
import Section from "./Section";

const DraggableSection = ({
  id,
  label,
  content,
}: {
  id: string;
  label: string;
  content: string;
}) => {
  const { listeners, attributes, setNodeRef } = useDraggable({
    id,
    data: { content },
  });

  return (
    <div {...attributes} {...listeners} ref={setNodeRef}>
      <Section label={label}></Section>
    </div>
  );
};

export default DraggableSection;
