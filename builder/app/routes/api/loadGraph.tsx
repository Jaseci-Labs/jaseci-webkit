import type { LoaderFunction } from "remix";
import { json } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const endpointUrl = url.searchParams.get("endpointUrl");
  const token =
    "0e61e3b200c67e7f01f76c3dcc1984da966cc2f7ea4ce5e9879a476239c8338c";

  const graph = await fetch(`${endpointUrl}/js/graph_get`, {
    method: "POST",
    body: JSON.stringify({
      gph: "urn:uuid:4e51bae2-3fe0-49e0-8ea2-913d47eba890",
      mode: "default",
      detailed: true,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  })
    .then(async (res) => {
      const data = await res.json();
      console.log({ data });

      const edges = data
        ?.filter((item: any) => item.j_type === "edge")
        .map((edge: any) => ({
          from: edge.from_node_id,
          to: edge.to_node_id,
          label: edge.name,
          context: edge.context,
        }));
      const nodes = data
        ?.filter((item: any) => item.j_type === "node")
        .map((node: any) => ({
          id: node.jid,
          label: node.name,
          context: node.context,
        }));

      return { edges, nodes };
    })
    .catch((err) => console.log(err));

  return json({ graph });
};
