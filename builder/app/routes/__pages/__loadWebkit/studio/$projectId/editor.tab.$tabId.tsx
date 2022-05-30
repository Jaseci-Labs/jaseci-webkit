import {
  Box,
  Grid,
  LoadingOverlay,
  Title,
  Text,
  Group,
  ActionIcon,
  Anchor,
} from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import type { ActionFunction, LoaderFunction } from "remix";
import { Link, useParams } from "remix";
import { redirect } from "remix";
import { json } from "remix";
import { useLoaderData, useSearchParams } from "remix";
import EditorHeader from "~/components/EditorHeader";
import { schemas } from "~/data/schema";
import ViewsSidebar from "~/components/ViewsSidebar";
import ExamplesModal from "~/components/playground/ExamplesModal";
// import invariant from "tiny-invariant";
import {
  deleteTabFile,
  getProjectOpenedTabs,
  getTabFile,
  updateTabFile,
} from "~/models/tabFile.server";
import { createTabFile, getProjectTabFiles } from "~/models/tabFile.server";
import { requireUserId } from "~/session.server";
import type { TabFile, TabFileType } from "@prisma/client";
import { ArrowsMaximize, ExternalLink } from "tabler-icons-react";
import { useFullscreen, useHotkeys } from "@mantine/hooks";
import { jacLang } from "~/utils/jac";
import useEditor from "~/hooks/useEditor";
import { graphService } from "~/services/graph.server";
import GraphRenderer from "~/components/GraphRenderer";

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
  } = useEditor({ content: loaderData?.currentTab?.content || "" });
  const [showPreview, setShowPreview] = useState(true);

  const [searchParams] = useSearchParams();
  const showViews = searchParams.get("showViews") || "false";
  const [showExamplesModal, setShowExamplesModal] = useState(false);
  const runButtonRef = useRef<HTMLButtonElement>(null);
  const { toggle, ref: fullscreenFef } = useFullscreen();
  const { projectId } = useParams();

  useHotkeys([
    ["mod+M", () => alert("More actions")],
    ["mod+F", () => alert("Format")],
    ["mod+R", () => alert("Run code")],
    ["mod+S", () => alert("Hide/show sidebar")],
    ["mod+E", () => alert("Show examples")],
    ["mod+N", () => alert("Add component")],
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
          span={showPreview ? 8 : 12}
          sx={{ background: "#1E1E1E", color: "#fff" }}
        >
          <EditorHeader
            onInsertComponent={onInsertComponent}
            onClickRun={runCode as any}
            openTabs={loaderData.openedTabFiles}
            onClickFormat={formatCode}
            onTogglePreview={() => setShowPreview((prev) => !prev)}
            onRunExample={(example) => onRunExample(example)}
          ></EditorHeader>
          <Grid gutter={0}>
            <Grid.Col span={showViews !== "true" ? 2 : 0}>
              {showViews !== "true" && (
                <ViewsSidebar tabFiles={loaderData.tabFiles}></ViewsSidebar>
              )}
            </Grid.Col>
            <Grid.Col span={showViews !== "true" ? 10 : 12}>
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
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={showPreview ? 4 : 0}>
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
              <Group px="md"></Group>
              <Group px="md">
                <ActionIcon color="grape" variant="filled">
                  <ExternalLink size={16}></ExternalLink>
                </ActionIcon>
                <ActionIcon onClick={toggle} color="blue" variant="filled">
                  <ArrowsMaximize size={16}></ArrowsMaximize>
                </ActionIcon>
              </Group>
            </Group>

            <div ref={fullscreenFef} style={{ background: "#fff" }}>
              {loaderData?.currentTab?.type === "View" && (
                <jsc-app ref={jscAppRef}></jsc-app>
              )}

              {loaderData?.currentTab?.type === "Jac" && (
                <>
                  {loaderData.graphs.length ? (
                    <GraphRenderer
                      token={loaderData.graphs?.[0]?.token}
                      graphJid={loaderData.graphs?.[0]?.jid}
                      endpoint={loaderData.graphs?.[0]?.endpoint}
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
        setOpened={setShowExamplesModal}
        onRunExample={onRunExample}
      ></ExamplesModal>
    </>
  );
};

type LoaderData = {
  tabFiles: Awaited<ReturnType<typeof getProjectTabFiles>>;
  openedTabFiles: Awaited<ReturnType<typeof getProjectOpenedTabs>>;
  graphs: Awaited<ReturnType<typeof graphService.getGraphs>>;
  currentTab: TabFile | undefined;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);

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

  const graphs = await graphService.getGraphs({ userId });

  return json<LoaderData>({ tabFiles, openedTabFiles, currentTab, graphs });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const { projectId } = params;
  // invariant(projectId, "projectId is required");

  const formData = await request.formData();
  const action = formData.get("_action");

  if (action === "createTabItem") {
    const name = formData.get("name");
    const content = formData.get("content");
    const type = formData.get("type");
    const ext = formData.get("ext");

    // invariant(typeof name === "string", "name is required");
    // invariant(typeof content === "string", "content is required");
    // invariant(typeof type === "string", "type is required");
    // invariant(typeof ext === "string", "ext is required");

    await createTabFile({
      name: name as string,
      projectId: projectId as string,
      type: type as TabFileType,
      userId,
      ext: ext as string,
    });
  }

  if (action === "openTabItem" || action === "closeTabItem") {
    const tabFileId = formData.get("tabFileId");
    // invariant(typeof tabFileId === "string", "tabFileId is required");

    // if file is open already, then don't attempt to open it again
    const tabFile = await getTabFile({
      tabFileId: tabFileId as string,
      userId,
    });

    if (tabFile?.opened_at && action === "openTabItem") {
      return redirect(`/studio/${projectId}/editor/tab/${tabFileId}`);
    }

    await updateTabFile({
      tabFileId: tabFileId as string,
      userId,
      input: {
        opened_at: action === "openTabItem" ? new Date().toISOString() : null,
      },
    });
  }

  if (action === "saveTabContent") {
    const content = formData.get("content");
    const { tabId } = params;

    // invariant(typeof tabId === "string", "tabFileId is required");
    // invariant(typeof content === "string", "content is required");

    if (content) {
      await updateTabFile({
        tabFileId: tabId as string,
        userId,
        input: { content: content as string },
      });
    }
  }

  if (action === "deleteTabItem") {
    const tabFileId = formData.get("tabFileId");

    await deleteTabFile({ tabFileId: tabFileId as string, userId });
  }

  if (action === "renameTabItem") {
    const tabFileId = formData.get("tabFileId");
    const name = formData.get("name");

    await updateTabFile({
      tabFileId: tabFileId as string,
      userId,
      input: { name: name as string },
    });
  }

  console.log("referrer", request.headers.get("referer"));

  return json({});
};

export default StudioEditor;
