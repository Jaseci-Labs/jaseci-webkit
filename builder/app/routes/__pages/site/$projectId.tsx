import { parse } from "comment-json";
import React, { useEffect, useRef } from "react";
import type { LoaderFunction } from "remix";
import { useParams } from "remix";
import { json } from "remix";
import { useLoaderData } from "remix";
import { PageNotFound } from "~/components/PageNotFound";
import useViewer from "~/hooks/useViewer";
import { getProjectHomepage } from "~/models/project.server";
import { getTabFileByName } from "~/models/tabFile.server";
// import { getProject } from "~/models/project.server";

type LoaderData = {
  page: Awaited<ReturnType<typeof getProjectHomepage>>;
};
export const loader: LoaderFunction = async ({ params }) => {
  const { projectId, pageName } = params;

  let page;

  if (pageName) {
    page = await getTabFileByName({
      projectId: projectId as string,
      tabFileName: pageName,
    });
  } else {
    page = await getProjectHomepage({
      projectId: projectId as string,
    });
  }

  return json<LoaderData>({ page });
};

const SitePage = () => {
  const { projectId } = useParams();
  const loaderData = useLoaderData<LoaderData>();
  const { runCode, showPreviewText, jscAppRef } = useViewer({
    projectId: projectId as string,
  });

  // useEffect(() => {
  //   const onRender = () => {
  //     runCode(loaderData.page?.content || "");
  //   };

  //   if (jscAppRef.current) {
  //     alert("rendered");
  //     jscAppRef.current?.addEventListener("loaded", onRender);
  //   }

  //   return () => {
  //     if (jscAppRef.current) {
  //       jscAppRef.current?.removeEventListener("loaded", onRender);
  //     }
  //   };
  // }, [jscAppRef?.current, loaderData?.page?.content, runCode]);

  useEffect(() => {
    customElements.whenDefined("jsc-app").then(() => {
      runCode(loaderData.page?.content || "");
    });
  }, [loaderData?.page?.content]);

  return (
    <div>
      {loaderData?.page?.content && loaderData.page.type === "View" ? (
        <jsc-app
          // onRender={() => runCode(loaderData.page?.content || "")}
          ref={jscAppRef}
        ></jsc-app>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default SitePage;
