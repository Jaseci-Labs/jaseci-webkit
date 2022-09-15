import type { TabsValue } from "@mantine/core";
import { Popover } from "@mantine/core";
import { Divider } from "@mantine/core";
import { useMachine } from "@xstate/react";
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
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { Active, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import DraggableSection from "~/components/page-builder/DraggableSection";
import DroppableSection from "~/components/page-builder/DroppableSection";
import type { Section as TSection } from "~/data/sections";
import { sections } from "~/data/sections";
import type { PageBuilderPage } from "~/hooks/usePageBuilder";
import usePageBuilder from "~/hooks/usePageBuilder";
import ContentSection from "~/components/page-builder/ContentSection";
import { useInputState } from "@mantine/hooks";
import { PropertyInspector } from "~/components/page-builder/PropertyInspector";
import {
  ArrowBack,
  DeviceFloppy,
  EditCircle,
  Link as ILink,
  Note,
  Plus,
  Star,
} from "tabler-icons-react";
import SectionCategories from "~/components/page-builder/SectionCategories";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  getProjectById,
  saveBuilderContext,
  savePageBuilderProject,
  setProjectHomepage,
} from "~/models/project.server";
import { IconDeviceFloppy } from "@tabler/icons";
import { getProjectTabFiles } from "~/models/tabFile.server";
import Section from "~/components/page-builder/Section";
import { authenticator } from "~/auth.server";
import type { BuilderMachineContext } from "~/machines/builder.machine";
import { builderMachine } from "~/machines/builder.machine";
import { nanoid } from "nanoid";
import SectionPath from "~/components/page-builder/SectionPath";
import BuilderLeftSidebarWrapper from "~/components/page-builder/BuilderLeftSidebarWrapper";

export const loader: LoaderFunction = async ({ request, params }) => {
  try {
    const { projectId } = params;
    const user = await authenticator.isAuthenticated(request);

    const project = await getProjectById({ projectId });
    const tabFiles = await getProjectTabFiles({ projectId, userId: user?.id });

    const pages = tabFiles?.map<PageBuilderPage>((tabFile) => ({
      name: tabFile.name,
      pageId: tabFile.id,
      pageSections: tabFile.pageSections as TSection[],
      saved: !!tabFile.createdAt,
    }));

    return json({
      pages,
      projectName: project?.title,
      projectHomepageId: project?.homepage_tabFileId,
      projectContext: project?.builderContext as BuilderMachineContext,
    });
  } catch (err) {
    console.log(err);
  }
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const action = formData.get("_action");
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { projectId } = params;

  if (action === "savePageBuilderProject") {
    const result = await savePageBuilderProject({
      projectId: projectId,
      pages: JSON.parse(formData.get("pages") || ("{}" as any)),
      config: JSON.parse(formData.get("config") || ("{}" as any)),
    });

    await saveBuilderContext({
      projectId,
      context: JSON.parse(formData.get("context") || ("{}" as any)),
    });

    return json({ result });
  }

  if (action === "setProjectHomepage") {
    const project = await setProjectHomepage({
      projectId,
      tabId: formData.get("tabId"),
      userId: user.id,
    });

    return json(project);
  }

  return json({});
};

const PageBuilder = () => {
  const loaderData = useLoaderData<{
    projectName: string;
    pages: (PageBuilderPage & { saved: boolean })[];
    projectHomepageId: string;
    projectContext: BuilderMachineContext;
  }>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { actions } = usePageBuilder({
    initialPages: loaderData?.pages.map((page) => {
      const { saved, ...pageData } = page;
      return pageData;
    }),
  });
  const { projectId } = useParams();
  const [active, setActive] = useState<Active | null>(null);

  const [showAddPageModal, setShowPageModal] = useState(false);

  const [name, setName] = useInputState("");
  const [renameConfigList, setRenameConfigList] = useState<string[]>([]);
  const [newConfigName, setNewConfigName] = useInputState("");
  const [value, setValue] = useInputState("");
  const [setDebounceRate] = useState(200);
  const savePages = useFetcher();

  const [current, send] = useMachine(builderMachine, {
    context: {
      pageSectionMapping: loaderData?.projectContext?.pageSectionMapping || {},
      pages: loaderData?.pages.map((page) => {
        const { saved, ...pageData } = page;
        return pageData;
      }),
      config: [
        { id: "theme", name: "theme", value: "nexus" },
        ...(loaderData?.projectContext?.config || []),
      ],
    },
  });

  const currentPage = current.context.pages.find(
    (page) => page.pageId === current.context.path?.[0]?.id
  );

  const [currentTab, setCurrentTab] = useState<TabsValue>(
    currentPage?.pageId || ""
  );

  // const [debouncedConfig] = useDebouncedValue(config, debounceRate);

  const theme = useMantineTheme();

  useEffect(() => {
    actions.setPages(
      loaderData?.pages.map((page) => {
        const { saved, ...pageData } = page;
        return pageData;
      })
    );
  }, [loaderData.pages]);

  return (
    <Box sx={{ width: "100%" }}>
      {/*{JSON.stringify(current.context)}*/}
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Grid columns={12} sx={{ margin: 0, height: "100%" }}>
          <Grid.Col span={3}>
            <BuilderLeftSidebarWrapper>
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
            </BuilderLeftSidebarWrapper>
          </Grid.Col>

          <Grid.Col span={6}>
            {!!current.context.pages.length && (
              <Group position={"apart"} color={"green"} align="center">
                <Title order={3}>{loaderData.projectName}</Title>
                <Group>
                  <savePages.Form method={"post"}>
                    <input
                      name={"pages"}
                      hidden
                      readOnly
                      value={JSON.stringify(current.context.pages)}
                    />

                    <input
                      name={"context"}
                      hidden
                      readOnly
                      value={JSON.stringify(current.context)}
                    />

                    <input
                      name={"config"}
                      hidden
                      readOnly
                      value={JSON.stringify(
                        current.context.config.reduce(
                          (prev, current) => ({
                            ...prev,
                            [current.name]: current.value,
                          }),
                          {}
                        )
                      )}
                    />
                    <Button
                      type={"submit"}
                      variant={"light"}
                      name="_action"
                      value="savePageBuilderProject"
                      loading={
                        savePages.state === "submitting" ||
                        savePages.state === "loading"
                      }
                      leftIcon={<IconDeviceFloppy></IconDeviceFloppy>}
                    >
                      Save Now
                    </Button>
                  </savePages.Form>

                  <Button
                    leftIcon={<ILink></ILink>}
                    variant="light"
                    color="green"
                    component={Link}
                    to={"/site/" + projectId}
                  >
                    View Site
                  </Button>
                </Group>
              </Group>
            )}

            <Divider my="lg"></Divider>

            {current.context.pages.length ? (
              <Tabs
                defaultValue={currentPage?.pageId}
                value={currentTab}
                onTabChange={(value) => {
                  setCurrentTab(value);
                  send({ type: "SELECT_PAGE", pageId: value as string });
                }}
              >
                <Tabs.List>
                  {current.context.pages.map((page) => (
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

                <Box py={"md"}>
                  <SectionPath
                    path={current.context.path}
                    onClickPath={(pathId) =>
                      send({ type: "SWITCH_PATH", pathId })
                    }
                  ></SectionPath>
                </Box>

                {current.context.pages.map((page) => (
                  <Tabs.Panel key={page.pageId} value={page.pageId}>
                    {currentPage && (
                      <DroppableSection
                        key={page.pageId}
                        id={"starting-" + page.pageId}
                      >
                        <Box py="md" sx={{ width: "100%" }}>
                          {current.context.visibleSections?.map(
                            (pageSection) => (
                              <div key={pageSection.id}>
                                <ContentSection
                                  selected={
                                    current.context.selectedSectionId ===
                                    pageSection.id
                                  }
                                  config={current.context.config.reduce(
                                    (prev, current) => ({
                                      ...prev,
                                      [current.name]: current.value,
                                    }),
                                    {}
                                  )}
                                  onDeleteSection={(sectionId) => {
                                    send({
                                      type: "DELETE_SECTION",
                                      sectionId: sectionId,
                                    });
                                  }}
                                  onMoveUp={(sectionId) => {
                                    send({
                                      type: "MOVE_UP",
                                      sectionId: sectionId,
                                    });
                                  }}
                                  onMoveDown={(sectionId) => {
                                    send({
                                      type: "MOVE_DOWN",
                                      sectionId: sectionId,
                                    });
                                  }}
                                  onSetSectionContent={(id, content) => {
                                    send({
                                      type: "SET_SECTION_CONTENT",
                                      sectionId: id,
                                      content,
                                    });
                                  }}
                                  onSetSelectedSection={(sectionId) => {
                                    send({
                                      type: "SET_SELECTED_SECTION",
                                      sectionId: sectionId,
                                    });
                                  }}
                                  onEditSection={(sectionId) => {
                                    send({ type: "EDIT_SECTION", sectionId });
                                  }}
                                  section={pageSection}
                                  key={pageSection.id}
                                ></ContentSection>
                              </div>
                            )
                          )}

                          <Space h={"md"}></Space>
                        </Box>
                      </DroppableSection>
                    )}
                  </Tabs.Panel>
                ))}
              </Tabs>
            ) : (
              <Card>
                <Stack justify={"center"}>
                  <Title color={"dimmed"} sx={{ display: "block" }} order={3}>
                    You haven't created any pages yet
                  </Title>
                  <Text color={"dimmed"}>
                    Click the button below to start designing your first page
                  </Text>
                  <Button onClick={() => setShowPageModal(true)}>
                    Add page
                  </Button>
                </Stack>
              </Card>
            )}

            <AddPageModal
              opened={showAddPageModal}
              onClose={() => setShowPageModal(false)}
              onAddPage={(name) => {
                send({ type: "ADD_PAGE", name });
                send({
                  type: "SELECT_PAGE",
                  pageId:
                    current.context.pages[current.context.pages?.length - 1]
                      .pageId,
                });
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
                      value={currentPage?.name}
                      label={"Name"}
                      onChange={(e) =>
                        currentPage &&
                        send({
                          type: "UPDATE_PAGE",
                          pageId: currentPage.pageId,
                          data: { name: e.currentTarget.value },
                        })
                      }
                    ></TextInput>
                    <Group>
                      <Button
                        color={"red"}
                        onClick={() => {
                          if (currentPage) {
                            send({
                              type: "DELETE_PAGE",
                              pageId: currentPage.pageId,
                            });

                            send({ type: "RESET" });

                            if (current.context.pages.length) {
                              const pageId = current.context.pages[0].pageId;
                              send({
                                type: "SELECT_PAGE",
                                pageId,
                              });
                              setCurrentTab(pageId);
                            }
                          }
                        }}
                        disabled={!currentPage}
                      >
                        Delete
                      </Button>
                      <Form method="post">
                        <input
                          readOnly
                          hidden
                          value={currentPage?.pageId}
                          name="tabId"
                        ></input>
                        <input
                          readOnly
                          hidden
                          value={projectId}
                          name="projectId"
                        ></input>
                        <Button
                          leftIcon={<Star size={16}></Star>}
                          color={"orange"}
                          type="submit"
                          name="_action"
                          value="setProjectHomepage"
                          disabled={
                            !currentPage ||
                            currentPage?.pageId ===
                              loaderData.projectHomepageId ||
                            !loaderData.pages.find(
                              (page) => page.pageId === currentPage.pageId
                            )?.saved
                          }
                        >
                          Set as Homepage
                        </Button>
                      </Form>
                    </Group>
                  </Stack>
                </Card>

                <Card>
                  <Title order={6}>Config</Title>
                  <Stack>
                    <Select
                      onChange={(value) => {
                        actions.setConfigValueByName("theme", value || "");
                      }}
                      value={
                        current.context.config.find(
                          (configObj) => configObj.name === "theme"
                        )?.value
                      }
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

                    {current.context.config
                      .filter((configObj) => configObj.name !== "theme")
                      .map((configObj) => (
                        <Grid key={configObj.id} columns={2}>
                          <Grid.Col span={1}>
                            <TextInput
                              label="Name"
                              value={configObj.name}
                              rightSection={
                                <Popover width={200} withArrow>
                                  <Popover.Target>
                                    <ActionIcon
                                      color="orange"
                                      onClick={() => {
                                        if (
                                          !renameConfigList.includes(
                                            configObj.id
                                          )
                                        ) {
                                          setRenameConfigList(
                                            (renameConfigList) => [
                                              ...renameConfigList,
                                              configObj?.id,
                                            ]
                                          );
                                        } else {
                                          // disable the text input field
                                          setRenameConfigList(
                                            (renameConfigList) =>
                                              renameConfigList.filter(
                                                (configName) =>
                                                  configName !== configObj.id
                                              )
                                          );
                                        }
                                      }}
                                    >
                                      <EditCircle size={16}></EditCircle>
                                    </ActionIcon>
                                  </Popover.Target>
                                  <Popover.Dropdown>
                                    <p>Rename Config</p>
                                    <TextInput
                                      label="Config Name"
                                      onChange={setNewConfigName}
                                      value={newConfigName}
                                      rightSection={
                                        <ActionIcon
                                          color="orange"
                                          onClick={() => {
                                            send({
                                              newConfigName,
                                              type: "RENAME_CONFIG",
                                              configId: configObj.id,
                                              prevConfigName: configObj.name,
                                            });

                                            // actions.setSelectedSection(null);
                                          }}
                                        >
                                          <DeviceFloppy
                                            size={16}
                                          ></DeviceFloppy>
                                        </ActionIcon>
                                      }
                                    ></TextInput>
                                  </Popover.Dropdown>
                                </Popover>
                              }
                              disabled={
                                !renameConfigList.includes(configObj.id)
                              }
                              onChange={(e) => {
                                actions.renameConfig(
                                  configObj.id,
                                  e.target?.value,
                                  configObj.name
                                );
                              }}
                            ></TextInput>
                          </Grid.Col>
                          <Grid.Col span={1}>
                            <TextInput
                              label="Value"
                              value={configObj.value}
                              onFocusCapture={() => {
                                setDebounceRate(1000);
                              }}
                              onChange={(e) => {
                                // prevent site from being updated on every keystroke
                                send({
                                  type: "SET_CONFIG_VALUE",
                                  configId: configObj.id,
                                  value: e.target?.value,
                                });
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
                        send({ type: "ADD_CONFIG", name, value });
                        setName("");
                        setValue("");
                      }}
                    >
                      Add Config
                    </Button>
                  </Stack>
                </Card>

                {current.context.selectedSection && (
                  <PropertyInspector
                    key={current.context.selectedSection.id}
                    onSetSectionContent={(sectionId, content) => {
                      send({ type: "SET_SECTION_CONTENT", sectionId, content });
                    }}
                    section={current.context.selectedSection}
                    config={current.context.config.reduce(
                      (prev, current) => ({
                        ...prev,
                        [current.name]: current.value,
                      }),
                      {}
                    )}
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

    if (
      active?.data?.current?.content &&
      (over?.id as string)?.startsWith("starting")
    ) {
      const section = sections.find((section) => section.id === active?.id);

      if (section) {
        send({
          type: "ADD_PAGE_SECTION",
          section: { ...section, id: nanoid() },
        });
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
