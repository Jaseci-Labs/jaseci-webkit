import { Button, Group, Modal, Stack, TextInput } from "@mantine/core";
import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useFetcher, useNavigate } from "@remix-run/react";
import { validate } from "remix-server-kit";
import { nonempty, object, size, string } from "superstruct";
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
  const actionData = useActionData();

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
              error={actionData?.errors?.name?.message}
            ></TextInput>
            <TextInput
              onChange={setToken}
              value={token}
              name="token"
              placeholder="Token"
              label="Token"
              error={actionData?.errors?.token?.message}
            ></TextInput>
            <TextInput
              name="endpoint"
              placeholder="http://localhost:8000"
              label="URL"
              value={endpoint}
              onChange={setEndpoint}
              error={actionData?.errors?.endpoint?.message}
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
  try {
    const NonEmptyString = nonempty(string());
    const formData = await request.formData();
    const userId = await requireUserId(request);

    const { name, endpoint, projectId, selectedGraph, token } = validate(
      {
        name: formData.get("name"),
        endpoint: formData.get("endpoint"),
        projectId: params.projectId,
        selectedGraph: formData.get("selectedGraph"),
        token: formData.get("token"),
      },
      object({
        name: nonempty(size(string(), 2, 16)),
        token: NonEmptyString,
        endpoint: NonEmptyString,
        selectedGraph: NonEmptyString,
        projectId: NonEmptyString,
      })
    );

    await graphService.createGraph({
      endpoint,
      jid: selectedGraph,
      userId,
      name,
      token,
      projectId,
    });

    return redirect(`/studio/${projectId}/graphs`);
  } catch (err) {
    if (err instanceof Response && err.statusText === "ValidationError") {
      return err;
    }
  }
};

export default AddGraphPage;
