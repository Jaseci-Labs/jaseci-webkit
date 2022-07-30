import {
  Stack,
  ActionIcon,
  Box,
  Group,
  Modal,
  TextInput,
  JsonInput,
  Button,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, Code, Edit, Trash } from "tabler-icons-react";
import type { Section } from "~/data/sections";
import type usePageBuilder from "~/hooks/usePageBuilder";

const ContentSection = ({
  section,
  config,
  actions,
  selected,
}: {
  selected: boolean;
  actions: ReturnType<typeof usePageBuilder>["actions"];
  section: Section;
  config: Record<string, any>;
}) => {
  const { hovered, ref } = useHover();
  const jscAppRef = useRef<any>();
  const [showPropertyInspector, setShowPropertyInspector] = useState(false);
  const [showCodeInspector, setShowCodeInspector] = useState(false);

  useEffect(() => {
    if (jscAppRef.current) {
      jscAppRef?.current?.setGlobalConfig(config);

      jscAppRef?.current?.setMarkup(
        JSON.stringify([JSON.parse(section.content)])
      );
    }
  }, [jscAppRef, section.content, config]);

  return (
    <Box
      onClick={() => actions.setSelectedSection(section)}
      sx={{
        "&:hover": {
          outline: "2px solid yellow",
        },
        border: selected ? "3px solid violet" : undefined,
        position: "relative",
      }}
      ref={ref}
    >
      {hovered && (
        <Box
          sx={{
            position: "absolute",
            top: -10,
            width: "100%",
            zIndex: 2,
          }}
        >
          <Group position="apart">
            <Group>
              <ActionIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  actions.moveUp(section.id);
                }}
                variant="filled"
                color="orange"
                size="sm"
              >
                <ArrowUp size={14}></ArrowUp>
              </ActionIcon>

              <ActionIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  actions.moveDown(section.id);
                }}
                variant="filled"
                color="orange"
                size="sm"
              >
                <ArrowDown size={14}></ArrowDown>
              </ActionIcon>
            </Group>

            <Group>
              <ActionIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setShowPropertyInspector(true);
                }}
                variant="filled"
                color="blue"
                size="sm"
              >
                <Edit size={14}></Edit>
              </ActionIcon>

              <ActionIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setShowCodeInspector(true);
                }}
                variant="filled"
                color="grape"
                size="sm"
              >
                <Code size={14}></Code>
              </ActionIcon>

              <ActionIcon
                variant="filled"
                color="red"
                size="sm"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  actions.deleteSection(section.id);
                }}
              >
                <Trash size={14}></Trash>
              </ActionIcon>
            </Group>
          </Group>
        </Box>
      )}

      <jsc-app ref={jscAppRef}></jsc-app>

      <CodeInspector
        setSectionContent={actions.setSectionContent}
        section={section}
        opened={showCodeInspector}
        onClose={() => {
          setShowCodeInspector(false);
        }}
      ></CodeInspector>
    </Box>
  );
};

export const CodeInspector = ({
  opened,
  section,
  onClose,
  setSectionContent,
}: {
  section: Section;
  opened: boolean;
  setSectionContent: ReturnType<
    typeof usePageBuilder
  >["actions"]["setSectionContent"];
  onClose: () => void;
}) => {
  const [value, setValue] = useState(section.content);

  useEffect(() => {
    // setSectionContent(section.id, value);
  }, [value]);

  return (
    <Modal opened={opened} onClose={onClose} title="Edit Component">
      <Stack>
        <JsonInput
          autosize
          value={value}
          onChange={setValue}
          formatOnBlur
        ></JsonInput>
        <Button
          onClick={() => {
            setSectionContent(section.id, value);
          }}
        >
          Save
        </Button>
      </Stack>
    </Modal>
  );
};

export default ContentSection;
