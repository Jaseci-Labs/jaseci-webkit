import { Button, Group, Modal, TextInput } from "@mantine/core";
import React from "react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
// import invariant from 'tiny-invariant';
import { createProjectSite } from "~/models/projectSite.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request, params }) => {
  const { projectId } = params;
  const formData = await request.formData();
  console.log({ formData });

  const title = formData.get("title");
  const userId = await requireUserId(request);

  // invariant(typeof title == "string", "title must be a string")
  // invariant(typeof projectId == "string")

  await createProjectSite({
    projectId: projectId as string,
    title: title as string,
    userId,
  });

  return redirect(`/projects/${projectId}`);
};

const NewSitePage = () => {
  const navigate = useNavigate();

  return (
    <Modal opened={true} onClose={() => navigate("..")} title="Site Name">
      <Form method="post">
        <TextInput name="title" placeholder="Enter site name"></TextInput>

        <Group position="right" my="lg">
          <Button type="submit">Create Site</Button>
        </Group>
      </Form>
    </Modal>
  );
};

export default NewSitePage;
