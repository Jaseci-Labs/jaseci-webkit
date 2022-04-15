import { Box, Button, Grid, Text, Title } from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { useCallback, useRef, useState } from "react";
import type { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import { Form, json, useLoaderData } from "remix";
import {
  Braces,
  DeviceFloppy,
  Eye,
  EyeOff,
  InfoSquare,
  NewSection,
  PlayerPlay,
} from "tabler-icons-react";
import AddComponentModal from "~/components/playground/AddComponentModal";
import ExamplesModal from "~/components/playground/ExamplesModal";
import { PlaygroundHeader } from "~/components/PlaygroundHeader";
import { getProject, saveProject } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const links: LinksFunction = () => {
  return [
    { href: "http://localhost:3333/build/components.css", rel: "stylesheet" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const project = await getProject({ slug: params.slug as string });

  return json({ project });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const content = formData.get("content");
  const slug = params.slug;

  if (intent === "saveProject" && slug) {
    const userId = await requireUserId(request);
    const project = await saveProject({
      content: content as any,
      slug,
      userId,
    });
    return json({ project });
  }

  return json({});
};

export default function Playground() {
  const loaderData = useLoaderData();
  const jscAppRef = useRef<any>();
  const [value, setValue] = useState(
    loaderData?.project?.content ? loaderData?.project?.content : ""
  );
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showPreviewText, setShowPreviewText] = useState(true);

  const runButtonRef = useRef<HTMLButtonElement>(null);

  const monacoRef = useRef<any>(null);

  function handleEditorWillMount(monaco: Monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
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

  const runCode = useCallback(() => {
    if (value && jscAppRef?.current) {
      jscAppRef?.current?.setMarkup(JSON.parse(value));
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
    setValue((value) => value.slice(0, value.length - 1));

    // add a square bracket to the beginning
    if (value[0] !== "[") {
      setValue((value) => "[" + value);
    }

    if (value.includes("}")) {
      setValue((value) => value + ",");
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

  return (
    <div>
      <script
        type="module"
        src={`http://localhost:3333/build/components.esm.js`}
        async
      ></script>
      <script
        noModule
        src={`http://localhost:3333/build/components.js`}
        async
      ></script>

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
            <Form method="post" id="projectForm">
              <Button
                size="xs"
                onClick={runCode}
                leftIcon={<DeviceFloppy />}
                ref={runButtonRef}
                type="submit"
                name="intent"
                value="saveProject"
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
            value={value}
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
