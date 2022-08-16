import {
  ActionIcon,
  Button,
  Text,
  Card,
  CloseButton,
  Group,
  JsonInput,
  Popover,
  Stack,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDebouncedValue, useDisclosure, useHotkeys } from "@mantine/hooks";
import React, { Ref, useEffect, useRef, useState } from "react";
import type { Section } from "~/data/sections";
import type usePageBuilder from "~/hooks/usePageBuilder";
import { HTMLInputElement } from "happy-dom";
import { BiPlus } from "react-icons/bi";

export const PropertyInspector = ({
  setSectionContent,
  section,
  config,
}: {
  setSectionContent: ReturnType<
    typeof usePageBuilder
  >["actions"]["setSectionContent"];
  section: Section;
  config: Record<string, string>;
}) => {
  const [configRefs, setConfigRefs] = useState<
    Record<string, Ref<HTMLInputElement>>
  >({});
  const [content, setContent] = useState<Record<string, any>>(
    JSON.parse(section.content)
  );

  const [debouncedContent] = useDebouncedValue(content, 1000);
  const [showConfigHints, setShowConfigHints] = useState(false);

  useEffect(() => {
    setSectionContent(section.id, JSON.stringify(debouncedContent));
  }, [debouncedContent, section.id]);

  // useHotkeys([
  // ['ctrl+enter', () => alert('GO!')],
  // ]);

  return (
    <Card>
      <Title order={6}>Property Inspector</Title>
      {JSON.stringify(config)}
      <Stack>
        {Object.keys(
          (JSON.parse(section.content)?.props as string[]) || {}
        )?.map((propName: string) => (
          <>
            {typeof JSON.parse(section.content)?.props?.[propName] ===
            "object" ? (
              <JsonInput
                label={propName}
                value={JSON.stringify(
                  JSON.parse(section.content)?.props?.[propName]
                )}
                onChange={(value) =>
                  setContent((content) => ({
                    ...content,
                    props: { ...content?.props, [propName]: value },
                  }))
                }
              ></JsonInput>
            ) : (
              <>
                <Popover
                  key={propName}
                  closeOnEscape
                  closeOnClickOutside
                  opened={showConfigHints}
                  position="bottom"
                  width="target"
                  transition="pop"
                >
                  <Popover.Target key={propName}>
                    <TextInput
                      key={propName}
                      label={propName}
                      onKeyDown={handleKeyDown}
                      name={propName}
                      defaultValue={content?.props?.[propName]}
                      value={content?.props?.[propName]}
                      onChange={(e) =>
                        setContent((content) => ({
                          ...content,
                          props: {
                            ...content?.props,
                            [propName]: e.target?.value,
                          },
                        }))
                      }
                      rightSection={
                        <Tooltip label={"Insert Config Value"}>
                          <ActionIcon onClick={() => setShowConfigHints(true)}>
                            <BiPlus></BiPlus>
                          </ActionIcon>
                        </Tooltip>
                      }
                    ></TextInput>
                  </Popover.Target>
                  <Popover.Dropdown key={propName}>
                    <Group mb={"sm"} position={"apart"}>
                      <Title order={6}>Choose a Config</Title>
                      <CloseButton
                        size={"sm"}
                        onClick={() => setShowConfigHints(false)}
                      ></CloseButton>
                    </Group>
                    <Button.Group orientation={"vertical"}>
                      {Object.keys(config)
                        .filter((key) => key !== "theme")
                        ?.map((configKey) => (
                          <Button
                            fullWidth
                            variant="light"
                            onClick={() => {
                              // insert config value
                              const currentVal = content["props"][propName];

                              setContent((content) => ({
                                ...content,
                                props: {
                                  ...content?.props,
                                  [propName]:
                                    currentVal + `{{config:${configKey}}}`,
                                },
                              }));

                              setShowConfigHints(false);
                            }}
                          >
                            {configKey}
                          </Button>
                        ))}
                    </Button.Group>
                  </Popover.Dropdown>
                </Popover>
              </>
            )}
          </>
        ))}
        {!Object.keys((JSON.parse(section.content)?.props as string[]) || {})
          .length && <Text>No properties configurable for this block</Text>}
      </Stack>
    </Card>
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    const special = e.ctrlKey;
    if (special && e.key === " ") {
      setShowConfigHints(true);
    }
    if (e.key === "Escape") {
      setShowConfigHints(false);
    }
  }
};
