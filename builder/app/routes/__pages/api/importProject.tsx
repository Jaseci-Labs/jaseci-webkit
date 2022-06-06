import {
  redirect,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
} from "@remix-run/node";
import type { ActionFunction } from "remix";
import { unstable_parseMultipartFormData } from "remix";
import { json } from "remix";
import path from "path";
import * as unzipper from "unzipper";
import { createTabFile } from "~/models/tabFile.server";
import { nanoid } from "nanoid";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  throw json({ error: "something went terribly wrong" }, { status: 400 });
  const url = new URL(request.url);
  const projectId = url.searchParams.get("projectId");
  const userId = await requireUserId(request);
  const projectFileName = "myfile.zip";

  const uploadHandler = unstable_createFileUploadHandler({
    directory: "uploads/",
    file: ({ filename, name }) => {
      if (name === "project") {
        return projectFileName;
      }
      return filename;
    },
    // set max file size to 2mb
    maxPartSize: 1024 * 1024 * 2,
    filter: ({ filename, name, contentType }) => {
      console.log({ name, filename });
      console.log({ contentType });
      if (name === "project" && contentType !== "application/zip") {
        throw json({ error: "A zip file is required!" }, { status: 400 });
      }

      return true;
    },
  });

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  console.log({ projectId });

  if (typeof projectId !== "string") {
    // throw json({ error: "projectId is required" }, { status: 400 });
    throw redirect(request.url, { status: 400 });
  }

  // read archive
  const zip = formData.get("project") as File;

  const buffer = Buffer.from(await zip.arrayBuffer());
  const directory = await unzipper.Open.buffer(buffer);
  directory.files.forEach(async (file) => {
    let content = await file.buffer();
    const tabData = JSON.parse(content.toString());

    await createTabFile({
      projectId,
      name: tabData["name"] || nanoid(),
      type: tabData["type"],
      content: tabData["content"],
      ext: tabData["ext"] || "json",
      userId,
    });
  });

  console.log("zip", zip.name);

  return redirect(`/studio/${projectId}/editor/tab/blank`);
};
