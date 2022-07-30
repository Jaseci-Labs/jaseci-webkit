import {
  ActionIcon,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Modal,
  Select,
  Space,
  Stack,
  Tabs,
  TabsValue,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { Active, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import DraggableSection from "~/components/page-builder/DraggableSection";
import Section from "~/components/page-builder/Section";
import DroppableSection from "~/components/page-builder/DroppableSection";
import { sections } from "~/data/sections";
import usePageBuilder from "~/hooks/usePageBuilder";
import ContentSection from "~/components/page-builder/ContentSection";
import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { PropertyInspector } from "~/components/page-builder/PropertyInspector";
import { ArrowBack, Note, Plus } from "tabler-icons-react";
import SectionCategories from "~/components/page-builder/SectionCategories";
import { Form } from "@remix-run/react";

const PageBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { actions, selectedSection, pages, currentPage } = usePageBuilder();
  const { addPageSection, setCurrentPage } = actions;
  const [active, setActive] = useState<Active | null>(null);
  const [currentTab, setCurrentTab] = useState<TabsValue>("page1");
  const [config, setConfig] = useState<Record<string, any>>({
    theme: "greenheart",
  });
  const [showAddPageModal, setShowPageModal] = useState(false);

  const [name, setName] = useInputState("");
  const [value, setValue] = useInputState("");
  const [debounceRate, setDebounceRate] = useState(200);

  const [debouncedConfig] = useDebouncedValue(config, debounceRate);

  const theme = useMantineTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Grid columns={12} sx={{ margin: 0, height: "100%" }}>
          <Grid.Col span={3}>
            <Card
              sx={{
                background: theme.colors["dark"]["6"],
                height: "100%",
              }}
              py="md"
              px="md"
            >
              <Stack>
                <Group position="apart">
                  <ActionIcon
                    color="blue"
                    variant="filled"
                    onClick={() => setSelectedCategory(null)}
                    disabled={!selectedCategory}
                  >
                    <ArrowBack></ArrowBack>
                  </ActionIcon>

                  <Title order={6} sx={{ color: "#fff", fontWeight: 500 }}>
                    {selectedCategory}
                  </Title>

                  <Title order={4} sx={{ color: "#fff" }}>
                    {!selectedCategory ? "Choose Category" : "Sections"}
                  </Title>
                </Group>
                {!selectedCategory && (
                  <SectionCategories
                    sections={sections}
                    onSelectCategory={setSelectedCategory}
                  ></SectionCategories>
                )}

                {selectedCategory &&
                  sections
                    .filter((section) => section.category === selectedCategory)
                    .map((section) => (
                      <DraggableSection
                        key={section.id}
                        id={section.id}
                        label={section.id}
                        content={section.content}
                      ></DraggableSection>
                    ))}
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            {pages.length ? (
              <Tabs
                defaultValue={"page1"}
                value={currentTab}
                onTabChange={(value) => {
                  setCurrentTab(value);
                  const page = pages.find((page) => page.pageId === value);
                  console.log({ page });
                  setCurrentPage(() =>
                    pages.find((page) => page.pageId === value)
                  );
                }}
              >
                <Tabs.List>
                  {pages.map((page) => (
                    <Tabs.Tab
                      value={page.pageId}
                      key={page.pageId}
                      icon={<Note size={14} />}
                    >
                      {page.name}
                    </Tabs.Tab>
                  ))}
                  {/*<Tabs.Tab key={"addPage"} value={"addPage"}>*/}
                  <ActionIcon onClick={() => setShowPageModal(true)}>
                    <Plus></Plus>
                  </ActionIcon>
                  {/*</Tabs.Tab>*/}
                </Tabs.List>

                {pages.map((page) => (
                  <Tabs.Panel key={page.pageId} value={page.pageId}>
                    <Box py="md" sx={{ width: "100%" }}>
                      {pages
                        .find((page) => page.pageId === currentPage?.pageId)
                        ?.pageSections.map((pageSection) => (
                          <>
                            <ContentSection
                              selected={selectedSection?.id === pageSection.id}
                              config={debouncedConfig}
                              actions={actions}
                              section={pageSection}
                              key={pageSection.id}
                            ></ContentSection>
                          </>
                        ))}

                      <Space h={"md"}></Space>
                      <DroppableSection id="starting"></DroppableSection>
                    </Box>
                  </Tabs.Panel>
                ))}
              </Tabs>
            ) : (
              <Stack justify={"center"}>
                <Title color={"dimmed"} sx={{ display: "block" }} order={3}>
                  You haven't created any pages yet
                </Title>
                <Text color={"dimmed"}>
                  Click the button below to start designing your first page
                </Text>
                <Button onClick={() => setShowPageModal(true)}>Add page</Button>
              </Stack>
            )}

            <AddPageModal
              opened={showAddPageModal}
              onClose={() => setShowPageModal(false)}
              onAddPage={(name) => {
                let page = actions.addPage(name);
                setCurrentTab(page.pageId);
                setCurrentPage(page);
              }}
            ></AddPageModal>
          </Grid.Col>

          <Grid.Col span={3}>
            <Card
              sx={{
                background: theme.colors["dark"]["6"],
                height: "100%",
              }}
              py="md"
              px="md"
            >
              <Stack>
                <Card>
                  <Title order={6}>Page</Title>

                  <Stack>
                    <TextInput
                      disabled={!currentPage}
                      defaultValue={currentPage?.name}
                      onClick={() => {
                        if (currentPage) {
                          actions.deletePage(currentPage?.pageId);
                        }
                      }}
                      label={"Name"}
                    ></TextInput>
                    <Button color={"red"} disabled={!currentPage} fullWidth>
                      Delete
                    </Button>
                  </Stack>
                </Card>

                <Card>
                  <Title order={6}>Config</Title>
                  <Stack>
                    <Select
                      onChange={(value) =>
                        setConfig((config) => ({ ...config, theme: value }))
                      }
                      value={config.theme}
                      label="Theme"
                      onClick={(e) => setDebounceRate(200)}
                      data={[
                        {
                          value: "greenheart",
                          label: "Greenheart",
                        },
                        {
                          value: "nexus",
                          label: "Nexus",
                        },
                        {
                          value: "slate",
                          label: "Slate",
                        },
                        {
                          value: "greenheartDark",
                          label: "Greenheart Dark",
                        },
                        {
                          value: "nexusDark",
                          label: "Nexus Dark",
                        },
                        {
                          value: "slateDark",
                          label: "Slate Dark",
                        },
                        {
                          value: "corporate",
                          label: "Corporate",
                        },
                        {
                          value: "garden",
                          label: "Garden",
                        },
                        {
                          value: "pastel",
                          label: "Pastel",
                        },
                      ]}
                    ></Select>

                    {Object.keys(config)
                      .filter((key) => key !== "theme")
                      .map((key) => (
                        <Grid key={key} columns={2}>
                          <Grid.Col span={1}>
                            <TextInput
                              label="Name"
                              value={key}
                              disabled
                              onChange={(e) => {
                                setConfig((config) => ({
                                  ...config,
                                  [e.target?.value]: config[key],
                                }));

                                delete config[key];
                              }}
                            ></TextInput>
                          </Grid.Col>
                          <Grid.Col span={1}>
                            <TextInput
                              label="Value"
                              value={config[key]}
                              onFocusCapture={() => {
                                setDebounceRate(1000);
                              }}
                              onChange={(e) => {
                                // prevent site from being updated on every keystroke
                                setConfig((config) => ({
                                  ...config,
                                  [key]: e.target?.value,
                                }));
                              }}
                            ></TextInput>
                          </Grid.Col>
                        </Grid>
                      ))}

                    <Grid columns={2}>
                      <Grid.Col span={1}>
                        <TextInput
                          label="Name"
                          value={name}
                          onChange={setName}
                        ></TextInput>
                      </Grid.Col>
                      <Grid.Col span={1}>
                        <TextInput
                          label="Value"
                          value={value}
                          onChange={setValue}
                        ></TextInput>
                      </Grid.Col>
                    </Grid>
                    <Button
                      onClick={() => {
                        setConfig(() => ({ ...config, [name]: value }));
                        setName("");
                        setValue("");
                      }}
                    >
                      Add Config
                    </Button>
                  </Stack>
                </Card>

                {selectedSection && (
                  <PropertyInspector
                    key={selectedSection.id}
                    setSectionContent={actions.setSectionContent}
                    section={selectedSection}
                    config={config}
                  ></PropertyInspector>
                )}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <DragOverlay>
          <Section label={String(active?.id) || "Item"}></Section>
        </DragOverlay>
      </DndContext>
    </Box>
  );

  function handleDragStart(event: DragStartEvent) {
    setActive(event.active);
  }

  function handleDragEnd({ over, active }: DragEndEvent) {
    setActive(null);

    if (active?.data?.current?.content && over?.id === "starting") {
      const section = sections.find((section) => section.id === active?.id);

      if (section) {
        addPageSection(section);
      }
    }
  }
};

function AddPageModal({
  opened,
  onClose,
  onAddPage,
}: {
  opened: boolean;
  onClose: () => void;
  onAddPage: (name: string) => void;
}) {
  const [value, setValue] = useInputState("");

  function handleAddPage() {
    onAddPage(value);
    setValue("");
    onClose();
  }

  return (
    <Modal title={"Add Page"} opened={opened} onClose={onClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddPage();
        }}
      >
        <Stack>
          <TextInput
            value={value}
            onChange={setValue}
            label={"Page Name"}
            minLength={1}
            required
          ></TextInput>
          <Button type={"submit"}>Create Page</Button>
        </Stack>
      </Form>
    </Modal>
  );
}

export default PageBuilder;
