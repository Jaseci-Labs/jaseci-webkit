import type { TabFile } from "@prisma/client";
import { parse } from "comment-json";
import { useCallback, useRef, useState } from "react";

const useViewer = ({ projectId }: { projectId: string }) => {
  const [showPreviewText, setShowPreviewText] = useState(true);
  const jscAppRef = useRef<any>();

  const createGetViewURL = (projectId?: string, tabs?: TabFile[]) => {
    const isEditor = !!tabs?.length && !!projectId;
    let baseUrl = `http://localhost:3000/studio/${projectId}/editor/tab/`;

    if (!isEditor) {
      baseUrl = `http://localhost:3000/site/${projectId}/`;
    }

    console.log({ isEditor, tabs, projectId });

    return function (viewName: string) {
      return (
        baseUrl +
        (isEditor
          ? tabs.find((tab) => tab.name === viewName)?.id
          : viewName.toLowerCase())
      );
    };
  };

  const handleViewRefs = (
    viewRefs: string[],
    value: string,
    getViewURL: (viewName: string) => string
  ) => {
    let newValue = value;
    const viewNamesViewRefs: Record<string, string> = {};

    viewRefs.forEach((viewRef) => {
      viewNamesViewRefs[viewRef] = viewRef.split(":")[1].split("}}")[0];
    });

    Object.keys(viewNamesViewRefs).forEach((viewName) => {
      newValue = newValue.replaceAll(
        viewName,
        getViewURL(viewNamesViewRefs?.[viewName])
      );
    });

    console.log({ viewNamesViewRefs });

    return newValue;
  };

  const runCode = useCallback(
    (value, tabs?: TabFile[]) => {
      // handle view references
      // get view references
      let newValue = value;
      const getViewUrl = createGetViewURL(projectId, tabs);
      const viewRefs = value.match(/[{][{]view[:](.*?)[}][}]/g);

      if (viewRefs) {
        newValue = handleViewRefs(viewRefs, value, getViewUrl);
      }

      console.log({ newValue });

      if (newValue && jscAppRef.current) {
        const components = (parse(newValue, undefined, true) as any).components;
        const config = (parse(newValue, undefined, true) as any).config;
        console.log({ config });
        jscAppRef?.current?.setGlobalConfig(config);
        jscAppRef?.current?.setMarkup(JSON.stringify(components));
        setShowPreviewText(false);
      }
    },
    [jscAppRef, projectId]
  );

  return { runCode, showPreviewText, jscAppRef };
};

export default useViewer;
