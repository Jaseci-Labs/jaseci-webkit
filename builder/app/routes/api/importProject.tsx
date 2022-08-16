import { redirect, unstable_createFileUploadHandler } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { json, unstable_parseMultipartFormData } from "@remix-run/node";
import fs from "fs";
import * as unzipper from "unzipper";
import { createTabFile } from "~/models/tabFile.server";
import { nanoid } from "nanoid";
import { requireUserId } from "~/session.server";
import { string } from "superstruct";
import { validate } from "remix-server-kit";

export const action: ActionFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const projectId = validate(url.searchParams.get("projectId"), string());
    const userId = await requireUserId(request);
    const projectFileName = `import_${projectId}.zip`;

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
      filter({ filename, name, contentType }) {
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
    const createTabFiles = directory.files.map(async (file) => {
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

    await Promise.all(createTabFiles).then(() => {
      fs.unlinkSync("uploads/" + zip.name);
    });

    console.log({ directory });

    console.log("zip", zip.name);

    return redirect(`/studio/${projectId}/editor/tab/blank`);
  } catch (err) {
    console.log("hello");
    if (err instanceof Response && err.statusText == "ValidationError") {
      return err;
    }
  }
};
