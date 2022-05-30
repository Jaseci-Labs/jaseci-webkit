import type { LoaderFunction } from "remix";
import { json } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const endpointUrl = url.searchParams.get("endpointUrl");
  const token = url.searchParams.get("token");
  const gph = url.searchParams.get("gph");

  const graph = await fetch(`${endpointUrl}/js/graph_get`, {
    method: "POST",
    body: JSON.stringify({
      gph,
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
