import type { LoaderFunction } from "remix";
import { json } from "remix";

export const loader: LoaderFunction = async ({ request, params, context }) => {
  const url = new URL(request.url);
  const endpointUrl = url.searchParams.get("endpointUrl");
  const token = url.searchParams.get("token");

  const graphs = await fetch(`${endpointUrl}/js/graph_list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return json({ graphs });
};
