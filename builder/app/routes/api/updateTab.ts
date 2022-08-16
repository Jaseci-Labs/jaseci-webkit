import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { validate } from "remix-server-kit";
import { string } from "superstruct";
import { prisma } from "~/db.server";
import { updateTabFile } from "~/models/tabFile.server";

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const apiKey = validate(formData.get("apiKey"), string(), "apiKey");

    const user = await prisma.user.findFirst({ where: { apiKey } });

    const data = await updateTabFile({
      userId: user?.id,
      tabFileId: formData.get("tabFileId"),
      input: { content: formData.get("content") },
    });

    console.log(data);

    return json({ ...data });
  } else {
    return json(
      { message: "Method not allowed" },
      { status: 405, statusText: "Method not allowed" }
    );
  }
};
