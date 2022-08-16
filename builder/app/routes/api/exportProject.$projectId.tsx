import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import archiver from "archiver";
import fs from "fs";
import { getProjectTabFiles } from "~/models/tabFile.server";
import { requireUserId } from "~/session.server";
import { getProjectById } from "~/models/project.server";
import dayjs from "dayjs";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { projectId } = params;
  const userId = await requireUserId(request);

  if (!projectId) {
    throw json({ error: "No project id provided" }, { status: 400 });
  }

  const project = await getProjectById({
    projectId: projectId,
  });

  const projectFiles = await getProjectTabFiles({
    projectId,
    userId: userId,
  });

  const fileName = `${project?.title}_exported-${dayjs(new Date()).format(
    "DD-MM-YYYY_H-mm"
  )}.zip`;

  const output = fs.createWriteStream(`/tmp/${fileName}`);

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.pipe(output);

  // create the files
  projectFiles.forEach((tabFile) => {
    const { updatedAt, createdAt, id, opened_at, projectId, ...data } = tabFile;
    const file = Buffer.from(JSON.stringify(data));
    archive.append(file, { name: `${tabFile.name}.${tabFile.ext}` });
  });

  // finalize archiver
  archive.finalize();

  let res: Response = json(
    { error: "Unable to export project" },
    { status: 500 }
  );

  const outputPromise = new Promise((resolve, reject) => {
    output.on("close", function () {
      res = new Response(fs.readFileSync(`/tmp/${fileName}`), {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename=${fileName}`,
          "Content-Type": "application/octet-stream",
        },
      });

      console.log(archive.pointer() + " total bytes");

      console.log(
        "archiver has been finalized and the output file descriptor has closed."
      );

      resolve(true);
    });

    archive.on("error", function (err) {
      reject(err);
    });

    output.on("error", (err) => {
      reject(err);
    });
  });

  await outputPromise;

  return res;
};
