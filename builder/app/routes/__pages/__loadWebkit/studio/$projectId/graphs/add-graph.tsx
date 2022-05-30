import { Button, Group, Modal, Stack, TextInput } from "@mantine/core";
import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { useEffect } from "react";
import type { ActionFunction } from "remix";
import { Form, redirect, useFetcher, useNavigate } from "remix";
// import invariant from "tiny-invariant";
import SelectGraph from "~/components/SelectGraph";
import { graphService } from "~/services/graph.server";
import { requireUserId } from "~/session.server";

const AddGraphPage = () => {
  const [token, setToken] = useInputState("");
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const [endpoint, setEndpoint] = useInputState("");
  const [debouncedEndpointValue] = useDebouncedValue(endpoint, 200);

  useEffect(() => {
    fetcher.load(
      `/api/loadGraphs?endpointUrl=${debouncedEndpointValue}&token=${token}`
    );
  }, [debouncedEndpointValue]);

  return (
    <div>
      <Modal
        onClose={() => {
          navigate("..");
        }}
        title="Add Graph"
        opened={true}
      >
        <Form method="post">
          <Stack>
            <TextInput
              name="name"
              placeholder="Enter a name"
              label="Name"
            ></TextInput>
            <TextInput
              onChange={setToken}
              value={token}
              name="token"
              placeholder="Token"
              label="Token"
            ></TextInput>
            <TextInput
              name="endpoint"
              placeholder="http://localhost:8000"
              label="URL"
              value={endpoint}
              onChange={setEndpoint}
            ></TextInput>

            {fetcher.state === "loading" ? (
              <p>Loading...</p>
            ) : (
              <SelectGraph graphs={fetcher.data?.graphs || []}></SelectGraph>
            )}

            <Group position="right">
              <Button type="submit">Add Graph</Button>
            </Group>
          </Stack>
        </Form>
      </Modal>
    </div>
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const token = formData.get("token");
  const endpoint = formData.get("endpoint");
  const selectedGraph = formData.get("selectedGraph");
  const userId = await requireUserId(request);
  const { projectId } = params;

  // invariant(typeof name == "string");
  // invariant(typeof selectedGraph == "string");
  // invariant(typeof endpoint == "string");

  console.log({ endpoint, selectedGraph, userId, name, token, projectId });

  await graphService.createGraph({
    endpoint: endpoint as string,
    jid: selectedGraph as string,
    userId,
    name: name as string,
    token: token as string,
    projectId: projectId as string,
  });

  return redirect(`/studio/${projectId}/graphs`);
};

export default AddGraphPage;
