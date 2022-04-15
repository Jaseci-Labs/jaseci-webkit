import type { LoaderFunction } from "remix";
import { redirect } from "remix";
import { createProject } from "~/models/project.server";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const project = await createProject({ userId });

  return redirect(`/playground/${project.slug}`);
};
