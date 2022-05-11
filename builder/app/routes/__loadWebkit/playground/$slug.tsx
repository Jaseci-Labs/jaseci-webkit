import { Box, Button, Grid, Text, Title } from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { parse } from "comment-json";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ActionFunction, LoaderFunction } from "remix";
import {
  Form,
  json,
  Link,
  useLoaderData,
  useParams,
  useSubmit,
  useTransition
} from "remix";
import {
  Braces,
  DeviceFloppy,
  ExternalLink,
  Eye,
  EyeOff,
  InfoSquare,
  NewSection,
  PlayerPlay
} from "tabler-icons-react";
import AddComponentModal from "~/components/playground/AddComponentModal";
import ExamplesModal from "~/components/playground/ExamplesModal";
import { PlaygroundHeader } from "~/components/PlaygroundHeader";
import { schemas } from "~/data/schema";
// import { getProject } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ params }) => {
  // const project = await getProject({ slug: params.slug as string });

  return json({ project: {} });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const action = formData.get("_action");
  const content = formData.get("content");
  const slug = params.slug;

  if (action === "saveProject" && slug) {
    const userId = await requireUserId(request);
    // const project = await saveProject({
    //   content: content as any,
    //   slug,
    //   userId,
    // });
    // return json({ project });
  }

  return json({});
};

export default function Playground() {
  const transition = useTransition();
  const submit = useSubmit();
  const loaderData = useLoaderData();
  const jscAppRef = useRef<any>();
  const saveProjectFormRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState(
    loaderData?.project?.content ? loaderData?.project?.content : ""
  );
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showPreviewText, setShowPreviewText] = useState(true);

  const runButtonRef = useRef<HTMLButtonElement>(null);
  const params = useParams();

  const monacoRef = useRef<any>(null);

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

    // monaco.editor.setModelLanguage(model);
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

    monacoRef.current = editor;
  }

  const saveProject = useCallback(() => {
    const formData = new FormData();
    formData.set("content", value);
    formData.set("_action", "saveProject");

    if (!saveProjectFormRef?.current) return;

    submit(formData, { replace: true, method: "post" });
  }, [saveProjectFormRef, submit, value]);

  const runCode = useCallback(() => {
    if (value && jscAppRef?.current) {
      const components = (parse(value, undefined, true) as any).components;
      const config = (parse(value, undefined, true) as any).config;
      jscAppRef?.current?.setGlobalConfig(config);
      jscAppRef?.current?.setMarkup(JSON.stringify(components));
      setShowPreviewText(false);
    }
  }, [jscAppRef, value]);

  const formatCode = () => {
    if (monacoRef?.current) {
      monacoRef?.current.getAction("editor.action.formatDocument").run();
    }
  };

  const onRunExample = (exampleJSON: any) => {
    setValue(JSON.stringify(exampleJSON));
    formatCode();
    runCode();
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

    monacoRef.current.trigger("keyboard", "type", {
      text: JSON.stringify(component) + "\n",
    });

    // setValue((value) => {
    //   let newValue = "\n" + value + JSON.stringify(component) + "\n]";

    //   return newValue;
    // });

    formatCode();
    setShowAddComponentModal(false);
  };

  useEffect(() => {
    // const saveProjectTimeout = setTimeout(() => saveProject(), 3000);

    return () => {
      // clearTimeout(saveProjectTimeout);
    };
  }, [saveProject, value]);

  return (
    <div>
      <PlaygroundHeader
        actions={
          <>
            <Button onClick={formatCode} leftIcon={<Braces />} size="xs">
              Format
            </Button>

            <Button
              size="xs"
              leftIcon={<NewSection></NewSection>}
              onClick={() => setShowAddComponentModal(true)}
            >
              Add Component
            </Button>

            <Button
              size="xs"
              leftIcon={showPreview ? <EyeOff></EyeOff> : <Eye></Eye>}
              onClick={() =>
                setShowPreview((isPreviewShown) => !isPreviewShown)
              }
            >
              {showPreview ? <>Hide Preview</> : <>Show Preview</>}
            </Button>

            <Button
              size="xs"
              leftIcon={<InfoSquare></InfoSquare>}
              onClick={() => setShowExamplesModal(true)}
            >
              Examples
            </Button>
            <Form method="post" id="projectForm" ref={saveProjectFormRef}>
              <Button
                size="xs"
                leftIcon={<DeviceFloppy />}
                ref={runButtonRef}
                type="submit"
                name="_action"
                form="projectForm"
                value="saveProject"
                loading={
                  transition.state === "submitting" &&
                  transition.submission.formData.get("_action") == "saveProject"
                }
              >
                Save
              </Button>
            </Form>

            <Button
              size="xs"
              onClick={runCode}
              leftIcon={<PlayerPlay />}
              ref={runButtonRef}
            >
              Run
            </Button>

            <Button
              component={Link}
              leftIcon={<ExternalLink />}
              size="xs"
              to={`/site/${params.slug}`}
              target="_blank"
            >
              View Site
            </Button>
          </>
        }
      ></PlaygroundHeader>

      <Grid sx={{ maxWidth: "100vw", margin: 0, gap: 0 }} gutter={0}>
        <Grid.Col span={showPreview ? 8 : 12}>
          <Editor
            width={"100%"}
            height="calc(100vh - 56px)"
            defaultLanguage="json"
            theme="vs-dark"
            options={{ formatOnType: true, formatOnPaste: true }}
            defaultValue=""
            value={typeof value === "string" ? value : JSON.stringify(value)}
            onChange={(value) => setValue(value as string)}
            beforeMount={handleEditorWillMount}
            onMount={handleEditorDidMount}
          />

          <input
            type="hidden"
            form="projectForm"
            value={value}
            name="content"
          ></input>
        </Grid.Col>

        <Grid.Col span={showPreview ? 4 : 0}>
          <Box
            sx={{
              minHeight: "100%",
              width: "100%",
              display: showPreview ? "block" : "none",
            }}
          >
            <jsc-app ref={jscAppRef}></jsc-app>

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
    </div>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "jsc-app": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >; // Normal web component
    }
  }
}
