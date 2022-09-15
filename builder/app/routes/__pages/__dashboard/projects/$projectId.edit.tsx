import { Button, Group, Modal, Stack, TextInput } from "@mantine/core";
import React from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
// import invariant from "tiny-invariant";
import { getProjectById, updateProject } from "~/models/project.server";
import { authenticator } from "~/auth.server";

const EditProjectPage = () => {
  const loaderData = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  return (
    <Modal
      opened
      onClose={() => {
        navigate("..");
      }}
      title="Edit Project"
    >
      <Form method="post">
        <Stack>
          <TextInput
            name="title"
            label="Name"
            defaultValue={loaderData.project?.title || ""}
          ></TextInput>

          <Group position="right">
            <Button type="submit">Save Project</Button>
          </Group>
        </Stack>
      </Form>
    </Modal>
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  const { projectId } = params;
  if (!projectId) throw redirect("/projects");
  const user = await authenticator.isAuthenticated(request);
  const formData = await request.formData();

  const title = (formData.get("title") as string) || undefined;

  await updateProject({
    projectId,
    userId: user?.id,
    input: { title },
  });

  return redirect("/projects");
};

type LoaderData = {
  project: Awaited<ReturnType<typeof getProjectById>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { projectId } = params;
  // invariant(typeof projectId === "string", "projectId must be a string");
  const project = await getProjectById({ projectId: projectId as string });

  return json<LoaderData>({ project });
};

export default EditProjectPage;
