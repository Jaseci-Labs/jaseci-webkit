import { Box, Button, Grid, LoadingOverlay, Text, Title } from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { parse } from "comment-json";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { ActionFunction, json } from "@remix-run/node";

import { Outlet } from "@remix-run/react";
import EditorActionBar from "~/components/EditorActionBar";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ project: {} });
};

export default function Playground() {
  return (
    <div>
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
