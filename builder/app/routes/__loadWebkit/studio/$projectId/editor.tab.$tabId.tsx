import {
  Box,
  Grid,
  LoadingOverlay,
  Title,
  Text,
  Group,
  ActionIcon,
} from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import { useMonaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { parse } from "comment-json";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { json } from "remix";
import { useLoaderData, useParams, useSearchParams, useSubmit } from "remix";
import EditorHeader from "~/components/EditorHeader";
import { schemas } from "~/data/schema";
import ViewsSidebar from "~/components/ViewsSidebar";
import AddComponentModal from "~/components/playground/AddComponentModal";
import ExamplesModal from "~/components/playground/ExamplesModal";
// import invariant from "tiny-invariant";
import {
  getProjectOpenedTabs,
  getTabFile,
  updateTabFile,
} from "~/models/tabFile.server";
import { createTabFile, getProjectTabFiles } from "~/models/tabFile.server";
import { requireUserId } from "~/session.server";
import type { TabFile, TabFileType } from "@prisma/client";
import {
  ArrowsMaximize,
  ExternalLink,
  LayoutColumns,
} from "tabler-icons-react";
import { useDebouncedValue, useFullscreen } from "@mantine/hooks";
import { JacLanguage } from "~/utils/jac.contribution";
import { jacLang } from "~/utils/jac";

const StudioEditor = () => {
  const submit = useSubmit();
  const loaderData = useLoaderData<LoaderData>();
  const [showPreview, setShowPreview] = useState(true);

  const [searchParams] = useSearchParams();
  const { tabId } = useParams();
  const showViews = searchParams.get("showViews") || "false";
  const [showPreviewText, setShowPreviewText] = useState(true);

  const jscAppRef = useRef<any>();
  const [value, setValue] = useState(loaderData?.currentTab?.content || "");
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);
  const [debouncedValue] = useDebouncedValue(value, 1500);

  const runButtonRef = useRef<HTMLButtonElement>(null);

  const monacoRef = useRef<any>(null);
  const editorRef = useRef<any>(null);
  const { toggle, ref: fullscreenFef } = useFullscreen();
  const monaco = useMonaco();

  function handleEditorWillMount(monaco: Monaco, editor) {
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

  const saveTabContent = useCallback(() => {
    if (!tabId) return;
    const formData = new FormData();
    formData.set("content", value);
    formData.set("tabFileId", tabId);
    formData.set("_action", "saveTabContent");

    submit(formData, { replace: true, method: "post" });
  }, [submit, value]);

  const formatCode = () => {
    if (editorRef?.current) {
      editorRef?.current.getAction("editor.action.formatDocument").run();
    }
  };

  const runCode = useCallback(
    (value) => {
      if (value && jscAppRef?.current) {
        const components = (parse(value, undefined, true) as any).components;
        const config = (parse(value, undefined, true) as any).config;
        jscAppRef?.current?.setGlobalConfig(config);
        jscAppRef?.current?.setMarkup(JSON.stringify(components));
        setShowPreviewText(false);
      }
    },
    [jscAppRef]
  );

  const onRunExample = (exampleJSON: any) => {
    setValue(JSON.stringify(exampleJSON));
    formatCode();
    runCode(value);
  };

  const onInsertComponent = (component: any) => {
    // remove the last square bracket
    setValue((value: string) => value.slice(0, value.length - 1));

    // add a square bracket to the beginning
    if (value[0] !== "[") {
      setValue((value: string) => "[" + value);
    }

    if (value.includes("}")) {
      setValue((value: string) => value + ",");
    }

    editorRef.current.trigger("keyboard", "type", {
      text: JSON.stringify(component) + "\n",
    });

    formatCode();
    setShowAddComponentModal(false);
  };

  useEffect(() => {
    const saveTabContentTimeout = setTimeout(() => saveTabContent(), 3000);

    return () => {
      clearTimeout(saveTabContentTimeout);
    };
  }, [saveTabContent, value]);

  useEffect(() => {
    setValue(loaderData?.currentTab?.content || "");
  }, [loaderData?.currentTab]);

  useEffect(() => {
    try {
      if (jscAppRef?.current) {
        runCode(value);
      }
    } catch (err) {
      console.error(err);
      console.log(
        "Unable to run your code. Please check to see if it is valid."
      );
    }
  }, [jscAppRef, editorRef, runCode, debouncedValue]);

  useEffect(() => {
    if (editorRef.current) {
      monacoRef.current.editor.setModelLanguage(
        editorRef.current.getModel(),
        loaderData?.currentTab?.type === "Jac" ? "jac" : "json"
      );
    }
  }, [editorRef, loaderData?.currentTab?.ext]);

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
            onClickRun={runCode as any}
            openTabs={loaderData.openedTabFiles}
            onClickFormat={formatCode}
            onTogglePreview={() => setShowPreview((prev) => !prev)}
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
              <jsc-app ref={jscAppRef}></jsc-app>
            </div>

            {showPreviewText && (
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

      <AddComponentModal
        opened={showAddComponentModal}
        setOpened={setShowAddComponentModal}
        onInsertComponent={onInsertComponent}
      ></AddComponentModal>
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

  return json<LoaderData>({ tabFiles, openedTabFiles, currentTab });
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

  console.log("referrer", request.headers.get("referer"));

  return json({});
};

export default StudioEditor;
