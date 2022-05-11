import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  // const userId = await requireUserId(request);
  // const project = await createProject({ userId });

  // return redirect(`/playground/${project.slug}`);
  return {}
};
