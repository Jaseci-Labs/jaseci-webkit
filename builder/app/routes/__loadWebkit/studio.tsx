import { Box, Button, Grid, LoadingOverlay, Text, Title } from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { parse } from "comment-json";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LoaderFunction } from "remix";
import { ActionFunction, Outlet } from "remix";
import { useSearchParams } from "remix";
import {
  Form,
  json,
  Link,
  useLoaderData,
  useParams,
  useSubmit,
  useTransition,
} from "remix";
import {
  Braces,
  DeviceFloppy,
  ExternalLink,
  Eye,
  EyeOff,
  InfoSquare,
  NewSection,
  PlayerPlay,
} from "tabler-icons-react";
import EditorActionBar from "~/components/EditorActionBar";
import EditorHeader from "~/components/EditorHeader";
import AddComponentModal from "~/components/playground/AddComponentModal";
import ExamplesModal from "~/components/playground/ExamplesModal";
import { PlaygroundHeader } from "~/components/PlaygroundHeader";
import ViewsSidebar from "~/components/ViewsSidebar";
// import { getProject } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ params }) => {
  // const project = await getProject({ slug: params.slug as string });

  return json({ project: {} });
};

// export const action: ActionFunction = async ({ request, params }) => {
//   const formData = await request.formData();
//   const action = formData.get("_action");
//   const content = formData.get("content");
//   const slug = params.slug;

//   if (action === "saveProject" && slug) {
//     const userId = await requireUserId(request);
//     // const project = await saveProject({
//     //   content: content as any,
//     //   slug,
//     //   userId,
//     // });
//     // return json({ project });
//   }

//   return json({});
// };

export default function Playground() {
  const loaderData = useLoaderData();

  return (
    <div>
      {/* <PlaygroundHeader
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
      ></PlaygroundHeader> */}

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <EditorActionBar></EditorActionBar>
        <Outlet></Outlet>
      </Box>
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
