import { parse } from "comment-json";
import React, { useEffect, useRef } from "react";
import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { PageNotFound } from "~/components/PageNotFound";
// import { getProject } from "~/models/project.server";

export const loader: LoaderFunction = async ({ params }) => {
  // const project = await getProject({ slug: params.slug as string });

  // return json({ project });
  return {}
};

const SitePage = () => {
  const jscAppRef = useRef<any>();
  const loaderData = useLoaderData();

  useEffect(() => {
    jscAppRef?.current?.setMarkup(
      JSON.stringify(
        (parse(loaderData?.project?.content, undefined, true) as any)
          ?.components
      )
    );
  }, [loaderData?.project, jscAppRef]);

  return (
    <div>
      {loaderData?.project?.published ? (
        <jsc-app ref={jscAppRef}></jsc-app>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default SitePage;
