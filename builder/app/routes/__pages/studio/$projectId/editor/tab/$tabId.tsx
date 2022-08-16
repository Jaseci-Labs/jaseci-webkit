import {
  Box,
  Grid,
  LoadingOverlay,
  Title,
  Text,
  Group,
  ActionIcon,
  Anchor,
  Button,
  Overlay,
  Card,
  useMantineTheme,
} from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import EditorHeader from "~/components/EditorHeader";
import { schemas } from "~/data/schema";
import ViewsSidebar, { ConvertPageDialog } from "~/components/ViewsSidebar";
import ExamplesModal from "~/components/playground/ExamplesModal";
// import invariant from "tiny-invariant";
import {
  convertTabFile,
  deleteTabFile,
  getProjectOpenedTabs,
  getTabFile,
  renameTabFile,
  saveTabContent,
  setTabFileOpenDate,
} from "~/models/tabFile.server";
import { createTabFile, getProjectTabFiles } from "~/models/tabFile.server";
import { requireUserId } from "~/session.server";
import type { TabFile } from "@prisma/client";
import { ArrowsMaximize, ExternalLink, Star } from "tabler-icons-react";
import { useFullscreen, useHotkeys } from "@mantine/hooks";
import { jacLang } from "~/utils/jac";
import useEditor from "~/hooks/useEditor";
import { graphService } from "~/services/graph.server";
import GraphRenderer from "~/components/GraphRenderer";
import {
  getProjectHomepage,
  setProjectHomepage,
} from "~/models/project.server";
import { string, optional } from "superstruct";
import { createMatcher, validate } from "remix-server-kit";
import { useTheme } from "@emotion/react";
import { Section } from "~/data/sections";

const StudioEditor = () => {
  const loaderData = useLoaderData<LoaderData>();
  const {
    editorRef,
    formatCode,
    jscAppRef,
    monacoRef,
    onInsertComponent,
    runCode,
    value,
    setValue,
    onRunExample,
    showPreviewText,
  } = useEditor({
    content: loaderData?.currentTab?.content || "",
    tabs: loaderData.tabFiles,
  });
  const [showPreview, setShowPreview] = useState(true);
  const [showConvertPageDialog, setShowConvertPageDialog] = useState(false);

  const [searchParams] = useSearchParams();
  const showViews = searchParams.get("showViews") || "false";
  const [showExamplesModal, setShowExamplesModal] = useState(false);
  const runButtonRef = useRef<HTMLButtonElement>(null);
  const { toggle, ref: fullscreenFef } = useFullscreen();
  const { tabId, projectId } = useParams();
  const theme = useMantineTheme();

  useHotkeys([
    // ["mod+M", () => alert("More actions")],
    // ["mod+F", () => alert("Format")],
    // ["mod+R", () => alert("Run code")],
    // ["mod+S", () => alert("Hide/show sidebar")],
    // ["mod+E", () => alert("Show examples")],
    // ["mod+N", () => alert("Add component")],
  ]);

  function handleEditorWillMount(monaco: Monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

    // var modelUri = monaco.Uri.parse("a://b/foo.json"); // a made up unique URI for our model
    // var model = monaco.editor.createModel("[]", "json", modelUri);

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
      validate: true,
      schemas,
    });

    monaco.languages.register({ id: "jac" });
    monaco.languages.setMonarchTokensProvider("jac", jacLang);
    monacoRef.current = monaco;
  }

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    editor.addAction({
      id: "run-code",
      label: "Run Code",
      precondition: null,
      keybindings: [
        monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyR,
      ],
      keybindingContext: null,
      run: function () {
        runButtonRef?.current?.click();
      },
    });

    editorRef.current = editor;
    // monaco.editor.setModelLanguage(model);
  }

  return (
    <>
      <Grid
        sx={{ maxWidth: "100vw", width: "100%", margin: 0, gap: 0 }}
        gutter={0}
      >
        <Grid.Col
          span={
            showPreview &&
            !(loaderData.currentTab?.pageSections as Section[])?.length
              ? 8
              : 12
          }
          sx={{ background: "#1E1E1E", color: "#fff" }}
        >
          <EditorHeader
            onInsertComponent={onInsertComponent}
            onClickRun={() => runCode(value, loaderData?.tabFiles)}
            onClickSave={() => saveTabContent()}
            openTabs={loaderData.openedTabFiles}
            onClickFormat={formatCode}
            onTogglePreview={() => setShowPreview((prev) => !prev)}
            onRunExample={(example) => onRunExample(example)}
          ></EditorHeader>
          <Grid gutter={0}>
            <Grid.Col span={showViews !== "true" ? 2 : 0}>
              {showViews !== "true" && (
                <ViewsSidebar
                  homepage={loaderData.projectHomepage}
                  tabFiles={loaderData.tabFiles}
                ></ViewsSidebar>
              )}
            </Grid.Col>
            <Grid.Col
              span={showViews !== "true" ? 10 : 12}
              sx={{ position: "relative" }}
            >
              <Editor
                width={"100%"}
                height="calc(100vh - 40px)"
                wrapperProps={{
                  paddingTop: "200px",
                  resize: "horizontal",
                  overflow: "auto",
                }}
                defaultLanguage={
                  loaderData?.currentTab?.type === "Jac" ? "jac" : "json"
                }
                theme="vs-dark"
                options={{
                  formatOnType: true,
                  formatOnPaste: true,
                  automaticLayout: true,
                }}
                defaultValue=""
                value={
                  typeof value === "string" ? value : JSON.stringify(value)
                }
                onChange={(value) => setValue(value as string)}
                beforeMount={handleEditorWillMount as any}
                onMount={handleEditorDidMount}
                loading={
                  <LoadingOverlay
                    transitionDuration={500}
                    loaderProps={{ variant: "bars", color: "gray" }}
                    visible={true}
                    overlayOpacity={0.3}
                  ></LoadingOverlay>
                }
              ></Editor>

              {!!(loaderData.currentTab?.pageSections as Section[])?.length && (
                <>
                  <Overlay
                    zIndex={7}
                    blur={2}
                    gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
                  ></Overlay>
                  <Card
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                    }}
                  >
                    <Text>
                      This file was created using the Builder. To modify it you
                      need to convert it to make it compatible with the editor.
                    </Text>
                    <Button
                      my="md"
                      onClick={() => setShowConvertPageDialog(true)}
                    >
                      Convert File
                    </Button>
                  </Card>
                  <ConvertPageDialog
                    onClose={() => setShowConvertPageDialog(false)}
                    opened={showConvertPageDialog}
                    tabFileId={tabId || ""}
                  ></ConvertPageDialog>
                </>
              )}
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col
          span={
            showPreview &&
            !(loaderData.currentTab?.pageSections as Section[])?.length
              ? 4
              : 0
          }
        >
          <Box
            sx={{
              minHeight: "100%",
              width: "100%",
              display: showPreview ? "block" : "none",
            }}
          >
            <Group
              position="apart"
              sx={{
                height: "40px",
                width: "100%",
                background: "#202327",
                borderBottom: "1px solid #484f567d",
              }}
            >
              <Group px="md">
                {tabId && loaderData?.currentTab?.type === "View" && (
                  <Form method="post">
                    <Button
                      type="submit"
                      name="_action"
                      value="setProjectHomepage"
                      size="xs"
                      color="orange"
                      disabled={loaderData?.projectHomepage?.id === tabId}
                      leftIcon={<Star size={14}></Star>}
                    >
                      Set as Homepage
                    </Button>
                  </Form>
                )}
              </Group>
              <Group px="md">
                <ActionIcon
                  component={Link}
                  to={`/site/${projectId}/${loaderData.currentTab?.name.toLowerCase()}`}
                  target="_blank"
                  color="grape"
                  variant="filled"
                >
                  <ExternalLink size={16}></ExternalLink>
                </ActionIcon>
                <ActionIcon onClick={toggle} color="blue" variant="filled">
                  <ArrowsMaximize size={16}></ArrowsMaximize>
                </ActionIcon>
              </Group>
            </Group>

            <div ref={fullscreenFef} style={{ background: "#fff" }}>
              {loaderData?.currentTab?.type === "View" && (
                <div
                  style={{ maxHeight: "calc(100vh - 40px)", overflow: "auto" }}
                >
                  <jsc-app ref={jscAppRef}></jsc-app>
                </div>
              )}

              {loaderData?.currentTab?.type === "Jac" && (
                <>
                  {loaderData.graphs.length ? (
                    <GraphRenderer
                      token={loaderData.graphs?.[0]?.token}
                      graphJid={loaderData.graphs?.[0]?.jid}
                      endpoint={loaderData.graphs?.[0]?.endpoint}
                      height="600px"
                    ></GraphRenderer>
                  ) : (
                    <p>
                      No graph added to this project yet.{" "}
                      <Anchor
                        component={Link}
                        to={`/studio/${projectId}/graphs/add-graph`}
                      >
                        Add one.
                      </Anchor>
                    </p>
                  )}
                </>
              )}
            </div>

            {showPreviewText && loaderData?.currentTab?.type === "View" && (
              <>
                <Title
                  sx={(theme) => ({
                    textTransform: "uppercase",
                    fontSize: "4.3rem",
                    textAlign: "center",
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2],
                  })}
                >
                  Preview
                </Title>
                <Text sx={{ textAlign: "center" }}>
                  You haven&apos;t ran any code yet
                </Text>
              </>
            )}
          </Box>
        </Grid.Col>
      </Grid>

      <ExamplesModal
        opened={showExamplesModal}
        onClose={() => setShowExamplesModal(false)}
        onRunExample={onRunExample}
      ></ExamplesModal>
      <Outlet></Outlet>
    </>
  );
};

type LoaderData = {
  tabFiles: Awaited<ReturnType<typeof getProjectTabFiles>>;
  openedTabFiles: Awaited<ReturnType<typeof getProjectOpenedTabs>>;
  graphs: Awaited<ReturnType<typeof graphService.getGraphs>>;
  currentTab: TabFile | undefined;
  projectHomepage: Awaited<ReturnType<typeof getProjectHomepage>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const { projectId, tabId } = params;
  // invariant(typeof projectId === "string");

  const tabFiles = await getProjectTabFiles({
    projectId: projectId as string,
    userId,
  });
  const openedTabFiles = await getProjectOpenedTabs({
    projectId: projectId as string,
    userId,
  });
  const currentTab = openedTabFiles.find((tab) => tab.id === tabId);
  const projectHomepage = await getProjectHomepage({
    projectId: projectId as string,
  });

  const graphs = await graphService.getGraphs({ userId });

  return json<LoaderData>({
    tabFiles,
    openedTabFiles,
    currentTab,
    graphs,
    projectHomepage,
  });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const matcher = createMatcher({
    async createTabItem(): Promise<
      Response | ReturnType<typeof createTabFile>
    > {
      const tab = await createTabFile({
        ext: formData.get("ext"),
        content: formData.get("content"),
        name: formData.get("name"),
        projectId: params.projectId,
        type: formData.get("type"),
        userId,
      });

      return json(tab, { status: 201 });
    },
    setProjectHomepage() {
      return setProjectHomepage({
        projectId: params.projectId,
        tabId: params.tabId,
        userId,
      });
    },
    async saveTabContent() {
      await saveTabContent({
        content: formData.get("content"),
        tabId: params.tabId,
        userId,
      });

      const redirectTo = validate(
        formData.get("redirectTo"),
        optional(string())
      );
      if (redirectTo) return redirect(redirectTo);

      return "successfully updated tab";
    },
    async deleteTabItem() {
      await deleteTabFile({ tabFileId: formData.get("tabFileId"), userId });

      return { message: "tab deleted" };
    },
    renameTabItem() {
      return renameTabFile({
        name: formData.get("name"),
        tabFileId: formData.get("tabFileId"),
        userId,
      });
    },
    async openTabItem() {
      const tabFileId = formData.get("tabFileId");
      const tabFile = await getTabFile({
        tabFileId: validate(tabFileId, string()),
        userId,
      });

      if (tabFile?.opened_at) {
        return redirect(`/studio/${params.projectId}/editor/tab/${tabFileId}`);
      }

      await setTabFileOpenDate({ date: new Date(), tabFileId, userId });

      return "tab opened";
    },
    async closeTabItem() {
      const tabFileId = formData.get("tabFileId");
      await setTabFileOpenDate({ date: null, tabFileId, userId });
      return "tab closed";
    },
    async convertTabItemToEditorFormat() {
      const tabFileId = formData.get("tabFileId");
      const tabFile = await convertTabFile({ tabFileId, userId });
      return tabFile;
    },
  });

  const action = matcher.validate(formData.get("_action"));
  const result = await matcher.match(action);

  return result;
};

export default StudioEditor;
